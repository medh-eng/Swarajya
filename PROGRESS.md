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
- [x] Step 8 (campaign map v1 confirmed on the existing shared `campaignScene`; Marathi strings for the
      slice via new `src/i18n.ts` + `localizeScenario`/`localizeCampaign`; `hasDevanagari`/`fontFor` font
      fix; 25 Nov 2026 session 8) — generic battle chrome stays English pending the later reviewed pass
- [~] Step 9 (remove YUDDH scaffolding Swarajya no longer needs) — partly done, 25 Nov 2026 session 8:
      `tests/swarajya.test.ts` no longer needs `src/campaign/duel.ts`'s YUDDH factions (rebuilt on the
      permanent "classic" 50 cards instead). The larger removal (19 chapter files, `CAMPAIGNS`, the
      `"yuddh"` card pool, `duel.json`'s YUDDH factions) is load-bearing for four other test files
      (`seleucid.test.ts`, `search.test.ts`, `standing.test.ts`, `duelBalance.test.ts`) and for Phase 4's
      planned Duel reuse — see `TASKS.md` step 9 for the full finding and a safer plan.
- [~] Step 10 (balance, playtests, Gate 1) — 27 Nov 2026 session 12: **all five built battles in band**
      (Torna 58.3, Jaoli 50.0, Pratapgad 58.7, Kolhapur 54.0, Pavan Khind 57.3). Pratapgad fixed (new deck,
      Wagh Nakh `powerVsLegendary`, Gopinath Pant); harness skill ladder; Foe: Easy option. Remaining: phone
      playtest of the new Pratapgad deck, Gate 1 with Pon. Mechanic added: `powerVsLegendary` (order damage
      that is higher against Legendary units).

## Phase 2 · Act I and II
- [x] Step 1 (Ganim keyword, 25 Nov 2026 session 8): `canFallback()` + a `fallback` Action (Swarajya
      rules only) — a Ganim unit may return to the Rajya line at no Kosha cost after attacking. AI value
      in both the search AI (`legalActions` offers it) and the heuristic AI (`ganimFallback()`, with a
      hold-the-ground exception for a lone defender facing a massed enemy). Glossary entry + icon.
      Unlocked `sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar` (ported to `src/data/cards.json`).
      `tests/ganim.test.ts` (10 tests). No chapter uses these cards yet — no visible gameplay change this
      step, verified with a build/test/playtest regression check.
- [x] Step 2 (Khind, 26 Nov 2026 session 11): `frontSize` on a scenario (Swarajya rules only) caps the
      Yudhbhumi via `frontCap()`/`isKhind()` (`ruleset.ts`); AI advance limits and the search's
      front-holding value respect it; glossary entry, briefing line, lane label "KHIND · ONLY 2";
      `tests/khind.test.ts` (6). First used in ch06 Pavan Khind.
- [ ] Step 3 (Ratra/night, `raid` objective, enemy Gads on the board)
- [~] Step 4 (chapters 3, 5-11, each with its own chronology check) — **ch03 Jaoli built 26 Nov 2026
      session 10** (new `jaoli` faction, 3 Jaoli cards ported, first chapter to deck Shivaji + the Ganim
      units; 50.0% player wins in the balance harness; real playtest clean). **ch05 Kolhapur** (54.0%) and
      **ch06 Panhala and the Pass / Pavan Khind** (57.3%, Khind + survive 8) built 26 Nov 2026 session 11.
      Ch07-11 to go.
- [ ] Step 5 (Mughal faction cards)
- [~] Step 6 (art batches 2-4) — batch 2 (Jaoli, ch3) fully painted and registered. Batch 3 (Kolhapur,
      ch5) 3 of 4 painted 26 Nov 2026 session 9 (`sw_siddi_hilal` still outstanding); plus a bonus
      early painting of `sw_bajiprabhu` (chapter 6). Batch 4 (Pavan Khind, ch6) fully painted and
      registered 26 Nov 2026 session 10 (4 cards + `ghod_khind`). 30 card paintings total.

## Mechanics
| Mechanic | Engine | AI | Tests | Glossary/UI | Status |
|---|---|---|---|---|---|
| Gad (fort cards, capture) | [x] | [x] | [x] | [x] | built (Phase 1 step 2, session 8) — `durgWard`/`shipsAtk` not yet applied |
| Bhet (parley scene) | [x] | [x] | [x] | [x] | built (Phase 1 step 6, session 8) — explained in-scene, no glossary icon |
| New objective `capture` | [x] | [x] | [x] | [x] | built (Phase 1 step 3, session 8) |
| Swarajya map (forts light up) | n/a | n/a | n/a | [x] | v1 built on existing `campaignScene` (Phase 1 step 8, session 8); full painted map later |
| Marathi localization (vertical slice) | n/a | n/a | n/a | [x] | built (Phase 1 step 8, session 8) — `src/i18n.ts`; generic battle chrome still English, pending Q-05 |
| Khind (`frontSize`) | [x] | [x] | [x] | [x] | built (Phase 2 step 2, session 11) — first used in ch06 Pavan Khind |
| Ganim keyword | [x] | [x] | [x] | [x] | built (Phase 2 step 1, session 8) — first used in ch03 Jaoli (session 10) |
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
| 7 | Fifty-six Days at Chakan | [ ] | [ ] | [x] | [ ] | planned |
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
