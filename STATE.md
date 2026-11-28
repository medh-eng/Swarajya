# STATE — where the project stands

*Read this first in every session. It is a snapshot, rewritten (not appended) at the end of each
session. History of changes lives in `LOG.md`.*

**Last updated:** 28 Nov 2026 (session 13) · **Phase:** 0 done → **Phase 1 nearly done (steps 9 and 10 partly done, of 10)** → **Phase 2 under way (steps 1–2 done, step 3 partly done, step 5 Mughal faction started; chapters 3, 5, 6 and 7 built)** · **Next gate:** Gate 1 (vertical slice)

## In one paragraph
Swarajya is a KARDS-style card game of Chhatrapati Shivaji Maharaj's life and wars, built on the YUDDH engine
(ruleset `'swarajya'`). **Session 13 (28 Nov 2026):** art batch 6 reviewed and merged (PR #1: 38 card
paintings, 7 battlefields). **Chapter 7, "Fifty-six Days at Chakan", is built and playable**: you hold
Sangramdurg as Firangoji Narsala for 10 turns against Shaista Khan's siege (monsoon). It brought the first
**Mughal** faction (empire `mughal`, 5 cards) and the **siege mechanics**: `durgWard` Gads now protect their
owner's Durg; `gadWard` (Firangoji: blows on your Gads are 1 weaker while he stands on the Rajya line);
`static` siege guns that never leave the Rajya line; `vsGad` bombard (strikes a Gad from the Rajya line, over a
Raksha guard); orders that target an enemy Gad (`target: 'enemyGad'`, the Surang mine). Balance 56.7% (300
games; the walls still fall in about three games in four, as in history). Chronology for Chakan now rests on
Sarkar and Takakhav (dates CONTESTED #31: print "1660"). `art/PROMPTS-BATCH7.md` (chapter 8 Umberkhind:
Kartalab Khan, Rai Bagan, Khind Ambush, Netaji Palkar, the `umberkhind` battlefield) is written. Needs Pon:
play Chakan (try Foe: Easy if it is hard), paint batch 7, phone playtest, Gate 1.

Map order: Maval → Torna → Jaoli → Pratapgad → Kolhapur → Pavan Khind → Chakan. All seven battles are in the
45–70% band at Standard (Torna 58.3, Jaoli 50.0, Pratapgad 58.7, Kolhapur 54.0, Pavan Khind 57.3, Chakan 56.7).

## Start here (next session)
1. Read this file, `TASKS.md` ("Phase 1" and "Phase 2"), the last three `LOG.md` entries, then `CLAUDE.md`.
2. `npm ci`, then `npm test`, `npx tsc --noEmit`, `npm run build`: all must pass before you change anything.
3. Next Claude work: **chapter 8 Umberkhind** (`data/chapters.json` ch08: Khind of 2, Bhet `rai_bagan_offer`,
   enemy starts on the front, destroy objective). Port `mg_kartalab_khan`, `mg_rai_bagan`, `sw_khind_ambush`,
   `sw_netaji` from the draft (set their empire to `mughal`/`swarajya`; remove them from the draft file or
   check-refs flags duplicate ids). `sw_khind_ambush` needs an `onEnemyAdvance` yantra trigger (check the
   engine; Dhuan/deploy traps are the nearest pattern). Read Takakhav ch. XVII (W-TAKAKHAV-UMBER) first.
   Remaining Phase 2 step 3 pieces: Ratra and `raid` (ch09 Lal Mahal needs them); `shipsAtk` is still unwired.
4. Before adding a scenario: `heroCard`, `defeatCard` and a campaign node's `face` must be ids in
   `src/data/cards.json` (not only the draft), or `cardFace()` throws when the screen opens. Preset cards'
   art is preloaded by `battleArt()` (fixed session 13).
5. The real playtest is mandatory: `tests/e2e/swarajyaPlaytest.cjs`. Campaign nodes use raw pointertap, so
   click them by screen position. The briefing's place line overlaps the History/Foe buttons at phone width
   in every chapter (known, cosmetic).
6. Loose ends: the tutorial coach shows Chanakya's portrait (YUDDH scaffolding); the rest of Phase 1 step 9
   (YUDDH scaffolding removal; read TASKS.md first). YUDDH reference clone:
   `GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://github.com/medh-eng/yuddh` (skip `art/`).

## What exists
| Thing | Where | State |
|---|---|---|
| Design | `docs/DESIGN.md` | v1 + decisions log to D-17 |
| Roadmap | `docs/PLAN.md` | v1 (Phase 0 done) |
| Chronology (single source of truth) | `history/CHRONOLOGY.md` | 73 entries; Purandare pp. 154-169, 207-284 recorded (Torna to the Pratapgad meeting); VERIFY items below |
| Sources | `history/SOURCES.md` | P/S/W lists; primary texts still to obtain |
| Contested points | `history/CONTESTED.md` | 31 items (#31 Chakan dates); #27-#29 open (Baji More's fate; elder Sambhaji and Afzal; Siddi Hilal's side in 1659) |
| People and spellings | `history/PEOPLE.md` | v1 |
| AI reports review | `history/AI-REPORTS-REVIEW.md` | ChatGPT and Gemini reports checked claim by claim |
| Purandare check list | `history/PURANDARE-CHECK.md` | Rows checked from the pages Pon sent (not a gate, D-22); no more pages needed unless a point is disputed |
| Chapters (design data) | `data/chapters.json` | 23 (1 blocked: `ch02_purandar1648`) |
| Cards (design data) | `data/cards.draft.json` | 67 draft (13 ported to the game), unbalanced, not loaded |
| Ref checker | `scripts/check-refs.mjs` | in `npm test`; passes (1 warning: `jm_hanmantrao` VERIFY) |
| Engine (rules, AI, search) | `src/engine/` | YUDDH baseline + `ruleset.ts` (`isYuddhRules`, `isSwarajyaRules`); **Gad card type + `capture` objective** (DESIGN 3.1, 3.6; session 8); **Bhet mechanic** (`bhet.ts`: `chooseBhetStance`, `resolveBhet`; DESIGN 3.5; session 8); **Ganim keyword** (`canFallback` + `fallback` Action, `ganimFallback` AI heuristic; DESIGN 3.3; Phase 2 step 1, session 8) |
| Renderer, scenes, UI | `src/game/` | YUDDH baseline + `scenes/swarajyaTitle.ts` (real buttons + language toggle, session 8); `scenes/bhet.ts` (parley scene, session 8); square art window for Gad; `loadBattlefield` falls back to a drawn ground; History panel supports `CONTESTED`/`otherSide`; `theme.ts`'s `hasDevanagari`/`fontFor` pick a safe font for Marathi text (session 8 step 8) |
| Localization | `src/i18n.ts` | `Lang`/`pick`/`getLang`/`setLang`/`toggleLang` (session 8 step 8); vertical-slice-only Marathi (title, chapter text, Bhet scene) — unreviewed, pending Q-05; generic battle chrome still English |
| Game data | `src/data/*.json` | YUDDH's (scaffolding, D-17) + `swarajya` list: 13 cards (9 Swarajya, 3 Adilshahi, 1 neutral — 4 of them Gads); decks + History notes for `ch00_maval`/`ch01_torna`/`ch03_jaoli`/`ch04_pratapgad`/`ch05_kolhapur`/`ch06_pavankhind`; empire `jaoli` + 3 `jm_` cards (session 10); `rules.json`'s `"bhet"` (AI odds, wound fraction) |
| Campaign code | `src/campaign/` | YUDDH's kept as scaffolding (D-17) + `mavalTutorial.ts`/`torna.ts`/`jaoli.ts`/`pratapgad.ts` (with `bhet` config)/`kolhapur.ts`/`pavankhind.ts` and `SWARAJYA`/`SWARAJYA_CAMPAIGN` (kept out of the global `CAMPAIGNS` array — see LOG.md session 8); `missions.ts` must stay (golden test) |
| Main / wiring | `src/main.ts` | title → campaign (Swarajya-only pool) → [Bhet scene when `sc.bhet` is set] → battle → next chapter, fully wired (session 8; was a placeholder) |
| Tests | `tests/` | golden, rules, morale, search, duel, net, standing, rewards, seleucid, duelBalance, `swarajya.test.ts`, `gad.test.ts`, `scenarios.test.ts`, `bhet.test.ts`, `ganim.test.ts`, `khind.test.ts`, `survive-attrition.test.ts`, `balance.harness.test.ts` (BALANCE=1); `tests/e2e/swarajyaPlaytest.cjs` for the mandatory real playtest |
| Deploy | `.github/workflows/deploy.yml` | test + build + publish to `gh-pages` on every push to main; live at https://medh-eng.github.io/Swarajya/ (was 7 commits stale — pushed and confirmed live, session 8) |
| Art prompts | `art/PROMPTS-BATCH1.md` through `BATCH7.md` | **Batch 7 (chapter 8 Umberkhind) written 28 Nov, waiting for Pon.** Batches 1–5 fully painted (Siddi Hilal done 27 Nov). **Batch 6 (chapter 7 Chakan) painted, including the optional Mansabdar Sawar.** Batch 4 (chapter 6, Pavan Khind): fully painted and registered session 10 (`as_siddi_jauhar`, `as_siddi_masud`, `sw_shiva_kashid`, `as_angrezi_gola`, `ghod_khind`; `sw_bajiprabhu` earlier). 38 card paintings registered total |
| Art (painted) | `art/source/cards/`, `art/source/battlefields/` | Batch 1 complete: 20 of 20 cards, 3 of 3 battlefields (`torna`, `pratapgad`, `maval` — Pon painted `maval` 25 Nov 2026, same session) |
| Sound | — | none yet (icons and favicon drawn in code) |

## Engine baseline and how the ruleset works
YUDDH `medh-eng/Yuddh` commit `6f1c852ee493ef03d104efd5535c1ed81bc737ae` (file `ENGINE_BASELINE`).
- `Ruleset = 'classic' | 'yuddh' | 'swarajya'`. Every YUDDH rule is gated with `isYuddhRules(st.rules)`
  (true for 'yuddh' and 'swarajya'); a Swarajya-only rule must use `isSwarajyaRules(st.rules)`.
  Never write `st.rules === 'yuddh'` again (it would switch the rule off for Swarajya).
- `tests/swarajya.test.ts` proves a 'swarajya' game plays exactly like the same 'yuddh' game. When a
  Swarajya mechanic lands, keep that test for games that do not use the mechanic.
- Useful facts: objectives `survive`, `deadline` and (since session 8) `capture` exist (`Objective` in
  `types.ts`, checked in `rules.ts` at turn start, plus `capture` the instant it's achieved via
  `checkCapture`); the Yudhbhumi size comes from `frontCap(st)` (`ruleset.ts`): `frontSize` in a Swarajya
  Khind chapter, otherwise 4 — never compare against a bare 4 again; Dhuan (hidden until it strikes) is the basis for Ratra.
- Without art, `hasArt()` is false for every card, so cards draw their placeholder frame. Battle
  backgrounds (`loadBattlefield`) still expect files in `public/assets/battlefields/`; Phase 1 needs a
  fallback or Pon's first painting before a battle scene can open.
- **Gad (session 8, DESIGN 3.1):** `type: 'gad'` in `types.ts`, `isGadCard()` in `rules.ts`/exported
  from `src/engine`. A Gad lives only ever in `support` (the Rajya line); `canMove`/`canAttack` refuse
  it by type, not by `canAct` (which `startTurn` also always keeps `false` for it). It is never routed
  and never exposed to a deploy trap. Capture (beaten to 0 hp) is `captureGad()`, called from the combat
  path in `applyActionCore` and from `damageUnit` (which now takes an optional `attacker` — every order
  that can hit a unit threads it through, so a future "deal N damage to an enemy Gad" card captures
  correctly too). `GadEffect` (`CardDef.gad`) holds the standing benefit; `kosha1`/`drawEvery2` fire in
  `startTurn`, `rakshaHp` at unit creation (`makeUnit`) and on capture (added/removed from the relevant
  side's Raksha units); `durgWard`/`shipsAtk` are typed but not yet wired (no Phase 1 chapter needs them).
- **Bhet (session 8, DESIGN 3.5):** `src/engine/bhet.ts`, pure. `chooseBhetStance(rng, odds)` is the AI
  value (weighted pick, default-even odds in `RULES.bhet.aiOdds`); `resolveBhet(player, enemy)` is the
  full 3×3 Trust/Guard/Strike payoff table — symmetric by design (DESIGN 3.5: "a game about the fear of
  treachery that both men had"), never asserting which side actually struck first. The wound/reinforce
  effect is generic, not Bhet-only: `Preset.playerWoundFrac`/`enemyWoundFrac` (`types.ts`), applied by
  `newGame()`'s `woundSide()` helper, which damages a side's preset front unit or, if it has none, that
  side's own Durg/HQ. `Scenario.bhet` (`src/campaign/scenario.ts`) carries a chapter's intro text and
  optional AI-odds override; `src/game/scenes/bhet.ts` is shown before battle whenever it's set, called
  from `main.ts`'s `enterBattle`. No glossary icon — explained by the scene's own text, same as `capture`.
- **Ganim (Phase 2 step 1, DESIGN 3.3):** `canFallback()` + a `fallback` Action (`rules.ts`/`types.ts`) —
  after a unit with the new `'ganim'` keyword attacks, its owner may move it from the Yudhbhumi back to
  the Rajya line at no Kosha cost, if there's room; Swarajya rules only. `front.owner` resets to `null`
  if that empties the front, same as `destroyUnit` does. AI value at both levels: the search AI's
  `legalActions` (`search.ts`) just offers it as another action for the beam search to judge; the
  heuristic AI's `ganimFallback()` (`ai.ts`, called after every combat phase) folds a Ganim unit back
  automatically unless it's the lone defender facing a massed enemy (2+ units in the enemy's support),
  in which case it holds the ground instead. Glossary entry + a drawn `ganim` icon (unlike Bhet/`capture`,
  this is a card keyword). Cards: `sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar` — none in a
  vertical-slice deck yet, so no visible gameplay change until a Phase 2 chapter uses them.
- **Khind (Phase 2 step 2, session 11, DESIGN 3.2):** `Scenario` → `newGame({ frontSize })`, stored on
  `GameState` only under Swarajya rules. `frontCap`/`isKhind` gate `canMove` ("The pass is full"), ferry
  room, preset fronts, the AI's two advance limits and `search.ts`'s front value (weighted 4/frontCap).
- **Siege (session 13, Phase 2 step 3):** `durgWardOf` (each `durgWard` Gad its owner holds takes 1 off every
  attack on that owner's Durg; it flips with the fort on capture); `gadWardOf` (non-Gad cards with `gadWard` on
  the Rajya line take that much off each blow on their owner's Gads, in `damageUnit` and `strikeDamage`);
  `static` (`canMove` refuses); `vsGad` adds damage against a Gad and lets the attacker bombard a Gad from the
  Rajya line, ignoring the Raksha guard (`canAttack`); order `target: 'enemyGad'` (`canPlay`, `playableCards`,
  `legalActions`). AI: `attackScore` uses `strikeDamage` against Gads; `gadPlayScore` values durgWard Gads.
  All Swarajya-only; `tests/siege.test.ts`.
- **Clock objectives:** `startTurn` returns before the survive/deadline/capture clock if attrition already
  ended the game that turn (Swarajya/YUDDH only; classic keeps its order for the golden traces).
- **Marathi (Phase 1 step 8, session 8):** `src/i18n.ts` is a from-scratch `pick(en, mr)` overlay system
  (no DOM i18n library applies to a Pixi-rendered game) — `Scenario`/`Campaign` carry an optional `mr`
  field and `localizeScenario`/`localizeCampaign` apply it once at the top of `main.ts`, so `battle.ts`
  and `bhet.ts` never need to know a language exists; they just read `sc.title` etc. as always. Scope is
  deliberately narrow: only the vertical slice's own authored text (title, chapter briefing/objective/
  labels, Bhet scene) — not YUDDH's generic battle chrome, which PLAN.md puts in a separate, later,
  Pon-reviewed "Full Marathi pass" (Q-05). `enemyName` is excluded from the overlay on purpose: `battle.ts`
  splices it into two untranslated English sentences, so translating the noun alone would look broken.
  Every Marathi string carries an inline "unreviewed" comment. Font gap: `FONT_TITLE`/`FONT_STORY`/
  `FONT_BODY` have no Devanagari glyphs, so `theme.ts`'s `hasDevanagari`/`fontFor` pick `FONT_DEVA`
  instead wherever a string might be Marathi (applied in `button.ts`, `swarajyaTitle.ts`, `campaign.ts`,
  `bhet.ts`, `battle.ts`'s briefing/pause screens, `historyPanel.ts`).

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
| D-23 | **Easy foe option.** The briefing's Foe button cycles Easy / Standard / Veteran (`src/campaign/difficulty.ts`). The balance band (45–70%) stays an AI-vs-AI measure at Standard; Easy exists because a beginner wins far less than the harness says. | 27 Nov 2026 |
| D-24 | **Pratapgad fix:** a new Ganim deck plus Wagh Nakh (`powerVsLegendary`) and Gopinath Pant, rather than delaying Afzal or weakening his buff. Netaji Palkar and Moropant Pingle not added there (single-source). | 27 Nov 2026 |
| D-25 | **Chakan as a defence:** you hold the fort for 10 turns as Firangoji; winning means holding the turns, and the History note and epilogue say the fort fell. The Mughal deck gets siege guns and the Surang mine; Rajput officers are shown but not named on cards (their names are single-source, VERIFY). | 28 Nov 2026 |
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
1. Pon: play Chakan (Campaign map, after Pavan Khind; Foe: Easy if needed). Paint art batch 7 (Umberkhind).
2. Claude: chapter 8 Umberkhind (the onEnemyAdvance yantra, the Rai Bagan Bhet, four cards), after reading
   Takakhav ch. XVII.
3. Claude: Ratra and `raid` for ch09 Lal Mahal; the VERIFY research pass (Purandar 1648; CONTESTED #27-#29).
