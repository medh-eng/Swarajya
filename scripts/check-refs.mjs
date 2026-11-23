#!/usr/bin/env node
/* check-refs: the anti-hallucination guard.
   Fails (exit 1) when
   - a chronology entry has no Basis or no Refs, or cites a source missing from SOURCES.md
   - a chapter or card cites a chronology ID that does not exist
   - a chapter names a card that does not exist
   - a HISTORY or TRADITION card has no refs
   - a chapter that is not 'blocked' rests on an entry whose basis is VERIFY only
   Warns (exit 0) about card ids mentioned in history/*.md that are not in the card files yet,
   and about cards whose basis is VERIFY.
   Usage: node scripts/check-refs.mjs [repoRoot]   (wired into `npm test` in Phase 0) */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || process.cwd();
const read = p => readFileSync(join(root, p), 'utf8');
const errors = [];
const warnings = [];

/* ---- sources ---- */
const sourcesMd = read('history/SOURCES.md');
const sourceIds = new Set([...sourcesMd.matchAll(/^\|\s*([PSW]-[A-Z0-9-]+)\s*\|/gm)].map(m => m[1]));

/* ---- chronology ---- */
const chronoMd = read('history/CHRONOLOGY.md');
const entries = new Map();
const blocks = chronoMd.split(/^### /m).slice(1);
for (const b of blocks) {
  const id = (b.match(/^(C-[A-Z0-9-]+)/) || [])[1];
  if (!id) continue;
  if (entries.has(id)) errors.push(`Chronology: duplicate ID ${id}`);
  const basis = (b.match(/\*\*Basis:\*\*\s*(.+)/) || [])[1];
  const refsLine = (b.match(/\*\*Refs:\*\*\s*(.+)/) || [])[1];
  if (!basis) errors.push(`Chronology ${id}: no Basis line`);
  if (!refsLine) errors.push(`Chronology ${id}: no Refs line`);
  const refs = refsLine ? [...refsLine.matchAll(/\b([PSW]-[A-Z0-9-]+)/g)].map(m => m[1]) : [];
  for (const r of refs) if (!sourceIds.has(r)) errors.push(`Chronology ${id}: source ${r} is not in SOURCES.md`);
  entries.set(id, { basis: basis || '', refs });
}
const verifyOnly = id => /^VERIFY\b/.test((entries.get(id) || {}).basis || '');

/* ---- cards ---- */
const cardFiles = ['data/cards.draft.json', 'src/data/cards.json'].filter(p => existsSync(join(root, p)));
const cards = new Map();
for (const f of cardFiles) {
  const j = JSON.parse(read(f));
  const list = Array.isArray(j.cards) ? j.cards : [...(j.classic || []), ...(j.yuddh || []), ...(j.swarajya || [])];
  for (const c of list) {
    if (cards.has(c.id)) errors.push(`Cards: duplicate id ${c.id} (${f})`);
    cards.set(c.id, c);
    if (!c.basis) continue; // YUDDH classic cards have no basis field
    if (!['HISTORY', 'CONTESTED', 'TRADITION', 'GENERIC', 'VERIFY'].includes(c.basis)) errors.push(`Card ${c.id}: unknown basis ${c.basis}`);
    if ((c.basis === 'HISTORY' || c.basis === 'CONTESTED' || c.basis === 'TRADITION') && !(c.refs || []).length) errors.push(`Card ${c.id}: ${c.basis} card with no refs`);
    if (c.basis === 'VERIFY') warnings.push(`Card ${c.id}: basis VERIFY (cannot ship until upgraded)`);
    for (const r of c.refs || []) if (!entries.has(r)) errors.push(`Card ${c.id}: chronology ref ${r} does not exist`);
  }
}

/* ---- chapters ---- */
const chapters = JSON.parse(read('data/chapters.json')).chapters;
for (const ch of chapters) {
  if (!(ch.refs || []).length) errors.push(`Chapter ${ch.id}: no refs`);
  for (const r of ch.refs || []) {
    if (!entries.has(r)) errors.push(`Chapter ${ch.id}: chronology ref ${r} does not exist`);
    else if (ch.status !== 'blocked' && verifyOnly(r)) errors.push(`Chapter ${ch.id}: rests on ${r}, which is VERIFY only`);
  }
  const named = [ch.heroCard, ch.enemyHero,
    ...((ch.objective && ch.objective.gads) || []),
    ch.conditions && ch.conditions.playerGad,
    ...((ch.conditions && ch.conditions.allyCards) || []),
    ...((ch.conditions && ch.conditions.neutralStructures) || []),
    ...(((ch.conditions && ch.conditions.enemyReinforce) || {}).cards || []),
    ...(((ch.conditions && ch.conditions.playerReinforce) || {}).cards || [])
  ].filter(Boolean);
  for (const id of named) if (!cards.has(id)) errors.push(`Chapter ${ch.id}: card ${id} does not exist`);
}

/* ---- chapter ids mentioned in the history files must exist ---- */
const chapterIds = new Set(chapters.map(c => c.id));
for (const f of ['history/CHRONOLOGY.md', 'history/PEOPLE.md', 'history/CONTESTED.md']) {
  for (const m of read(f).matchAll(/`(ch\d\d_[a-z0-9_]+)`/g)) {
    if (!chapterIds.has(m[1])) errors.push(`${f}: chapter ${m[1]} does not exist in data/chapters.json`);
  }
}

/* ---- card ids mentioned in the history files ---- */
for (const f of ['history/CHRONOLOGY.md', 'history/PEOPLE.md']) {
  for (const m of read(f).matchAll(/`((?:sw|as|mg|jm|sd|ei|gk)_[a-z0-9_]+)`/g)) {
    if (!cards.has(m[1])) warnings.push(`${f}: card ${m[1]} is mentioned but not designed yet`);
  }
}

/* ---- report ---- */
const uniq = a => [...new Set(a)];
console.log(`check-refs: ${entries.size} chronology entries, ${sourceIds.size} sources, ${cards.size} cards, ${chapters.length} chapters`);
for (const w of uniq(warnings)) console.log('  warn  ' + w);
for (const e of uniq(errors)) console.log('  ERROR ' + e);
if (errors.length) { console.log(`check-refs: ${uniq(errors).length} error(s)`); process.exit(1); }
console.log('check-refs: OK');
