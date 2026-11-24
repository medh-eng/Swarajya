# TASKS

*What is next, in order. Updated at the end of every session. Done items move to PROGRESS.md.*

## For Pon (now)
- [ ] **Switch on GitHub Pages** for `medh-eng/Swarajya`: Settings → Pages → Source "Deploy from a branch" →
      branch `gh-pages`, folder `/ (root)` → Save. (The branch appears after the first "Test and publish" run
      in the Actions tab finishes.) Then open https://medh-eng.github.io/Swarajya/ on your phone, sideways.
- [ ] Send photos of the pages of *Raja Shivachhatrapati* (English, latest) for the vertical slice:
      Dadoji and the Pune years, Torna, the Afzal Khan episode and Pratapgad. Note volume and chapter.
- [ ] Read `history/CONTESTED.md` and `docs/DESIGN.md` §5 (chapter list) and §3 (new mechanics).
- [ ] Find a Marathi reader to review strings before Gate 1 (Q-05).
- [ ] Paint from `art/PROMPTS-BATCH1.md` (written 24 Nov 2026): 20 cards + 2 battlefields; Shivaji Raje first, then save PNGs in `art/source/cards/` and `art/source/battlefields/`, then `npm run assets`.
- [ ] Decide Q-07 (Torna garrison, CONTESTED #25) and Q-08 (Rajgad naming, #21).
- [ ] Send the next Purandare pages (list in `history/PURANDARE-CHECK.md`): Pratapgad pp. 235-287 first, then pp. 171-200.
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
1. [~] **Data (partly done, 24 Nov 2026 session 6).** Done: empires, `swarajya` card list, 7 cards that need no new mechanic (`sw_hetkari`, `sw_bargir`, `sw_jijau_counsel`, `sw_torna_hoard`, `as_afzal_khan`, `as_hasham`, `as_gaja`). Left in `data/cards.draft.json` until their mechanic exists: Ganim cards (`sw_shivaji`, `sw_mavla`, `sw_havaldar`, `sw_shiledar`), `sw_herkari` (revealHand), `sw_dadoji` (cost cut), `sw_wagh_nakh` (vsLegendary), the 4 Gads, `sw_gopinath` (Bhet), `as_topkhana` (static). Each moves to `src/data/cards.json` in the step that adds its mechanic. Original text: Add empires `swarajya` and `adilshahi` to `src/data/cards.json` (`empires`, `empireOrder`,
       `EMPIRE_STYLE` in `src/game/theme.ts`) and a new card list `swarajya` (loaded by `src/data/index.ts`
       and `src/engine/cards.ts` like `yuddh`). Port the `phase: 1` cards from `data/cards.draft.json`
       (drop the `_engine`/`_history` notes; keep `refs`). Cards whose effect needs a new mechanic wait for it.
2. [ ] **Gad card type + capture** (DESIGN §3.1): `type: 'gad'` in `types.ts`; played to the Rajya line;
       destroyed by an enemy unit on the Yudhbhumi → flips to that side; immune to "destroy" orders.
       AI value in `ai.ts`/`search.ts`. Tests in `tests/gad.test.ts`. Glossary entry.
3. [ ] **`capture` objective** (`Objective` in `types.ts`, checked where `survive`/`deadline` are).
4. [ ] **Battle without art:** a fallback for `loadBattlefield` (plain painted gradient like the title)
       so a battle opens before Pon's paintings arrive.
5. [ ] **Scenarios** in `src/campaign/` for chapters `ch00_maval` (coached tutorial), `ch01_torna`
       (`capture`), `ch04_pratapgad` (Bhet + battle), each with `rules: 'swarajya'`, decks in
       `src/data/decks.json`, History notes in `src/data/history.json` written **only** from
       CHRONOLOGY entries (and S-PURANDARE pages when Pon sends them). Wire the title → campaign → battle
       flow in `src/main.ts` (copy the pattern of YUDDH's main.ts).
6. [ ] **Bhet scene** (Trust / Guard / Strike) + AI stance table in `rules.json` ("bhet").
7. [x] **Art batch 1 prompt sheet** `art/PROMPTS-BATCH1.md` (24 Nov 2026; 20 cards + 2 battlefields).
8. [ ] Campaign map v1 (forts light after a win). Marathi strings for the slice.
9. [ ] Remove the YUDDH scaffolding that Swarajya no longer needs (D-17): YUDDH chapters in
       `src/campaign/`, YUDDH cards and duel factions. **Keep** `missions.ts` and the classic 50 cards
       (golden test). Update `tests/swarajya.test.ts` (it uses YUDDH's duel factions today).
10. [ ] Balance: Torna and Pratapgad in band (45–70%); playtests desktop and phone; Gate 1 with Pon.
