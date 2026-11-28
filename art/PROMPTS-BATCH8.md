# Art batch 8: prompt sheet (Phase 2, chapter 9: The Lal Mahal)

*For Pon. 3 card paintings, 1 optional fourth, and 1 battlefield. Written 28 Nov 2026 (session 14). Batch 7
(Umberkhind) is painted, merged and in the game, and chapter 8 is playable. This sheet is for chapter 9, the
night raid on the Lal Mahal. Same format and rules as `art/PROMPTS-BATCH1.md`: read its "How to use this
sheet", safe-area specs and likeness rules first. Only what is new is written here. Chapter 9 also needs a
new engine piece (Ratra, the night) before it is playable. Painting ahead is fine.*

## The story this chapter tells (context only, not for quoting in-game)

Shaista Khan had made the Lal Mahal in Pune his home: the mansion where Shivaji grew up and was married
(`C-1640-PUNE`). On the night of 5–6 April 1663, Shivaji led a small chosen band into Pune and broke into the
Lal Mahal. Shaista Khan escaped through a window, wounded in the hand. Soon afterwards the emperor moved him
to Bengal. (`C-1663-LALMAHAL`. Tradition says the band entered Pune disguised as a wedding procession. The
game labels that as tradition and does not paint it as fact.) Shivaji's intelligence chief, Bahirji Naik, is
credited with the information behind raids like this one (`C-X-BAHIRJI`: his role is history; his
particular exploits are tradition).

## What is the same as batch 7, what is different

- **Same two palettes**: Mughal (crimson, sandstone, ivory, gold, lapis; no green, no saffron) and Swarajya
  (basalt grey, laterite, saffron, deep teal, cream; never green).
- **It is night.** This is the first night chapter. Use a night palette over both: deep indigo and
  blue-black, with warm amber lamplight and torchlight as the only light, and silver moonlight on edges.
  Keep it readable, not muddy: each painting needs one clear lit area.
- **Pune, not the hills.** This is a town: walled mansions (wadas) of brick and timber, narrow lanes, a camp
  of the viceroy's guards around the house. No hill fort, no forest.
- **What must never be shown (D-07):** people were killed in the raid, including Shaista Khan's son. **No
  killing, no body, no wound, no blood, no women of the household** in any painting. The raid is shown by
  the night, the wall, the lamp and the empty courtyard, never by its victims. Shaista Khan's hand injury
  is not painted (his card, painted in batch 6, is reused as it is).
- `sw_ratri_halla` is an **order card**: compose it object-centred, like batch 1's orders, with **no
  figures**.
- The Gad card (`mg_gad_lalmahal`) is **1:1 square**, same safe area as the batch 1 and batch 6 Gads.

## Format and safe-area specification

Same as batch 1, unchanged.
- Character and order cards: **5:7 portrait**, 1500 × 2100 minimum.
- Gad: **1:1 square**, 1536 × 1536 (minimum 1080 × 1080): main structure in the middle three-fifths, about
  8% margin, top 12% sky, bottom 15% simple.
- Battlefield: **16:9**, 2560 × 1440.
- Save to `art/source/cards/<id>.png` and `art/source/battlefields/lalmahal.png`, then run `npm run assets`.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Deccani and Mughal court miniatures: opaque watercolour and
> gouache on aged paper, fine brush outlines, richly patterned textiles, delicate gold-leaf highlights,
> subtle shading; blended with a warm "living miniature" atmosphere (soft light, depth, a little haze).
> **A night scene:** deep indigo and blue-black, warm amber lamplight and torchlight as the only light,
> silver moonlight on edges, one clearly lit area. **Palette (use the one that applies): Mughal** (the Lal
> Mahal and the guard): imperial crimson and vermilion, sandstone buff, ivory, gold, a touch of lapis blue;
> never green, never saffron. **Swarajya** (Bahirji and the raid): basalt grey, red laterite earth,
> saffron, deep teal and cream, never green (D-21). Dignified, historically careful, painterly, no
> caricature, no gore. Paint to the edge of the picture (no deckled paper edge). **Format line (use the one
> that applies):** *Portrait 5:7: clear night sky above the head, head top about a quarter of the way down,
> 3/4-length figure, lower quarter simple.* / *Square 1:1: one strong silhouette, 8% margin, sky above,
> simple ground below.* / *Landscape 16:9: calm middle band.*

## AVOID block (paste after every prompt, same as every batch)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no film
> or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no religious
> symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-07, D-10, CLAUDE.md)

- **Bahirji Naik**: no portrait survives and little is known about his life; the sources even disagree
  about his community. Paint his *work*, not an identity: an alert, ordinary-looking man in plain,
  unremarkable clothes who could pass anywhere in a town. No caste or community markers, no film
  likeness (there are recent films about him: do not copy any actor).
- **The Lal Mahal** in 1663 does not survive (the building in Pune today is a modern reconstruction). Paint
  a believable 17th-century Deccani town mansion, not a copy of the modern building.
- The guards are **serious soldiers doing their duty**, not fools asleep at their posts or comic figures.

---

## A · Cards

### 1. `sw_ratri_halla`: Ratri Halla · rare · order · *Night Raid*
*Basis: HISTORY [C-1663-LALMAHAL]. Order: deal 3 damage to the enemy Durg; your units on the Yudhbhumi are
hidden. Object-centred. **No figures.***
**Prompt:** Night inside the walled compound of a Deccani town mansion: a narrow gap freshly broken through
an old brick wall, loose bricks and dust on the ground below it, a coil of rope and a small covered lamp
set down beside the gap, its amber light spilling through the opening into a dark courtyard beyond. In the
courtyard, an empty carved timber veranda and a single curtain moving in the wind; a crescent moon above
the roofline. Silent, tense, the moment just after someone passed through. Objects and architecture only:
no people anywhere in the picture.

### 2. `mg_gad_lalmahal`: The Lal Mahal · rare · Gad (enemy-held) · *The Viceroy's Quarters*
*Basis: HISTORY [C-1640-PUNE, C-1663-LALMAHAL]. Gad, held by the Mughals in this chapter. **1:1 square.***
**Prompt:** A 17th-century Deccani town mansion at night, seen from a little above across its walled
compound: two storeys of red-brown brick with carved dark timber balconies and screens, a heavy timber gate
in the outer wall, a small inner courtyard, crimson Mughal awnings and a few lanterns hung by the viceroy's
household, guards' tents and a cooking fire against the outer wall. Deep indigo sky with stars, warm lamp
glow in two upper windows. One strong square silhouette: a home taken over as a headquarters, calm and
well-guarded. No hills, no fort walls, no people at the windows.

### 3. `sw_bahirji`: Bahirji Naik · epic · *Chief of Intelligence*
*Basis: HISTORY [C-X-BAHIRJI: his role]. Deploy: reveal the enemy's hidden traps and draw a card (the
effect is the game's own; no exploit of his is claimed).*
**Prompt:** An alert, lean man in his thirties, in plain cream and faded saffron cotton clothes and a
simple turban, a cloth bundle over one shoulder like any traveller, leaning against a wooden post at the
edge of a lamplit town lane at dusk. His face is ordinary and calm, but his eyes are sharp, watching
something out of the picture; behind him, small and unaware, two crimson-clad guards stand at a mansion
gate under a lantern. Quiet, patient, invisible in a crowd: a man whose whole skill is to be overlooked.

### 4. `mg_ahadi`: Palace Guard · common · *The Viceroy's Watch* — **optional**
*Basis: GENERIC (no chronology claim). A plain guard unit for the Mughal deck in this chapter; the chapter
runs without it (it will show the placeholder frame until painted). Paint it last, or skip it.*
**Prompt:** A Mughal household guard on night watch in a crimson quilted coat and a plain turban, a straight
sword at his side and a long lantern-pole in one hand, standing at a timber gate in a brick wall under a
hanging lantern, the lamplight on his face, the night dark and blue behind him. Steady, awake, dutiful: an
ordinary soldier doing his job well.

---

## B · Battlefield

### B8. `lalmahal`: Pune at night (chapter 9)
*Basis: HISTORY [C-1663-LALMAHAL: night of 5–6 April 1663, in Pune]. The first night battlefield: dark,
close, still, lit only by lamps.*
**File:** `art/source/battlefields/lalmahal.png`, 2560 × 1440.
**Prompt:** A 17th-century Deccani town at night, seen from a low rooftop: in the distance, the walled
compound of a two-storey brick-and-timber mansion with lantern-lit windows and crimson awnings; in the
middle distance, an open dusty square between the houses, empty, washed in pale moonlight; at the sides,
dark roofs, a narrow lane, a few small guard fires and lanterns. Deep indigo sky with stars and a crescent
moon. Still, hushed, waiting. **Leave the middle band calm** (the open moonlit square) for the cards. No
figures in the foreground.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/sw_ratri_halla` | [x] |
| 2 | `cards/mg_gad_lalmahal` (square) | [x] |
| 3 | `cards/sw_bahirji` | [x] |
| 4 | `cards/mg_ahadi` (optional) | [x] |
| B8 | `battlefields/lalmahal` | [x] |

*Names to keep exactly as written (they are the card ids; a typo creates a dead entry): `sw_ratri_halla`,
`mg_gad_lalmahal`, `sw_bahirji`, `mg_ahadi`, `lalmahal`.*

*Not in this batch (later chapters): Surat (Inayat Khan, the English factory), and the Purandar treaty scene
(Jai Singh, Diler Khan, Murarbaji Deshpande).*
