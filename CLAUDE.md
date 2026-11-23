# SWARAJYA — working rules for Claude (and any AI agent)

A KARDS-style card game of Chhatrapati Shivaji Maharaj's life and wars, built on the YUDDH engine
for Pon (owner, non-programmer; directs the work, paints all art from Claude's prompt sheets).
Target: web (GitHub Pages) then Google Play, landscape only.

## Start of every session (in this order)
1. `STATE.md` — where things stand, decisions, open questions.
2. `TASKS.md` — what is next.
3. The last three entries of `LOG.md`.
4. Only then the files you will change.

## End of every session (no exceptions)
1. `npm test` (includes `node scripts/check-refs.mjs`), `npx tsc --noEmit`, `npm run build`, and a real
   playtest once code exists (YUDDH's `tests/e2e/playtest.cjs` method; see YUDDH's CLAUDE.md).
2. Rewrite `STATE.md` as a snapshot. Tick `PROGRESS.md`. Update `TASKS.md`. Update `docs/DESIGN.md` if
   rules or decisions changed. Append one entry to `LOG.md`.
3. Commit (author "Claude", attribution lines per session instructions).

## Reference order (Pon's decision, 23 Nov 2026)
1. **Standard reference: Babasaheb Purandare, *Raja Shivachhatrapati*** (S-PURANDARE). Check every
   chapter, person and sequence of events against it first, and cite it by chapter.
2. Period sources (Sabhasad, Jedhe, Shivabharata, English factory letters, Persian accounts) and
   source-critical scholarship (Mehendale, Sarkar) to confirm dates and details.
3. Encyclopedias and web pages only to find things, never as the last word.
When 1 and 2 disagree, or the point is publicly disputed: write both into `history/CONTESTED.md`,
show it to Pon, and follow his decision. Never quote the book's text in the game; paraphrase facts.
We cannot read the book online: work from the pages Pon provides, and mark an entry "checked"
in `history/PURANDARE-CHECK.md` only after seeing the relevant pages.
Research from other AIs (ChatGPT, Gemini) is a lead only: confirm each claim in a SOURCES.md source
and record the check in `history/AI-REPORTS-REVIEW.md`.

## History rules (the anti-hallucination rules)
- **`history/CHRONOLOGY.md` is the only source of historical fact for the game.** Never write a date,
  name, place, number or event into a card, briefing, History note, epilogue or prompt sheet from memory.
- If the fact you need is not in the chronology: research it (web search, the sources in
  `history/SOURCES.md`), add an entry with **Basis** and **Refs**, then use it.
- Every card and chapter that states history carries `refs` to chronology IDs. `check-refs` must pass.
- Basis tags: `HISTORY`, `CONTESTED`, `TRADITION`, `VERIFY`. **VERIFY facts never ship.**
  TRADITION is always labelled as tradition in the History panel; the shahir (narrator) may sing it.
- Disputed points: follow `history/CONTESTED.md`. Do not "resolve" a dispute by choosing silently.
- **No troop or casualty numbers** (D-04).
- Names: exactly as in `history/PEOPLE.md`.
- History notes use YUDDH's format (`kicker`, `happened`, `changed` with basis items, `source`,
  `epilogue`) and may add `otherSide`: what the opposing records say, in one or two sentences.
- Never quote a source at length: paraphrase; at most one short quotation per source.

## Tone and sensitivity rules
- Shivaji Maharaj is revered by millions. Portray him with dignity: brave, shrewd, human. No jokes at
  his expense, no deification (D-03).
- His enemies are serious generals and statesmen, drawn and written with the same dignity. No slurs,
  no caricature of any community, no religious framing of battles in game text (D-05).
- Show the documented composition of armies: Muslim officers in Shivaji's service (Siddi Hilal,
  Daulat Khan, Noor Khan Beg...), Marathas and Rajputs on the other side (Baji Ghorpade, the Mores,
  Jai Singh, Udaybhan Rathod...).
- Not playable (D-07): a battle against Sambhaji; executions, massacres, reprisals. Tell them plainly
  in History notes.
- Dadoji Kondadeo is shown as Shivaji's teacher, as Purandare tells it (D-15); the History panel notes that
  historians dispute it. Samarth Ramdas does not appear (CONTESTED #6).
- Art prompts: Shivaji's likeness from period portraits only; no film or TV likenesses (D-10).

## Engine rules (inherited from YUDDH)
- Engine baseline: YUDDH commit `6f1c852`. The engine (`src/engine/`) has no DOM code; screens go in `src/game/`.
- **Never break the golden test** (YUDDH's 154 classic-rules games). A Swarajya-only rule goes behind
  `isSwarajyaRules(st.rules)`; a YUDDH rule is checked with `isYuddhRules(st.rules)` (true for 'yuddh'
  and 'swarajya'). Never write `st.rules === 'yuddh'` (it would switch the rule off for Swarajya).
- All numbers live in `src/data/*.json` (cards, decks, rules, chapters). A balance change is a JSON edit.
- Every new mechanic ships with: engine code, an AI value (`ai.ts`, and `search.ts` if needed), a
  rules test, a glossary entry, and a playtest.
- When porting a fix to or from YUDDH, note it in `LOG.md` with both commit hashes.
- YUDDH's hard-won lessons apply (kill GSAP tweens before destroying Pixi objects; decoration has
  `eventMode = 'none'`; load art before building a scene; etc.): read YUDDH's CLAUDE.md "Hard-won lessons".

## Map
```
STATE.md  PROGRESS.md  LOG.md  TASKS.md      session files (read STATE first)
ENGINE_BASELINE                              the YUDDH commit the engine was copied from
docs/DESIGN.md  docs/PLAN.md                 what the game is; phases, gates, roles, risks
history/CHRONOLOGY.md                        THE source of historical fact (IDs C-YYYY-NAME)
history/SOURCES.md  CONTESTED.md  PEOPLE.md  sources; disputed points; names and card ids
history/PURANDARE-CHECK.md                   each chronology entry checked against the standard reference
history/AI-REPORTS-REVIEW.md                 what was checked in AI research reports (leads only, never sources)
data/chapters.json  data/cards.draft.json    design data: 23 chapters, draft cards (not loaded by the game)
scripts/check-refs.mjs                       the ref checker (first step of npm test)
src/engine/                                  rules, AI, search (no DOM); ruleset.ts gates YUDDH/Swarajya rules
src/data/                                    cards, decks, rules, history notes (JSON; balance = JSON edits)
src/campaign/                                scenarios; missions.ts = the classic campaign (golden test, keep)
src/game/                                    Pixi renderer: stage, scenes (swarajyaTitle.ts = Phase 0 title), ui, cards
src/meta/  src/assets/                       progress and standing; art manifest (card-art.json lists painted cards)
tests/                                       Vitest (golden, rules, swarajya…); tests/e2e = Playwright playtests
legacy/                                      the prototype engine that produced the golden traces
public/                                      favicon, icons, manifest (art goes in public/assets/ via npm run assets)
```
YUDDH content in `src/campaign/` and `src/data/` is scaffolding (D-17); Phase 1 replaces it.
