# SWARAJYA — design

*Working title (see STATE.md, open decision Q-01). What the game is, how it plays, and why.
Updated at the end of every session. History lives in `history/`; tasks in `TASKS.md`.*

## 1. Vision

A KARDS-style tactical card game of **one life**: Shivaji Maharaj, from the boy at Shivneri to the
Chhatrapati at Raigad. Built on the YUDDH engine (`medh-eng/Yuddh`), so it plays like YUDDH from the
first day, but every chapter is a different kind of fight, because his wars were: a first fort
taken by surprise, a parley that turned into a battle, a rearguard in a mountain pass, a night
raid on his own boyhood home, a treaty that cost him 23 forts, an escape in a basket, a navy built
from nothing.

**History, not mythology** (YUDDH's rule, kept). No gods as units, no superpowers. Tradition and
ballad have their place, clearly labelled.

**Three promises to the player**
1. *It really happened like this, or we tell you where it didn't.* Every chapter ends with a
   History note: what happened, what the game changed, what is disputed, which sources say so.
2. *Forts are the story.* You can watch Swarajya grow on the map, lose 23 forts at Purandar, and
   win them back.
3. *Every chapter is a new puzzle*, not the same battle with new art.

Platforms: web first (GitHub Pages), then Google Play (Capacitor, landscape), as YUDDH.
Languages: **English and Marathi from the start** (Marathi is not a Phase-5 extra for this game),
Hindi later.

## 2. What comes from YUDDH unchanged

Engine (`src/engine/`), renderer (`src/game/`), data-in-JSON convention, test tooling, e2e
playtests, Android wrapper, duel and two-phone modes. Specifically the rules:

- Board: your **Rajya line** (up to 4), the shared **Yudhbhumi** (up to 4, one owner), your **Durg** (capital).
- **Kosha** resource, +1 a turn up to 12; units have an order cost to move or attack.
- A unit moves **or** attacks in a turn, unless it charges (cavalry classes).
- Keywords: **Vega** (acts at once), **Raksha** (guard), **Dhuan** (hidden until it strikes).
- Card types: Units, Mantras (orders), Yantras (face-down traps), Shakti (power orders).
- Promotion (Veer, Mahaveer), trample, seasons (Ritu), Dharma–Kuta meter, morale and rout,
  the Standard/Veteran AI, the History panel with HISTORY / TRADITION / INVENTED tags.
- Objectives already in the engine: `destroy`, `survive` (hold N turns), `deadline` (win within N turns).

**Engine baseline:** YUDDH commit `6f1c852` (16 Nov 2026). New rules live behind a new ruleset
`'swarajya'` that extends `'yuddh'`, so YUDDH's tests still guard the shared core.

## 3. What is new (the innovations)

Each item lists its engine cost: **S** = data only, **M** = a few dozen lines in `rules.ts` + AI value,
**L** = new system or scene.

### 3.1 Gad: forts that change hands (signature mechanic) — L
A new card type, **Gad** (fort). You play a Gad onto your Rajya line; it takes a slot, has defence
(hp) and no attack, and gives a standing benefit while it stands, e.g. Torna: +1 Kosha each turn;
Rajgad: draw 1 extra every second turn; Pratapgad: your Raksha units +1 hp; a sea fort: your ships
+1 attack.
- **Capture:** when an enemy unit on the Yudhbhumi destroys your Gad, it does not vanish: it flips
  to the attacker's side at 1/3 of its defence and its benefit now works for them. Forts change
  hands, like the real ones did.
- A Gad cannot be targeted by orders that "destroy" (only damage), so captures are fought for.
- Some chapters start with Gads already on the board (enemy forts to take).

### 3.2 Khind: the mountain pass battlefield — S/M
A scenario setting `frontSize` (default 4). In a **Khind** chapter the Yudhbhumi holds only **2**
units. Few defenders can hold many attackers (Pavan Khind), or a column can be trapped in a defile
(Umberkhind). The engine's "Yudhbhumi is full" check reads `frontSize` instead of the fixed 4.

### 3.3 Ganim: strike and fade (ganimi kava) — M
New keyword **Ganim**: after this unit attacks, you may pull it back to your Rajya line at no cost
(if there is room). It cannot be counter-charged on the Yudhbhumi because it is no longer there.
Mavla infantry and light horse have it; the Mughal and Adilshahi heavy units do not. The AI must
value withdrawing (search.ts already handles extra moves).

### 3.4 Ratra: night — M
A battle condition like a season. At night: every unit **deployed** gets Dhuan until it first
strikes; ranged units deal 1 less (you cannot see the target); Yantras cost 1 less. Used for the
Lal Mahal, Kondhana (Sinhagad) and Panhala 1673.

### 3.5 Bhet: the parley before the battle — L (new pre-battle scene)
A short bluffing minigame before some battles. Each side secretly picks one of three stances:
**Trust** (come as agreed), **Guard** (armour under the robe), **Strike** (hidden blade). The pair of
choices sets the opening: e.g. Guard vs Strike, the striker's general starts wounded and the
guarding side starts with an extra unit on the Yudhbhumi; Strike vs Trust, the trusting side
starts with its commander damaged. The AI's stance odds are data (`bhet` in `rules.json`).
Used at **Pratapgad** (the History note then tells you what the sources say happened), and later
for **Purandar** (Jai Singh's terms: fight on or concede) and **Umberkhind** (Rai Bagan's offer of
surrender: accept and gain loot, or fight on). The Bhet never claims to show what really happened
in the tent; it is a game about the fear of treachery that both men had.

### 3.6 New objectives — M
Added to the engine's `Objective` type:
- `capture`: take the listed enemy Gad(s) (Torna, Kondhana, Panhala 1673).
- `raid`: gain N "plunder" (a counter fed by special cards and by striking the enemy Durg), then
  survive until turn T (Surat, Vani). The Durg need not fall.
- `escape`: a puzzle objective: move the Shivaji token off the far edge (through the enemy Rajya
  line) before turn T, with a fixed hand (Agra). Puzzle chapters run with a scripted AI.
- `survive` (exists): Chakan (hold the turns that stand for the 56 days), Pavan Khind (hold until
  the signal from Vishalgad, labelled TRADITION), Khanderi.

### 3.7 The Swarajya map (campaign meta) — L
The campaign screen is a painted map of the Sahyadri and the Konkan coast with every fort named in
the chronology. Winning a chapter **lights** the forts that the history says were won then. At the
Treaty of Purandar **23 forts go dark** in a short, quiet scene; in Act IV they light again. The
count of lit forts is shown, and reaching milestones unlocks chronicles and regalia (cosmetic).
**YUDDH's rule stands: progress never changes a battle's balance.**

### 3.8 The Shahir: an original narrator — S (writing) + Pon (voice)
The story is told by an invented **shahir** (ballad singer) in the style of a **powada**, the
Marathi heroic ballad that already told these stories (the Afzal Khan and Tanaji powadas are
historical). Short verse lines open and close chapters; the History panel then speaks plainly.
The shahir is a fictional character, not an imitation of any real singer.

### 3.9 Two voices in the History panel — S
YUDDH's tags (HISTORY / TRADITION / INVENTED) plus **"The other side wrote…"**: where a Persian,
Bijapuri or English record tells a different story (Pratapgad, Jaoli, Surat), the panel gives it
in one or two lines. This is both honest and interesting.

### 3.10 Ashta Pradhan set (after the coronation) — M
Eight minister cards (Peshwa, Amatya, Sachiv, Mantri, Senapati, Sumant, Nyayadhish, Panditrao;
titles checked against the source before printing). Each has a small effect; having three
different ministers on your side at once grants **Rajmandal**: +1 Kosha a turn. Unlocked in Act V.

### 3.11 Mavla classes — S
New unit subtypes for the Swarajya army: **Mavla** (hill infantry: ignores Varsha mud; Ganim),
**Hetkari** (Konkan infantry), **Barkandaz** (matchlock men, ranged), **Bargir** (state cavalry),
**Shiledar** (cavalry with own horse), **Herkari** (scouts/spies: reveal enemy hand or Yantras).
The enemy: Mughal **mansabdar** cavalry, **topkhana** (artillery: ranged, cannot move),
Adilshahi **hasham** and war elephants, Siddi galleys, English ships.

## 4. Factions

| Faction id | Name | Frame (art) | Identity | Passive (draft) |
|---|---|---|---|---|
| `swarajya` | Swarajya (Maratha) | Black basalt with saffron | Fast, light, many cheap units, Ganim, forts, night | **Sahyadri**: the first Mavla you deploy each turn has Vega. |
| `adilshahi` | Adil Shahi of Bijapur | Deccani green lacquer and gold | Elephants, veteran generals, siege, grenades | **Bijapur's treasury**: start with +1 Kosha. |
| `mughal` | Mughal Empire | Red sandstone and white marble inlay | Huge Durg, heavy cavalry, artillery, mines, diplomacy | **Mansab**: your Durg starts with +4 defence; your units cost +0 but your orders cost 1 more (slow to react). |
| `jaoli` | The Mores of Jaoli | Dark teak | Forest ambushers, Raksha | none (neutral frame) |
| `siddi` | Siddis of Janjira | Sea-worn timber | Galleys, island fort | none |
| `english` | English East India Co. | Ship's oak and brass | Factory guards, a frigate | none |
| `golconda` | Qutb Shahi (ally) | Turquoise and gold | Ally cards in Act V only | n/a |

Enemy factions use YUDDH's neutral empire with their own card prefixes (as YUDDH does for Nandas,
Seleucids, Ghurids): `as_`, `mg_`, `jm_`, `sd_`, `ei_`, `gk_`. Swarajya is a full empire (`sw_`).

## 5. The campaign: "Hindavi Swarajya", five acts

Machine-readable list: `data/chapters.json` (each with `refs` to the chronology). Summary:

| # | Chapter | Date | Kind | New idea it teaches |
|---|---|---|---|---|
| 0 | The Mavlas of the Maval (tutorial) | c. 1640s | coached | basics; Jijabai's counsel |
| 1 | Torna | 1646 | `capture` a Gad | Gad cards |
| 2 | *(Purandar, 1648 — blocked: VERIFY)* | 1648 | defend | — |
| 3 | Jaoli | 1656 | forest assault | Raksha walls in woods |
| 4 | Pratapgad | 10 Nov 1659 | **Bhet** + battle | parley, Wagh Nakh |
| 5 | Kolhapur | 28 Dec 1659 | open field | flanking cavalry |
| 6 | Panhala and Pavan Khind | Mar–Jul 1660 | `survive` in a **Khind** | narrow pass, rearguard |
| 7 | Chakan | Jun–Aug 1660 | `survive` | siege, mines vs Gad |
| 8 | Umberkhind | early 1661 | **Khind** ambush | Ganim, ambush Yantra, Rai Bagan's Bhet |
| 9 | The Lal Mahal | 5–6 Apr 1663 | **Ratra**, `deadline` | night raid |
| 10 | Surat | Jan 1664 | `raid` | plunder, neutral factories |
| 11 | Purandar | Mar–Jun 1665 | `survive` + Bhet (terms) | the treaty: map loses 23 forts |
| 12 | Agra | May–Aug 1666 | `escape` puzzle | fixed-hand puzzle |
| 13 | Kondhana | 4 Feb 1670 | **Ratra**, `capture` | escalade; forts relit |
| 14 | Surat and Vani | Oct 1670 | `raid` then pursuit | carry the plunder home |
| 15 | Salher | Feb 1672 | open battle, two armies converge | reinforcements from two sides |
| 16 | Panhala by night (bonus) | 6 Mar 1673 | **Ratra**, `capture` | short challenge |
| 17 | Umrani and Nesari | 1673–74 | battle, then a memorial last charge | mercy and its cost |
| 18 | Rajyabhishek (interlude) | 6 Jun 1674 | no battle | Chhatrapati card, Ashta Pradhan |
| 19 | Dakshin Digvijaya: Tiruvadi | 1677 | field battle with Golconda allies | ally cards |
| 20 | Khanderi | Sep–Oct 1679 | naval `survive` | ships, sea fort |
| 21 | Raigad (epilogue) | Apr 1680 | no battle | the shahir's last song |

Every chapter is replayable; nothing is locked (YUDDH's rule). "NEXT" marks the next unwon chapter.

**What we do not make playable** (decision D-07): a battle against Sambhaji (1678–79); the killing
of Chandrarao More; any massacre or reprisal. These are told in History notes, plainly.

## 6. Modes

- **Campaign** (above).
- **Duel**: pass-and-play and two-phone, reused from YUDDH: Swarajya, Adilshahi, Mughal, Jaoli,
  Siddi factions; balanced the YUDDH way (`duel.json` hq/kosha/add/trim, simulated).
- **Gadkot challenges** (later): short puzzles built from real moments (take Panhala with 3 cards,
  hold Ghod Khind for 4 turns), the "Chanakya's Puzzles" idea from YUDDH's plan.

## 7. Art and sound

Pon paints everything from Claude's prompt sheets (`art/PROMPTS-*.md`), as in YUDDH.
- **Style:** Deccani and Maratha-period miniature painting (17th-century Deccan, Bijapur school,
  Maratha court portraits) blended with YUDDH's "living miniature" look. Sahyadri basalt, monsoon
  cloud, red laterite of the Konkan, the sea.
- **Shivaji's likeness:** based on the period portraits (e.g. the 1680s portrait in the British
  Library): profile, beard, turban with jewel, jama. Dignified, never comic. **No film or TV
  likenesses**, no modern statues as models.
- **Enemies drawn with the same dignity** as heroes: Afzal Khan, Shaista Khan, Jai Singh, Siddi
  Jauhar are formidable generals, not cartoons.
- **Frames:** basalt-and-saffron (Swarajya), green lacquer (Adilshahi), sandstone-and-marble (Mughal),
  teak (neutrals).
- **Battlefields:** Torna ridge, Pratapgad forest, Kolhapur plain, Ghod Khind in rain, Chakan walls,
  Umberkhind forest, Lal Mahal courtyard at night, Surat waterfront, Purandar, Agra mansion,
  Kondhana cliffs by night, Salher, Khanderi island at sea, Raigad.
- **Sound:** dhol-tasha, tutari, halgi, nagara, shehnai; the shahir's daf. Music generated by Pon
  (as YUDDH). Sound effects: cannon, matchlock, horse, rain, sea.

## 8. Writing rules (the anti-hallucination rules, short form; full rules in CLAUDE.md)

- Every card text, briefing and History note that states a fact has `refs` to `CHRONOLOGY.md`.
- No troop or casualty numbers (CONTESTED #15).
- TRADITION is always labelled in the History panel; the shahir may sing it.
- Names follow `history/PEOPLE.md` exactly.
- Disputed points follow `history/CONTESTED.md`.

## 9. Balance targets

Same method as YUDDH: AI "normal" vs "normal", 200 seeded games per chapter.
- Ordinary battles: player 45–70%.
- Chapters that history lost (Pavan Khind's pass, Chakan, Purandar): `survive` objectives tuned to
  40–60%; the History note says what really happened.
- Puzzles (Agra): solvable by the scripted solution in a test; not simulated.

## 10. Decisions log

- 23 Nov 2026: project started; built on the YUDDH engine (commit 6f1c852); new ruleset
  `'swarajya'`; chronology-first workflow; English + Marathi from the start; working title SWARAJYA.
