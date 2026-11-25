# Art batch 2 — prompt sheet (Phase 2, chapter 3: Jaoli)

*For Pon. 3 card paintings and 1 battlefield painting: everything chapter 3 (Jaoli) needs, once it's
built. Written 25 Nov 2026 (session 8), alongside Phase 1's close — chapter 3 is next in line per
`TASKS.md`'s Phase 2 chapter list (chapter 2, Purandar 1648, stays blocked on a VERIFY source). Same
format and rules as `art/PROMPTS-BATCH1.md`: read that file's "How to use this sheet," STYLE block, AVOID
block and likeness rules first — they are not repeated in full here, only what's new or chapter-specific.*

## What's different from batch 1

- All three cards belong to the **Chandrarao More family of Jaoli** — a Maratha feudatory lordship under
  Bijapur, not Bijapur's own court. Dress them as **Maratha hill nobility and foot soldiers**: earthy
  forest tones (olive, dark red, brown, undyed cotton), not Bijapur's green-and-gold court style (`as_`
  cards) and not Swarajya's saffron-and-cream (`sw_`cards) — a third, distinct palette so the three sides
  read apart at a glance.
- The whole chapter is fought in **dense forest** (S-PURANDARE: "In Javli Jungles" — thick enough that an
  elephant could hide in it), so keep the forest heavy and close in every picture: little open sky,
  broken light through a canopy, undergrowth at knee height. This is the one battlefield so far that is
  *not* a hill-fort rampart or a dry plateau.
- `jm_hanmantrao` is **VERIFY** (`history/PEOPLE.md`: "HISTORY via Takakhav: VERIFY in Mehendale" —
  `TASKS.md`'s open research item "Hanmantrao More: confirm in Mehendale or drop the card"). Paint it if
  you like, but don't prioritize it over the other two — if the research doesn't confirm him, the card
  may be dropped before it ships (VERIFY facts never ship, CLAUDE.md).
- **How Jaoli was taken is disputed** (CONTESTED #4): Purandare has no pretended marriage embassy, only a
  quarrel over grazing land (Gunjan Mawal) that grew into a campaign; the game plays it as a straight
  assault and the History panel gives both accounts. None of the three prompts below show or imply any
  deception — a plain fight in the trees, nothing staged.

## Format and safe-area specification

Same as batch 1 — unchanged, not repeated here. All three character cards are **5:7 portrait**, 1500 ×
2100 minimum (see batch 1 §"5:7 character and order cards: safe area" for the arched-window zones). The
battlefield is **16:9**, 2560 × 1440 (see batch 1 §"Battlefields: safe area"). Save to
`art/source/cards/<id>.png` and `art/source/battlefields/jaoli.png`; run `npm run assets` after.

## STYLE block (paste before every prompt — same as batch 1)

> Painting in the manner of 17th-century Deccan and Maratha court miniatures (Bijapur school, Maratha
> court portraits): opaque watercolour and gouache on aged paper, fine brush outlines, rich flat colour
> fields with subtle shading, gold-leaf highlights, delicate patterned textiles; blended with a warm
> "living miniature" atmosphere (soft lamplight or low sun, depth, a little mist). Palette: Sahyadri
> basalt grey, monsoon-cloud blue-grey, red laterite earth, saffron, deep teal and cream. Dignified,
> historically careful, painterly, no caricature, no gore. Paint to the edge of the picture (no deckled
> paper edge). **Format line (use the one that applies):** *Portrait 5:7: clear sky above the head, head
> top about a quarter of the way down, 3/4-length figure, lower quarter simple.* / *Landscape 16:9: calm
> middle band.*

For the **Jaoli / More family** cards, replace the palette sentence with: *"Palette for this family: dark
forest green, olive-brown, old brick red, undyed cotton cream — earthy hill-country colours, not
Bijapur's green-and-gold court finery and not Swarajya's saffron. Dense forest light: broken sun through
leaves, deep shadow."*

## AVOID block (paste after every prompt — same as batch 1)

> No text, letters, numerals, logos, watermarks, borders, frames or signatures. No modern clothing, no
> film or television likeness of any real person, no statue-like or cartoon faces, no blood or gore, no
> religious symbols used as a banner of one faith against another, no modern objects.

## Likeness and dignity rules (D-05, D-10, CLAUDE.md) — unchanged from batch 1

No portrait of Chandrarao More or Hanmantrao More survives, so there is no likeness rule to follow beyond
dignity: they are a serious rival lord and his serious captain, not villains and not caricatures (D-05 —
the same dignity shown to Afzal Khan in batch 1). Nothing shows the executions that followed the battle
(D-07: not playable, told in the History note only) — these prompts stop at the fight itself.

---

## A · Jaoli cards (`jm_`)

### 1. `jm_chandrarao` — Chandrarao More · legendary · *Lord of Jaoli*
*Basis: HISTORY [C-1656-JAOLI]. The "Chandrarao" is a title held by the lord of Jaoli, not a personal
name — this one (Purandare: Yashwantrao) held it by Shivaji's earlier favour (C-1647-JAVLI) before the
1656 falling-out. No portrait survives; dignity rule applies.*
**Prompt:** A Maratha feudatory lord in his forest stronghold: middle-aged, a full beard, a plain but
proud turban with a single dark plume, a quilted olive-brown coat over a mail shirt, a tulwar at his
hip, standing at the mouth of a timber-and-stone hill fort gate half-swallowed by jungle, armed retainers
indistinct in the shadow behind him. Wary, proud, cornered but not broken — a man defending land he
believes is his. Dense forest crowding the frame, broken light.

### 2. `jm_hanmantrao` — Hanmantrao More · epic · *Captain of Jaoli* — VERIFY, may not ship
*Basis: VERIFY [C-1656-JAOLI; `history/PEOPLE.md`: "HISTORY via Takakhav: VERIFY in Mehendale"]. Purandare
names him as the Mores' captain who pushed the claim on Gunjan Mawal and was killed by Sambhaji Kavji
Kondhalkar in the fighting. Paint only if you're not waiting on other, more certain cards.*
**Prompt:** A hardened forest captain, leaner and younger than his lord, a plain cloth wrapped close round
the head rather than a court turban, a short spear and a round hide shield, crouched at the edge of a
narrow jungle path as if about to spring an ambush, dappled green light, undergrowth at knee height.
Quick, dangerous, at home in the trees — the Dhuan keyword's soldier.

### 3. `jm_jaoli_foot` — Jaoli Foot · common · *Forest Infantry*
*Basis: GENERIC [the Mores' own hill levies, raised from the Jaoli valley itself].*
**Prompt:** A Jaoli valley foot soldier half-hidden in dense undergrowth, plain dark cotton wrap, a short
curved blade and a small wooden buckler, body turned sideways as if about to vanish into the leaves
behind him, only a sliver of his face lit by broken sun. Camouflage and stillness, not a parade stance —
the whole point of this unit is that you don't see it coming (Dhuan).

---

## B · Battlefield

### B4. `jaoli` — The Jaoli jungle (chapter 3)
*Basis: HISTORY [C-1656-JAOLI: S-PURANDARE's chapter is titled "In Javli Jungles"; forest "so dense an
elephant could hide in it," per the same description already used for Pratapgad's forest, B2]. Season:
`chapters.json` has it still "varsha_or_sharad_tbd" (monsoon or just after) — paint it lush and green
either way; the exact season can be decided later without repainting.*
**File:** `art/source/battlefields/jaoli.png`, 2560 × 1440.
**Prompt:** A wide view deep inside the Jaoli forest: the densest, darkest jungle yet painted for this
game — tall trees crowding from both sides, a narrow stream or footpath threading through at the base of
a steep green valley, moss on old stones half-buried in undergrowth, a glimpse of grey fort wall on a
crag far in the background almost lost in foliage, shafts of broken sunlight through the canopy, low mist
pooling in the hollows. Claustrophobic and green, unlike Torna's open ridge or Pratapgad's cold clear
air — this is a war fought in the trees. **Leave the middle band calm** (mossy ground, soft shadow) for
the cards. No figures in the foreground.

---

## Checklist (Pon ticks when the PNG is in `art/source/…`)

| # | File | Painted |
|---|---|---|
| 1 | `cards/jm_chandrarao` | [ ] |
| 2 | `cards/jm_hanmantrao` (VERIFY — low priority) | [ ] |
| 3 | `cards/jm_jaoli_foot` | [ ] |
| B4 | `battlefields/jaoli` | [ ] |

*Not in this batch (later Phase 2 chapters, per `TASKS.md`'s chapter list): Kolhapur, Pavan Khind (Baji
Prabhu, Shiva Kashid, Siddi Hilal, Siddi Masud), Chakan (Firangoji Narsala), Umberkhind (Kartalab Khan,
Rai Bagan), the Lal Mahal raid (Shaista Khan), Surat, and the Purandar treaty scene (Jai Singh, Diler
Khan) — each gets its own batch once its chapter is actually being built, same as this one.*