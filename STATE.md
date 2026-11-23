# STATE — where the project stands

*Read this first in every session. It is a snapshot, rewritten (not appended) at the end of each
session. History of changes lives in `LOG.md`.*

**Last updated:** 23 Nov 2026 (session 2) · **Phase:** 0 (planning done, no code yet) · **Next gate:** Gate 1 (vertical slice)

## In one paragraph
SWARAJYA (working title) is a KARDS-style card game of Chhatrapati Shivaji Maharaj's life and wars,
built on the YUDDH engine. The planning package exists: design, plan, a sourced chronology of
53 entries (1630–1680), sources list, contested points, people sheet, 22 chapters in data, and
77 draft cards. A checker (`scripts/check-refs.mjs`) passes. No repository yet; no engine code copied yet.

## What exists
| Thing | Where | State |
|---|---|---|
| Design | `docs/DESIGN.md` | v1 |
| Roadmap | `docs/PLAN.md` | v1 |
| Chronology (single source of truth) | `history/CHRONOLOGY.md` | 53 entries; VERIFY items listed below |
| Sources | `history/SOURCES.md` | P/S/W lists; primary texts still to obtain |
| Contested points | `history/CONTESTED.md` | 19 items with the game's handling |
| People and spellings | `history/PEOPLE.md` | v1 |
| Chapters | `data/chapters.json` | 22 (1 blocked) |
| Cards | `data/cards.draft.json` | 77 draft, unbalanced |
| AI reports review | `history/AI-REPORTS-REVIEW.md` | ChatGPT and Gemini reports checked claim by claim |
| Purandare check list | `history/PURANDARE-CHECK.md` | 0 of 63 entries checked (book not yet available to Claude) |
| Ref checker | `scripts/check-refs.mjs` | passes (1 warning: `jm_hanmantrao` VERIFY) |
| Code, art, sound | — | none yet |

## Engine baseline
YUDDH `medh-eng/Yuddh` commit `6f1c852ee493ef03d104efd5535c1ed81bc737ae` (16 Nov 2026).
Useful facts found while reading it: objectives `survive` and `deadline` already exist
(`src/engine/types.ts` `Objective`, checked in `rules.ts` at turn start); the Yudhbhumi size is a
hard-coded 4 in `rules.ts` (two `>= 4` checks) — the Khind mechanic replaces it with `frontSize`;
Dhuan (hidden until it strikes) exists and is the basis for Ratra.

## Decisions locked
| ID | Decision | Date |
|---|---|---|
| D-01 | Built on the YUDDH engine at the commit above; new ruleset `'swarajya'` extends `'yuddh'`; YUDDH's golden test kept. | 23 Nov 2026 |
| D-02 | Chronology first: no historical claim in the game without a `CHRONOLOGY.md` ID; `check-refs` runs in `npm test`. | 23 Nov 2026 |
| D-03 | History, not mythology: no divine units or powers. Tradition is labelled. | 23 Nov 2026 |
| D-04 | No troop or casualty numbers anywhere (CONTESTED #15). | 23 Nov 2026 |
| D-05 | Show who really fought on each side (Muslim officers in Shivaji's service; Marathas and Rajputs among his enemies). Dignity for every historical figure. No slurs, no communal framing. | 23 Nov 2026 |
| D-06 | Disputed points follow `CONTESTED.md`. | 23 Nov 2026 |
| D-07 | Not playable: a battle against Sambhaji; executions, massacres, reprisals. These are told in History notes. | 23 Nov 2026 |
| D-08 | Progress (forts on the map, ranks) never changes a battle's balance. | 23 Nov 2026 |
| D-09 | English and Marathi from the start. | 23 Nov 2026 |
| D-10 | Shivaji's likeness from period portraits; no film or TV likeness. | 23 Nov 2026 |
| D-11 | Every chapter replayable; nothing locked. | 23 Nov 2026 |
| D-13 | **Repo: `medh-eng/Swarajya`** (created by Pon). All planning files live there from now on; the zip is retired. | 23 Nov 2026 |
| D-12 | **Standard reference: Babasaheb Purandare, *Raja Shivachhatrapati*.** Every chronology entry is checked against it (`history/PURANDARE-CHECK.md`); where it differs from the period sources, both go into CONTESTED.md and Pon decides. | 23 Nov 2026 |

## Open decisions (Pon)
| ID | Question | Options | Recommendation |
|---|---|---|---|
| Q-01 | Game name | SWARAJYA · GADKOT · YUDDH: Swarajya (sequel brand) · Shivayan | **YUDDH: Swarajya** keeps the brand players already know; repo `medh-eng/Swarajya` either way |
| Q-02 | ~~Where the code lives~~ | **Resolved (D-13): `medh-eng/Swarajya`** | — |
| Q-03 | Narrator voice | Text only · Pon records the shahir · generated voice | Text first; voice at Phase 5 |
| Q-04 | Vertical slice chapters | Tutorial + Torna + Pratapgad (plan) · or Pavan Khind instead of Torna | Plan as written |
| Q-05 | Who reviews the Marathi | — | Someone Pon trusts, before Gate 1 |
| Q-07 | Dadoji Kondadeo: *Raja Shivachhatrapati* shows him as mentor; historians and the 2015 controversy dispute this (CONTESTED #6) | Follow the book · keep him as administrator only · leave him out | Administrator only (the book's view in the History note, labelled) |
| Q-08 | Which edition of *Raja Shivachhatrapati* Pon has | English 2-vol. · Marathi 2-vol. | Either; page photos per chapter are enough |
| Q-06 | Swarajya passive | Sahyadri (first Mavla has Vega) · Gadkot (forts heal the Durg) | Sahyadri, test in Phase 1 |

## Known gaps (VERIFY before use)
- C-1648-SHAHAJI: the Fateh Khan battle at Purandar (blocks `ch02_purandar1648`).
- C-1647-EXPANSION: order and dates of individual forts.
- C-1670-RECAPTURE: which forts, when.
- C-1677-VENKOJI (battle). (Vellore's fall cleared: August 1678.)
- C-1672-JAWHAR: months.
- `ch20b_sangamner`: proposed chapter, Pon to approve or drop.
- C-1674-CORONATION: Henry Oxenden's attendance (check Factory Records).
- Card `jm_hanmantrao` (only one secondary source).
- "Bahlol Khan" at Salher (Mughal) vs the Bijapuri Bahlol Khan: assumed two people.

## Next three things
1. Pon: decide Q-01 (game name) and Q-07; say which edition of *Raja Shivachhatrapati* you have (Q-08); approve or drop `ch20b_sangamner`.
2. Claude: Phase 0 (copy the engine, add the ruleset, wire check-refs into tests, deploy a placeholder).
3. Claude: obtain Sabhasad in translation (Sen 1920, public domain) and Mehendale; clear the VERIFY items that touch Act I.
