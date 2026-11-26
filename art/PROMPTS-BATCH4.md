# Art batch 4 — prompt sheet (Phase 2, chapter 6: Panhala and the Pass / Pavan Khind)

*For Pon. 4 card paintings and 1 battlefield painting. Written 26 Nov 2026 (session 9). Batch 3
(Kolhapur, ch5) still needs one piece — `sw_siddi_hilal` — before it's finished; this is the batch for
the chapter after that, chapter 6. You already painted the chapter's hero, `sw_bajiprabhu` (Baji Prabhu
Deshpande), a little early — no prompt needed for him here, he's already registered. Same format and
rules as `art/PROMPTS-BATCH1.md` — read that file's "How to use this sheet," safe-area spec and likeness
rules first; only what's chapter-specific is repeated here.*

## The story this chapter tells (for context, not to quote in-game)

Siddi Jauhar besieged Shivaji at Panhala from March 1660 (English-bought grenades, English gunners,
Netaji Palkar harassing from outside). On the night of 12–13 July, in the rain, Shivaji slipped out with
a small force for Vishalgad while Baji Prabhu Deshpande held the narrow Ghod Khind pass behind him,
pursued by Siddi Masud. Tradition adds that a barber, Shiva Kashid, rode out dressed as Shivaji to draw
the pursuit the wrong way, and that cannon shots from Vishalgad signalled Shivaji's safe arrival — both
are labelled TRADITION in the History panel, not HISTORY. `sw_shiva_kashid`'s own card text already says
so: *"TRADITION: he rode out dressed as the Raje to draw the pursuit."*

## What's the same as batch 1, what's different

- **Siddi Jauhar and Siddi Masud are Bijapur** — reuse the green-and-gold court palette (same as batch 3's
  Rustam Zaman/Fazl Khan note).
- **Shiva Kashid is Swarajya** — saffron-and-cream palette, same as `sw_` cards.
- `as_angrezi_gola` ("Grenades from Rajapur") is an **order card**, not a portrait — compose it like
  batch 1's object-centred orders (Torna hoard, Jijau's Counsel): the object filling the frame, a hint of
  hands or context around the edges, not a face.
- The battlefield is a **narrow monsoon-night mountain pass** — the opposite of Kolhapur's wide cold dawn:
  tight, dark, rain-lashed, claustrophobic.

## Format and safe-area specification

Same as batch 1 — unchanged. All character cards and the order card are **5:7 portrait**, 1500 × 2100
minimum. The battlefield is **16:9**, 2560 × 1440. Save to `art/source/cards/<id>.png` and
`art/source/battlefields/ghod_khind.png`; run `npm run assets` after.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Deccan and Maratha court miniatures: opaque watercolour and
> gouache on aged paper, fine brush outlines, rich flat colour fields with subtle shading, gold-leaf
> highlights, delicate patterned textiles; blended with a warm "living miniature" atmosphere (soft
> lamplight or low sun, depth, a little mist). **Palette (use the one that applies): Bijapur's court and
> army** (cards 1-2 below): deep green, gold, cream, a little crimson. **Swarajya** (cards 3-4 below):
> Sahyadri basalt grey, monsoon-cloud blue-grey, red laterite earth, saffron, deep teal and cream, never
> green (D-21). For the battlefield: add deep wet-stone greys and near-black greens — a night scene in
> rain, lit only by lightning or a few torches. Dignified, historically careful, painterly, no caricature,
> no gore. Paint to the edge of the picture (no deckled paper edge). **Format line (use the one that
> applies):** *Portrait 5:7: clear sky above the head, head top about a quarter of the way down, 3/4-length
> figure, lower quarter simple.* / *Landscape 16:9: calm middle band — here, a band of driving rain and
> dark rock instead of calm sky.*

## AVOID block (paste after every prompt — same as every batch)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no
> film or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no
> religious symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-07, D-10) — important for this chapter specifically

- No portraits survive for any of these four figures — dignity is the rule, same as every batch so far.
  Siddi Jauhar and Siddi Masud are **serious Abyssinian-origin commanders in Bijapur's service**, drawn
  with the same seriousness as any general on either side (D-05: the real mixture of both armies, no
  caricature of any community).
- **Baji Prabhu and Shiva Kashid both die in this chapter's history/tradition.** D-07 bars playable
  executions, massacres and reprisals — this isn't one of those; it's a defensive last stand and a decoy
  killed in the open, the same category as any battle death a card game already shows by a unit leaving
  play. **Do not depict a killing or a body in any painting.** Show Baji Prabhu's resolve (already
  painted) and Shiva Kashid's composure before the ambush, nothing past that moment.
- **Shiva Kashid is dressed to resemble Shivaji, but is not Shivaji** — this is the whole point of the
  tradition (an ordinary man who could pass for the Raje at a distance, in bad light, in the rain). Paint
  him in Swarajya royal dress similar in silhouette to how Shivaji is shown elsewhere in this project
  (turban, jama, sash), but give him his own ordinary face — a barber playing a part, not a copy of
  Shivaji's specific features from `sw_shivaji`'s painting. The resemblance is in the *staging* (the dress,
  the horse, the posture a pursuer would glimpse from a distance), not in making him look like a second
  Shivaji portrait.

---

## A · Cards

### 1. `as_siddi_jauhar` — Siddi Jauhar · legendary · *Besieger of Panhala*
*Basis: HISTORY [C-1660-PANHALA-SIEGE]. Raksha, ranged, chips away at the enemy fort every turn — a
patient siege commander, not a battlefield duelist.*
**Prompt:** A heavyset, composed Abyssinian-origin Bijapuri general in deep green and gold court armour,
standing at the edge of a gun emplacement overlooking a distant hill fort by day (Panhala, small and far
below), one hand resting on a long siege gun, watching and waiting rather than charging. Patient,
methodical, utterly unhurried — a man settling in for a long siege, not a quick battle.

### 2. `as_siddi_masud` — Siddi Masud · epic · *The Pursuer*
*Basis: HISTORY [C-1660-PAVANKHIND]. Vega — fast, relentless, the one chasing Shivaji's party toward
Vishalgad.*
**Prompt:** A lean, hard-riding Bijapuri cavalry officer in green and gold leaning low over his horse's
neck at full gallop, sword drawn, rain streaming off him, torchlight and lightning the only light in a
dark wet night, pursuing something just out of frame up a narrow track. Urgent, driving, single-minded —
the night's whole tension is in this one figure.

### 3. `sw_shiva_kashid` — Shiva Kashid · rare · *The Decoy*
*Basis: TRADITION [C-1660-PAVANKHIND]. Raksha, no attack — a shield, not a fighter: he draws the blow, he
doesn't strike one.*
**Prompt:** An ordinary-faced man — a barber, not a warrior, something plain and open in his expression —
dressed in a Swarajya Raje's saffron-and-cream finery and plumed turban, mounted and riding hard through
rain and darkness in the opposite direction from the real escape, glancing back once with quiet resolve
rather than fear. The dress is regal; the face underneath it is someone's neighbour, not a king — that gap
is the whole story of the card.

### 4. `as_angrezi_gola` — Grenades from Rajapur · rare · *Bought from the English*
*Basis: HISTORY [C-1660-PANHALA-SIEGE; see also C-1660-RAJAPUR]. Order card — object-centred, not a
portrait, per batch 1's convention for orders.*
**Prompt:** A small wooden crate half-open on churned siege-camp mud, packed straw, three or four iron
grenade-shells visible inside with their fuses, a lit slow-match coiled nearby, the suggestion of a
European trader's hand or sleeve at the very edge of frame (no face) — foreign gunpowder arriving at a
Deccan siege camp, no battle action, just the object and its implication.

---

## B · Battlefield

### B6. `ghod_khind` — The pass of Ghod Khind (Pavan Khind)
*Basis: HISTORY [C-1660-PAVANKHIND: "Shivaji slipped out of Panhala at night in rain... the Ghod Khind
(Gajapur) pass... fought hard... the enemy could not climb the pass"]. The opposite mood from Kolhapur
(B5) — narrow and dark instead of wide and bright.*
**File:** `art/source/battlefields/ghod_khind.png`, 2560 × 1440.
**Prompt:** A narrow mountain pass at night in driving monsoon rain: steep wet rock walls close on both
sides, a thin muddy track barely wide enough for a few men abreast, one or two torches guttering in the
rain throwing long unstable shadows, lightning catching the silhouette of spears braced across the
gap in the middle distance. Claustrophobic, wet, dark, defensible — a place built by the land itself for
a few to hold off many. **Leave the middle band simple** (dark rock, rain, no readable figures) for the
cards to sit over.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/as_siddi_jauhar` | [ ] |
| 2 | `cards/as_siddi_masud` | [ ] |
| 3 | `cards/sw_shiva_kashid` | [ ] |
| 4 | `cards/as_angrezi_gola` | [ ] |
| B6 | `battlefields/ghod_khind` | [ ] |

*Already painted for this chapter: `sw_bajiprabhu` (hero), registered. Still outstanding from batch 3:
`sw_siddi_hilal` (Kolhapur, ch5) — not part of this chapter, don't lose track of it. Not in this batch
(later Phase 2 chapters): Umberkhind (Kartalab Khan, Rai Bagan), the Lal Mahal raid (Shaista Khan), Surat,
and the Purandar treaty scene (Jai Singh, Diler Khan) — each gets its own batch once its chapter is
actually being built.*
