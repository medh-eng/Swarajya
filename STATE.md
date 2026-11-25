# STATE — where the project stands

*Read this first in every session. It is a snapshot, rewritten (not appended) at the end of each
session. History of changes lives in `LOG.md`.*

**Last updated:** 25 Nov 2026 (session 7) · **Phase:** 0 done → **Phase 1 next** · **Next gate:** Gate 1 (vertical slice)

## In one paragraph
YUDDH: Swarajya is a KARDS-style card game of Chhatrapati Shivaji Maharaj's life and wars, built on
the YUDDH engine. The repo `medh-eng/Swarajya` holds the planning package (sourced chronology of 73
entries, 23 chapters, 71 draft cards) and, since session 5, the YUDDH engine copied at its baseline
with a new ruleset `'swarajya'`. `npm test` (check-refs + 84 Vitest tests incl. the 154-game golden
replay), `npx tsc --noEmit` and `npm run build` pass. The page shows a drawn placeholder title
("Coming soon"). Session 6 added empires `swarajya` and `adilshahi` and 7 playable cards (86 tests). No Swarajya mechanic or chapter is in the game yet. **Fourteen card paintings are done** (Pon, art batch 1): the ten from session 6 plus, session 7, all four Gad cards — `sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held` (the neglected-fort pair for the capture flip) — registered in `src/assets/card-art.json`. GitHub Pages is switched on (Pon, 24 Nov 2026).

## Start here (next session)
1. Read this file, `TASKS.md` (section "Phase 1"), the last three `LOG.md` entries, then `CLAUDE.md`.
2. `npm ci`, then `npm test`, `npx tsc --noEmit`, `npm run build`: all must pass before you change anything.
3. Phase 1 step 1 (data) is done for the cards that need no new mechanic. Continue with **TASKS.md → Phase 1,
   step 2 (Gad card type + capture)**; port the waiting draft cards as each mechanic lands. Do not start art or
   the Bhet before the Gad mechanic works.
4. The YUDDH repo is the reference for how a finished feature looks: clone it read-only
   (`GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://github.com/medh-eng/yuddh`; skip `art/`, it is ~1 GB).
   Its `src/main.ts` shows the full scene wiring that this repo's placeholder `src/main.ts` replaced.

## What exists
| Thing | Where | State |
|---|---|---|
| Design | `docs/DESIGN.md` | v1 + decisions log to D-17 |
| Roadmap | `docs/PLAN.md` | v1 (Phase 0 done) |
| Chronology (single source of truth) | `history/CHRONOLOGY.md` | 73 entries; Purandare pp. 154-169, 207-284 recorded (Torna to the Pratapgad meeting); VERIFY items below |
| Sources | `history/SOURCES.md` | P/S/W lists; primary texts still to obtain |
| Contested points | `history/CONTESTED.md` | 29 items; #27-#29 open (Baji More's fate; elder Sambhaji and Afzal; Siddi Hilal's side in 1659) |
| People and spellings | `history/PEOPLE.md` | v1 |
| AI reports review | `history/AI-REPORTS-REVIEW.md` | ChatGPT and Gemini reports checked claim by claim |
| Purandare check list | `history/PURANDARE-CHECK.md` | Rows checked from the pages Pon sent (not a gate, D-22); no more pages needed unless a point is disputed |
| Chapters (design data) | `data/chapters.json` | 23 (1 blocked: `ch02_purandar1648`) |
| Cards (design data) | `data/cards.draft.json` | 71 draft (7 ported to the game), unbalanced, not loaded |
| Ref checker | `scripts/check-refs.mjs` | in `npm test`; passes (1 warning: `jm_hanmantrao` VERIFY) |
| Engine (rules, AI, search) | `src/engine/` | YUDDH baseline + `ruleset.ts` (`isYuddhRules`, `isSwarajyaRules`) |
| Renderer, scenes, UI | `src/game/` | YUDDH baseline + `scenes/swarajyaTitle.ts` (placeholder) |
| Game data | `src/data/*.json` | YUDDH's (scaffolding, D-17) + `swarajya` list: 7 cards (4 Swarajya, 3 Adilshahi) |
| Campaign code | `src/campaign/` | YUDDH's (scaffolding, D-17); `missions.ts` must stay (golden test) |
| Tests | `tests/` | golden, rules, morale, search, duel, net, standing, rewards, seleucid, duelBalance, `swarajya.test.ts` |
| Deploy | `.github/workflows/deploy.yml` | test + build + publish to `gh-pages` on every push to main |
| Art prompts | `art/PROMPTS-BATCH1.md` | 20 card + 2 battlefield prompts, with exact formats (5:7 cards, square forts, 16:9 battlefields) and safe areas |
| Art (painted) | `art/source/cards/` | 14 of 20 cards done: sw_shivaji, mavla, havaldar, hetkari, bargir, shiledar, herkari, gopinath, jijau_counsel, dadoji, plus all 4 Gad cards (sw_gad_torna, sw_gad_rajgad, sw_gad_pratapgad, as_gad_torna_held). Remaining: sw_torna_hoard, sw_wagh_nakh, as_afzal_khan, as_hasham, as_gaja, as_topkhana, and the 2 battlefields. Folder `battlefields/` is ready and empty |
| Sound | — | none yet (icons and favicon drawn in code) |

## Engine baseline and how the ruleset works
YUDDH `medh-eng/Yuddh` commit `6f1c852ee493ef03d104efd5535c1ed81bc737ae` (file `ENGINE_BASELINE`).
- `Ruleset = 'classic' | 'yuddh' | 'swarajya'`. Every YUDDH rule is gated with `isYuddhRules(st.rules)`
  (true for 'yuddh' and 'swarajya'); a Swarajya-only rule must use `isSwarajyaRules(st.rules)`.
  Never write `st.rules === 'yuddh'` again (it would switch the rule off for Swarajya).
- `tests/swarajya.test.ts` proves a 'swarajya' game plays exactly like the same 'yuddh' game. When a
  Swarajya mechanic lands, keep that test for games that do not use the mechanic.
- Useful facts: objectives `survive` and `deadline` exist (`Objective` in `types.ts`, checked in
  `rules.ts` at turn start); the Yudhbhumi size is a hard-coded 4 in `rules.ts` (two `>= 4` checks),
  which the Khind mechanic will replace with `frontSize`; Dhuan (hidden until it strikes) is the basis for Ratra.
- Without art, `hasArt()` is false for every card, so cards draw their placeholder frame. Battle
  backgrounds (`loadBattlefield`) still expect files in `public/assets/battlefields/`; Phase 1 needs a
  fallback or Pon's first painting before a battle scene can open.

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
| D-14 | **Title: YUDDH: Swarajya.** | 24 Nov 2026 |
| D-15 | **Dadoji Kondadeo is shown as Shivaji's teacher**, following Purandare; the History panel notes that historians dispute it (CONTESTED #6). Samarth Ramdas does not appear. | 24 Nov 2026 |
| D-16 | Chapter `ch20b_sangamner` (Shivaji's last battle, 1679) is in the campaign. Pon's copy of the standard reference: *Raja Shivachhatrapati*, English edition, latest printing. | 24 Nov 2026 |
| D-18 | **S-PURANDARE edition recorded:** Vol. I, English, Edition 2 (April 2022), trans. Dr. Hema Hirlekar. The book's sketches are never used as art references; its wording is never quoted. | 24 Nov 2026 |
| D-19 | **Torna as in Purandare:** an unguarded fort taken without a fight. Chapter 1 becomes a race to take, hold and fortify it; no enemy hero (CONTESTED #25). | 24 Nov 2026 |
| D-20 | **Rajgad named at once** (Purandare), no year printed for the renaming (CONTESTED #21). | 24 Nov 2026 |
| D-21 | **Shivaji's clothes are never teal or green** (green is Bijapur's colour): saffron, yellow, cream, orange, red or maroon. Pon chose the yellow jama. | 24 Nov 2026 |
| D-22 | **Research workflow:** Claude researches online (period sources, scholarship, reputable references; two independent sources per fact) and does not wait for the whole book. Pon is not asked to photograph Purandare; specific pages only for a specific disputed or single-source point. Purandare stays the standard where Pon supplied pages. `PURANDARE-CHECK.md` is no longer a gate. | 24 Nov 2026 |
| D-17 | Phase 0 keeps YUDDH's content code (`src/campaign/*`, YUDDH cards and duel factions in `src/data/*.json`) as **scaffolding** so the battle screen, duel and tests keep compiling. It is not reachable from the game (the title is a placeholder). Phase 1 replaces it piece by piece with Swarajya content and deletes what is left. YUDDH's art is not copied (`src/assets/card-art.json` is empty, so cards draw their placeholder frame). | 24 Nov 2026 |


## Open decisions (Pon)
| ID | Question | Options | Recommendation |
|---|---|---|---|
| Q-03 | Narrator voice | Text only · Pon records the shahir · generated voice | Text first; voice at Phase 5 |
| Q-04 | Vertical slice chapters | Tutorial + Torna + Pratapgad (plan) · or Pavan Khind instead of Torna | Plan as written |
| Q-05 | Who reviews the Marathi | — | Someone Pon trusts, before Gate 1 |
| Q-07 | **Baji More's fate** (#27); **elder Sambhaji and Afzal** (#28); **Siddi Hilal on which side in 1659** (#29: now seen twice on Afzal's side, pp. 257 and 284) | Purandare vs earlier retellings | Follow Purandare; History notes say "Purandare tells it so" and print no year for #28 |
| Q-06 | Swarajya passive | Sahyadri (first Mavla has Vega) · Gadkot (forts heal the Durg) | Sahyadri, test in Phase 1 |
(Q-01 and Q-02 resolved: D-14, D-13; the old Q-07 and Q-08 became D-15 and D-16.)

## Known gaps (VERIFY before use)
- C-1648-SHAHAJI: the Fateh Khan battle at Purandar (blocks `ch02_purandar1648`).
- C-1647-EXPANSION: order and dates of individual forts.
- C-1670-RECAPTURE: which forts, when.
- C-1677-VENKOJI (battle).
- C-1672-JAWHAR: months.
- C-1674-CORONATION: Henry Oxenden's attendance (check Factory Records).
- CONTESTED #27, #28 (Baji More's fate; Afzal and the elder Sambhaji). Dates in C-1656-SUPA, C-1657-KONDHANA-RETAKEN, C-1657-NORTH-KONKAN are single-source (Purandare).
- Card `jm_hanmantrao` (only one secondary source).
- "Bahlol Khan" at Salher (Mughal) vs the Bijapuri Bahlol Khan: assumed two people.

## Next three things
1. Claude: online research pass (no book needed) on the VERIFY items: the Fateh Khan episode at Purandar 1648 (unblocks `ch02_purandar1648`), Javli 1647, the dates for Baji More's fate and Siddi Hilal's side (CONTESTED #27-#29), then the remaining "not yet checked" chronology rows (D-22).
2. Claude: Phase 1 step 2: the Gad card type with a **square art window** and the `capture` objective (then port the 4 Gad cards).
3. Pon: keep painting from `art/PROMPTS-BATCH1.md` (remaining: Torna hoard, Wagh Nakh, the four fort cards in `art/source/forts/`, Afzal Khan, Hasham, Gaja, Topkhana, and the two battlefields in `art/source/battlefields/`); three finished cards (sw_dadoji, sw_gopinath, sw_jijau_counsel) are only 345 px wide and tight at the top: redo them at 1080 px or wider if the tool allows.
