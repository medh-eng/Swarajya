# YUDDH: Swarajya

A tactical card game of the life and wars of **Chhatrapati Shivaji Maharaj** (1630–1680), from the
first fort at Torna to the coronation at Raigad and the sea fort of Khanderi. Built on the engine of
[YUDDH: Rise of the Rajyas](https://github.com/medh-eng/Yuddh), in the tradition of KARDS.
Web first, then Google Play.

## What makes it different from YUDDH
- **Forts change hands.** Gad cards sit on your line, give you their strength, and can be captured.
- **Every chapter is a different kind of fight:** a parley that turns into battle (Pratapgad), a
  two-wide mountain pass (Pavan Khind, Umberkhind), a night raid (the Lal Mahal, Kondhana), a raid
  for plunder (Surat), a treaty that costs you 23 forts (Purandar), an escape puzzle (Agra), a sea
  fort under fire (Khanderi).
- **The Swarajya map** grows fort by fort, dims at Purandar, and lights again.
- **A shahir tells the story** in the manner of a powada; the History panel then tells you what the
  sources say, what is tradition, what is disputed, and what the other side wrote.

## Where the project stands
Phase 0 done (24 Nov 2026): the YUDDH engine runs under the new ruleset `'swarajya'`, the history
checker runs in `npm test`, and a placeholder title is published. See `STATE.md`.

| Phase | What | Status |
|---|---|---|
| 0 | Foundation: repo, YUDDH engine ported, ref checker in tests, page live | **Done** (page live once Pages is switched on) |
| 1 | Vertical slice: tutorial, Torna, Pratapgad; Gad and Bhet mechanics | |
| 2 | Acts I–II: Jaoli → Purandar; Khind, Ganim, Ratra, raid | |
| 3 | Acts III–IV: Agra → coronation | |
| 4 | Act V, Duel, challenges | |
| 5 | Marathi/Hindi polish, Google Play | |

## For AI agents: read these, in this order
1. `STATE.md` · 2. `TASKS.md` · 3. `LOG.md` (last entries) · 4. `CLAUDE.md` (rules) · 5. `docs/DESIGN.md`.
**Never state a historical fact that is not in `history/CHRONOLOGY.md`.** Run `node scripts/check-refs.mjs`.

## Credits
Design and direction: Pon. Engine: YUDDH (Sarwam, Pon, Claude). Research, code and writing: Claude.
