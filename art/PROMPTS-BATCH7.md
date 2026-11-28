# Art batch 7: prompt sheet (Phase 2, chapter 8: Umberkhind)

*For Pon. 4 card paintings and 1 battlefield. Written 28 Nov 2026 (session 13). Batch 6 is painted,
merged and in the game, and chapter 7 (Chakan) is playable. This sheet is for chapter 8, the trap at
Umberkhind. Same format and rules as `art/PROMPTS-BATCH1.md`: read its "How to use this sheet", safe-area
specs and likeness rules first. Only what is new is written here. Chapter 8 is not built yet; painting
ahead of the engine saves time, as it did for Chakan.*

## The story this chapter tells (context only, not for quoting in-game)

After Chakan, Shaista Khan sent the Uzbek general Kartalab Khan to take the North Konkan. With him rode
Rai Bagan, a woman commander from a Berar deshmukh family. Misled about where Shivaji was, Kartalab Khan
took the little-used Umberkhind pass down towards Pen. In the forest of the pass, Maratha infantry and
light cavalry closed in on his column. On Rai Bagan's advice he asked for terms. Shivaji let the army go
after it gave up its baggage. Netaji Palkar was then posted to watch the Mughals.
(`C-1661-UMBERKHIND`. The date is disputed: early 1661, between mid-January and early February, CONTESTED
#9. Force sizes vary wildly between sources, so the game and these paintings show no numbers.)

## What is the same as batch 6, what is different

- **Same two palettes as batch 6.** The Mughal palette is for Kartalab Khan and Rai Bagan. The Swarajya
  palette is for the ambush and Netaji. Never green on either side; no saffron on the Mughal cards.
- **It is the dry season** (January to February). The Sahyadri forest is dusty olive and brown, with dry
  leaves and pale light through the trees. This is the opposite of Chakan's monsoon grey.
- **The place is a narrow forest pass coming down a steep ghat.** It has dense trees, steep slopes on both
  sides and a stony track. Do not paint an open plain, a fort or a river crossing.
- **Nobody dies in this story.** The Mughal army was surrounded and let go. Paint tension and
  surprise, never a fight with bodies (D-07). Kartalab Khan and Rai Bagan are shown with dignity: they made
  the sensible choice, and that is how the History note tells it.
- `sw_khind_ambush` is a **yantra** (a hidden trap card). Compose it as an object-centred picture, as with
  batch 1's orders, with **no figures**.

## Format and safe-area specification

Same as batch 1, unchanged.
- Character and yantra cards: **5:7 portrait**, 1500 × 2100 minimum.
- Battlefield: **16:9**, 2560 × 1440.
- Save to `art/source/cards/<id>.png` and `art/source/battlefields/umberkhind.png`, then run
  `npm run assets`.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Deccani and Mughal court miniatures: opaque watercolour and
> gouache on aged paper, fine brush outlines, richly patterned textiles, delicate gold-leaf highlights,
> subtle shading; blended with a warm "living miniature" atmosphere (soft light, depth, a little dust in
> the air). **Palette (use the one that applies): Mughal army** (cards 1-2): imperial crimson and
> vermilion, sandstone buff, ivory, gold, a touch of lapis blue; never green, never saffron. **Swarajya**
> (cards 3-4): Sahyadri basalt grey, red laterite earth, saffron, deep teal and cream, never green (D-21).
> For the forest: dry-season olive, ochre and brown leaves, pale gold light. Dignified, historically
> careful, painterly, no caricature, no gore. Paint to the edge of the picture (no deckled paper edge).
> **Format line (use the one that applies):** *Portrait 5:7: clear sky or open canopy above the head,
> head top about a quarter of the way down, 3/4-length figure, lower quarter simple.* / *Landscape 16:9:
> calm middle band.*

## AVOID block (paste after every prompt, same as every batch)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no film
> or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no religious
> symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-07, D-10, CLAUDE.md)

- No portrait survives for any of these four people. Paint them as serious, capable people, with the same
  dignity as Shaista Khan and Firangoji in batch 6.
- **Kartalab Khan was an Uzbek general in Mughal service.** Show a Central Asian noble in imperial
  dress: no caricature, no cruelty, no foolishness. He was misled, not stupid.
- **Rai Bagan is a woman commander in her own right.** The sources disagree on her family details, so the
  card does not call her anyone's wife or widow. Paint a mature Deccani noblewoman in practical riding
  dress (a long riding coat, a draped head-cloth, jewellery kept modest), mounted and composed, giving
  counsel. She is **not** glamorous, not a warrior pin-up, not armoured like a knight.
- **Netaji Palkar** was Shivaji's Sarnaubat (cavalry chief) at this time. He later served the Mughals for a
  few years (1666). This card shows him in 1661 and must not hint at that later story either way. Paint a
  strong, experienced cavalry commander in the Swarajya palette.
- **No Shivaji in this batch.** His painting (`sw_shivaji`) already exists and is reused.

---

## A · Cards

### 1. `mg_kartalab_khan`: Kartalab Khan · legendary · *Uzbek General*
*Basis: HISTORY [C-1661-UMBERKHIND]. The Mughal commander of the column. Card text: "He chose the quiet
road down the ghat."*
**Prompt:** A dignified Uzbek general in Mughal imperial service, in his forties, with a trimmed dark beard
and a Central Asian face, wearing a crimson-and-gold jama, a lapis-blue sash and a tall turban with a
small jewelled aigrette, mounted on a strong grey horse at the head of a column on a narrow stony track
going down through a dry Sahyadri forest. He has reined in and is looking up at the steep wooded slopes on
both sides, one hand raised to halt the riders behind him. Alert, intelligent, suddenly uneasy: a capable
commander who has just realised the road is too quiet. Banners of crimson cloth (no writing) behind him.

### 2. `mg_rai_bagan`: Rai Bagan · epic · *Commander*
*Basis: HISTORY [C-1661-UMBERKHIND: on her advice the Mughal commander asked for terms]. Card text:
"Vega. She saw the trap first."*
**Prompt:** A mature Deccani noblewoman commander in the Mughal army, in a long crimson-and-ivory riding
coat with gold borders, a draped ivory head-cloth, modest gold jewellery, a sheathed sword at her side,
mounted side-on on a bay horse in a dry forest pass. She has turned in the saddle to look back up the
track and is speaking firmly to someone out of the picture, one gloved hand open in a gesture of counsel.
Steady, clear-eyed, older than the young riders around her: the person in the column who sees the danger
plainly and says so. Dappled pale light through olive and brown leaves.

### 3. `sw_khind_ambush`: Khind Ambush · rare · yantra · *Stones from the Pass*
*Basis: HISTORY [C-1661-UMBERKHIND: the ambush in the forest of the pass]. Yantra: when an enemy unit
advances to the Yudhbhumi, it takes 3 damage. Object-centred, per batch 1's orders. **No figures.***
**Prompt:** Looking down a steep, narrow forest pass from high in the trees on one slope: in the foreground,
the barrels of two matchlocks resting on a mossy rock among dry leaves, a slow-match glowing faintly, a
saffron cloth tied to a branch as a signal, a pile of loose boulders held back by a wedged log at the edge
of the slope; far below, the stony track winding down through the forest, empty and quiet, a thin haze of
dust where something is coming. Still, silent, waiting: the moment before the trap closes. Objects and
landscape only: no people anywhere in the picture.

### 4. `sw_netaji`: Netaji Palkar · epic · *Sarnaubat*
*Basis: HISTORY [C-1660-PANHALA-SIEGE, C-1661-UMBERKHIND: posted to watch the Mughals after the pass].
Vega, ganim; Deploy: an enemy front unit loses attack. **Optional for this chapter**: it can wait, but
he appears in several later chapters, so it is worth painting now.*
**Prompt:** A powerful Maratha cavalry commander in his prime, broad-shouldered, with a heavy moustache
and a weathered face, in a saffron jama with a deep teal shoulder-cloth and a cream turban, a curved sword
and a lance, mounted on a dark horse on a ridge above a forest pass in dry-season light, looking out over
the valley towards the plain beyond. A few light horsemen wait behind him. Confident, watchful, restless:
the general of the fast horse, set to guard the road.

---

## B · Battlefield

### B7. `umberkhind`: the forest pass down to Pen (chapter 8)
*Basis: HISTORY [C-1661-UMBERKHIND: a narrow forested pass down the ghat towards Pen, dry season]. The
opposite mood from Chakan (flat, grey, soaked): tight, steep, sunlit, dry and very quiet.*
**File:** `art/source/battlefields/umberkhind.png`, 2560 × 1440.
**Prompt:** A narrow Sahyadri forest pass in the dry season, seen from slightly above: steep wooded slopes
rising on both sides in olive, ochre and rust-brown, tall trees with dry leaves, black basalt outcrops,
and a pale stony track winding down the middle of the valley towards a hazy glimpse of the Konkan lowland
far below. Pale morning light slants through the canopy with a little dust in the air. No fort, no river,
no village. **Leave the middle band calm** (the open track and soft haze) for the cards. No figures.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/mg_kartalab_khan` | [x] |
| 2 | `cards/mg_rai_bagan` | [x] |
| 3 | `cards/sw_khind_ambush` | [x] |
| 4 | `cards/sw_netaji` (optional now) | [x] |
| B7 | `battlefields/umberkhind` | [x] |

*Names to keep exactly as written (they are the card ids; a typo creates a dead entry):
`mg_kartalab_khan`, `mg_rai_bagan`, `sw_khind_ambush`, `sw_netaji`, `umberkhind`.*

*Not in this batch (later chapters): the Lal Mahal night raid, Surat, and the Purandar treaty scene (Jai
Singh, Diler Khan).*
