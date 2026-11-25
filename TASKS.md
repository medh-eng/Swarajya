# TASKS

*What is next, in order. Updated at the end of every session. Done items move to PROGRESS.md.*

## For Pon (now)
- [x] GitHub Pages switched on (Pon, 24 Nov 2026): open https://medh-eng.github.io/Swarajya/ on your phone, sideways, to look.
- [x] Purandare pages for the vertical slice (Torna to the Pratapgad meeting) sent and recorded. **No more pages needed** (D-22).
- [ ] Read `history/CONTESTED.md` and `docs/DESIGN.md` §5 (chapter list) and §3 (new mechanics).
- [ ] Find a Marathi reader to review strings before Gate 1 (Q-05).
- [ ] Paint the rest of `art/PROMPTS-BATCH1.md` (10 of 20 cards done). PNGs go in `art/source/cards/` (5:7), `art/source/forts/` (square) and `art/source/battlefields/` (16:9); then `npm run assets`. Redo sw_dadoji, sw_gopinath, sw_jijau_counsel at 1080 px wide or more if possible.
- [x] Torna and Rajgad as per the book (D-19, D-20), 24 Nov 2026.
- [ ] Claude: online research pass on the VERIFY items and unchecked chronology rows (D-22); ask Pon for specific book pages only for CONTESTED #27-#29 if online sources cannot settle them.
- [x] Rewrite `ch01_torna` objective as a take-hold-fortify race now that the Gad mechanic and `capture` objective exist (25 Nov 2026, Phase 1 step 5).
- [x] Name: YUDDH: Swarajya (D-14). Dadoji as teacher (D-15). English edition; Sangamner kept (D-16).
- [x] Repo `medh-eng/Swarajya` created; Gemini report re-sent and reviewed.

## For Claude: Phase 2 · Act I and II (next; the vertical slice is not yet Gate-1-approved — see Phase 1
## step 10 below, which still needs Pon's own playtest. Phase 2 content work can proceed alongside it.)
Read `docs/PLAN.md`'s Phase 2 section, `docs/DESIGN.md` §3 (new mechanics: Khind, Ganim, Ratra) and §5
(chapters 3, 5-11) first. Same rule as Phase 1: every mechanic ships with engine code behind
`isSwarajyaRules`, an AI value, a rules test, a glossary entry; then `npm test`, `npx tsc --noEmit`,
`npm run build`, a real playtest, and the end-of-session documentation cycle, before the next mechanic.
1. [x] **Ganim** (DESIGN 3.3, "strike and fade") — first increment (25 Nov 2026, session 8).
       `src/engine/rules.ts`'s `canFallback()` + a new `fallback` Action: after a Ganim unit attacks, its
       owner may move it from the Yudhbhumi back to the Rajya line at no Kosha cost (Swarajya rules only;
       front resets to unheld if that was the last unit there). AI value: `search.ts`'s `legalActions`
       offers `fallback` to the beam search like any other action (no new scoring needed — the search
       already judges the position it reaches); the heuristic AI (`ai.ts`'s new `ganimFallback()`, called
       at the end of `aiCombatPhase`/`hardCombatPhase`) always folds a Ganim unit back after it attacks,
       except when it is the lone defender of the Yudhbhumi and the enemy has massed a second wave (2+
       units in support) — then it holds the ground a turn longer. Glossary entry + a new `ganim` icon
       (`src/game/ui/glossary.ts`, `src/game/ui/inspect.ts`). Unlocked `sw_shivaji` (Shivaji's own
       playable card, legendary, 7-cost, buffAll on deploy), `sw_mavla`, `sw_havaldar`, `sw_shiledar` —
       ported from `data/cards.draft.json` to `src/data/cards.json`'s `swarajya` list. `tests/ganim.test.ts`
       (10 cases, incl. both AI-value branches). None of the four cards are in a vertical-slice deck yet
       (no Phase 2 chapter built), so this ships with no visible gameplay change — a build/test/playtest
       regression check only, confirming `ganimFallback()` no-ops harmlessly for every existing scenario.
2. [ ] Khind (`frontSize`) — replaces the hard-coded Yudhbhumi size of 4 in `rules.ts` for chapters fought
       in a narrow pass (Pavan Khind, ch06). Touches both `>= 4` checks noted in STATE.md's engine section.
3. [ ] Ratra (night) and the `raid` objective, then enemy Gads on the board (Chakan's `durgWard`,
       Sindhudurg/Khanderi's `shipsAtk` — typed in `GadEffect` since step 2 but unapplied).
4. [ ] Chapters 3 (Jaoli), 5 (Kolhapur), 6 (Pavan Khind), 7 (Chakan), 8 (Umberkhind), 9 (Lal Mahal), 10
       (Surat), 11 (Purandar treaty scene) — each needs its own chronology check (two independent sources
       per fact, D-22) before it ships, not just the mechanic that powers it.
5. [ ] Mughal faction cards (new empire, alongside `swarajya`/`adilshahi`).
6. [ ] Art batches 2-4 (prompt sheets after batch 1's pattern in `art/PROMPTS-BATCH1.md`).

## For Claude: Phase 0 — done (24 Nov 2026, session 5)
Engine copied at YUDDH 6f1c852; ruleset `'swarajya'`; check-refs in `npm test`; placeholder title; deploy
workflow; new app id `com.medheng.swarajya`. Deviation from PLAN: YUDDH content kept as scaffolding (D-17).
Still open from Phase 0: research item 6 (Act I VERIFY gaps) — moved to the research list below.

## For Claude: research (before the chapters that need it)
- [ ] Run `history/PURANDARE-CHECK.md` chapter by chapter as Pon's page photos arrive (first batch done: Vol. I pp. 154-169); add S-PURANDARE
      (with chapter) to each entry's Refs; send every disagreement to CONTESTED.md for Pon.
- [ ] Obtain S. N. Sen, *Siva Chhatrapati* (1920, translation of Sabhasad; public domain) and check:
      Torna, Pratapgad, Agra, the coronation.
- [ ] Mehendale (2011) for every CONTESTED date.
- [ ] C-1648-SHAHAJI: find the Fateh Khan fight in a primary source, or drop chapter 2.
- [ ] Ashta Pradhan: confirm the eight titles and their 1674 holders (W-ASHTA, W-MSB7, Sen).
- [ ] Bahlol Khan at Salher vs Bahlol Khan of Bijapur: one person or two?
- [ ] Hanmantrao More: confirm in Mehendale or drop the card.
- [x] Vellore's fall: August 1678 (Sarkar; Indian Culture portal gives 21 Aug).
- [ ] The Venkoji battle (Nov 1677?).
- [ ] Agra baskets: check Mehendale / the Rajasthani letters against the ChatGPT report's doubt (CONTESTED #20).

## Phase 1 — vertical slice "The Rebel" (next; do in this order) → Gate 1
Read `docs/DESIGN.md` §3.1 (Gad), §3 (Bhet), §5 (chapters 0, 1, 4) and `data/cards.draft.json` first.
Every step: engine code behind `isSwarajyaRules`, an AI value, a rules test, a glossary entry; then
`npm test`, `npx tsc --noEmit`, `npm run build`, commit.
1. [~] **Data (partly done, 24 Nov 2026 session 6; the 4 Gads ported 25 Nov 2026 session 8; the 4 Ganim units ported 25 Nov 2026 session 8, Phase 2 step 1).** Done: empires, `swarajya` card list, 15 cards that need no further mechanic (`sw_hetkari`, `sw_bargir`, `sw_jijau_counsel`, `sw_torna_hoard`, `as_afzal_khan`, `as_hasham`, `as_gaja`, `sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held`, `sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar`). Left in `data/cards.draft.json` until their mechanic exists: `sw_herkari` (revealHand), `sw_dadoji` (cost cut), `sw_wagh_nakh` (vsLegendary), `sw_gopinath` (Bhet — note: the Bhet *mechanic* shipped in Phase 1 step 6, but this specific card wasn't needed for `ch04_pratapgad` and hasn't been re-checked against it), `as_topkhana` (static), and the Phase 2+ Gads (`sw_gad_chakan`, `sw_gad_sindhudurg`, `sw_gad_khanderi`, `as_gad_panhala` — their `durgWard`/`shipsAtk` benefits are recorded in `GadEffect` but not yet applied by the engine). Each moves to `src/data/cards.json` in the step that adds its mechanic.
2. [x] **Gad card type + capture (25 Nov 2026, session 8).** `type: 'gad'` in `types.ts`; played to the Rajya line, takes a slot, cannot move or attack; beaten to 0 health in combat (or by a direct-damage order) it flips to the attacker's side at a third of its defence (`Math.ceil(maxHp/3)`), its standing benefit now working for them; never exposed to a deploy trap (Vighna Yantra), so it is immune to a "destroy" order by construction, not by a special case. `kosha1` and `drawEvery2` upkeep, and `rakshaHp` (applied at creation and moved on capture), are wired in `rules.ts`; `durgWard`/`shipsAtk` are recorded but not yet applied (no chapter needs them yet). AI value: `gadPlayScore` in `ai.ts` (worth playing early; a sharp jump when the scenario's `capture` objective names it), and `attackScore` now rates finishing a Gad as a capture, not a kill; `search.ts`'s `evaluate` needed no change (a captured Gad's hp already moves from one side's sum to the other's, and a finished `capture` objective ends the game, which the search already takes). Tests: `tests/gad.test.ts` (17 cases). Glossary entry in `src/game/ui/glossary.ts` + a new `gad` icon in `inspect.ts`. **Still open:** the square art window for Gad cards (the renderer still shows them through the arched window sized for 5:7 art) — left for step 5, when a Gad first appears in a real battle scene.
3. [x] **`capture` objective (25 Nov 2026, session 8, alongside step 2).** `{ type: 'capture', forts: string[], turns?: number }` in `types.ts`; `checkCapture` in `rules.ts` fires the instant every listed fort is held (called from `captureGad` and, as a backstop, every `startTurn`), and — mirroring `survive`/`deadline` — a `turns` deadline hands the defender the win if it's missed. `objectiveStatus` reports it for the UI.
4. [x] **Battle without art (25 Nov 2026, session 8).** `loadBattlefield()` falls back to a drawn,
       hue-shifted ridge-and-sky placeholder (`src/assets/manifest.ts`) when the real painting fails to
       load, so a battle opens before Pon's paintings arrive. Also closed the Gad square-art-window gap
       left open since step 2 (`artWindowPath()` in `src/game/cards/paint.ts`).
5. [x] **Scenarios (25 Nov 2026, session 8).** `ch00_maval` (coached tutorial), `ch01_torna` (`capture`,
       `as_gad_torna_held` preset on the board), `ch04_pratapgad` (battle only — Bhet deferred to step 6,
       Afzal Khan preset on the front), each `rules: 'swarajya'`; decks in `src/data/decks.json`, History
       notes in `src/data/history.json` from CHRONOLOGY only. Title → campaign → battle wired in
       `src/main.ts`; `campaignScene()` gained a `pool` parameter so the Swarajya-only flow doesn't expose
       YUDDH's scaffolding campaigns. Real playtest run (mandatory step) caught and fixed a crash:
       `heroCard`/`face` must be a card id that's actually loaded in `src/data/cards.json`, not just in
       `data/cards.draft.json` — see LOG.md for the full story. Known loose end: the tutorial's coach
       callout still shows Chanakya's portrait (YUDDH scaffolding) instead of Jijabai; cosmetic, not a
       crash; candidate for step 9's cleanup.
6. [x] **Bhet scene** (Trust / Guard / Strike) + AI stance table in `rules.json` ("bhet") (25 Nov 2026,
       session 8). `src/engine/bhet.ts`: `chooseBhetStance` (AI value, weighted over `RULES.bhet.aiOdds`,
       even by default) and `resolveBhet` (full 3×3 payoff table, extended symmetrically from DESIGN
       3.5's two examples — Strike/Strike wounds both sides equally, nothing calm resolves asymmetrically).
       Generic `playerWoundFrac`/`enemyWoundFrac` on `Preset`, applied by `newGame()`'s `woundSide()`
       helper (damages a side's preset unit, or its own Durg/HQ if it has none) — reusable by any later
       Bhet chapter. `src/game/scenes/bhet.ts` shown before battle when `Scenario.bhet` is set;
       `ch04_pratapgad` now opens on the meeting itself (the "happened offscreen" framing from step 5 is
       gone). `tests/bhet.test.ts` (11 cases). No glossary icon (not a card keyword) — explained in-scene,
       same as `capture`. Real playtest: zero console/page errors, both a Strike/Guard and a Strike/Strike
       outcome verified correct.
7. [x] **Art batch 1 prompt sheet** `art/PROMPTS-BATCH1.md` (24 Nov 2026; 20 cards + 2 battlefields).
8. [x] **Campaign map v1 + Marathi strings for the slice (25 Nov 2026, session 8).** Campaign map v1: the
       existing shared `campaignScene` (YUDDH scaffolding) already shows a "✦ WON" tag + desaturated tint
       on a completed node and a "NEXT" tag on the next one, wired to `battlesWon()`/`markBattleWon()` —
       confirmed as satisfying this step; the full painted geographic map (DESIGN 3.7) needs art that
       doesn't exist yet and is later-phase scope. Marathi: new `src/i18n.ts` (`pick()`/`getLang`/
       `toggleLang`, persisted to `localStorage`); `Scenario`/`Campaign` gained an optional `mr` overlay
       and `localizeScenario`/`localizeCampaign` (applied once in `main.ts`); title screen, the three
       vertical-slice chapters' briefing/objective/labels, and the Bhet scene are translated — generic
       YUDDH battle-screen chrome is deliberately left English, per PLAN.md's separate later "Full
       Marathi pass" gate (Q-05). `enemyName` is deliberately not translated (would break two English
       sentences it's spliced into in `battle.ts`). Added `hasDevanagari`/`fontFor` (`src/game/theme.ts`)
       and applied them everywhere newly-localizable text renders, since the Latin display fonts have no
       Devanagari glyphs. Every Marathi string is flagged `unreviewed — see src/i18n.ts` pending Q-05.
       Real playtest: title, campaign map, and tutorial briefing verified correct in Marathi (no missing
       glyphs, correct word-wrap); the Bhet scene uses the identical pattern but wasn't reached live.
9. [~] Remove the YUDDH scaffolding that Swarajya no longer needs (D-17) — **partly done, 25 Nov 2026
       session 8; scope found larger than first scoped, see below.**
       **Done:** `tests/swarajya.test.ts`'s ruleset-equivalence test no longer depends on
       `src/campaign/duel.ts`'s `FACTIONS`/`duelGame` — it now builds its own decks straight from the
       "classic" 50 cards (`src/data/cards.json`'s `_about`: "the golden test replays them; do not
       touch"), so it no longer needs updating again if the duel scaffolding below ever moves.
       **Found, not yet done — this needs its own session, not a quick follow-on:** the other three
       pieces named in this step (the 19 YUDDH chapter scenario files in `src/campaign/` — `badami.ts`
       through `vikramReturn.ts` plus `tutorial.ts`; `campaign.ts`'s `CAMPAIGNS`/`MAURYA_CAMPAIGN`/etc./
       `currentCampaign`/`empireOfBattle`; the ~2300-line `"yuddh"` card list in `src/data/cards.json`;
       and the YUDDH duel factions in `src/data/duel.json`) turn out to be load-bearing for **four other
       test files**, not just `swarajya.test.ts`:
       - `tests/seleucid.test.ts` imports `INDUS_LINE_SCENARIO` and `CAMPAIGNS`/`MAURYA_CAMPAIGN` directly.
       - `tests/search.test.ts` imports `firstThroneGame`/`indusLineGame` from `firstThrone.ts`/
         `indusLine.ts` to build its search-AI sample games.
       - `tests/standing.test.ts` imports `CAMPAIGNS`/`empireOfBattle` to test the Yash/rank system.
       - `tests/duelBalance.test.ts` exercises every faction in `duel.json` via `duel.ts`'s `FACTIONS`.
       Removing the chapter files / `CAMPAIGNS` / the `"yuddh"` card pool without first rewriting (not
       just patching) all four of those tests would silently cut real engine-test coverage (search AI,
       Seleucid card interactions, the rank system) — a bigger and more careful job than this step
       originally described. It's also in tension with `docs/DESIGN.md`'s own Duel section, which plans
       to **reuse** this exact Duel infrastructure in Phase 4 with new factions (Swarajya, Adilshahi,
       Mughal, Jaoli, Siddi) rather than delete it now and rebuild it later. **Recommendation:** do this
       properly as its own step, either right before Phase 4 swaps in the new duel factions (so the old
       ones are replaced, not just deleted) or as a dedicated cleanup session that rewrites all four test
       files deliberately, not as a Phase-1-closing afterthought. `src/game/scenes/standing.ts` and
       `src/game/scenes/gallery.ts` (unreachable from the Swarajya title, confirmed not imported from
       `main.ts` or any test) are zero-risk to delete whenever someone gets to this — just not yet done.
10. [ ] Balance: Torna and Pratapgad in band (45–70%); playtests desktop and phone; Gate 1 with Pon.
