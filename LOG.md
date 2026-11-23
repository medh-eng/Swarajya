# LOG

*Append-only. Newest at the bottom. One entry per session: date, who, what was done, what was
decided and why, what changed in which files, anything ported to or from YUDDH. Never edit an old
entry; correct it in a new one.*

---

## 23 Nov 2026 · Session 1 · Claude (with Pon)

**Asked:** study the YUDDH repo; make a card game of Shivaji Maharaj's life and battles in the same
style and engine; research his life in chronological order; be creative; create plan, log, state
and progress files so later sessions stay consistent and do not invent history.

**Done**
- Read YUDDH at commit `6f1c852` (README, CLAUDE.md, DESIGN.md, TASKS.md, `src/engine/types.ts`,
  `rules.ts` objective and front-size code, a scenario file (`tarain2.ts`), `cards.json`, `history.json`).
  Conventions carried over: data in JSON, History notes with HISTORY / TRADITION / INVENTED, end-of-session
  updates of DESIGN and TASKS, golden test, e2e playtests.
- Researched the life (about 30 web searches; references listed in `history/SOURCES.md` as W-*).
  Built `history/CHRONOLOGY.md` (53 entries, birth 1630 to death 1680, plus army, officers,
  intelligence, Ashta Pradhan, sources).
- Wrote `history/CONTESTED.md` (19 disputed points and the game's handling), `history/PEOPLE.md`.
- Designed the game (`docs/DESIGN.md`): new mechanics Gad (forts that change hands), Khind (narrow
  front), Ganim (strike and fade), Ratra (night), Bhet (parley minigame), new objectives (capture,
  raid, escape), the Swarajya map with the Purandar treaty dimming 23 forts, the shahir narrator,
  two-voice History panel, Ashta Pradhan set.
- `docs/PLAN.md`: Phases 0–5 with Gates; recommendation of a new public GitHub repo.
- `data/chapters.json` (22 chapters in 5 acts, each with chronology refs), `data/cards.draft.json` (77 draft cards).
- `scripts/check-refs.mjs`: verifies every ref; tested that it fails on a fake ref and a missing card.

**Decided** (see STATE.md): D-01 to D-11.

**Notes for next time**
- The Fateh Khan / Purandar 1648 fight is only in a popular retelling so far: chapter 2 is blocked.
- Two "Bahlol Khan"s (Bijapur 1673–74; Mughal officer at Salher 1672): kept separate until a source joins them.
- Agra escape date: 17 Aug 1666 (one article says 22 July). Death: 3 Apr 1680 (one says 5 Apr).
- Ashta Pradhan titles must be checked against a source before printing card names.

## 23 Nov 2026 · Session 2 · Claude (with Pon)

**Asked:** make Babasaheb Purandare's *Raja Shivachhatrapati* the standard reference.

**Done**
- D-12 recorded in STATE.md. "Reference order" added to CLAUDE.md: Purandare first, then the period
  sources and Mehendale/Sarkar to confirm dates; disagreements go to CONTESTED.md for Pon.
- SOURCES.md: S-PURANDARE with editions (Marathi 2 vols, 19th ed. 2014; English 2 vols, 2014/2021).
- New `history/PURANDARE-CHECK.md`: all 53 chronology entries, status "not yet checked".
- CONTESTED #6 (Dadoji Kondadeo) now pending Pon's decision Q-07: the book gives Dadoji a mentor's
  role, which historians dispute and which was the centre of the 2015 award controversy.

**Notes for next time**
- Claude cannot read the book online; checks need Pon's page photos (Q-08).
- No game text may copy the book's wording; facts and sequence only.

## 23 Nov 2026 · Session 3 · Claude (with Pon)

**Asked:** go through the research reports Pon got from Gemini and ChatGPT.

**Done**
- Gemini: the file is an HTML page cut off at about 100 KB inside its first embedded image; only the
  title survives. Asked Pon to re-send.
- ChatGPT: every new claim checked against Sarkar (Wikisource), Takakhav, Wikipedia, UNESCO and others.
  Result in `history/AI-REPORTS-REVIEW.md`. The report is a lead, never a source (W-AI-CHATGPT).
- CHRONOLOGY: 10 new entries (C-1645-RAIRESHWAR, C-1647-RAJGAD, C-1660-RAJAPUR, C-1666-PANHALA-FAIL,
  C-1672-JAWHAR, C-1676-PONDA, C-1678-RETURN, C-1679-JALNA, C-X-JANJIRA, C-X-UNESCO), now 63.
  C-1677-VELLORE upgraded (fell Aug 1678). Vani date and Sinhagad naming notes refined.
- CONTESTED: #7 corrected to Raireshwar (Pagadi on the letter); new #20 (Agra baskets), #21 (Rajgad
  dates), #22 (Rajapur date), #23 (Sangamner result).
- SOURCES: 20 new W- ids. PEOPLE: Sidhoji Nimbalkar, Ranmast Khan, Abdullah Khan; Revington updated.
- chapters.json: proposed `ch20b_sangamner` (status `proposed`). check-refs OK (one known warning).

**Notes for next time**
- Neither AI report checked Purandare's pages; the ChatGPT report says so itself.
- ChatGPT dates that were off: Rajapur (it says Mar 1661; records say Dec 1660), Ponda (fell Apr 1676),
  return from the south (it says Apr 1678; Sarkar says Mar).

## 23 Nov 2026 · Session 4 · Claude (with Pon)

**Asked:** review the Gemini report (re-sent as Markdown); use the new repo `medh-eng/Swarajya` for all
further work.

**Done**
- Gemini report reviewed (`history/AI-REPORTS-REVIEW.md`). It says it follows Purandare's book but cites
  only web pages; nothing in it comes from the book's pages. No new events; three useful corrections:
  - Jijabai died at **Pachad**, below Raigad (C-1674-JIJABAI fixed).
  - Shaista Khan went to **Bengal** as subahdar from March 1664 (C-1663-LALMAHAL; now sourced).
  - A second date for Javli, 15 Jan 1656 (CONTESTED #24).
- Not used: troop and plunder numbers (D-04); "Gingee July 1677" (Sabhasad: May); "Sangamner while defending
  the northern frontier" (it was on the way back from Jalna).
- D-13: the planning package now lives in `medh-eng/Swarajya` (first commit). The zip is retired.

## 24 Nov 2026 · Session 5 · Claude (with Pon)

**Asked:** name is "YUDDH: Swarajya"; show Dadoji Kondadeo as teacher; Pon has the English edition (latest);
keep Sangamner; set up the engine (Phase 0); finish everything in this chat (next session runs on Sonnet).

**Done**
- Decisions D-14 (title), D-15 (Dadoji as teacher, dispute noted), D-16 (Sangamner; English edition),
  D-17 (YUDDH content kept as scaffolding). CONTESTED #6, C-1640-PUNE, PEOPLE, SOURCES, CLAUDE.md, DESIGN
  updated; draft card `sw_dadoji` (basis CONTESTED; check-refs now accepts CONTESTED cards with refs).
- Phase 0: copied YUDDH @ 6f1c852 (`src/`, `tests/`, `legacy/`, `scripts/convert-assets.mjs`, configs,
  `deploy.yml`); no art, no `android/`, no `public/assets`. `card-art.json` emptied.
- Ruleset `'swarajya'`: new `src/engine/ruleset.ts` (`isYuddhRules`, `isSwarajyaRules`); every
  `rules === 'yuddh'` check in engine, AI, search, glossary and battle now uses `isYuddhRules`.
- Tests: removed the 19 YUDDH chapter/duel-roster tests (they assert YUDDH art is present). Added
  `tests/swarajya.test.ts` (ruleset flags; 'swarajya' games replay identically to 'yuddh'; check-refs).
  `npm test` = check-refs + Vitest: 11 files, 84 tests, golden 154 games pass. tsc and build pass.
- Placeholder title `src/game/scenes/swarajyaTitle.ts` (dawn over the Sahyadri, a fort, title, "Coming
  soon"), drawn in code; new `src/main.ts`; favicon and app icons drawn in SVG and rendered with sharp;
  `index.html`, manifest, `capacitor.config.ts` (`com.medheng.swarajya`), `package.json` renamed.
- Playtest: built page opened in headless Chrome at 1600×900 and 844×390 (phone): renders, no console errors.

**Notes for next time**
- Pon must switch on Pages (gh-pages branch) once; the workflow publishes on every push.
- A battle cannot open yet: battlefields have no art and no fallback (TASKS Phase 1 step 4).
- The android build (YUDDH's `android/` folder and `android.yml`) was not copied; add with `npx cap add android` at Phase 5.
