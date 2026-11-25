# Art batch 1 — prompt sheet (Phase 1 vertical slice)

*For Pon. 20 card paintings and 2 battlefield paintings: everything the first three chapters need
(tutorial, Torna, Pratapgad). Written 24 Nov 2026 (session 6). Every historical detail below comes from
`history/CHRONOLOGY.md` (IDs in brackets); anything not in the chronology is marked **GENERIC** (a type
of soldier, no claim about a person or event) or **INVENTED** (the game's own scene). Nothing here is
taken from the book's sketches.*

## How to use this sheet

1. Paint (or generate) each picture with its prompt: **STYLE block first, then the subject prompt, then the AVOID block.**
2. Save the master as PNG: cards in `art/source/cards/<card id>.png`, battlefields in `art/source/battlefields/<name>.png`.
3. Run `npm run assets` (it makes the small web files). The card shows the painting automatically; a card without a
   painting keeps its drawn placeholder, so you can add pictures in any order and the game keeps working.
4. Tick the box in the tables at the end.

## Format and safe-area specification (updated 24 Nov 2026)

There are three picture formats. **Always generate in the exact ratio**; the game crops by "cover" (it never stretches), so a wrong ratio is cut.

| Kind | Which pictures | Ratio | Master size (PNG, sRGB, no transparency) | File name |
|---|---|---|---|---|
| **Character and order cards** | Nos. 1-12 and 17-20 (all but the forts) | **5:7 portrait** | **1500 × 2100** (minimum 1080 × 1512) | `art/source/cards/<id>.png` |
| **Fort (Gad) cards** | Nos. 13-16 (`sw_gad_torna`, `sw_gad_rajgad`, `sw_gad_pratapgad`, `as_gad_torna_held`) | **1:1 square** | **1536 × 1536** (minimum 1080 × 1080) | `art/source/cards/<id>.png` |
| **Battlefields** | B1 `torna`, B2 `pratapgad` | **16:9 landscape** | **2560 × 1440** | `art/source/battlefields/<name>.png` |

`npm run assets` turns cards into 720-px-wide web files (5:7 → 720 × 1008, forts → 720 × 720) and battlefields into 2560 px wide.
Paint to the very edge of the picture: **no deckled or stained paper edge, no border, no frame.**

### 5:7 character and order cards: safe area

The card shows the painting in an arched window, so **only the middle of the 5:7 picture is seen** (about 68 % of its height; the sides are
seen in full). Measured from the top of the picture:

| Zone (top = 0 %) | What happens | What to put there |
|---|---|---|
| **0 – 10 %** | **cut off** on the card | plain sky or background only |
| **10 – 22 %** | visible; the arch's rounded top covers the two top corners | **clear space above the head**: sky, mist, a flag or a distant fort; nothing important in the top corners |
| **head top at 22 – 30 %**, eyes at about 30 – 36 % | visible, upper-middle of the window | **the head, centred or slightly off-centre**; leave at least ~8 % of the height of empty space above the headgear or plume |
| **30 – 77 %** | visible | face, shoulders, chest, hands, the weapon or object that identifies the card |
| **77 – 100 %** | **cut off** on cards (and 83 – 100 % on board tokens) | ground, feet, hem: **nothing that matters**; the figure may continue down, but a 3/4-length pose (knees up) is better than a full-length one |
| **left and right 6 %** | visible but near the frame | keep faces, hands and weapon tips out of the extreme edges |

The same painting is also the small **board token** (a 340 × 420 card with a slightly squarer window), so **the face, the main weapon and the colour of
the dress must read at thumbnail size**: strong silhouette, one clear colour accent (the saffron sash), no tiny details that carry meaning.
Orders and objects (Torna hoard, Wagh Nakh, Jijau's counsel) follow the same zones with the object centred at 35 – 65 %.

### Fort (Gad) cards: safe area (square)

The whole fort should be readable as one shape. Put the **main structure (the citadel, the gate or the tallest bastion) in the middle three-fifths**,
keep a **margin of about 8 %** on every side (the frame will cover the edges), leave the **top 12 % as sky** (for the flag and a clear silhouette) and the
**bottom 15 % simple** (ground, mist or slope: the title ribbon overlaps it). One fort, one strong silhouette. The captured and the neglected Torna (nos. 13 and 16) must be **the same
view in the same position** so the two cards match when flipped.

### Battlefields: safe area (16:9)

Wide **2560 × 1440**. Cards and the Durg sit over the picture, so keep the **middle horizontal band (about 35 % to 70 % of the height) calm**
(soft ground, mist) and put the drama in the sky and the top and bottom thirds. Keep the **left and right 5 %** free of anything important. No figures
in the middle band.

**Order I suggest:** 1 Shivaji Raje (it fixes his face for everything else) → 2 Torna (card + battlefield) → 3 the Swarajya soldiers →
4 the Adilshahi cards → 5 Pratapgad pieces.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Deccan and Maratha court miniatures (Bijapur school, Maratha court portraits): opaque
> watercolour and gouache on aged paper, fine brush outlines, rich flat colour fields with subtle shading, gold-leaf highlights, delicate
> patterned textiles; blended with a warm "living miniature" atmosphere (soft lamplight or low sun, depth, a little mist). Palette: Sahyadri
> basalt grey, monsoon-cloud blue-grey, red laterite earth, saffron, deep teal and cream. Dignified, historically careful, painterly, no
> caricature, no gore. Paint to the edge of the picture (no deckled paper edge). **Format line (use the one that applies):** *Portrait 5:7: clear sky above the head, head top about a quarter of the way down, 3/4-length figure, lower quarter simple.* / *Square 1:1: one strong silhouette, 8 % margin, sky above, simple ground below.* / *Landscape 16:9: calm middle band.*

For **Adilshahi** pictures add: *"Bijapur school colours: deep green lacquer, lavender-grey, gold, ivory marble; Deccani court elegance."*

## AVOID block (paste after every prompt)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no film or television likeness of any real
> person, no statue-like or cartoon faces, no blood or gore, no religious symbols used as a banner of one faith against another, no modern objects.

## Likeness rules (D-05, D-10, CLAUDE.md)

- **Shivaji Raje** is drawn from the period portraits made in his lifetime or soon after (for example the 1680s portrait in the British
  Library). If your tool accepts a reference image, give it that portrait (public domain) and nothing else. Never reference a film, TV
  actor, modern statue or the sketches in Purandare's book.
- Enemies and allies alike are drawn with the **same dignity** as the heroes: serious, capable people.
- Show the real mixture of an army: faces, dress and caps differ. Do not turn any army into one community.
- **Shivaji's clothes are never teal or green** (D-21): saffron, yellow, cream, orange, red or maroon only. Green belongs to Bijapur.
- Nothing may show a killing; the Pratapgad pieces show the **weapons and the tension**, never the blow.

---

## A · Swarajya cards (`sw_`)

### 1. `sw_shivaji` — Shivaji Raje · legendary · *Raje of the Maval*
*Basis: HISTORY [C-1630-BIRTH, C-1646-TORNA, C-1659-PRATAPGAD]. This is the character-defining picture: do it first and keep it as the reference for every other card.*
**Prompt:** A young man in his twenties, Shivaji Raje, in profile and three-quarter view like a 17th-century court portrait: dark
moustache and short trimmed beard, calm, watchful eyes, a plain turban with one jewel and a short plume, a simple long jama coat in
saffron-yellow with an orange sash (**never teal or green: D-21**), a straight sword at his side. He stands on a stone rampart of a hill fort at dawn, one hand resting on
the parapet, the Sahyadri ridges and morning mist behind him, a small saffron pennant lifting in the wind. Quiet authority, not a pose
of triumph. Rich but not royal dress (he is a jagirdar's son, not yet a king).

### 2. `sw_mavla` — Mavla · common · *Hill Infantry*
*Basis: GENERIC [C-X-ARMY: the Mavle are the foot soldiers of the western hills and the fort garrisons].*
**Prompt:** A lean hill soldier of the Maval valleys on a rocky forest path: simple cotton turban, short coat, dhoti, a round shield on
his back and a curved sword in hand, barefoot or in light sandals, quick and alert, crouched as if about to melt into the trees. Mist in
the valley behind, a fort silhouette on the ridge. He looks like a farmer made into a mountain fighter.

### 3. `sw_havaldar` — Havaldar · common · *Mavla Officer*
*Basis: GENERIC [C-X-ARMY: the rank ladder naik, havaldar, jumladar, hazari].*
**Prompt:** A Mavle officer, older and steadier than the common soldier, short grey-flecked beard, a better turban and a sash across
the chest, a sword and a small baton or whistle-less signal staff, standing on a fort stair giving a hand signal to unseen men below.
Same hill-country dress as the Mavla, slightly finer. Calm command, not a parade general.

### 4. `sw_hetkari` — Hetkari · common · *Konkan Matchlock*
*Basis: GENERIC [C-X-ARMY: Hetkari are Konkan men, noted matchlock marksmen].*
**Prompt:** A Konkan marksman kneeling on one knee behind a laterite boulder, a long matchlock musket resting on the stone, a slow
match glowing, coastal palm trees and red earth behind, a cloth wrapped round his head against the sun. Concentration, steady hands.
Warm red-laterite palette. Ranged unit: show the musket clearly.

### 5. `sw_bargir` — Bargir · common · *State Cavalry*
*Basis: GENERIC [C-X-ARMY: bargirs are given horse and arms by the state].*
**Prompt:** A cavalryman galloping across a dry plateau on a lean bay horse, sword raised but not striking, dust behind him, a plain
uniform-like coat and turban, a saddle blanket in saffron, one of several riders just visible behind. Speed and discipline. The horse is
the focus of the lower half; the rider's face is clear in the upper half.

### 6. `sw_shiledar` — Shiledar · common · *Cavalry on his own horse*
*Basis: GENERIC [C-X-ARMY: shiledars bring their own horse and arms].*
**Prompt:** A proud independent horseman on a fine grey horse, richer clothing than the bargir (embroidered coat, jewelled turban pin, a
decorated sword hilt and a lance), reining in on a hill track, one hand on his hip, glancing back as if waiting for a signal. Confident,
a little swagger. A fort on a far crag.

### 7. `sw_herkari` — Herkari · common · *Scout*
*Basis: GENERIC [C-X-BAHIRJI: Shivaji's intelligence network].*
**Prompt:** A scout in plain countryman's dress, a rough blanket over one shoulder and a staff in hand, crouched at the edge of a forest
track listening, watching a distant camp's cooking fires below in the valley dusk. Wary, quiet, unremarkable on purpose. Cold blue dusk
with small orange fires far away.

### 8. `sw_gopinath` — Gopinath Pant · rare · *Envoy*
*Basis: HISTORY [C-1659-AFZAL-MARCH: Shivaji's envoy was Gopinath Pant]. Purandare (Vol. I, p. 165) already names a Gopinath among Shivaji's advisers in 1647 (PEOPLE.md: master spelling "Gopinath Pant").*
**Prompt:** A thoughtful court envoy in a plain clean turban and long white coat, a folded letter in one hand, walking down a forest
path between tall trees towards a distant tent pavilion in a clearing, mist in the trees. Mature, quiet, careful. No weapon in sight
except a small dagger at the sash. He is a diplomat on a dangerous errand.

### 9. `sw_jijau_counsel` — Jijau's Counsel · rare · order · *Rajmata Jijabai*
*Basis: HISTORY [C-1630-BIRTH, C-1640-PUNE: Jijabai, daughter of Lakhuji Jadhavrao, lived in Pune with Shivaji].*
**Prompt:** Jijabai, a dignified mature woman in a plain nine-yard sari with her head covered, seated on a low cushion in an evening
courtyard in Pune, a small oil lamp beside her and a cloth map spread on the floor, speaking gravely to a young Shivaji who sits
listening. Intimate, lamplit, warm. Her face carries strength and calm, not sorrow or piety-for-show.

### 10. `sw_dadoji` — Dadoji's Lessons · common · order · *Dadoji Kondadeo*
*Basis: CONTESTED [C-1640-PUNE; CONTESTED.md #6; D-15: shown as Shivaji's teacher, as in Purandare Vol. I pp. 159-165; the History panel notes the dispute].*
**Prompt:** An elderly administrator, Dadoji Kondadeo, with a white beard and a simple scholar's turban, seated at a low desk with
ledgers and rolled scrolls, pointing out something on a scroll to a boy Shivaji in plain clothes who kneels beside him, eager. A window
onto fields of the Pune country behind them. Patient, exacting, kindly. Do not add halos, saint imagery or any text on the scrolls.

### 11. `sw_torna_hoard` — Torna's Treasure · rare · order · *Found in the Ruins*
*Basis: HISTORY [C-1646-TORNA, C-1646-TORNA-FORT: a pot of treasure dug up during repairs; not a coin taken].*
**Prompt:** Stone-masons repairing a hill-fort rampart at Torna; a clay pot cracked open in the rubble spilling gold coins in a sunbeam;
several Mavle workers standing round it, astonished, none reaching for it. The saffron flag on a gate in the background. A sense of
a lucky find and of discipline. Coins plain, no inscriptions legible.

### 12. `sw_wagh_nakh` — Wagh Nakh · epic · order (Shakti) · *The Tiger Claw*
*Basis: HISTORY [C-1659-PRATAPGAD: a bagh nakh (tiger claw) concealed on his left arm and a dagger in his right hand; S-PURANDARE pp. 276-277: claws worn on the fingers with the hooks facing the palm, and a curved dagger (bichwa) hidden in the sleeve]. What happened in the pavilion is not known: show the weapon, never the act. Updated 24 Nov 2026: the book's details fit the prompt below; add the curved dagger rather than a plain one if you like.*
**Prompt:** A close still-life of a wagh nakh, a curved row of four steel claws on a small bar with two finger-rings, held in an open
left palm half hidden by a loose sleeve; behind it, out of focus, the cream tent of a pavilion in a forest clearing and a plain dagger
resting in the other hand. Cool steel, lamplight on the claws, tense stillness. No blood, no figure's face.

### 13. `sw_gad_torna` — Torna (Prachandagad) · rare · Gad
*Basis: HISTORY per S-PURANDARE [C-1646-TORNA-FORT; renamed Prachandagad in C-1646-TORNA]. Shows the captured fort.*
**Prompt:** Torna fort seen from the Kanad valley at morning: a very tall, broad hill fort with two terraces along the ridge; on the
higher left terrace a huge rounded rock on the crest shaped like an upturned oil vessel (Budhla machi), on the right the strongly walled
Zunzar machi with sheer black cliffs; a single narrow, steep path winding down. At the north gate (Binny Darwaza) a **saffron flag
flying**, guards on the walls, a small temple on the north side. Dark basalt, layered cliffs, early light. A fort that looks unreachable.

### 14. `sw_gad_rajgad` — Rajgad · epic · Gad
*Basis: HISTORY per S-PURANDARE [C-1647-RAJGAD, Purandare adds: three terraces (Padmavati, Suvela, Sanjeevani) and a citadel (Bale Killa), lake on the Padmavati terrace, gates].*
**Prompt:** The hill fort of Rajgad under construction and in use: three long walled terraces stretching out from a central citadel on
a high crag, scaffolding of bamboo on one wall, masons and carriers on the paths, a small lake glinting on the northern terrace, a
saffron flag over the citadel. Smoke from iron-smiths' fires. A fort becoming a capital: busy, ambitious, still raw. Late afternoon light.

### 15. `sw_gad_pratapgad` — Pratapgad · rare · Gad
*Basis: HISTORY [C-1656-PRATAPGAD-BUILT, S-PURANDARE pp. 226-227]. Updated 24 Nov 2026 with the book's description of the setting.*
**Prompt:** A fortress with a stone citadel crowning a high, forested Sahyadri spur, huge mountain ridges rising close behind it to the east, sheer drops on its north and south sides, and deep green valleys opening to the west; the forest below so dense that even an elephant could hide in it. Ramparts follow the contour of the hill, a saffron flag on the highest bastion, small ponds and a modest stone Shiva temple half-hidden among creepers on a terrace inside the walls, low cloud filling the valley below. Late autumn (early winter) light, cold and clear, mist at the base. Strong and quiet.
**Changed from the first version (if you have already painted it):** the cliffs on two sides, the mountains behind and the very dense forest are new; the rest is the same.

---

## B · Adilshahi cards (`as_`) — add the Adilshahi style line

### 16. `as_gad_torna_held` — Torna (held for Bijapur) · rare · Gad
*Basis: HISTORY per S-PURANDARE [C-1646-TORNA-FORT: Bijapur had neglected the fort]. The same view as no. 13, before it was taken: a pair for the flip.*
**Prompt:** The same view of Torna as the captured version (same ridge, same two terraces, the same crest rock), but **neglected**:
no flag on the gate, empty ramparts, a few crumbling battlements, weeds on the walls, one faded banner hanging limp, thin morning mist, no
people. It looks grand and abandoned. Cooler, greyer light than the captured version.

### 17. `as_afzal_khan` — Afzal Khan · legendary · *General of Bijapur*
*Basis: HISTORY [C-1659-AFZAL-MARCH, C-1659-PRATAPGAD]. Dignity rule D-05: a formidable veteran general. The chronology has no description, but Purandare (p. 235) describes him as very tall and broad, an imposing presence: use that, with dignity (no demonic look, no inventing a scar). Updated 24 Nov 2026.*
**Prompt:** A veteran Bijapur general, very tall and broad-shouldered, an imposing presence, mature and weathered, with a full dark beard, in rich court-soldier dress: a quilted coat over mail, a
jewelled turban, a curved sword at his belt, standing at the entrance of a large green-and-gold pavilion with attendants and a small
escort behind him, looking out over a forest clearing with calm, intelligent confidence. Authority, experience, an unreadable face. Not a
villain: a serious commander with a serious mission.

### 18. `as_hasham` — Adilshahi Hasham · common · *Household Infantry*
*Basis: GENERIC.*
**Prompt:** A disciplined foot soldier of the sultan's household in a green quilted coat and a neat turban with a small brass badge, a
round shield and a straight sword, standing upright on a palace-fort wall at Bijapur, domes of the city blurred behind. Well-drilled,
steady, proud.

### 19. `as_gaja` — Adilshahi Gaja · rare · *War Elephant*
*Basis: GENERIC.*
**Prompt:** A large armoured war elephant with a painted forehead and a green-and-gold caparison, a mahout seated on the neck and a small
howdah behind, advancing slowly across a dusty plain with a standard bearer walking beside it. Massive and measured, not rampaging.
Low sun, dust.

### 20. `as_topkhana` — Topkhana · common · *Artillery*
*Basis: GENERIC. Static: it cannot move to the front.*
**Prompt:** A great bronze cannon on a heavy wooden carriage emplaced on a stone bastion, gunners in green coats ramming and tending it, a
matchcord smoking, the bore pointed over a valley. Heavy, slow, immovable; the gun is the subject. Late afternoon light on the bronze.

---

## C · Battlefields (name = file name; the game loads them when the scenario is wired)

### B1. `torna` — Torna ridge (chapter 1)
*Basis: HISTORY per S-PURANDARE [C-1646-TORNA-FORT]; season sharad (autumn, after the rains) [chapters.json]. INVENTED: the fight itself; Purandare says there was none (CONTESTED #25).*
**File:** `art/source/battlefields/torna.png`, 2560 × 1440.
**Prompt:** A wide dawn panorama of the high ridge of Torna: sheer black basalt cliffs, the long fortified terrace along the crest with
its gate towers, a huge rounded crest rock on the left, a single steep path descending, the Kanad valley far below filling with mist,
slopes green and drying after the monsoon, clear washed autumn sky with a few high clouds. **Leave the middle band calm** (mist and soft
stone ground) for the cards. No people in the foreground.

### B2. `pratapgad` — The forest below Pratapgad (chapter 4)
*Basis: HISTORY [C-1659-PRATAPGAD: the meeting in a pavilion below the fort; November 1659]. Season hemanta (early winter). The battle itself is INVENTED.*
**File:** `art/source/battlefields/pratapgad.png`, 2560 × 1440.
**Prompt (updated with Purandare pp. 271, 275: the pavilion stands in a cleared space on a spur about halfway up the hill, richly furnished, with deep pearl-trimmed velvet drapes and four tall standing lamps):** A wide morning view of very dense Sahyadri forest (so thick that a hidden elephant would be hard to find) on a steep slope below a fort silhouetted on the ridge high above, with deep valleys falling away to one side and only narrow foot tracks visible; a cleared
level space in the middle with a large cream pavilion (a parley tent) standing alone, ground mist on the forest floor, tall trees, cold
early-winter light slanting through the trees. Tense and still. **Leave the middle band calm.** No figures near the pavilion.

---

## Reference photos from Pon (24 Nov 2026): what to take from them

Pon's phone screenshots (real fort photographs from the web) are **references for Pon's own painting only**: they are not copied into the repo,
and the paintings must be original (no tracing, no pasting a photograph). What the photos show, in words, so the prompts above can be checked against them:

- **Torna (nos. 13, 16, B1):** a long, saw-toothed ridge spine rather than a single tower: bare rock and grass slopes falling away on both sides, a
  stone wall that zigzags along the contour of the ridge with stepped sections, a bastion at the far end and a small flag at the top. It is green in the rains
  and golden-brown when dry (our season is autumn: green turning gold). Keep the "huge crest rock" from the prompt, but make the ridge **long and narrow**.
- **Pratapgad (no. 15, B2):** a narrow ridge path climbing a green, moss-covered spur to a tall square citadel with a stairway and a flagpole, walls
  twisting down both sides, cloud and mist all round. For 1659-60 leave out the modern shed roofs, railings and tourists. Add the **flagpole** and the **mossy walls**.
- **Rajgad (no. 14):** the photo shows a **round bastion with a wide stairway** climbing to it, on a sheer green ridge with a flag above. Use it for the
  citadel bastion. **Not** the aerial photo of the walled courtyard with a temple and water tank: that is **Raigad** (Jagdishwar temple, built 1670s),
  a different fort and a later time. Rajgad (1647) and Raigad (1674) are different forts: do not mix them.
- **Wagh nakh (no. 12):** the museum photographs show a short curved bar with **four curved claws and two finger-rings**: matches the prompt.
- **For later batches (not painted yet):** **Lohagad** (a black basalt hill, an arched gateway at the end of a wide stone stairway between high walls;
  taken in the 1657 northern Konkan campaign, C-1657-NORTH-KONKAN) and **Shivneri** (a square stone tower with a crenellated top and balcony windows, an arched
  stone gate with winding steps; birthplace, used for the opening chapter).
- **Do not use:** the modern paintings and posters in the search results that show Shivaji's face, the Afzal scene (any blow) or Jijabai: our rule is period portraits only (D-10)
  and no depiction of the act.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/sw_shivaji` | [x] |
| 2 | `cards/sw_mavla` | [x] |
| 3 | `cards/sw_havaldar` | [x] |
| 4 | `cards/sw_hetkari` | [x] |
| 5 | `cards/sw_bargir` | [x] |
| 6 | `cards/sw_shiledar` | [x] |
| 7 | `cards/sw_herkari` | [x] |
| 8 | `cards/sw_gopinath` | [x] |
| 9 | `cards/sw_jijau_counsel` | [x] |
| 10 | `cards/sw_dadoji` | [x] |
| 11 | `cards/sw_torna_hoard` | [x] |
| 12 | `cards/sw_wagh_nakh` | [x] |
| 13 | `cards/sw_gad_torna` | [x] |
| 14 | `cards/sw_gad_rajgad` | [x] |
| 15 | `cards/sw_gad_pratapgad` | [x] |
| 16 | `cards/as_gad_torna_held` | [x] |
| 17 | `cards/as_afzal_khan` | [x] |
| 18 | `cards/as_hasham` | [x] |
| 19 | `cards/as_gaja` | [x] |
| 20 | `cards/as_topkhana` | [x] |
| B1 | `battlefields/torna` | [x] |
| B2 | `battlefields/pratapgad` | [x] |

*Not in this batch:* card frames (drawn in code per faction: basalt-and-saffron for Swarajya, green lacquer for Adilshahi), the title screen
(drawn in code until a painting exists), the campaign map (batch 2), Chhatrapati Shivaji Maharaj's coronation card (Phase 3), Siddi Jauhar,
Mughal and Jaoli cards (Phase 2).

*Cards 1-12 and 13-15 are in `data/cards.draft.json` (or `src/data/cards.json` for those already playable); a picture can be painted before its card
is playable. Cards 2, 3, 6 and 1 need the Ganim mechanic and 7 the "reveal hand" effect before they can be played; their art can still be painted now.*
