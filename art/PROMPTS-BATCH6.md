# Art batch 6 — prompt sheet (Phase 2, chapter 7: Fifty-six Days at Chakan)

*For Pon. 6 card paintings, 1 optional seventh, and 1 battlefield. Written 27 Nov 2026 (session 12). Every
card and chapter before this one is now painted and registered (31 card paintings, 6 battlefields), so this
is the first sheet for a **new faction: the Mughals**. Same format and rules as `art/PROMPTS-BATCH1.md` —
read its "How to use this sheet", safe-area specs and likeness rules first; only what is new is repeated here.
Chapter 7 is not playable yet: it needs a few engine pieces first (enemy forts that protect their owner's
Durg, the Mughal faction). Painting ahead of the engine is fine and saves time later.*

## The story this chapter tells (context only, not for quoting in-game)

Shaista Khan, the Mughal viceroy of the Deccan and Aurangzeb's maternal uncle, occupied Pune and besieged
Chakan, which Shivaji had named Sangramdurg. Its old killedar, Firangoji Narsala, held it with a small
garrison for fifty-six days, from 23 June to 14 August 1660. Rajput officers (Rai Singh Sisodia and Bhao
Singh Hada) served in the Mughal army. A mine brought down part of the wall; after hard fighting Firangoji
surrendered and was given safe passage. Shaista Khan then settled in the Lal Mahal in Pune.
(`C-1660-CHAKAN`. The garrison size differs between sources, so the game and these paintings show no
numbers.) In the game you play the defence: winning means holding the turns, and the History note and
epilogue say that the fort did fall.

## What is the same as batch 1, what is different

- **The Mughals are a new empire.** Do not reuse Bijapur's green-and-gold or Swarajya's saffron-and-teal.
  Use the **Mughal palette** below: imperial crimson and vermilion, sandstone buff, ivory, gold, with a touch
  of lapis blue. **No green** (Bijapur's colour) and **no saffron** (Swarajya's colour).
- **Chakan is not a hill fort.** It was a *bhuikot*, a ground fort on flat land: a square plan with a bastion
  at each corner, brick-and-stone walls, and a moat around it (`C-1660-CHAKAN`, the fort's form). The
  Sahyadri hill-fort look of Torna, Rajgad and Pratapgad would be wrong here. Keep it low, square and wet.
- **It is the monsoon** (the 56 days run from late June to mid-August): grey, heavy sky, wet ground, no
  bright sun.
- `mg_surang` (the mine) is an **order card**: compose it as an object-centred picture like batch 1's orders
  and batch 4's grenades. It must show **no person, no body, no collapse with people under it** (D-07).
- The Gad card (`sw_gad_chakan`) is **1:1 square**, 1536 × 1536 (minimum 1080 × 1080), same safe area as the
  batch 1 Gads: main structure in the middle three-fifths, about 8% margin, top 12% sky, bottom 15% simple.

## Format and safe-area specification

Same as batch 1, unchanged. Character and order cards are **5:7 portrait**, 1500 × 2100 minimum. The Gad is
**1:1 square**. The battlefield is **16:9**, 2560 × 1440. Save to `art/source/cards/<id>.png` and
`art/source/battlefields/chakan.png`, then run `npm run assets`.

## STYLE block (paste before every prompt)

> Painting in the manner of 17th-century Mughal court miniatures (Shah Jahan to Aurangzeb era): opaque
> watercolour and gouache on aged paper, fine brush outlines, richly patterned textiles, delicate
> gold-leaf highlights, subtle shading; blended with a warm "living miniature" atmosphere (soft light,
> depth, a little mist). **Palette (use the one that applies): Mughal army and court** (cards 3-7 and the
> mine): imperial crimson and vermilion, sandstone buff, ivory, gold, a touch of lapis blue; never green,
> never saffron. **Swarajya** (cards 1-2: Firangoji and the fort): Sahyadri basalt grey, monsoon-cloud
> blue-grey, red laterite earth, saffron, deep teal and cream, never green (D-21). Dignified, historically
> careful, painterly, no caricature, no gore. Paint to the edge of the picture (no deckled paper edge).
> **Format line (use the one that applies):** *Portrait 5:7: clear sky above the head, head top about a
> quarter of the way down, 3/4-length figure, lower quarter simple.* / *Square 1:1: one strong silhouette,
> 8% margin, sky above, simple ground below.* / *Landscape 16:9: calm middle band.*

## AVOID block (paste after every prompt, same as every batch)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no film
> or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no religious
> symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-07, D-10, CLAUDE.md)

- No reliable portrait is needed or used: paint Shaista Khan and the Rajput officers as **serious, capable
  imperial commanders**, with the same dignity as Afzal Khan, Rustam Zaman and the Siddis. No caricature of
  any community, no cruelty in the face.
- **The Mughal army included Rajput officers** (Rai Singh Sisodia, Bhao Singh Hada): that is the documented
  mixture of both armies (D-05). Show the Rajput Mansabdar in Mughal service, in the Mughal palette, with a
  Rajput-style turban and straight sword to tell him apart from a Mughal noble.
- **Firangoji is old.** The sources call him the elderly killedar. Show an older man, grey in the beard,
  steady and unhurried: a veteran who knows the fort, not a young hero. He is not shown surrendering,
  wounded or defeated, only holding.
- **Nothing in this chapter may show a killing, a body, a massacre or a fall** (D-07). The mine card is the
  powder and the tunnel, never the collapse of the wall onto people.

---

## A · Cards

### 1. `sw_firangoji` — Firangoji Narsala · epic · *Killedar of Chakan*
*Basis: HISTORY [C-1660-CHAKAN]. Raksha; while he stands on your Rajya line, your forts take 1 less damage.
A steady old defender, a wall in human form, not a fighter who charges.*
**Prompt:** An elderly Maratha fort commander with a grey beard and weathered, calm face, standing on a low
corner bastion of a square ground fort in the monsoon, one hand resting on the parapet and the other on
the hilt of a straight sword, a plain saffron-and-cream turban and a dark teal shoulder-cloth, a few
Mavla defenders and a matchlock barrel just visible behind him, a flat wet plain and a grey sky beyond
the wall. Unhurried, watchful, entirely sure of the wall under his feet. The fort is a low ground fort, not
a hill fort.

### 2. `sw_gad_chakan` — Chakan (Sangramdurg) · rare · Gad
*Basis: HISTORY [C-1660-CHAKAN, the fort's form]. Gad: while it stands, your Durg takes 1 less damage from
each attack. **1:1 square.***
**Prompt:** A low, square ground fort seen from a slight height across a wide moat, a stout bastion at each
corner and a gate tower in the near wall, thick brick-and-stone ramparts with small gun openings, a
saffron-and-teal flag on the tallest bastion, flat green-brown monsoon plain all around and no hill
anywhere, heavy grey cloud above, wet light on the walls. One strong square silhouette: calm, stubborn,
well-kept. Not a Sahyadri hill fort: no cliff, no ridge, no mountain.

### 3. `mg_shaista_khan` — Shaista Khan · legendary · *Viceroy of the Deccan*
*Basis: HISTORY [C-1660-CHAKAN, C-1663-LALMAHAL]. Raksha; Deploy — gain 2 Kosha: a rich, patient viceroy
who can afford a long siege.*
**Prompt:** A dignified, heavyset, mature Mughal viceroy in a crimson-and-gold jama over a
cream under-robe, a jewelled turban with a plume, seated on a low carpeted platform before a large
open-fronted command tent in a wet camp, one hand resting on a cushion and the other loosely on his sword,
a scribe and two attendants waiting at the edge of the picture, siege trenches and the distant low walls
of a fort just visible through the open tent. Wealthy, composed, unhurried, a man who expects the wall to
fall in his own time, not an angry one.

### 4. `mg_rajput_officer` — Rajput Mansabdar · rare · *Imperial Officer*
*Basis: HISTORY [C-1660-CHAKAN, C-X-OFFICERS]. Vega: Rai Singh Sisodia and Bhao Singh Hada were the Rajput
officers named in the Mughal army at Chakan.*
**Prompt:** A proud Rajput cavalry officer in Mughal service: a crimson jama with a gold sash, a
Rajput-style turban in ivory and red wrapped high with a short plume, a straight sword at the hip and a
round shield on the saddle, mounted on a pale horse on churned wet ground at the head of a few riders
under a low grey sky. Upright, confident, a nobleman at ease on a horse, serving the imperial army with
the same seriousness as any commander in this series.

### 5. `mg_surang` — Surang (The Mine) · rare · *Under the Wall*
*Basis: HISTORY [C-1660-CHAKAN: "a mine brought down part of the wall"]. Order card, object-centred,
per batch 1's convention. **No person, no body, no collapsed wall.***
**Prompt:** The inside of a narrow sapper's tunnel dug under a bastion: rough earth walls held by
timber props, a row of small powder barrels packed against the end of the passage, a coil of slow-match
running back along the floor towards a single guttering lamp, wet earth and tree-root threads in the
ceiling, a faint grey daylight shaft far behind. Close, dark, tense, a patient and dangerous piece of
engineering. Objects only: no figures anywhere.

### 6. `mg_topkhana` — Imperial Topkhana · rare · *Heavy Artillery*
*Basis: GENERIC (no chronology claim). Ranged, cannot move to the Yudhbhumi, double damage to forts. The
Mughal siege train.*
**Prompt:** A dug-in battery of heavy bronze siege guns on solid timber carriages behind a wall of
earth-filled baskets, a gunner in a crimson jama and plain turban sighting along one barrel while others
stack round shot, wet grey light, damp smoke from a slow-match, the low square walls of a fort small in
the distance across a flooded plain. Heavy, methodical, powerful, nothing hurried. The guns are the
subject: the gunners are small and plain.

### 7. `mg_mansabdar_sawar` — Mansabdar Sawar · common · *Heavy Cavalry* — **optional**
*Basis: GENERIC. Vega. A filler unit for the Mughal deck; the chapter runs without it (it will show the
placeholder frame until painted). Paint it last, or skip it.*
**Prompt:** A Mughal heavy horseman in a quilted crimson coat and a steel cap over a turban, a lance in
one hand and a round shield on the arm, mounted on a sturdy bay horse in shallow flood-water at the edge
of a siege camp, tents and smoke in the grey background. Solid, ordinary, disciplined: a professional
soldier, not a hero.

---

## B · Battlefield

### B6. `chakan` — The plain round Sangramdurg (chapter 7)
*Basis: HISTORY [C-1660-CHAKAN: 23 June – 14 August 1660, so the monsoon; the fort's form]. The opposite
mood from Kolhapur (wide, cold, clear) and Ghod Khind (a tight night pass): a flat, grey, soaked siege
ground, slow and heavy.*
**File:** `art/source/battlefields/chakan.png`, 2560 × 1440.
**Prompt:** A flat monsoon plain at midday under low grey cloud: far across a moat, a small square ground
fort with corner bastions seen as a low, dark outline on the horizon, the foreground a wet field cut by
long siege trenches and earthworks with timber props and baskets of earth, standing water reflecting the
sky, a few Mughal tents and cooking smoke far off to one side, no hill anywhere, only a soft line of
distant trees. Heavy, patient, waiting: a siege measured in weeks. **Leave the middle band calm** (flat
wet ground and haze) for the cards. No figures in the foreground.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/sw_firangoji` | [ ] |
| 2 | `cards/sw_gad_chakan` (square) | [ ] |
| 3 | `cards/mg_shaista_khan` | [ ] |
| 4 | `cards/mg_rajput_officer` | [ ] |
| 5 | `cards/mg_surang` | [ ] |
| 6 | `cards/mg_topkhana` | [ ] |
| 7 | `cards/mg_mansabdar_sawar` (optional) | [ ] |
| B6 | `battlefields/chakan` | [ ] |

*Names to keep exactly as written (they are the card ids; a typo creates a dead entry): `sw_firangoji`,
`sw_gad_chakan`, `mg_shaista_khan`, `mg_rajput_officer`, `mg_surang`, `mg_topkhana`,
`mg_mansabdar_sawar`, `chakan`.*

*Not in this batch (later chapters): Umberkhind (Kartalab Khan, Rai Bagan), the Lal Mahal raid (Tanaji and
the night raid cards), Surat, and the Purandar treaty scene (Jai Singh, Diler Khan).*
