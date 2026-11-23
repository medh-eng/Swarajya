# YUDDH: Swarajya — plan

*The road from an empty repo to Google Play. Phases end at a **Gate**: Pon plays it and says go or
fix. Progress against this plan is ticked in `PROGRESS.md`; the next concrete steps are in `TASKS.md`.*

## Roles

- **Pon** (owner, Commander): decides; paints art, records or generates music from prompt sheets;
  playtests at each Gate; uploads art to `art/source/`.
- **Claude** (builder and historian): code, data, balance, writing, research, prompt sheets; keeps
  `STATE.md`, `PROGRESS.md`, `LOG.md`, `TASKS.md`, `DESIGN.md` current at the end of every session.

## Where the code lives (recommendation)

A **new public GitHub repository**, `medh-eng/Swarajya` (created 23 Nov 2026), separate
from YUDDH:
- Same free hosting as YUDDH (GitHub Pages via `deploy.yml`), same Android workflow.
- Not a git fork: YUDDH's repo carries about 2 GB of paintings this game does not need. We copy
  the engine, renderer, scripts, tests and configs at YUDDH commit `6f1c852` and record that in
  `STATE.md`. Engine fixes later can be ported by hand in either direction (log them in LOG.md).
- This planning package becomes the first commit.

Pon creates the empty repo on GitHub (Settings: public; no README, so the first push is clean).
Claude then attaches it to a session and pushes.

## Phase 0 · Foundation (1–2 sessions)

Goal: the YUDDH engine running under a new name, with the history guard in place.
1. Create the repo; commit this planning package.
2. Copy from YUDDH @ 6f1c852: `src/engine`, `src/game`, `src/meta`, `src/data/index.ts`, `scripts/`,
   `tests/` infrastructure (rules, golden, e2e), configs (`package.json`, `vite.config.ts`,
   `tsconfig.json`, `capacitor.config.ts` with a new app id), `.github/workflows`.
   Leave out YUDDH's art, campaigns, decks and cards (keep the classic 50 only for the golden test).
3. Add ruleset `'swarajya'` (extends `'yuddh'`); add empire `swarajya` to `cards.json`.
4. Wire `scripts/check-refs.mjs` into `npm test` (fails on any missing chronology ref).
5. Title screen placeholder, deploy to Pages, check it loads on a phone.
6. Research: fill the VERIFY gaps that block Act I (SOURCES.md "Still to obtain").
**Done when:** `npm test` (incl. golden and check-refs), `npm run build` pass; the page is live.

## Phase 1 · Vertical slice: "The Rebel" (3–4 sessions) → **Gate 1**

Goal: three chapters at YUDDH quality that show what makes this game different.
1. Gad card type + capture (engine, AI value, glossary, tests).
2. Chapter 0 tutorial (coached), Chapter 1 **Torna** (`capture`), Chapter 4 **Pratapgad** (Bhet + battle).
3. Bhet scene (UI), AI stance table, tests.
4. Swarajya faction: ~16 cards; Adilshahi: ~10 cards (from `data/cards.draft.json`, balanced).
5. Art batch 1 prompt sheet (Pon paints): Shivaji Raje, Jijau, Mavla, Bargir, Barkandaz, Torna,
   Rajgad, Pratapgad, Afzal Khan, Adilshahi elephant/hasham/topkhana, two battlefields, card frames.
6. History notes for the three chapters; the shahir's lines; Marathi strings for the slice.
7. Campaign map v1 with forts lighting up.
**Gate 1:** Pon plays tutorial → Torna → Pratapgad on phone and desktop; approves the look, the
Gad mechanic and the Bhet.

## Phase 2 · Act I and II (5–7 sessions) → **Gate 2**

Mechanics: **Khind** (`frontSize`), **Ganim**, **Ratra**, objectives `raid`, enemy Gads on the board.
Chapters: 3 Jaoli, 5 Kolhapur, 6 Pavan Khind, 7 Chakan, 8 Umberkhind, 9 Lal Mahal, 10 Surat,
11 Purandar (with the treaty scene: 23 forts go dark).
Mughal faction cards. AI (heuristic + search) understands Ganim, Khind, Gads, night.
Art batches 2–4. Balance every chapter in its band.
**Gate 2:** Pon plays Act II; the Veteran foe is strong enough; the treaty scene lands.

## Phase 3 · Acts III and IV (4–6 sessions) → **Gate 3**

12 Agra (escape puzzle mode, scripted guards, a solution test), 13 Kondhana, 14 Surat and Vani,
15 Salher (reinforcements arriving from two sides: a scripted mid-battle event), 16 Panhala by
night (bonus), 17 Umrani and Nesari, 18 Rajyabhishek interlude (Chhatrapati, Ashta Pradhan).
Map: forts relit through 1670.
**Gate 3:** Pon plays through the coronation.

## Phase 4 · Act V, Duel, challenges (3–5 sessions) → **Gate 4**

19 Dakshin Digvijaya (Golconda allies), 20 Khanderi (naval), 21 Raigad epilogue.
Duel factions balanced (`duel.json`), two-phone play tested. Gadkot challenges (3–5 puzzles).
Rank & renown reused from YUDDH (cosmetic), regalia prompts.

## Phase 5 · Polish and release (2–4 sessions)

Full Marathi pass (reviewed by a Marathi reader Pon trusts), Hindi; accessibility (text size,
colour-blind check); sound pass; performance on low-end phones; privacy note; Play Store listing;
signed AAB from the Android workflow; release.

## Rhythm of a session (every session, no exceptions)

**Start:** read `STATE.md` → `TASKS.md` → the last 3 entries of `LOG.md` → the files you will touch.
**Before writing any history:** find the fact in `history/CHRONOLOGY.md`; if it is not there,
research and add it first (with sources), never write from memory.
**End:** run tests; update `STATE.md` (snapshot), `PROGRESS.md` (ticks), `TASKS.md` (next),
`DESIGN.md` (if rules or decisions changed), append to `LOG.md`; commit.

## Risks and how we handle them

| Risk | Handling |
|---|---|
| Historical error or a disputed claim stated as fact | Chronology-first workflow; refs checker; CONTESTED.md; History notes name sources |
| Political or community sensitivity | Design rules D-05, D-07 (STATE.md); dignity for all historical figures; no slurs; no communal framing in text |
| Engine drift from YUDDH | Pin the baseline commit; log every port in LOG.md |
| Art volume (YUDDH needed ~19 batches) | Phase 1 needs only ~20 paintings; reuse YUDDH's neutral classics (Padati, Dhanurdhar) where fitting |
| New mechanics confuse the AI | Each mechanic ships with its AI value and a test where the AI uses it |
| Marathi quality | Pon (or a trusted reader) reviews every Marathi string before release |
