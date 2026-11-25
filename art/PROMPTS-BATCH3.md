# Art batch 3 — prompt sheet (Phase 2, chapter 5: Kolhapur)

*For Pon. 2 card paintings and 1 battlefield painting. Written 25 Nov 2026 (session 8), right after batch 2
(Jaoli) was painted and registered. Next chapter in order after Jaoli (3) is Pratapgad (4, already built
and fully painted in batch 1) — so the next *new* chapter needing art is chapter 5, Kolhapur. Same format
and rules as `art/PROMPTS-BATCH1.md` — read that file's "How to use this sheet," safe-area spec and
likeness rules first; only what's chapter-specific is repeated here.*

## A flag before anything else: Siddi Hilal is NOT in this batch, and shouldn't be painted yet

The chronology's own `C-1659-KOLHAPUR` entry names `sw_siddi_hilal` as one of this chapter's cards, and
both `history/PEOPLE.md` and `data/cards.draft.json` already tag him `basis: HISTORY` on Shivaji's side —
but `history/CONTESTED.md` #29 says the opposite should hold right now: *"no card or text puts Siddi Hilal
on either side in 1659"* until Sabhasad/Mehendale settle which man (or which side) he was on that year (the
same source that puts him with Shivaji at Kolhapur and Panhala also lists a Siddi Hilal among **Afzal
Khan's** officers at Supa and Shirwal, pp. 257 and 284). That's a real contradiction between three files,
not just an open question — `PEOPLE.md` and `cards.draft.json` are ahead of where `CONTESTED.md` says the
project actually stands. Flagging it in `TASKS.md` rather than quietly fixing the basis tags myself, since
it needs a source check (or your call) first, not a one-line edit. **Don't commission a `sw_siddi_hilal`
painting until that's resolved** — he might end up on Bijapur's side, or not appear this chapter at all.

## What's the same as batch 1, what's different

- Rustam Zaman and Fazl Khan are **Bijapur court and army**, same empire as Afzal Khan, Hasham and Gaja —
  reuse batch 1's standard STYLE block and green-and-gold court palette as-is. No new palette needed.
- Both carry the `veg` (Vega — fast/cavalry) keyword, so dress and pose both as **mounted cavalry
  officers**, not foot infantry like Hasham.
- The battlefield is open country near Kolhapur/Panhala in winter (`hemanta` season per `chapters.json`)
  — the opposite of Jaoli's dense jungle: wide sky, dry winter grass, a cold dawn (the history says Shivaji
  attacked "early on 28 December").

## Format and safe-area specification

Same as batch 1 — unchanged, not repeated here. Both character cards are **5:7 portrait**, 1500 × 2100
minimum. The battlefield is **16:9**, 2560 × 1440. Save to `art/source/cards/<id>.png` and
`art/source/battlefields/kolhapur.png`; run `npm run assets` after.

## STYLE block (paste before every prompt — same as batch 1, Bijapur palette)

> Painting in the manner of 17th-century Deccan and Maratha court miniatures (Bijapur school, Maratha
> court portraits): opaque watercolour and gouache on aged paper, fine brush outlines, rich flat colour
> fields with subtle shading, gold-leaf highlights, delicate patterned textiles; blended with a warm
> "living miniature" atmosphere (soft lamplight or low sun, depth, a little mist). Palette for Bijapur's
> court and army: deep green, gold, cream, a little crimson — rich court finery, distinct from Swarajya's
> saffron-and-cream and from the Jaoli family's earthy forest tones. Dignified, historically careful,
> painterly, no caricature, no gore. Paint to the edge of the picture (no deckled paper edge). **Format
> line (use the one that applies):** *Portrait 5:7: clear sky above the head, head top about a quarter of
> the way down, 3/4-length figure, lower quarter simple.* / *Landscape 16:9: calm middle band.*

## AVOID block (paste after every prompt — same as batch 1)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no
> film or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no
> religious symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-10, CLAUDE.md) — unchanged from batch 1

No portraits of Rustam Zaman or Fazl Khan survive, so dignity is the rule to follow: a serious Bijapur
general and a serious young officer, not villains, not caricatures — the same dignity shown to Afzal Khan
in batch 1 (D-05). Fazl Khan was wounded at Pratapgad per Purandare; show that as quiet resolve (a bound
arm, a tighter grip), never as a wound itself (no blood, no gore, per the AVOID block).

---

## A · Kolhapur cards

### 1. `as_rustam_zaman` — Rustam Zaman · legendary · *General of Bijapur*
*Basis: HISTORY [C-1659-KOLHAPUR]. Vega, Deploy — his other units in this line get +1 attack: a cavalry
general who brings others up to speed, not a lone bruiser like Afzal Khan.*
**Prompt:** A seasoned Bijapuri cavalry general in gold-trimmed deep green court armour, mounted on a dark
horse at the head of a column of lancers just visible behind him, a curved sabre raised to signal the
advance, dawn light and long shadows across open winter grassland, breath visible in the cold air. Proud,
commanding, confident at the start of the day — the chronology's own "Shivaji attacked first" moment is
his to lose, and the card should feel like the morning before that happens, not the rout that follows.

### 2. `as_fazl_khan` — Fazl Khan · rare · *Afzal Khan's Son*
*Basis: HISTORY [C-1659-KOLHAPUR, C-1660-PANHALA-SIEGE]. Wounded and fled at Pratapgad per Purandare;
rides with Rustam Zaman at Kolhapur. Vega, no deploy ability — a solid officer, not (yet) a general in his
own right.*
**Prompt:** A young Bijapuri cavalry officer in green and gold, leaner and plainer than Rustam Zaman, one
arm bound close to his side under his coat, jaw set, riding at his general's shoulder rather than in the
lead. Grim, determined, a son still carrying his father's defeat into this battle — quiet resolve, not
triumph. Same cold dawn light as card 1.

---

## B · Battlefield

### B5. `kolhapur` — The plain near Kolhapur and Panhala (chapter 5)
*Basis: HISTORY [C-1659-KOLHAPUR: open country near Miraj/Kolhapur, winter (`hemanta`), the attack came
"early on 28 December"]. The opposite mood from Jaoli (B4): wide and cold instead of dense and green.*
**File:** `art/source/battlefields/kolhapur.png`, 2560 × 1440.
**Prompt:** A wide, open winter plain at first light: dry pale-gold grass stretching to a flat horizon,
a distant hill silhouette that could be Panhala's ramparts just catching the first sun, thin cold mist
low over the ground, a few bare trees, hoofprints and wagon-ruts in the foreground earth suggesting an
army on the move before dawn. Calm, cold, wide-open — unlike Torna's ridge, Pratapgad's dark approach or
Jaoli's crowding jungle, this is a battle with room to maneuver and nowhere to hide once the sun is up.
**Leave the middle band calm** (flat grass, soft haze) for the cards. No figures in the foreground.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/as_rustam_zaman` | [ ] |
| 2 | `cards/as_fazl_khan` | [ ] |
| B5 | `battlefields/kolhapur` | [ ] |

*Not in this batch: `sw_siddi_hilal` (see the flag above — blocked on a CONTESTED #29 source check, not
ready to paint). Also not in this batch (later Phase 2 chapters): Pavan Khind (Baji Prabhu, Shiva Kashid,
Siddi Masud), Chakan (Firangoji Narsala), Umberkhind (Kartalab Khan, Rai Bagan), the Lal Mahal raid
(Shaista Khan), Surat, and the Purandar treaty scene (Jai Singh, Diler Khan) — each gets its own batch once
its chapter is actually being built.*
