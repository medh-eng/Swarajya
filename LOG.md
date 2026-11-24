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

## 24 Nov 2026 · Session 6 · Claude (with Pon)

**Asked:** read STATE.md and do the next work.

**Done** (Phase 1 step 1, data)
- `EmpireId` gains `swarajya` and `adilshahi` (`types.ts`, `EMPIRE_STYLE` in `theme.ts`); both empires in `cards.json`.
  `empireOrder` untouched (it feeds the duel picker and the golden test).
- New card list `swarajya` in `cards.json`, loaded as `SWARAJYA_CARDS` (`src/data/index.ts`, `src/engine/cards.ts`).
- Ported the 7 draft cards the engine can already play: Hetkari, Bargir, Jijau's Counsel, Torna's Treasure,
  Afzal Khan, Adilshahi Hasham, Adilshahi Gaja (Adilshahi cards moved from `neutral` to `adilshahi`).
  Removed them from `data/cards.draft.json` (check-refs rejects duplicate ids).
- Waiting for a mechanic, so not ported: Ganim cards (Shivaji, Mavla, Havaldar, Shiledar), Herkari, Dadoji,
  Wagh Nakh, the 4 Gads, Gopinath, Topkhana.
- Tests: 2 new in `tests/swarajya.test.ts` (cards registered under their empires; a Swarajya deck plays a
  full game vs an Adilshahi deck). `npm test` 86 pass (golden unchanged), tsc and build pass.

**Notes for next time**
- Step 2 (Gad + capture) is next; the Ganim keyword is Phase 2 in PLAN but Mavla and Shivaji need it, so decide
  whether a minimal Ganim lands in Phase 1 (the Torna deck has no Mavla until then).
- No playtest this session: no scene uses the new cards yet.

## 24 Nov 2026 · Session 6 (second half) · Claude (with Pon)

**Asked:** read the book pages Pon photographed, update the project, do the next work, and write the prompts file so cards can be made.

**Done**
- Read 16 photos: credits page (Edition 2, April 2022, trans. Dr. Hema Hirlekar, Vol. I), the full Vol. I index (page map now in
  SOURCES.md), and pp. 154-158 (Torna), 159 and 161 (Dadoji), 165-169 (Kondana, the run-up to Shahaji's arrest).
- `PURANDARE-CHECK.md`: 5 entries updated (agrees / adds / differs) + a "pages to ask Pon for" list.
- CHRONOLOGY: 3 new entries from the book (C-1646-TORNA-FORT, C-1647-KONDHANA-BAPUJI, C-1647-JAVLI, the last VERIFY);
  additions to C-1647-RAJGAD, C-1648-SHAHAJI, C-1640-PUNE. PEOPLE: 4 new names. Now 66 entries.
- CONTESTED: #25 (Torna: no garrison per Purandare), #26 (Javli 1647 vs 1656), #21 updated (Rajgad named at once). `ch01_torna` flagged.
- **`art/PROMPTS-BATCH1.md`**: 20 card prompts (12 Swarajya, 8 Adilshahi incl. Gads) + 2 battlefield prompts (`torna`, `pratapgad`),
  shared STYLE and AVOID blocks, size rules read from `paint.ts` (art window about 424 x 404, 1:1) and `convert-assets.mjs`, a checklist.
- Checks: `npm test` 86 pass, tsc, build.

**Notes for next time**
- The book frames some events in language D-05 forbids; the game takes facts only. The book's sketches are not used as references.
- Dates: none of the pages photographed gives a year for Torna; the book's age cues (15, 16) agree with 1645-47.
- Next code step is unchanged: Phase 1 step 2 (Gad + capture), but Q-07 may change what `ch01_torna` needs: ask Pon first.

## 24 Nov 2026 · Session 6 (third part) · Claude (with Pon)

**Asked:** keep Torna and Rajgad as in the book; read 20 more pages (Vol. I pp. 207-212, 214-222, 223-227: Javli, Supa, Karhe plateau, Darya Sarang).

**Done**
- Recorded D-19 (Torna unguarded, no fight) and D-20 (Rajgad named at once); CONTESTED #21 and #25 closed, #4, #24, #26 updated; new #27 (fate of Chandrarao's sons) and #28 (elder Sambhaji and Afzal).
- CHRONOLOGY now 70 entries: updated JAOLI, PRATAPGAD-BUILT, MUGHALS, SAMBHAJI-BORN, NAVY, TORNA, RAJGAD, JAVLI; added SUPA, BHAVANI-SWORD, KONDHANA-RETAKEN, NORTH-KONKAN. PEOPLE: 15 rows added. PURANDARE-CHECK rows and page lists updated.
- `ch01_torna` text rewritten to the D-19 decision (objective rewrite waits for the Gad mechanic).
- `art/PROMPTS-BATCH1.md`: card 15 (`sw_gad_pratapgad`) and battlefield B2 (`pratapgad`) refreshed with the book's setting; the sheet tells Pon what changed.

**Notes for next time**
- Book says Baji More was killed in 1656; earlier entry had him fighting at Pavan Khind (CONTESTED #27): do not name his fate in cards.
- Missing: p. 213; Afzal pages pp. 235+.

## 24 Nov 2026 · Session 6 (fourth part) · Claude (with Pon)

**Asked:** read the next 20 pages (Vol. I pp. 228, 235-245, 257-261, 267-269: Badi Saheba, Afzalkhan, Tuljabhavani, Khan's envoy, Fort Pratapgad).

**Done**
- CHRONOLOGY (72 entries): large "Purandare adds" block on C-1659-AFZAL-MARCH (court's alarm, Afzal's background, council, Mavle deshmukhs, the two envoys, the plan to meet at Javli, the march over the ridge); new C-1659-SAIBAI-DIED, C-1659-NIMBALKAR.
- CONTESTED: #5 and #18 extended, #28 updated (Purandare: 1656, Afzal sent no help), new #29 (Siddi Hilal appears on Afzal's side on p. 257: possible misreading, sideways photo).
- PEOPLE: ~25 names added; Gopinath Pant = Pantaji Gopinath Bokil ("Kaka"). PURANDARE-CHECK updated (key pages next: 270-287).
- `as_afzal_khan` prompt: tall and broad per the book.

**Notes for next time**
- The book's tone about Afzal is religious and hostile (D-05): facts only into game text.
- Design idea for ch04: forest terrain slows elephants and cannon (the book's account of the march).
- Pon has one more batch ready. Tests, tsc, build run at commit.

## 24 Nov 2026 · Session 6 (fifth part) · Claude (with Pon)

**Asked:** read the next 15 pages (Vol. I pp. 270-284: the plan, the night council, the meeting, the battle, the aftermath).

**Done**
- CHRONOLOGY (73 entries): C-1659-PRATAPGAD now carries the book's full account (terms, place, day and time, posts of the hidden forces, the ten attendants, dress, the approach, the meeting, the battle, prisoners spared, burial with honour); new C-1659-POSTS-RETAKEN.
- CONTESTED: #5 extended with the book's account of the meeting; #29 sharpened (Siddi Hilal is on Afzal's side on pp. 257 and 284: not a misreading).
- PEOPLE: ~40 names added (the ten attendants, Afzal's attendants and officers, the chiefs in the forest posts). PURANDARE-CHECK: Pratapgad row now agrees/adds; remaining pages listed.
- Prompts: `sw_wagh_nakh` and battlefield B2 annotated with the book's details.

**Notes for next time**
- Chapter 4 design notes are in C-1659-PRATAPGAD: Bhet = negotiating the terms; hidden-force cannon signal; battle = forest ambush; surrender spares the unarmed.
- The book's killing scenes and religious language: facts only; no depiction of the blow (art rule).

## 24 Nov 2026 · Session 6 (sixth part) · Claude (with Pon)

**Asked:** Pon sent web screenshots of Torna, Pratapgad, Rajgad/Raigad, Lohagad, Shivneri and wagh nakh images as fort references for painting.
**Done:** a "Reference photos" section in `art/PROMPTS-BATCH1.md` (features to carry into nos. 12-16 and B1-B2; Rajgad vs Raigad warning; Lohagad and Shivneri noted for later batches; what not to use). Photos not stored in the repo. No code change.

## 24 Nov 2026 · Session 6 (seventh part) · Claude (with Pon)

**Asked:** put exact picture specifications in the prompt sheet (cards 5:7 with clear space above the head, forts square, battlefields 16:9) and check four finished paintings (sw_shivaji, sw_mavla, sw_havaldar, sw_hetkari).
**Done:** new "Format and safe-area specification" in `art/PROMPTS-BATCH1.md`, derived from the code: card face 480 x 672 (5:7), art window 424 x 404, cover-fit with focus 0.3, so a 5:7 picture shows about 10-77 % of its height (token: 7-83 %). Simulated the four paintings in the card and token windows: all read well. Gad cards will need a square window (Phase 1 step 2, noted in TASKS).

## 24 Nov 2026 · Session 6 (eighth part) · Claude (with Pon)

**Asked:** create folders for card, fort and battlefield art; mark work done on the roadmap and status files; Pon switched on GitHub Pages and sent six more paintings; Pon's decisions: Shivaji never in teal or green; no need to photograph the whole book.
**Done**
- `art/source/cards|forts|battlefields` with a README; `scripts/convert-assets.mjs` gets a `forts` job (output to `public/assets/cards`). The ten finished paintings are in `art/source/cards/`, converted, and listed in `src/assets/card-art.json`.
- D-21 and D-22 recorded (CLAUDE.md reference order rewritten; PURANDARE-CHECK no longer a gate). Prompt sheet: Shivaji's teal removed, checklist ticked for ten cards.
- STATE, TASKS, ROADMAP, PROGRESS updated.
**Notes for next time:** GitHub's Pages API and the live site cannot be reached from this workspace; Pon confirms Pages is on. Three paintings are 345 px wide (dadoji, gopinath, jijau_counsel).

## 25 Nov 2026 — part 9: corrected paintings
- Pon re-sent sw_bargir, sw_dadoji, sw_jijau_counsel at 1080 x 1512. Checked with the arched-window crop preview: clear headroom, no arch clipping, readable. Assets rebuilt (10 webp), 86 tests pass, check-refs OK. Commit 3276e5d.
- Still outstanding from Pon: sw_gopinath (345 px wide, redo at 1080+ with more headroom), Torna hoard, Wagh Nakh, four fort cards (square), Afzal Khan, Hasham, Gaja, Topkhana, two battlefields (16:9).
