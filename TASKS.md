# TASKS

*What is next, in order. Updated at the end of every session. Done items move to PROGRESS.md.*

## For Pon (now)
- [ ] **Decide the name** (STATE Q-01). Recommendation: "YUDDH: Swarajya".
- [x] **Create the empty GitHub repo**: `medh-eng/Swarajya` (23 Nov 2026).
      Claude will then attach it, commit this package and start Phase 0.
- [ ] Read `history/CONTESTED.md` and `docs/DESIGN.md` §5 (chapter list) and §3 (new mechanics).
      Change anything that does not feel right; especially D-07 (what is not playable).
- [ ] Find a Marathi reader to review strings before Gate 1 (Q-05).
- [x] Re-send the Gemini report (received as .md, reviewed).
- [ ] Approve or drop the proposed chapter `ch20b_sangamner` (Shivaji's last battle, 1679).
- [ ] Decide Q-07 (Dadoji Kondadeo) and tell Claude which edition of *Raja Shivachhatrapati* you have (Q-08).
- [ ] For each chapter we build, send photos of the matching pages of *Raja Shivachhatrapati*
      (first batch, for the vertical slice: Torna, the Afzal Khan episode and Pratapgad).

## For Claude: Phase 0 (next; the repo exists)
1. Commit this planning package as the first commit.
2. Copy from YUDDH @ 6f1c852: `src/engine`, `src/game`, `src/meta`, `src/data/index.ts`, `scripts/convert-assets.mjs`,
   `tests/` (rules, golden, e2e harness), `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`,
   `capacitor.config.ts` (new app id, e.g. `com.medheng.swarajya`, permanent once on Play), `.github/workflows/*`.
   Keep only the classic 50 cards (golden test) in `cards.json`; no YUDDH campaigns or art.
3. Add `'swarajya'` to `Ruleset`; it behaves as `'yuddh'` until mechanics land. Add empire `swarajya`.
4. `npm test` runs `node scripts/check-refs.mjs` as well as Vitest.
5. Placeholder title screen ("SWARAJYA — coming soon") with one painted background when Pon has one; deploy to Pages.
6. Write `CLAUDE.md`'s "Map" section for the real file layout once code exists.

## For Claude: research (before the chapters that need it)
- [ ] Run `history/PURANDARE-CHECK.md` chapter by chapter as Pon's page photos arrive; add S-PURANDARE
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

## Phase 1 (after Phase 0)
- [ ] Gad card type + capture (engine, AI value, glossary, tests).
- [ ] `capture` objective.
- [ ] Bhet scene + AI stance table (`rules.json` "bhet").
- [ ] Chapter 0, 1, 4 scenarios; decks; History notes (from CHRONOLOGY only).
- [ ] Art batch 1 prompt sheet `art/PROMPTS-BATCH1.md` (about 20 paintings: see PLAN Phase 1 item 5).
- [ ] Campaign map v1 (forts lit after a win).
- [ ] Marathi strings for the slice.
- [ ] Balance: Torna and Pratapgad in band (45–70%); playtests desktop and phone.
- [ ] Gate 1 with Pon.
