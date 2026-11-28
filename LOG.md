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

## 25 Nov 2026 — part 10: four Gad cards absorbed
- Pon sent the four fort (Gad) paintings for batch 1: `sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held` (the neglected pre-capture pair for Torna), each 1254 x 1254 PNG — above the 1080 x 1080 minimum, square as specified.
- Saved to `art/source/cards/<id>.png` (per the format table in `art/PROMPTS-BATCH1.md`, not `art/source/forts/`), ran `npm run assets`: 14 webp files in `public/assets/cards/`, `src/assets/card-art.json` now lists 14 ids.
- Checklist in `art/PROMPTS-BATCH1.md` ticked for nos. 13-16. `npm test` (check-refs + 86 Vitest tests), `npx tsc --noEmit`, `npm run build` all pass.
- Remaining from batch 1: `sw_torna_hoard`, `sw_wagh_nakh`, `as_afzal_khan`, `as_hasham`, `as_gaja`, `as_topkhana`, and battlefields `torna`, `pratapgad`.

## 25 Nov 2026 — part 11: six more cards absorbed; a mismatch flagged, not absorbed
- Pon sent 10 paintings: `as_afzal_khan`, `as_gaja`, `as_hasham`, `as_topkhana`, `sw_torna_hoard`, `sw_wagh_nakh` (all new, 1500x2100, 5:7) plus resends of `sw_gad_torna`, `sw_gad_pratapgad`, `sw_gad_rajgad`, `as_gad_torna_held`.
- Absorbed the 6 new ones: saved to `art/source/cards/<id>.png`, `npm run assets` (20 webp files, `card-art.json` now lists all 20 batch-1 ids). Batch 1 card paintings are complete; only the 2 battlefields are left.
- **Did not absorb** the 4 resent Gad files, for two reasons:
  1. The resent `sw_gad_pratapgad` and `sw_gad_rajgad` (1254x1254, checked by diffing pixels and viewing both) depict a single-ridge, single-gate, single-path fort — reads as Torna, not Pratapgad (no cliffs/temple/ponds) or Rajgad (no three terraces/lake/scaffolding). The versions already committed (part 10) correctly match their prompts and were kept.
  2. The resent `sw_gad_torna` and `as_gad_torna_held` are 504x504 — below the 1080x1080 minimum in `art/source/README.md` and lower-resolution than the 1254x1254 versions already committed. Kept the committed versions.
- Flagged as an open question in `STATE.md`. `npm test` (86 tests + check-refs), `npx tsc --noEmit`, `npm run build` all pass with only the 6 new files added.

## 25 Nov 2026 — part 12: battlefields absorbed; batch 1 done
- Pon sent `torna.png` and `pratapgad.png`, both 1672x941 (16:9), for the two battlefield slots.
- Saved to `art/source/battlefields/<name>.png` (the folder didn't exist yet — created it), ran `npm run assets`: `public/assets/battlefields/torna.webp` and `pratapgad.webp` produced. Both read well against their prompts (Torna: ridge, path, cliffs, mist, flag; Pratapgad: pavilion tent in dense forest below the fort silhouette, calm middle band).
- Checklist in `art/PROMPTS-BATCH1.md` ticked for B1 and B2. **Art batch 1 is now fully complete: 20 of 20 cards, 2 of 2 battlefields.**
- Pon's call on the part-11 mismatch (sw_gad_pratapgad, sw_gad_rajgad, sw_gad_torna, as_gad_torna_held): forget it — keep the four files already committed, no further resend expected. STATE.md's open question removed accordingly.
- `npm test` (86 tests + check-refs), `npx tsc --noEmit`, `npm run build` all pass.

## 25 Nov 2026 — session 8: Phase 1 step 2 (Gad card type + capture) and step 3 (`capture` objective)

**Asked:** do the next step — Phase 1 step 2.

**Done**
- **Gad card type** (DESIGN 3.1): `type: 'gad'` and `GadEffect` in `src/engine/types.ts`; a Gad is played to
  the Rajya line like a unit (shares the 4-slot cap), has defence and no attack, cannot move or attack
  (`canMove`/`canAttack` refuse it by type), and `startTurn` never lets it act. Deploying one goes through
  its own branch in `applyActionCore` (not the unit branch), so it is never exposed to a Vighna Yantra's
  on-deploy trap — immune to a "destroy" order by construction, not a bolted-on exception.
- **Capture**: `captureGad()` in `rules.ts`, called from the combat path (melee/ranged attack) and from
  `damageUnit` (which now takes an optional `attacker`, threaded through every order that can damage a
  unit — `n_aakraman`, `s_agni`, `n_visha_baan`, `s_chakravyuha`, data-driven `power`/`damageAll`/
  `damageFront` — so a future "damage an enemy Gad" card captures correctly, not just the vertical
  slice's melee case). A captured Gad flips owner at `Math.ceil(maxHp / 3)` and keeps its standing
  benefit for the new side; the combat code was reworked to snapshot `hpAfterHit` before the capture
  mutates `d.hp`, so trample/promotion/Dharma logic (which read the post-hit hp) are unaffected.
- **Standing benefits** (`CardDef.gad`): `kosha1` and `drawEvery2` fire in `startTurn` (gated
  `isSwarajyaRules`); `rakshaHp` (Pratapgad) applies at unit creation (`makeUnit`) and is moved from the
  old holder's Raksha units to the new holder's on capture. `durgWard` and `shipsAtk` (Chakan,
  Sindhudurg, Khanderi, Panhala — all Phase 2+) are typed but not yet applied; no chapter needs them yet.
- **`capture` objective** (DESIGN 3.6): `{ type: 'capture', forts: string[], turns?: number }`.
  `checkCapture()` ends the game the instant every listed fort is held (called from `captureGad` and,
  as a backstop, every `startTurn`); an optional `turns` deadline hands the defender the win if missed,
  mirroring `survive`/`deadline`. `objectiveStatus()` reports it.
- **AI**: `gadPlayScore` in `ai.ts` (worth playing early; a sharp bonus if the scenario's `capture`
  objective names that exact fort); `attackScore` now adds a capture bonus when the kill is a Gad.
  `search.ts` needed no change — a captured Gad's hp already moves from one side's `evaluate()` sum to
  the other's by virtue of changing `support` arrays, and a finished `capture` objective is a win the
  search already takes immediately (`st.over && st.winner === me`); added a comment there so the next
  reader doesn't go looking for special-case code that isn't needed.
- **Glossary**: a `gad` entry in `src/game/ui/glossary.ts` (the capture rule, plus each Gad's standing
  benefit in plain words) and a new `gad` battlement icon in `src/game/ui/inspect.ts`.
- **Data**: ported the 4 vertical-slice Gads from `data/cards.draft.json` to `src/data/cards.json`
  (`sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held`) — art for all four was
  already painted and registered (session 7), so no art blocker. 11 Swarajya/Adilshahi cards now
  playable (was 7). Draft file's `_about` note and the four entries removed.
- **Tests**: `tests/gad.test.ts`, 17 cases — play/slot/move/attack restrictions, Vighna immunity, capture
  math (including the no-room-to-raise-the-banner path left untested — deferred, not expected to come up
  in the vertical slice), the three upkeep effects (including the Raksha-shield rule blocking a direct
  melee/ranged attack on a Gad sharing its line with a Raksha unit — real existing YUDDH behaviour, not
  new, which is why the "bonus moves on capture" case uses an order (Agni Baan) instead of combat), and
  the `capture` objective (instant win, multi-fort, and the turn-limit loss).
**Deviation from TASKS.md's step-2 wording:** the square art window for Gad cards (noted in TASKS as
part of step 2) was **not** done — it is a renderer change (`src/game/cards/paint.ts`/`cardView.ts`)
that only matters once a Gad appears in an actual battle scene, which is step 5. Doing it now would be
working ahead of the material, same reasoning as "Opened first, the skill's instructions pull the work
toward layouts... while there is nothing yet to put in them." Left as an open item in STATE.md/TASKS.md.
**Checks:** `npm test` (check-refs + 103 Vitest tests, incl. the golden replay and `swarajya.test.ts`
unchanged), `npx tsc --noEmit`, `npm run build` all pass. STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): Phase 1 step 4 (battle without art) and step 5 (vertical-slice scenarios)

**Asked:** do the next steps — Phase 1 steps 4 and 5.

**Done**
- **Battle without art** (`src/assets/manifest.ts`): `loadBattlefield(name)` now tries the real painting
  first and falls back to a drawn placeholder (`fallbackBattlefield`) on load failure — a canvas-drawn
  dawn-gradient sky over three jagged hazy ridge silhouettes, hue-shifted and shaped from a hash of the
  battlefield's name so each unpainted ground still looks distinct, same approach as the existing title
  placeholder. Cached per name. `src/game/scenes/battle.ts` now awaits `loadBattlefield()` instead of
  `Texture.from(battlefieldUrl(...))` directly, so a battle opens with or without Pon's painting.
- **Gad square art window** (the item STATE.md had been carrying since step 2, now that a Gad appears in
  a real scene): `src/game/cards/paint.ts` gained `artWindowPath()` — a plain rounded rect for
  `type === 'gad'`, the existing arch for every other type — used in `cardFace()`'s three art-window
  draws. `typeLabel` prints `GAD · <sub>` for a Gad's type line; the stats block draws a single HP badge
  (a Gad has no attack to show).
- **CONTESTED history note support**: `src/data/index.ts`'s `HistoryBasis` gained `'CONTESTED'` and
  `HistoryNote` an optional `otherSide` field; `src/game/ui/historyPanel.ts` gained a `CONTESTED` tag
  colour and, when `otherSide` is set, a "THE OTHER SIDE WROTE" block — used by Torna's history note
  (CONTESTED #25: Purandare's unguarded fort vs. later retellings that name a garrison).
- **Three scenarios** in `src/campaign/` (`mavalTutorial.ts`, `torna.ts`, `pratapgad.ts`), decks in
  `src/data/decks.json` and History notes in `src/data/history.json`, written only from
  `history/CHRONOLOGY.md` (C-1630-CONTEXT, C-1630-BIRTH, C-1640-PUNE, C-1646-TORNA, C-1647-EXPANSION,
  C-1656-PRATAPGAD-BUILT, C-1659-AFZAL-MARCH, C-1659-PRATAPGAD), all `rules: 'swarajya'`:
  - `ch00_maval` — coached tutorial, invented border-post fight (no chronology claim), teaches play
    against the Border Post Durg; `nextId: 'ch01_torna'`.
  - `ch01_torna` — the `capture` objective exercised for the first time: `as_gad_torna_held` starts
    already on Bijapur's side of the board (`preset.enemySupport`) and the player must raise the banner
    and hold it 14 turns. Following D-19/CONTESTED #25, neither the briefing nor `enemyName` ("Bijapur")
    says "garrison" or "commandant" — framed as Bijapur's slow response, not a siege.
  - `ch04_pratapgad` — a `destroy` battle with Afzal Khan's army pre-placed (`preset.enemyFront:
    ['as_afzal_khan']`). DESIGN 3.5 calls this a Bhet-and-battle chapter; the Bhet (parley) minigame is
    step 6 and not built yet, so the meeting is framed as having already happened offscreen — documented
    in the file's own header so it reads as a deliberate deferral, not an oversight. No `nextId` (end of
    the vertical slice).
  - `SWARAJYA_CAMPAIGN`/`SWARAJYA` (`src/campaign/campaign.ts`) ties the three into one `Campaign`, kept
    **out** of the global `CAMPAIGNS` array (that array drives `tests/seleucid.test.ts`'s YUDDH-empire-
    order check and `tests/standing.test.ts`'s Renown-system check, neither of which has a `'swarajya'`
    entry) — `scenarioById()` widened to search both lists so `nextId` chaining still resolves.
- **Title → campaign → battle wiring** (`src/main.ts`, rewritten; `src/game/scenes/swarajyaTitle.ts`
  gained real buttons): title now shows "Learn to play" (fresh) or "Campaign" (once `ch00_maval` is
  won — same fresh/returning pattern as YUDDH's own title), going to `campaignScene(stage, go, back,
  SWARAJYA, [SWARAJYA])` — the new optional `pool` parameter on `campaignScene()` restricts the picker to
  a single campaign and hides YUDDH's "More empires" pill entirely (`src/game/scenes/campaign.ts`) rather
  than exposing the scaffolding campaigns (D-17). Battle completion chains to `sc.nextId` via
  `scenarioById()` and `preloadBattle`.
- **Tests**: `tests/scenarios.test.ts`, 5 cases (deck non-emptiness, each `game(1)` builds without an
  engine-level throw, the `nextId` chain, `SWARAJYA_CAMPAIGN` order, `ch01_torna`'s preset fort + capture
  objective shape, `ch04_pratapgad`'s Afzal-on-front placement). These are engine-level only; they do not
  exercise the renderer.
- **Real playtest** (`tests/e2e/swarajyaPlaytest.cjs`, adapted from YUDDH's own `playtest.cjs`): found,
  during this mandatory step, a crash that none of `tsc`/`vitest`/`vite build` nor the engine-level test
  above could see — `cardFace('sw_shivaji')` threw `TypeError: Cannot read properties of undefined
  (reading 'empire')` on the briefing screen, because `cardFace()` reads the full `CardDef` out of the
  engine's live `CARDS` table, and `sw_shivaji` exists only in `data/cards.draft.json` (not loaded by the
  game — it is blocked on the unbuilt Ganim mechanic, per TASKS.md step 1). All three scenarios and
  `SWARAJYA_CAMPAIGN`'s node faces had used `sw_shivaji` as a stand-in portrait. Fixed by using cards
  that *are* loaded and fit each chapter instead: `sw_jijau_counsel` (Jijabai's Counsel) for `ch00_maval`,
  `sw_gad_torna` for `ch01_torna`, `sw_gad_pratapgad` for `ch04_pratapgad`; `as_afzal_khan` (already
  loaded) was fine as-is for Pratapgad's enemy face. A `heroCard`/`face`/`defeatCard` id must always be a
  loaded, playable card — noted in STATE.md so the next new scenario doesn't repeat this.
- Also fixed the playtest script's own bug while debugging the above: its `catch` handler didn't call
  `b.close()`, so an uncaught page error left the headless Chromium child alive indefinitely (looked like
  a hang when piped through `tail`, which buffers until the upstream process's stdout closes). Now
  wrapped in `try`/`finally`.

**Verified:** full playtest run against `vite preview` — title → "Learn to play" → briefing (Jijabai's
Counsel portrait renders) → "Begin training" → cards dealt → several turns of scripted play (Border
Post Durg brought from 12 to 7 hp, no win/loss within the script's 24-turn cap — expected, it only plays
whatever move is offered first) → zero console or page errors. Separately drove the title → "Campaign"
→ campaign screen: all three chapter cards (Jijabai's Counsel, Torna, Afzal Khan) render correctly with
no "More empires" picker.

**Known loose ends, not fixed this session:**
- The coached tutorial's in-battle coach callout is hardcoded to Chanakya's portrait
  (`cardFace('m_chanakya')`, `src/game/scenes/battle.ts`) — inherited YUDDH scaffolding, not something
  step 5 touched; shows "Chanakya" instead of Jijabai during `ch00_maval`'s coaching. Cosmetic, not a
  crash (`m_chanakya` is a loaded card). Worth parametrizing by scenario, or removing along with the rest
  of the YUDDH scaffolding in step 9.
- `tests/scenarios.test.ts` cannot catch a `cardFace()`/missing-`CARDS`-entry crash like the one found
  this session, since it never calls rendering code — the real playtest is the only check that does.

**Checks:** `npm test` (check-refs + 108 Vitest tests, incl. the golden replay), `npx tsc --noEmit`,
`npm run build` all pass. Real playtest run (above). STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): Maval battlefield painted

Pon painted `maval` (the B3 prompt added earlier this session) and sent it over. Saved to
`art/source/battlefields/maval.png` (1672×941, same master size as `torna`/`pratapgad`), ran
`npm run assets` to produce `public/assets/battlefields/maval.webp`. No code changes needed —
`loadBattlefield()` just finds the real file now instead of falling back to the drawn placeholder.
Verified in a real playtest: the tutorial's briefing screen now shows the painted valley, not the
procedural ground. Ticked B3 in `PROMPTS-BATCH1.md`'s checklist; batch 1 is now fully painted (20
cards + 3 battlefields). `npm test` (108 tests), `tsc --noEmit`, `npm run build` all pass.

## 25 Nov 2026 — session 8 (cont.): Phase 1 step 6 — the Bhet scene (Trust / Guard / Strike)

Built the parley minigame DESIGN 3.5 describes, closing the "offscreen" deferral noted in `ch04_pratapgad`
since session 8's step 5. `ch04_pratapgad` now opens on the meeting itself, not straight to battle.

- **Engine (`src/engine/bhet.ts`, pure, no DOM)**: `BhetStance = 'trust' | 'guard' | 'strike'`.
  `chooseBhetStance(rng, odds)` is the mechanic's AI value — a weighted pick over `{trust, guard,
  strike}` odds (default even, `RULES.bhet.aiOdds` in `src/data/rules.json`, overridable per scenario).
  `resolveBhet(player, enemy)` is the full 3×3 payoff table, extended symmetrically from DESIGN 3.5's two
  given examples (Strike vs Guard: striker wounded, guard reinforced; Strike vs Trust: truster wounded):
  Trust/Trust, Guard/Guard and Guard/Trust are all calm (no blade drawn, nothing provoked); Strike/Strike
  wounds both sides equally, so no side keeps an edge from mutual ambush — DESIGN 3.5's own words, "a
  game about the fear of treachery that both men had," ruled out any asymmetric default. Always returns a
  neutral `resultLine` describing what each side *came with*, never what "really" happened at Pratapgad.
- **Generic wound/reinforce plumbing**, not Bhet-specific: `Preset` (`src/engine/types.ts`) gained
  `playerWoundFrac`/`enemyWoundFrac`; `newGame()`'s new `woundSide()` helper (`src/engine/rules.ts`)
  damages that side's preset front unit by the given fraction of its max HP, or — when a side has no
  preset unit, as the player doesn't at Pratapgad — its own Durg/HQ instead. Reusable as-is by any future
  Bhet chapter (Purandar, Umberkhind) regardless of whether that chapter presets a commander.
- **`src/game/scenes/bhet.ts`**: a `Scene` shown via `stage.show()` before the battle scene, same pattern
  as `swarajyaTitleScene()`. Shows the chapter's own intro text over its battlefield painting (reused
  directly — Pratapgad's painting already shows the parley tent, confirmed in session 8 step 4; no new
  art needed), three stance buttons each with a one-line plain-language description, then on pick rolls
  the AI's stance and shows a reveal: the neutral result line plus, per side, what changed ("Your side
  starts the battle with its commander already wounded" / "...one extra unit ready in support"), never
  both phrased as if the same fact were being repeated from two angles — revised once after the first
  playtest caught a redundant "you start wounded" tacked onto an already-explicit sentence.
- **Wiring**: `Scenario` (`src/campaign/scenario.ts`) gained optional `bhet?: BhetConfig` (intro text,
  optional AI-odds override, which card is each side's "extra unit") and `game`'s signature widened to
  `(seed, bhet?: BhetOutcome) => GameState`, backward compatible — every non-Bhet scenario ignores the
  new parameter. `pratapgad.ts` fills it in (`extraUnit: { player: 'sw_bargir', enemy: 'as_hasham' }`)
  and its `game()` closure spreads the wound/support preset fields from the outcome; the "meeting already
  happened offscreen" framing is gone from the briefing text. `main.ts`'s `enterBattle` now checks
  `sc.bhet` and shows `bhetScene` first when present, recursing once the player has chosen.
- **Tests**: `tests/bhet.test.ts`, 11 cases — the full payoff matrix (6), `chooseBhetStance`'s
  distribution and deterministic edges (2, one with a seeded xorshift RNG over 3000 trials), `newGame`
  preset-wound-field integration (3, using 12-card test decks after an unrelated "fatigue" attrition
  mechanic corrupted two early runs with 1-card decks — traced and fixed, not an engine bug).
- **Glossary**: no `src/game/ui/glossary.ts` entry (Bhet is a scene, not a card keyword); explained
  in-context by the scene's own intro and stance text, the same way the `capture` objective explains
  itself through briefing/`objectiveStatus` text rather than a glossary icon.

**Verified:** real Playwright playtest against `vite preview` (zero console/page errors both runs):
title → Campaign → Pratapgad card (campaign nodes use raw `pointertap`, invisible to the
`window.__yuddhButtons()` test hook — clicked by screen coordinates, re-estimated after the campaign
map's layout shifted since session 8 step 5) → Bhet scene opens on the painted pavilion with Trust/Guard/
Strike buttons → picked Strike → reveal correctly showed a Strike-vs-Guard result (player wounded, enemy
reinforced) on the first run and a Strike-vs-Strike result (both wounded, cleanly worded with no
repetition) on the second, after the reveal-text rewrite → "To the field" → existing battle briefing.

**Checks:** `npm test` (check-refs + 119 Vitest tests, incl. the golden replay), `npx tsc --noEmit`,
`npm run build` all pass. STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): Phase 2 begins — the Ganim keyword ("strike and fade")

First Phase 2 increment, picked because it unlocks `sw_shivaji` — Shivaji's own playable card — along
with three generic Mavla-army units, all stuck in `data/cards.draft.json` until this mechanic existed.

- **`src/engine/rules.ts`**: `canFallback(st, pIdx, uid)` — Swarajya rules only. A unit on the Yudhbhumi
  with the `ganim` keyword that has already attacked this turn, with room on the Rajya line, may fall
  back there. A new `{ type: 'fallback'; uid }` Action (`types.ts`) does it in `applyActionCore`: no
  Kosha cost, removed from `front.units`, pushed to `support`, and — mirroring `destroyUnit`'s existing
  behaviour — `front.owner` resets to `null` if that was the Yudhbhumi's last unit (giving up the ground,
  not just vacating one unit's spot). A `fallback` `GameEvent` was added alongside.
- **New keyword**: `Keyword` gained `'ganim'` (`types.ts`); `KW_LABEL` (`cards.ts`) gained its label.
- **AI value, two levels** (DESIGN 3.3: "The AI must value withdrawing"):
  - *Search AI* (`search.ts`): `legalActions` now offers `fallback` for any front unit where
    `canFallback` is true, exactly like any other action — the beam search already judges the resulting
    position via `replyValue`, so no bespoke scoring was needed, matching DESIGN's own note that
    "search.ts already handles extra moves."
  - *Heuristic AI* (`ai.ts`): a new `ganimFallback(st, pIdx)`, called at the end of both `aiCombatPhase`
    and `hardCombatPhase` (after the attack loop, before `ganimFallback` lets `aiTurn` play `end`). It
    folds back every Ganim unit that attacked, with one exception: if it is the *only* unit holding the
    Yudhbhumi and the enemy already has 2+ units massed in support (a visible second wave), it holds the
    ground a turn longer instead — giving up the front for free safety isn't always the better trade.
    `unitValue` (used when scoring which card to play) also gained a small `+0.5` for carrying `ganim`.
- **Glossary**: `src/game/ui/glossary.ts` gained a `GANIM` entry (mirrors `VEGA`/`RAKSHA`'s pattern);
  `src/game/ui/inspect.ts` gained a drawn `ganim` icon (an arrow out and the same line back, fainter, for
  the fade) — the same "every mechanic ships with ... a glossary entry" rule the Gad and Bhet mechanics
  followed, this time with an icon since Ganim *is* a card keyword (unlike Bhet or `capture`).
- **Cards ported** `data/cards.draft.json` → `src/data/cards.json`'s `swarajya` list: `sw_shivaji`
  (Shivaji Raje, legendary, 7 cost, 5/7, Vega + Ganim, Deploy — buffAll; refs C-1630-BIRTH,
  C-1646-TORNA, C-1659-PRATAPGAD), `sw_mavla` (1-cost Hill Infantry, 1/2, Ganim), `sw_havaldar` (3-cost
  Mavla Officer, 2/3, Ganim, Deploy — buffLine), `sw_shiledar` (3-cost Cavalry, 3/3, Vega + Ganim). Both
  `buffAll` and `buffLine` deploy effects already existed in the engine (no new work there). None of
  these four cards are in any vertical-slice chapter's deck yet — Phase 2's chapters haven't been built —
  so this step changes no visible gameplay; it is pure engine/data groundwork for the chapters to come.
- **Tests**: `tests/ganim.test.ts`, 10 cases — the keyword is present on the four cards; `canFallback`'s
  four guard conditions (must have attacked, must carry `ganim`, Rajya line must have room, Swarajya
  rules only — the identical position under `'yuddh'` rules is refused); the fallback itself (no Kosha
  cost, event logged, `front.owner` cleared only when it was the last defender, not when a second unit
  remains); that a fallen-back unit cannot act again the same turn (it still carries `attacked`); and
  both heuristic-AI branches (an attacking Ganim unit folds back by itself; a lone defender holds the
  line against a massed enemy instead).

**Verified:** `npm test` (check-refs + 129 Vitest tests, incl. the golden replay — unaffected, since
`canFallback`/`ganimFallback` gate on `isSwarajyaRules` and no-op for classic/Yuddh games), `npx tsc
--noEmit`, `npm run build` all pass. Real playtest (regression check, since nothing changed in any
currently playable scenario): ran the coached tutorial through several turns against `vite preview` —
zero console/page errors, play proceeds exactly as before. No new scenario or UI surface exists yet to
demonstrate Ganim directly; that lands with Phase 2's first chapter.

STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): Phase 1 step 8 — campaign map v1 and Marathi strings for the slice

Two separate pieces of "Yes complete phase 1," both Claude-doable (step 10, balance + Gate 1, still
needs Pon's own playtest and is left for him).

**Campaign map v1.** `docs/DESIGN.md` §3.7's full vision — a painted geographic map of the Sahyadri/
Konkan with named forts, a 23-forts-go-dark Purandar treaty scene, milestone unlocks — needs art that
doesn't exist yet and is genuinely later-phase scope; building a placeholder geographic map now would
likely be thrown away once Pon paints the real one. But the shared `src/game/scenes/campaign.ts`
(YUDDH scaffolding, reused as-is) already does the functional job a "v1" needs: `battlesWon()`/
`markBattleWon()` (`src/campaign/campaign.ts`) are wired from `battle.ts`'s victory path, and
`campaignScene` already shows a gold "✦ WON" pill plus a desaturated tint on a completed node, and a
"NEXT" tag on the next unplayed one, connected by a dashed road. Nothing needed building here — this
session's work was confirming it, screenshotting it (see the Marathi section below, same screen), and
recording it as the v1 this step asked for. The real painted map stays a `docs/PLAN.md`/Phase-2-or-later
item.

**Marathi strings for the slice.** D-09 says Marathi from the start; PLAN.md separately lists a later
"Full Marathi pass (reviewed by a Marathi reader Pon trusts)" as its own gate, tied to the still-open
Q-05. Translating the whole 2000-line, YUDDH-inherited `battle.ts` chrome (End Turn, card tooltips,
History-note prose) unreviewed would be high-risk for low confidence; this step instead translates only
the vertical slice's **own authored content** — title screen, the three chapters' briefing/objective/
labels, the Bhet scene — and leaves generic battle-screen chrome in English for the later reviewed pass.
Every Marathi string is flagged inline (`// ... unreviewed — see src/i18n.ts`) and the scope boundary is
documented in `src/i18n.ts`'s header comment.

- **`src/i18n.ts`** (new): `Lang = 'en' | 'mr'`, persisted to `localStorage` (`swarajya.lang.v1`);
  `pick(en, mr)` returns `mr` when active and defined, else falls back to `en`; `getLang`/`setLang`/
  `toggleLang`.
- **`src/campaign/scenario.ts`**: `Scenario` gained an optional `mr` overlay (title/place/briefing/
  objective/goLabel/nextLabel/winText/loseText/bhet.intro) and `localizeScenario(sc)`, which shallow-
  copies `sc` with each field run through `pick()`. `id`, `battlefield`, decks, `game`, `nextId` etc. all
  pass through untouched, so save data and scenario lookups are unaffected by language. **`enemyName` is
  deliberately not in the overlay**: `battle.ts` splices it into two English sentences ("The ${enemyName}
  is moving…", "THE ${enemyName} MOVES") that this pass doesn't translate, so translating the noun alone
  would read as broken, not bilingual — left for the later full pass once those two sentences are done too.
- **`src/campaign/campaign.ts`**: `Campaign` gained an `mr` overlay (kicker/title) and
  `localizeCampaign(c)`, which also localizes every node's scenario via `localizeScenario`. `SWARAJYA`'s
  kicker/title now have Marathi.
- **`src/campaign/mavalTutorial.ts`, `torna.ts`, `pratapgad.ts`**: each chapter's `mr` block written
  (title, place, briefing, objective, goLabel, nextLabel, win/lose text; Pratapgad's `bhet.intro` too).
- **`src/main.ts`**: `showCampaign` now shows `localizeCampaign(SWARAJYA)`; `enterBattle` localizes its
  scenario once at the top via `localizeScenario`, before the Bhet-scene branch or battle preload — the
  rest of the codebase (`battle.ts`, `bhet.ts`) reads `sc.title`/`sc.briefing`/etc. exactly as before and
  never needs to know a language exists.
- **Devanagari font gap found and fixed**: `FONT_TITLE`/`FONT_STORY`/`FONT_BODY` are Latin-only; only
  `FONT_DEVA` renders Marathi. Added `hasDevanagari(s)` and `fontFor(s, latin)` to `src/game/theme.ts`,
  then applied them everywhere newly-localizable text is drawn: `ui/button.ts` (`makeButton` now
  auto-detects a Devanagari label and switches font/size/letter-spacing, so every call site gets this
  free), `scenes/swarajyaTitle.ts` (subtitle, "Act I" line, footnote, the two nav buttons, plus a new
  language-toggle button), `scenes/campaign.ts` (header kicker/title, node title/place-year, the "✦ WON"/
  "NEXT" tag), `scenes/bhet.ts` (title, stance labels/bodies, intro, secrecy prompt, reveal lines, both
  buttons), `scenes/battle.ts` (briefing screen's place/year/title/briefing/objective, pause menu's
  chapter-name line), `ui/historyPanel.ts` (the shared History/epilogue panel title — the note's own prose
  from `history.json` stays English this pass).
- **Naming collision avoided**: `bhet.ts` already had a local `pick(stance)` for the player's stance
  choice, so the i18n module's `pick` is imported there as `loc`.

**Verified:** `npx tsc --noEmit`, `npm test` (check-refs + 129 Vitest tests, unaffected — no engine or
rules code touched), `npm run build` all pass. Real playtest (`vite preview` + Playwright, 1600×900):
title screen toggled EN→MR→EN, Devanagari renders correctly with no missing glyphs in "स्वराज्य", the
subtitle, "अंक १ · बंडखोर", and both nav buttons ("खेळायला शिका"/"मोहीम"); campaign screen in Marathi shows
the localized kicker "अंक १ · बंडखोर", title "हिंदवी स्वराज्य", and per-node title/place-year text
("मावळातले मावळे", "तोरणा", with their Marathi place/year lines) with the "पुढे" (NEXT) tag correctly
drawn in Devanagari; opened the tutorial chapter in Marathi and confirmed the briefing screen's place-
year line, title, full briefing paragraph and objective line all word-wrap correctly inside their boxes,
with the "प्रशिक्षण सुरू करा" (Begin training) button rendering correctly; played several turns of the
battle itself with zero console/page errors (the battle board's own chrome is unlocalized by design, as
documented above). The Bhet scene was not reached in this playtest (it only opens on `ch04_pratapgad`,
which needs the first two chapters won first) but uses the exact same `loc()`/`fontFor()` pattern already
proven correct on three other screens, and was reviewed by reading the edited file in full.

STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): Phase 1 step 9 — scaffolding removal, partly done

Set out to do TASKS.md's step 9 as written: delete the 19 YUDDH chapter scenario files in
`src/campaign/`, `campaign.ts`'s `CAMPAIGNS`/`MAURYA_CAMPAIGN`/etc., the `"yuddh"` card list in
`src/data/cards.json`, and the YUDDH factions in `src/data/duel.json`, keeping only `missions.ts` and
the "classic" 50 cards per CLAUDE.md. Before touching anything, mapped every importer of the files this
would delete, and found the removal is load-bearing for four test files the step didn't mention:
`tests/seleucid.test.ts` (imports `INDUS_LINE_SCENARIO` and `CAMPAIGNS`/`MAURYA_CAMPAIGN` directly),
`tests/search.test.ts` (builds its search-AI sample games from `firstThroneGame`/`indusLineGame`),
`tests/standing.test.ts` (tests the Yash/rank system via `CAMPAIGNS`/`empireOfBattle`), and
`tests/duelBalance.test.ts` (exercises every faction in `duel.json` through `duel.ts`). Deleting the
scaffolding without first rewriting all four of those — not a quick patch, since each uses it as real
test *data*, not just an import — would silently drop real engine coverage (search AI, Seleucid card
interactions, the rank system). It would also cut against `docs/DESIGN.md`'s own Duel section, which
plans to *reuse* this Duel infrastructure in Phase 4 with new Swarajya-era factions rather than delete it
now and rebuild it later.

Decided not to force the full removal through in this session — did the one piece that was both in scope
and genuinely safe, and wrote up the rest as a finding for whoever does it properly next (TASKS.md step
9 has the full list and a recommended sequencing: do it alongside Phase 4's duel-faction swap, or as its
own dedicated cleanup session, not as a Phase-1-closing afterthought).

**Done:** `tests/swarajya.test.ts`'s "plays every faction pairing exactly as YUDDH does" test used to
build its games from `src/campaign/duel.ts`'s `FACTIONS`/`duelGame` — i.e. from the exact YUDDH duel
scaffolding step 9 is meant to eventually remove, which is why the step called this test out by name.
Rewrote it to build decks directly from the "classic" 50 cards instead (`src/data/cards.json`'s own
comment: "the golden test replays them; do not touch" — these are permanent, unlike the duel factions),
pairing all five classic empires (maurya, gupta, chalukya, chola, rajput) against each other under both
rulesets. Same assertion as before (a `'swarajya'` game plays identically to the same `'yuddh'` game when
no Swarajya mechanic is in use), now resting on data that won't move again regardless of what happens to
`duel.ts`/`duel.json` later.

**Verified:** `npx tsc --noEmit`, `npm test` (check-refs + 129 Vitest tests, same count as before — the
rewritten test still has 6 `it`s under its `describe` block), `npm run build` all pass.

STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): pushed the vertical slice live; art batch 2 prompt sheet (Jaoli)

Pon reported GitHub Pages still showing "coming soon" at https://medh-eng.github.io/Swarajya/. The local
repo was 7 commits ahead of `origin/main` (everything from the Bhet scene onward had never been pushed).
`git push origin main` (the repo had also moved to `medh-eng/Swarajya`, corrected the remote URL), which
triggered the "Test and publish" GitHub Actions workflow; it finished green and the live site now serves
the real title screen ("YUDDH: Swarajya," the rotate-your-phone prompt, confirmed via a fetch of the live
page) instead of the placeholder.

Also wrote `art/PROMPTS-BATCH2.md`: the next art batch, for chapter 3 (Jaoli) — the next chapter in
`TASKS.md`'s Phase 2 list (chapter 2, Purandar 1648, stays blocked on its VERIFY source). 3 character
cards (`jm_chandrarao`, `jm_hanmantrao` — flagged VERIFY, low priority, per `PEOPLE.md`/`TASKS.md`'s open
research item — and `jm_jaoli_foot`) and 1 battlefield (`jaoli`, dense forest, distinct from every
battlefield painted so far). Same STYLE/AVOID/safe-area/likeness rules as batch 1, with one addition: a
third palette (earthy forest tones) for the Jaoli/More family, so Swarajya (saffron), Bijapur (green-
gold) and Jaoli (olive-brown) read apart at a glance. Sourced from `history/CHRONOLOGY.md`'s
`C-1656-JAOLI` entry and `history/CONTESTED.md` #4 (the disputed "how Jaoli was taken" — no pretended
marriage embassy in any prompt, matching the chapter's planned straight-assault treatment). Also fixed a
stale `TASKS.md` line that still said art batch 1 was only half-painted (it's complete).

STATE.md, PROGRESS.md, TASKS.md updated.

## 25 Nov 2026 — session 8 (cont.): GitHub Pages fix confirmed; built the balance harness; Torna fixed, Pratapgad diagnosed

The live site bug from earlier (stuck on "SWARAJYA" with no buttons) was GitHub Pages' Settings →
Pages → Source pointing at `main` instead of `gh-pages`, the branch the deploy workflow actually
publishes the built game to (`.github/workflows/deploy.yml`'s own setup comment says as much). Pon
fixed it in the GitHub UI.

With the site actually loading, Pon played Phase 1 properly for the first time and lost all four
chapters (Torna, Pratapgad, both Bhet branches) — ran out of cards while losing. Rather than guess
at a fix, built `tests/balance.harness.test.ts`: it plays a scenario hundreds of times using the
in-game AI on both sides (`aiTurn()`, the exact function the live game calls for AI turns), a
different seed each run, and reports the player's win rate against CLAUDE.md's 45-70% Gate 1 band.
It's skipped by default (`describe.skipIf(!process.env.BALANCE)`) so `npm test` is unaffected; run
it with `BALANCE=1 npx vitest run tests/balance.harness.test.ts --reporter=verbose`.

Baseline: Torna 10.7% player wins, Pratapgad 0.7%. Both far outside the band — matches Pon's
experience exactly.

**Torna, root cause and fix:** `decks.json`'s `ch01_torna` player deck had only 6 real fighting
units (3 Bargir, 3 Hetkari) in a 13-card deck, facing 10 copies of `as_hasham` — which is a
strictly better card at the same cost (2/2/3 vs the player's 2/2/2). Swept deck-list variants
through the harness (more bodies, trimmed enemy count, etc.) until one landed in band:
`sw_bargir*5, sw_hetkari*5, sw_jijau_counsel*2, sw_torna_hoard*1, sw_gad_torna*2` (dropped
`sw_gad_rajgad` from this deck — it belongs to the next chapter's fort, not this battle) scores
58.3% over 300 seeded games. Applied to `decks.json`. `npx tsc --noEmit`, `npm test` (129 passed),
`npm run build` all pass with the change.

**Pratapgad, root cause found, not yet fixed:** swept deck sizes all the way up to absurd (7
Bargir, 7 Hetkari, doubled utility cards) and still only reached 71.5% player wins — *without*
Afzal Khan on the field. The moment `preset.enemyFront: ['as_afzal_khan']` is restored (he starts
already deployed at scenario start, no cost paid, his own "all his units +1 attack" deploy trigger
already live), the same oversized deck drops to 29.5%. Tried nerfing his raw stats in-memory
(atk 5→4, hp 8→6) against a more reasonable deck and it barely moved the result (22.7% → 22.3%),
which rules out "his numbers are too high" as the real problem — it's the encounter's shape: a
free, pre-buffed, pre-deployed legendary from turn 1 is overwhelming almost regardless of what the
player brings. Wrote up three options for Pon to choose from in `TASKS.md` step 10 (delay his
entry, remove/shrink the buff, or give the player an early answer card) rather than silently
editing a historically-significant card's power level. Did not touch `as_afzal_khan`'s card def or
`ch04_pratapgad`'s deck list — only the harness and the diagnostic record.

TASKS.md, PROGRESS.md, STATE.md updated. Temporary scratch test files used while sweeping
(`_balance-check.test.ts`, `_balance-sweep.test.ts`) were deleted; only the permanent
`tests/balance.harness.test.ts` remains.

## 25 Nov 2026 — session 8 (cont.): art batch 2 painted and registered; art batch 3 (Kolhapur) written; a CONTESTED/draft-data mismatch caught

Pon painted all 4 pieces from `art/PROMPTS-BATCH2.md` (`jm_chandrarao`, `jm_hanmantrao`,
`jm_jaoli_foot`, and the `jaoli` battlefield) and sent them back. Copied them into
`art/source/cards/` and `art/source/battlefields/jaoli.png`, ran `npm run assets`: 23 card
paintings now registered in `src/assets/card-art.json`, `public/assets/battlefields/jaoli.webp`
generated alongside `maval`/`pratapgad`/`torna`. `npx tsc --noEmit`, `npm test` (129 passed),
`npm run build` all pass with no changes needed elsewhere — this is purely an asset-registration
step, no engine or data wiring (these are Phase 2 chapter-3 cards, not yet ported into
`src/data/cards.json` as playable).

Wrote `art/PROMPTS-BATCH3.md` for chapter 5 (Kolhapur, 28 Dec 1659) — the next chapter needing new
art, since chapter 4 (Pratapgad) was already fully painted in batch 1. 2 cards (`as_rustam_zaman`,
`as_fazl_khan`, both Bijapur cavalry officers, reusing batch 1's green-and-gold court palette) and
1 battlefield (`kolhapur` — open winter plain, the opposite mood from Jaoli's dense jungle).

**Caught a real inconsistency while researching this batch:** `history/CHRONOLOGY.md`'s own
`C-1659-KOLHAPUR` entry names `sw_siddi_hilal` as one of the chapter's cards, and both
`history/PEOPLE.md` and `data/cards.draft.json` already tag him `basis: HISTORY` on Shivaji's side
— but `history/CONTESTED.md` #29 says plainly that no card or text should put Siddi Hilal on
either side in 1659 until Sabhasad/Mehendale settle it (the same source, Purandare Vol. I pp. 257
and 284, also lists a Siddi Hilal among *Afzal Khan's* officers). So two files are ahead of where
the project's own CONTESTED register says it stands. Did not silently fix the basis tags — left
`sw_siddi_hilal` out of batch 3 entirely and added it to `TASKS.md`'s research list and to the
batch 3 sheet's own warning, so nobody paints or ships that card until it's checked.

TASKS.md, PROGRESS.md, STATE.md updated.

## 25 Nov 2026 — session 8 (cont.): resolved CONTESTED #29 (Siddi Hilal's side in 1659); batch 3 updated

Pon pasted a Gemini write-up on Siddi Hilal mid-session, right after seeing the art-batch-3 flag that
held his card back over the CONTESTED #29 contradiction. Checked its central claim (switched from
Bijapur to Shivaji's side right after Pratapgad) against sources already in `SOURCES.md` plus one new
web search, rather than taking the report at face value (CLAUDE.md: AI reports are leads, not sources).

Found independent confirmation: Wikipedia's "Battle of Pratapgarh" article (W-PRATAPGAD, already
cited in `C-1659-PRATAPGAD`'s refs) names Siddi Hilal among Afzal Khan's chieftains before the battle
and states "some of the defeated Adilshahi generals like Siddi Hilal changed their loyalties and
joined the Marathas to serve under Shivaji" right after — independently matching W-GOODREADS-HILAL's
existing account of him fighting *for* Shivaji at Kolhapur and Panhala. Two independent sources, same
resolution Purandare's apparent contradiction already pointed to (CONTESTED #29 had speculated exactly
this: "or he changed sides after Pratapgad").

Resolved CONTESTED #29 in place (struck the "VERIFY, no card may take a side" restriction, recorded
the two-source confirmation). Added a line to `C-1659-PRATAPGAD` and strengthened `C-1659-KOLHAPUR`'s
refs with W-PRATAPGAD. Added `C-1659-PRATAPGAD` to `sw_siddi_hilal`'s refs in `cards.draft.json` and to
his `PEOPLE.md` row (which now also names his earlier Bijapur service, not just his Swarajya years).
Recorded the full review — what was confirmed, what wasn't (a claimed death at Nesari 1674, and all
troop-number figures from the report) — in `history/AI-REPORTS-REVIEW.md`, so the Nesari claim stays
out unless a checkable source turns up (the existing `C-1674-NESARI` entry already tags its six
companions' names TRADITION, not HISTORY, which already covers this kind of claim appropriately).

With the contradiction resolved, `sw_siddi_hilal` came off TASKS.md's blocked list and into
`art/PROMPTS-BATCH3.md` (now 3 cards instead of 2) — painted in Swarajya's saffron palette, not
Bijapur's green, per D-21, with a note not to show the defection itself, just the officer he became.

`node scripts/check-refs.mjs .`, `npx tsc --noEmit`, `npm test` (129 passed), `npm run build` all pass.
TASKS.md updated.

## 26 Nov 2026 — session 9: batch 3 (3 of 4) registered; a filename mismatch caught; bonus Baji Prabhu painting

Pon uploaded 4 PNGs straight to GitHub (via the web UI, not through this session) while session 8
was between turns: `as_rustam_zaman.png`, `as_fazl_khan.png`, `kolhapur.png` (all three from batch 3)
and `sw_baji_prabhu.png` — not from any prompt sheet; a chapter 6 (Pavan Khind) card painted early.
Pulled the 3 new commits, ran `npm run assets`.

**Caught a naming mismatch before it became a silent bug:** the uploaded file was named
`sw_baji_prabhu.png` (with an underscore between "baji" and "prabhu"), but `data/chapters.json` and
`data/cards.draft.json` both use the id `sw_bajiprabhu` (no underscore) for Baji Prabhu Deshpande's
card. The asset pipeline doesn't validate filenames against real card ids — it would have happily
registered the painting under the wrong id (`sw_baji_prabhu`) forever, disconnected from the actual
card, and nobody would have noticed until chapter 6 was built and the art didn't show up. Renamed the
file to `sw_bajiprabhu.png` and re-ran the pipeline; now correctly registered.

Batch 3 is 3 of 4 done — `sw_siddi_hilal` is still outstanding, not yet painted. 26 card paintings
registered total. `node scripts/check-refs.mjs .` (implicitly via `npm test`), `npx tsc --noEmit`,
`npm test` (129 passed), `npm run build` all pass. TASKS.md, PROGRESS.md, STATE.md updated.

## 26 Nov 2026 — session 9 (cont.): wrote batch 4 (rest of chapter 6, Pavan Khind)

With batch 3 at 3 of 4 (Siddi Hilal still outstanding) and Baji Prabhu already painted early for
chapter 6, wrote `art/PROMPTS-BATCH4.md` for the rest of that chapter: `as_siddi_jauhar` (the besieger
of Panhala), `as_siddi_masud` (the pursuer at Ghod Khind), `sw_shiva_kashid` (the TRADITION decoy —
card text already says so), `as_angrezi_gola` (an order card, object-composed per batch 1's convention
for orders, not a portrait), and the `ghod_khind` battlefield (a narrow monsoon-night mountain pass —
deliberately the opposite mood from Kolhapur's wide cold dawn). Carried D-07 forward explicitly in the
sheet's own dignity section: Baji Prabhu's and Shiva Kashid's deaths are history/tradition, not
playable executions or massacres, and no painting shows a killing or a body. Also wrote clear direction
for Shiva Kashid specifically: dressed to resemble Shivaji in silhouette and regalia, but with his own
ordinary face, not a copy of `sw_shivaji`'s painted likeness — the gap between the two is the point of
the story.

TASKS.md, STATE.md updated.

## 26 Nov 2026 — session 10: batch 4 registered; chapter 3 (Jaoli) built

Pon sent all five batch-4 paintings in chat. Saved them as `as_siddi_jauhar`, `sw_shiva_kashid`,
`as_angrezi_gola`, `as_siddi_masud` and the `ghod_khind` battlefield (sizes checked: 1500×2100 and
2560×1440), ran `npm run assets`: 30 card paintings, 6 battlefields. Chapter 6's art is now complete.

Built the next campaign chapter in order, **ch03 Jaoli** (ch02 stays blocked; ch05 still waits on
`sw_siddi_hilal`'s painting; ch06 needs the unbuilt Khind mechanic):
- New empire `jaoli` (`EmpireId` in types.ts, `empires` in cards.json, a dark-teak frame in theme.ts),
  so the Mores read as their own house (and the log says "Jaoli wins", not "Mercenary").
- Ported `jm_chandrarao`, `jm_hanmantrao`, `jm_jaoli_foot` to `src/data/cards.json` (empire `jaoli`) and
  removed them from `data/cards.draft.json` (check-refs rejects duplicate ids).
- **Research:** Hanmantrao More confirmed in three independent sources (Purandare pp. 207-212; the Jedhe
  chronicle as quoted in W-JAOLI; Takakhav, W-TAKAKHAV-JAOLI) → card is now HISTORY. They disagree on who
  killed him and how (Sambhaji Kavji in battle / Raghunath Ballal Sabnis / a stabbing at a private
  interview) → new CONTESTED #30; no text names his killer. CHRONOLOGY, PEOPLE, TASKS updated.
- `src/campaign/jaoli.ts`: destroy objective, enemy Durg 22, season hemanta (Purandare: Javli taken
  January 1656), briefing from Purandare's account (no marriage embassy, CONTESTED #4), EN + unreviewed MR.
  First chapter to deck `sw_shivaji` and the Ganim units (`sw_mavla`, `sw_havaldar`, `sw_shiledar`).
  Torna's `nextId` now points at Jaoli; Jaoli's at Pratapgad; node added to `SWARAJYA_CAMPAIGN`.
- **Balance:** first try 0.7% player wins. A scratch sweep showed the free pre-placed `jm_jaoli_foot`
  (Dhuan, turn 1) alone cost ~40 points; removed it and trimmed the Mores' deck to 8 foot / 2 Hanmantrao /
  1 Chandrarao. Final: **50.0%** over 300 games (enemy Durg 21 gave 72%, 22 gives 50%). Jaoli added to
  `tests/balance.harness.test.ts`.
- History note (`src/data/history.json`): both accounts of how Jaoli was taken, the dispute over
  Hanmantrao's death, Chandrarao's execution told plainly and not played (D-07), the sons' fate left
  open (CONTESTED #27), otherSide = historians' "controversial circumstances" (W-JAOLI).
- `tests/scenarios.test.ts`: chain and campaign order now include ch03; a new check that every id the
  Jaoli screens draw is a loaded card (STATE lesson 4).

**Verified:** `npm test` (check-refs OK, 130 passed), `npx tsc --noEmit`, `npm run build`. Real playtest
(headless Chrome, 1600×900 and 915×412): campaign map shows Jaoli as NEXT, briefing, History panel, a
full battle to victory in turn 11, the win screen offers Pratapgad; zero console/page errors.
Small pre-existing layout note: at phone width the briefing's place line runs under the History button.

## 26 Nov 2026 — session 11: Khind built; chapters 5 (Kolhapur) and 6 (Pavan Khind) built; a survive bug fixed
Pon: "do both" (ch05 Kolhapur and the Khind mechanic that ch06 needs, then ch06).
- **Research:** added W-SARKAR-CH4 (Sarkar, *Shivaji and His Times* ch. IV, Wikisource) as a second source
  for C-1659-KOLHAPUR, C-1660-PANHALA-SIEGE and C-1660-PAVANKHIND. Sarkar states the Vishalgad gun signal
  as fact; it stays TRADITION (one strand of evidence), as does Shiva Kashid's decoy ride.
- **Cards ported** (removed from `data/cards.draft.json`): `as_rustam_zaman`, `as_fazl_khan`,
  `sw_siddi_hilal` (unpainted, placeholder frame), `sw_bajiprabhu`, `sw_shiva_kashid` (TRADITION),
  `as_siddi_masud`. `as_siddi_jauhar` and `as_angrezi_gola` stay in the draft (no siege part yet).
- **Khind (Phase 2 step 2):** `frontSize` in `newGame`/`GameState` (Swarajya only); `frontCap`/`isKhind`
  in `ruleset.ts`; `canMove`, ferry room, preset fronts, `ai.ts`'s advance limits, `search.ts`'s front
  value. Glossary entry, briefing line, lane label "KHIND · ONLY 2". `tests/khind.test.ts` (6).
- **ch05 Kolhapur** (`kolhapur.ts`, 28 Dec 1659, destroy, hemanta): 54.0% over 300 games.
- **ch06 Panhala and the Pass** (`pavankhind.ts`, 12–13 July 1660, survive 8, Khind of 2, varsha, Baji
  Prabhu preset on the front). The enemy AI never attacks Baji Prabhu, so the lever is a small Swarajya
  deck and attrition on the Durg.
- **Bug found by the playtest:** the result screen said VICTORY with the player's Durg at −2. In
  `startTurn`, attrition from the draw ended the game, then the survive clock overwrote it with a win.
  Fix: return before the clock if the game is already over (`isYuddhRules` only, so classic and the golden
  traces are unchanged). `tests/survive-attrition.test.ts` fails without the fix. The earlier Pavan figure
  (56%) was almost all false wins: it dropped to 0%. Rebalanced to a deck of 8 (4 Mavla): **57.3%**.
  Other chapters unchanged (Torna 58.3, Jaoli 50.0, Kolhapur 54.0; Pratapgad 0.7, known).
- History notes for both chapters; Pratapgad now leads to Kolhapur; campaign map nodes added.

**Verified:** `npm test` (check-refs OK, 140 passed incl. golden), `npx tsc --noEmit`, `npm run build`.
Real playtest of Pavan Khind (headless Chrome, 1600×900 and 915×412): briefing with the Khind line, History
panel, a full battle won on turn 9 with the Durg at 3, the win text labels the gun signal as tradition,
zero console errors. At phone width the lane label was hidden by the cards; it was shortened.

## 27 Nov 2026 — session 12: Siddi Hilal registered; balance audit; Pratapgad fixed; Easy foe; Chakan art sheet
Pon: "here is siddi hilal, absorb it and give me prompts for next campaign. the game is not easy and still
fights are difficult, so check the balance and card powers, if needed we can add or generate new cards."
- **Art:** `sw_siddi_hilal` painted by Pon and registered (31 card paintings). The five batch-4 images Pon
  re-sent earlier were already registered (session 10); `art/PROMPTS-BATCH5.md` (a one-card reprint of his
  prompt) is now done. Batch 3 is complete. The painting is 1060 x 1484, below the sheet's 1500 x 2100 minimum,
  like 15 earlier paintings; it displays fine, so no action.
- **Balance audit (harness, 300 games, AI-vs-AI):** Torna 58.3, Jaoli 50.0, Kolhapur 54.0, Pavan Khind 57.3
  (all in band); **Pratapgad 0.7 (a wall: a careful "search" AI player got only 8%).** Added a skill ladder to
  the harness (`easy` AI = a beginner, `normal` = the standard, `search` = a careful player): the in-band chapters
  give a careful player 97-100% but a beginner only 9-23% (Pavan Khind aside). Added a Bhet-outcome matrix for
  Pratapgad.
- **Why Pratapgad was a wall:** two causes, not one. (1) Afzal Khan starts on the Yudhbhumi with his buff, and
  (2) the player deck was Maval-era (2/2 Bargir and Hetkari) against 2/3 Hasham and 4/6 Gaja. Earlier "no Afzal"
  tests still gave only 5% with that deck, so a fix to Afzal alone could never have worked.
- **Fix (data + one small engine rule), option (c) from session 8, plus a better deck:**
  - New deck (24 cards): 4 Mavla, 3 Havaldar, 3 Shiledar, 1 Bargir, 3 Hetkari, 2 Jijau's Counsel, 1 Torna's
    Treasure, 2 Pratapgad (Gad), 1 Shivaji Raje, **2 Wagh Nakh, 2 Gopinath Pant**. Enemy deck and Afzal's preset
    untouched (his numbers stay as designed).
  - **Wagh Nakh** (ported from the draft, art already painted): Shakti, 4 cost, "4 damage to an enemy unit; 8 if
    it is legendary". New card field `powerVsLegendary` (`types.ts`), one branch in `rules.ts`'s data-driven
    order case and in `ai.ts`'s `orderValue` (the AI keeps it for the legendary). `tests/wagh-nakh.test.ts` (4).
  - **Gopinath Pant** (ported, art already painted): 2 cost, 0/2, Deploy: draw a card. The draft's "see the
    enemy's stance odds in a Bhet" was dropped (not built), the text says only what the card does.
  - Result: Pratapgad **58.7%** (no Bhet effect), **49% mean over the nine Bhet outcomes** (Strike v Guard is the
    harsh one, 26%; the careful AI player gets 80%). Netaji Palkar and Moropant Pingle were considered and left
    out: their presence at Pratapgad is single-source (Purandare), so they wait for chapters their chronology supports.
- **Easy foe:** the briefing's Foe button now cycles Easy -> Standard -> Veteran (`difficulty.ts`: `foeMode`,
  `setFoeMode`, `nextFoeMode`; `battle.ts`). Easy is the existing `easy` AI level. The balance band is still
  measured at Standard; Easy exists for learning (Standard player AI beats the Easy AI 87-96% in Torna, Jaoli and
  Kolhapur). Standing/Yash still reward only a Veteran win (unchanged).
- **Research:** Chakan was a ground fort (`bhuikot`): square, corner bastions, moat (W-CHAKAN-FORT, citing Sarkar;
  W-DURGBHARARI). Added both sources and a "fort's form" line to `C-1660-CHAKAN`. Some sources describe a two-day
  assault and heavy losses at the end; the game shows no fall (D-07).
- **Art batch 6** (`art/PROMPTS-BATCH6.md`, chapter 7 Chakan, the Mughals' first appearance): `sw_firangoji`,
  `sw_gad_chakan` (square), `mg_shaista_khan`, `mg_rajput_officer`, `mg_surang` (the mine, object only),
  `mg_topkhana`, optional `mg_mansabdar_sawar`, battlefield `chakan`. New Mughal palette (crimson, sandstone, ivory,
  gold, lapis; no green, no saffron).
- Moved `sw_wagh_nakh` and `sw_gopinath` out of `data/cards.draft.json` (check-refs flagged the duplicate ids).

**Verified:** `npm test` (check-refs OK, 144 passed incl. golden), `npx tsc --noEmit`, `npm run build`. Real
playtest (headless Chrome, 1600x900, save seeded to reach Pratapgad): Campaign -> Pratapgad -> Bhet (Guard) ->
briefing; Foe button cycled Standard/Veteran/Easy/Standard and set the AI level each time; opening hand dealt a
Wagh Nakh; a naive "first move" bot won a full battle vs the Easy foe in turn 12 (in an earlier run the same bot had
Afzal Khan off the board by turn 9), VICTORY screen offered Kolhapur, zero console errors.

## 28 Nov 2026 · Chakan artwork for review

Added the seven Batch 6 card paintings, including the optional Mansabdar Sawar, and the Chakan battlefield. Exported the PNG masters at the prompt sheet dimensions and generated the WebP assets with `npm run assets`. The card manifest now lists 38 paintings. Chapter 7 still needs its scenario and faction work.

Checked all eight filenames and image pairs, the card window crops, the reference checker, TypeScript and the production build. The test suite reported 144 passed and 7 skipped.

## 28 Nov 2026 · Session 13: Chakan built (siege mechanics, Mughal faction); art batch 7 written

- **Art batch 6 merged** (PR #1, merged into main): seven cards plus the `chakan` battlefield checked against the
  prompt sheet (Firangoji old and steady, Chakan a square ground fort with a moat, the mine shows objects only, no
  green on Shivaji's side). 38 card paintings, 7 battlefields.
- **Siege mechanics** (Phase 2 step 3, Swarajya only, golden test unchanged):
  - `durgWardOf`: each `durgWard` Gad takes 1 off every attack on its owner's Durg, and flips with the fort.
  - `gadWardOf`: Firangoji on the Rajya line takes 1 off each blow on his side's Gads.
  - `static`: siege guns cannot move.
  - `vsGad`: extra damage to a Gad, and a bombard from the Rajya line that ignores the Raksha guard.
  - Orders with `target: 'enemyGad'`: the Surang mine.
  - AI values in `ai.ts` and `search.ts`, glossary entries, and `tests/siege.test.ts` (8 tests).
- **Mughal faction:** empire `mughal` (frame in imperial red and lapis) and `mg_shaista_khan`, `mg_rajput_officer`
  (no names printed; the names are VERIFY), `mg_surang`, `mg_topkhana`, `mg_mansabdar_sawar`. New cards:
  `sw_firangoji` and `sw_gad_chakan`.
- **Chapter 7, Fifty-six Days at Chakan** (`src/campaign/chakan.ts`): hold for 10 turns in the monsoon against
  Shaista Khan, who starts with guns placed and riders on the front. Balance went from 100% to **56.7%** (300 games):
  bigger decks on both sides, enemy presets and starting Kosha. The walls fall in about 74% of games. Skill ladder:
  beginner 6%, standard 57%, careful 83%.
- **Bug fixed:** `battleArt()` did not preload preset cards' art, so Sangramdurg showed a blank frame. It now
  builds the opening game state and collects every support and front card.
- **History:** `C-1660-CHAKAN` rewritten on Sarkar (Wikisource) and Takakhav ch. 16: Sarkar's dates, the
  Jedhe date, the mine under the north-east tower, the surrender through a Rajput officer, Firangoji's refusal of
  imperial service. New CONTESTED #31 (dates; the game prints "1660"). Rajput officers' names marked VERIFY in
  PEOPLE.md. History note `ch07_chakan` includes the other side's view.
- **Art batch 7** (`art/PROMPTS-BATCH7.md`, chapter 8 Umberkhind): `mg_kartalab_khan`, `mg_rai_bagan` (not called
  wife or widow; the sources differ), `sw_khind_ambush` (no figures), `sw_netaji` (optional), battlefield
  `umberkhind` (dry-season forest pass). Sources for `C-1661-UMBERKHIND` added: W-HISTFILES-MARATHAS05,
  W-SAHASA-SKONKAN, W-TAKAKHAV-UMBER (chapter still to read).
- D-25 (Chakan as a defence). Decks appended to `decks.json` as text, so the file was not reformatted.

**Verified:** see the commit. `npm test` (check-refs OK, golden included), `npx tsc --noEmit`, `npm run build`.
Real playtest (Playwright, 1600x900 and 844x390): Campaign -> Chakan -> briefing -> battle. The fort art
shows. Victory and defeat screens both reached. No console errors.

## 28 Nov 2026 — Umberkhind artwork for review

Added PNG masters and game WebPs for Kartalab Khan, Rai Bagan, Khind Ambush, Netaji Palkar and the Umberkhind battlefield. The Khind Ambush card uses a saffron cloth, basalt boulders and an empty track. The four new cards bring the art registry to 42. Chapter 8 artwork awaits Pon’s visual review.

## 28 Nov 2026 · Session 14: Umberkhind built (Khind Ambush); batch 7 merged; art batch 8 written

- **Art batch 7 merged** (PR #2): Kartalab Khan, Rai Bagan, Khind Ambush, Netaji Palkar and the `umberkhind`
  battlefield checked against the sheet. All dignified, right palettes, no green on Shivaji's side, no figures
  in the ambush (it shows the saffron signal cloth and loose basalt rather than the matchlocks: accepted). 42 card
  paintings, 8 battlefields.
- **Khind Ambush:** new Yantra trigger `onEnemyAdvance` (`types.ts`, the `move` action in `rules.ts`, Swarajya
  only): springs on an enemy unit as it advances to the Yudhbhumi and deals its power (3). AI value in `ai.ts`;
  glossary entry AMBUSH; `tests/ambush.test.ts` (4).
- **Cards ported:** `mg_kartalab_khan` (legendary, Raksha, 4/7), `mg_rai_bagan` (Vega, Deploy: draw a card),
  `sw_khind_ambush`, `sw_netaji` (Vega, Ganim; the draft's new deploy dropped). Removed from the draft.
- **Chapter 8, Umberkhind** (`src/campaign/umberkhind.ts`): destroy objective in a Khind of 2, the Mughal column
  (a horseman and a Rajput officer) already in the pass. Balance: 84% → **56.7%** (300 games) by removing the
  player's preset units and setting the camp to 22. Skill ladder: beginner 18%, standard 55%, careful 100%.
  The draft's Rai Bagan Bhet is not built (D-26): her advice to ask for terms is the win text.
- **History:** read Vaidya, *Shivaji the Founder of Maratha Swaraj*, ch. XVII (W-VAIDYA-UMBER; the source I
  had listed as "Takakhav" was in fact Vaidya, fixed). It gives the Jedhe date Magha Shuddha 14, Shaka 1582 =
  2 February 1661, so CONTESTED #9 now prints "February 1661" (was "Early 1661"). New CONTESTED #32: Rai Bagan's
  family (widow or wife of Udaram) and whether the trap closed in the pass or at its foot. `C-1661-UMBERKHIND`
  rewritten with Vaidya, History Files and Sahasa. History note `ch08_umberkhind` written.
- **Art batch 8** (`art/PROMPTS-BATCH8.md`, chapter 9 Lal Mahal, the first night chapter): `sw_ratri_halla`
  (order, no figures), `mg_gad_lalmahal` (square, enemy-held), `sw_bahirji`, optional `mg_ahadi`, battlefield
  `lalmahal`. The two new cards were added to the draft. Bahirji's role now has a second source
  (W-KONARDE-BAHIRJI).

**Verified:** `npm test` (check-refs OK; 158 passed, 9 skipped, golden included), `npx tsc --noEmit`,
`npm run build`. Real playtest (Playwright, 1600x900 and 844x390, save seeded through Chakan): campaign node →
briefing → "Spring the trap" → a full game to the defeat screen at both sizes (the naive test bot lost), battlefield
and card art shown, no console or page errors. The victory screen was not reached in the browser this time;
the harness wins 57% of games.
