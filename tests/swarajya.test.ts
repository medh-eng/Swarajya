/* The 'swarajya' ruleset must include everything in 'yuddh'. Until a
   Swarajya-only mechanic lands, a game under 'swarajya' must play out
   exactly like the same game under 'yuddh'. When a Swarajya mechanic is
   added, keep this test for games that do not use it (no Gad, no Khind…). */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';
import { aiTurn, isSwarajyaRules, isYuddhRules, newGame, type EmpireId, type GameState } from '../src/engine';

function fingerprint(st: GameState) {
  const h = createHash('sha1');
  st.log.forEach(l => h.update(`${l.turn}|${l.side}|${l.msg}\n`));
  return { winner: st.winner, turn: st.turn, hq: st.players.map(p => p.hq.hp), log: h.digest('hex') };
}
function play(st: GameState) {
  let k = 0;
  while (!st.over && k++ < 500) aiTurn(st, st.active, 'normal');
  return fingerprint(st);
}

describe("ruleset 'swarajya'", () => {
  it('switches on every YUDDH rule, and only it switches on Swarajya rules', () => {
    expect(isYuddhRules('swarajya')).toBe(true);
    expect(isYuddhRules('yuddh')).toBe(true);
    expect(isYuddhRules('classic')).toBe(false);
    expect(isSwarajyaRules('swarajya')).toBe(true);
    expect(isSwarajyaRules('yuddh')).toBe(false);
  });

  it('gets a season like a YUDDH game', () => {
    const st = newGame({ seed: 1, player: { empire: 'maurya' }, enemy: { empire: 'neutral' }, rules: 'swarajya' });
    expect(st.season).toBe('sharad');
    expect(st.rules).toBe('swarajya');
  });

  it('plays every classic-empire pairing exactly as YUDDH does (same seed, same game)', async () => {
    // Built from the "classic" 50 cards (src/data/cards.json's `_about`: "the golden test replays
    // them; do not touch") rather than src/campaign/duel.ts's FACTIONS — that module's current
    // factions are tied to the YUDDH chapter decks step 9 removed; the classic empires are
    // permanent, so this equivalence check no longer depends on scaffolding that might move again.
    const { CARDS } = await import('../src/engine');
    const empires: EmpireId[] = ['maurya', 'gupta', 'chalukya', 'chola', 'rajput'];
    const deckFor = (e: EmpireId): string[] =>
      Object.values(CARDS).filter(c => c.empire === e).flatMap(c => Array(4).fill(c.id));
    const mkGame = (a: EmpireId, b: EmpireId, seed: number, rules: 'yuddh' | 'swarajya'): GameState =>
      newGame({
        seed, rules, season: 'sharad',
        player: { empire: a, deck: deckFor(a) } as never,
        enemy: { empire: b, deck: deckFor(b) } as never
      });
    let games = 0;
    for (const a of empires) for (const b of empires) {
      if (a === b) continue;
      const seed = 700 + games * 17;
      const y = mkGame(a, b, seed, 'yuddh');
      const s = mkGame(a, b, seed, 'swarajya');
      expect(play(s), `${a} vs ${b} seed ${seed}`).toEqual(play(y));
      games++;
    }
    expect(games).toBeGreaterThan(10);
  });
});

describe('history guard', () => {
  it('every chronology ref in history/ and data/ resolves (scripts/check-refs.mjs)', () => {
    const out = execFileSync('node', ['scripts/check-refs.mjs', '.'], { encoding: 'utf8' });
    expect(out).toContain('check-refs: OK');
  });
});

describe('Phase 1 card data', () => {
  const SW = ['sw_hetkari', 'sw_bargir', 'sw_jijau_counsel', 'sw_torna_hoard'];
  const AS = ['as_afzal_khan', 'as_hasham', 'as_gaja'];

  it('Swarajya and Adilshahi cards are registered under their own empires', async () => {
    const { CARDS, EMPIRES } = await import('../src/engine');
    expect(EMPIRES.swarajya.name).toBe('Swarajya');
    expect(EMPIRES.adilshahi.name).toBe('Adilshahi');
    for (const id of SW) expect(CARDS[id]?.empire, id).toBe('swarajya');
    for (const id of AS) expect(CARDS[id]?.empire, id).toBe('adilshahi');
  });

  it('a Swarajya deck plays a full game against an Adilshahi deck', () => {
    const deck = (ids: string[]) => ids.flatMap(id => [id, id, id, id, id, id]);
    const st = newGame({
      seed: 11, rules: 'swarajya',
      player: { empire: 'swarajya', deck: deck(SW) } as never,
      enemy: { empire: 'adilshahi', deck: deck(AS) } as never
    });
    const r = play(st);
    expect(st.over).toBe(true);
    expect(r.turn).toBeGreaterThan(1);
  });
});
