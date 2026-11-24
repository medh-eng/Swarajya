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

**Card paintings:** square, **1536 × 1536** (or larger, still square). They are shown in an arched window about 424 × 404 px
on the card, so: put the main subject in the **upper-middle**, keep the **lowest fifth and the four corners simple**
(the arch and the stat badges cover them), and leave breathing room round heads. Units also appear small on the
battlefield, so a face or silhouette must still read at thumbnail size.

**Battlefields:** wide **2560 × 1440** (16:9). Cards and the Durg sit over the picture, so keep the **middle horizontal band calm**
(soft ground, mist) and put the drama in the sky and the top and bottom thirds.

**Order I suggest:** 1 Shivaji Raje (it fixes his face for everything else) → 2 Torna (card + battlefield) → 3 the Swarajya soldiers →
4 the Adilshahi cards → 5 Pratapgad pieces.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Deccan and Maratha court miniatures (Bijapur school, Maratha court portraits): opaque
> watercolour and gouache on aged paper, fine brush outlines, rich flat colour fields with subtle shading, gold-leaf highlights, delicate
> patterned textiles; blended with a warm "living miniature" atmosphere (soft lamplight or low sun, depth, a little mist). Palette: Sahyadri
> basalt grey, monsoon-cloud blue-grey, red laterite earth, saffron, deep teal and cream. Dignified, historically careful, painterly, no
> caricature, no gore. Square composition, main subject upper-middle, lower fifth and corners simple.

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
- Nothing may show a killing; the Pratapgad pieces show the **weapons and the tension**, never the blow.

---

## A · Swarajya cards (`sw_`)

### 1. `sw_shivaji` — Shivaji Raje · legendary · *Raje of the Maval*
*Basis: HISTORY [C-1630-BIRTH, C-1646-TORNA, C-1659-PRATAPGAD]. This is the character-defining picture: do it first and keep it as the reference for every other card.*
**Prompt:** A young man in his twenties, Shivaji Raje, in profile and three-quarter view like a 17th-century court portrait: dark
moustache and short trimmed beard, calm, watchful eyes, a plain turban with one jewel and a short plume, a simple long jama coat in
deep teal with a saffron sash, a straight sword at his side. He stands on a stone rampart of a hill fort at dawn, one hand resting on
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
*Basis: HISTORY [C-1659-PRATAPGAD: a bagh nakh (tiger claw) concealed on his left arm and a dagger in his right hand]. What happened in the pavilion is not known: show the weapon, never the act.*
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
**Prompt:** A wide morning view of very dense Sahyadri forest (so thick that a hidden elephant would be hard to find) on a steep slope below a fort silhouetted on the ridge high above, with deep valleys falling away to one side and only narrow foot tracks visible; a cleared
level space in the middle with a large cream pavilion (a parley tent) standing alone, ground mist on the forest floor, tall trees, cold
early-winter light slanting through the trees. Tense and still. **Leave the middle band calm.** No figures near the pavilion.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/sw_shivaji` | [ ] |
| 2 | `cards/sw_mavla` | [ ] |
| 3 | `cards/sw_havaldar` | [ ] |
| 4 | `cards/sw_hetkari` | [ ] |
| 5 | `cards/sw_bargir` | [ ] |
| 6 | `cards/sw_shiledar` | [ ] |
| 7 | `cards/sw_herkari` | [ ] |
| 8 | `cards/sw_gopinath` | [ ] |
| 9 | `cards/sw_jijau_counsel` | [ ] |
| 10 | `cards/sw_dadoji` | [ ] |
| 11 | `cards/sw_torna_hoard` | [ ] |
| 12 | `cards/sw_wagh_nakh` | [ ] |
| 13 | `cards/sw_gad_torna` | [ ] |
| 14 | `cards/sw_gad_rajgad` | [ ] |
| 15 | `cards/sw_gad_pratapgad` | [ ] |
| 16 | `cards/as_gad_torna_held` | [ ] |
| 17 | `cards/as_afzal_khan` | [ ] |
| 18 | `cards/as_hasham` | [ ] |
| 19 | `cards/as_gaja` | [ ] |
| 20 | `cards/as_topkhana` | [ ] |
| B1 | `battlefields/torna` | [ ] |
| B2 | `battlefields/pratapgad` | [ ] |

*Not in this batch:* card frames (drawn in code per faction: basalt-and-saffron for Swarajya, green lacquer for Adilshahi), the title screen
(drawn in code until a painting exists), the campaign map (batch 2), Chhatrapati Shivaji Maharaj's coronation card (Phase 3), Siddi Jauhar,
Mughal and Jaoli cards (Phase 2).

*Cards 1-12 and 13-15 are in `data/cards.draft.json` (or `src/data/cards.json` for those already playable); a picture can be painted before its card
is playable. Cards 2, 3, 6 and 1 need the Ganim mechanic and 7 the "reveal hand" effect before they can be played; their art can still be painted now.*
