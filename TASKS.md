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
1. [~] **Data (partly done, 24 Nov 2026 session 6; the 4 Gads ported 25 Nov 2026 session 8).** Done: empires, `swarajya` card list, 11 cards that need no further mechanic (`sw_hetkari`, `sw_bargir`, `sw_jijau_counsel`, `sw_torna_hoard`, `as_afzal_khan`, `as_hasham`, `as_gaja`, `sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held`). Left in `data/cards.draft.json` until their mechanic exists: Ganim cards (`sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar`), `sw_herkari` (revealHand), `sw_dadoji` (cost cut), `sw_wagh_nakh` (vsLegendary), `sw_gopinath` (Bhet), `as_topkhana` (static), and the Phase 2+ Gads (`sw_gad_chakan`, `sw_gad_sindhudurg`, `sw_gad_khanderi`, `as_gad_panhala` — their `durgWard`/`shipsAtk` benefits are recorded in `GadEffect` but not yet applied by the engine). Each moves to `src/data/cards.json` in the step that adds its mechanic.
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
6. [ ] **Bhet scene** (Trust / Guard / Strike) + AI stance table in `rules.json` ("bhet").
7. [x] **Art batch 1 prompt sheet** `art/PROMPTS-BATCH1.md` (24 Nov 2026; 20 cards + 2 battlefields).
8. [ ] Campaign map v1 (forts light after a win). Marathi strings for the slice.
9. [ ] Remove the YUDDH scaffolding that Swarajya no longer needs (D-17): YUDDH chapters in
       `src/campaign/`, YUDDH cards and duel factions. **Keep** `missions.ts` and the classic 50 cards
       (golden test). Update `tests/swarajya.test.ts` (it uses YUDDH's duel factions today).
10. [ ] Balance: Torna and Pratapgad in band (45–70%); playtests desktop and phone; Gate 1 with Pon.
