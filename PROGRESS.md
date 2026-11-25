# PROGRESS

*Tick boxes as work is done; never delete a line (strike it through and say why if dropped).
Status words: planned · in progress · built · balanced · approved (by Pon at a Gate).*

## Phase 0 · Foundation
- [x] Study YUDDH: engine, data, scenario format, History notes, working conventions (23 Nov 2026)
- [x] Research Shivaji's life; sourced chronology of 53 entries (23 Nov 2026)
- [x] Planning package: DESIGN, PLAN, STATE, PROGRESS, LOG, TASKS, README, CLAUDE, history/*, data/* (23 Nov 2026)
- [x] `scripts/check-refs.mjs` written and passing (23 Nov 2026)
- [x] Repo created (Pon) and planning package committed (23 Nov 2026)
- [x] Engine, renderer, tests copied from YUDDH @ 6f1c852 (24 Nov 2026; YUDDH content kept as scaffolding, D-17)
- [x] Ruleset `'swarajya'` (24 Nov 2026) · [x] empires `swarajya` and `adilshahi` in cards.json (25 Nov 2026, Phase 1 step 1)
- [x] Art batch 1 prompt sheet written (24 Nov 2026) · [x] Art batch 1 complete (20 of 20 cards + 2 of 2 battlefields, 25 Nov 2026 session 7)
- [x] First Purandare pages checked (Vol. I pp. 154-169); more recorded: pp. 207-284 (24 Nov 2026)
- [x] Decisions D-19 to D-22 (Torna and Rajgad per the book; Shivaji never in teal or green; online research workflow) (24 Nov 2026)
- [x] Art folders `art/source/cards|forts|battlefields` and the fort converter job (24 Nov 2026)
- [x] Phase 1 step 1 (data): 4 Swarajya + 3 Adilshahi cards playable; 71 draft cards wait on mechanics (Ganim, Gad, Bhet, reveal, static, vsLegendary)
- [x] check-refs in `npm test` (24 Nov 2026)
- [x] Placeholder title screen built and deploy workflow in place (24 Nov 2026) · [x] Pages switched on (Pon, 24 Nov 2026)
- [ ] Online research pass: Act I VERIFY items cleared (Claude, D-22)

## Phase 1 · Vertical slice "The Rebel"
- [x] Step 1 (data, partial — session 6): empires `swarajya`/`adilshahi`, 7 cards needing no new mechanic
- [x] Step 2 (Gad card type + capture, 25 Nov 2026 session 8): `type: 'gad'`, Rajya-line placement,
      capture-on-defeat at a third of defence, immune to destroy orders, `kosha1`/`drawEvery2`/`rakshaHp`
      upkeep, AI value, glossary entry, `tests/gad.test.ts` (17 tests). Square art window for Gads: not
      yet (deferred to step 5, when a Gad first appears in a battle scene).
- [x] Step 1 (data, cont. — session 8): the 4 vertical-slice Gad cards ported alongside step 2
      (`sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held`) — 11 cards playable now
- [x] Step 3 (`capture` objective, 25 Nov 2026 session 8): done alongside step 2
- [x] Step 4 (battle without art fallback, 25 Nov 2026 session 8): `loadBattlefield()` falls back to a
      drawn placeholder ground; Gad square art window also closed (deferred from step 2)
- [x] Step 5 (scenarios, 25 Nov 2026 session 8): `ch00_maval`, `ch01_torna` (`capture`), `ch04_pratapgad`
      (battle only, Bhet deferred); title → campaign → battle wired in `src/main.ts`;
      `tests/scenarios.test.ts` (5 tests) + a real e2e playtest (`tests/e2e/swarajyaPlaytest.cjs`)
- [x] Step 6 (Bhet scene + AI stance table, 25 Nov 2026 session 8): `src/engine/bhet.ts`
      (`chooseBhetStance` AI value, `resolveBhet` full 3×3 payoff table), generic
      `playerWoundFrac`/`enemyWoundFrac` on `Preset` + `newGame()`'s `woundSide()`, `src/game/scenes/bhet.ts`
      shown before battle via `Scenario.bhet`, `ch04_pratapgad` now opens on the meeting itself (no longer
      "happened offscreen"). `tests/bhet.test.ts` (11 tests). Explained in-scene, no glossary icon.
- [ ] Step 8 (campaign map v1; Marathi strings for the slice)
- [ ] Step 9 (remove YUDDH scaffolding Swarajya no longer needs)
- [ ] Step 10 (balance, playtests, Gate 1)

## Phase 2 · Act I and II
- [x] Step 1 (Ganim keyword, 25 Nov 2026 session 8): `canFallback()` + a `fallback` Action (Swarajya
      rules only) — a Ganim unit may return to the Rajya line at no Kosha cost after attacking. AI value
      in both the search AI (`legalActions` offers it) and the heuristic AI (`ganimFallback()`, with a
      hold-the-ground exception for a lone defender facing a massed enemy). Glossary entry + icon.
      Unlocked `sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar` (ported to `src/data/cards.json`).
      `tests/ganim.test.ts` (10 tests). No chapter uses these cards yet — no visible gameplay change this
      step, verified with a build/test/playtest regression check.
- [ ] Step 2 (Khind — `frontSize`, replacing the hard-coded Yudhbhumi size of 4)
- [ ] Step 3 (Ratra/night, `raid` objective, enemy Gads on the board)
- [ ] Step 4 (chapters 3, 5-11, each with its own chronology check)
- [ ] Step 5 (Mughal faction cards)
- [ ] Step 6 (art batches 2-4)

## Mechanics
| Mechanic | Engine | AI | Tests | Glossary/UI | Status |
|---|---|---|---|---|---|
| Gad (fort cards, capture) | [x] | [x] | [x] | [x] | built (Phase 1 step 2, session 8) — `durgWard`/`shipsAtk` not yet applied |
| Bhet (parley scene) | [x] | [x] | [x] | [x] | built (Phase 1 step 6, session 8) — explained in-scene, no glossary icon |
| New objective `capture` | [x] | [x] | [x] | [x] | built (Phase 1 step 3, session 8) |
| Swarajya map (forts light up) | n/a | n/a | [ ] | [ ] | planned (Phase 1) |
| Khind (`frontSize`) | [ ] | [ ] | [ ] | [ ] | planned (Phase 2) |
| Ganim keyword | [x] | [x] | [x] | [x] | built (Phase 2 step 1, session 8) — no chapter uses it yet |
| Ratra (night) | [ ] | [ ] | [ ] | [ ] | planned (Phase 2) |
| New objective `raid` | [ ] | [ ] | [ ] | [ ] | planned (Phase 2) |
| Neutral structures | [ ] | [ ] | [ ] | [ ] | planned (Phase 2) |
| Treaty scene (23 forts go dark) | n/a | n/a | [ ] | [ ] | planned (Phase 2) |
| Escape puzzle mode | [ ] | [ ] | [ ] | [ ] | planned (Phase 3) |
| Scripted reinforcements | [ ] | [ ] | [ ] | [ ] | planned (Phase 3) |
| Ashta Pradhan / Rajmandal | [ ] | [ ] | [ ] | [ ] | planned (Phase 3) |
| Ships and sea forts | [ ] | [ ] | [ ] | [ ] | planned (Phase 4) |

## Chapters
| # | Chapter | History note | Deck | Art | Balance | Status |
|---|---|---|---|---|---|---|
| 0 | The Mavlas of the Maval (tutorial) | [x] | [x] | [x] (placeholder ground) | n/a | built, unbalanced |
| 1 | Torna | [x] | [x] | [x] (painted) | [ ] | built, unbalanced |
| 2 | Purandar 1648 | — | — | — | — | blocked (VERIFY) |
| 3 | Jaoli | [ ] | [ ] | [ ] | [ ] | planned |
| 4 | Pratapgad | [x] | [x] | [x] (painted) | [ ] | built, unbalanced (battle only — Bhet minigame not yet built, step 6) |
| 5 | Kolhapur | [ ] | [ ] | [ ] | [ ] | planned |
| 6 | Panhala and the Pass | [ ] | [ ] | [ ] | [ ] | planned |
| 7 | Fifty-six Days at Chakan | [ ] | [ ] | [ ] | [ ] | planned |
| 8 | Umberkhind | [ ] | [ ] | [ ] | [ ] | planned |
| 9 | The Lal Mahal | [ ] | [ ] | [ ] | [ ] | planned |
| 10 | Surat | [ ] | [ ] | [ ] | [ ] | planned |
| 11 | Purandar | [ ] | [ ] | [ ] | [ ] | planned |
| 12 | Agra | [ ] | [ ] | [ ] | n/a | planned |
| 13 | Kondhana | [ ] | [ ] | [ ] | [ ] | planned |
| 14 | Surat and Vani | [ ] | [ ] | [ ] | [ ] | planned |
| 15 | Salher | [ ] | [ ] | [ ] | [ ] | planned |
| 16 | Panhala by Night (bonus) | [ ] | [ ] | [ ] | [ ] | planned |
| 17 | Umrani and Nesari | [ ] | [ ] | [ ] | [ ] | planned |
| 18 | Rajyabhishek (interlude) | [ ] | n/a | [ ] | n/a | planned |
| 19 | Dakshin Digvijaya: Tiruvadi | [ ] | [ ] | [ ] | [ ] | planned |
| 20 | Khanderi | [ ] | [ ] | [ ] | [ ] | planned |
| 21 | Raigad (epilogue) | [ ] | n/a | [ ] | n/a | planned |

## Gates
- [ ] Gate 1 — vertical slice (tutorial, Torna, Pratapgad)
- [ ] Gate 2 — Acts I–II
- [ ] Gate 3 — through the coronation
- [ ] Gate 4 — Act V, Duel, challenges
- [ ] Release — Google Play
