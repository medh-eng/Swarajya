# Chronology of Chhatrapati Shivaji Maharaj (1630–1680)

**This file is the single source of truth for every historical claim in the game.**
Every chapter, card, briefing, History note and epilogue must point to an entry ID here
(`refs` in `data/*.json`). If a fact you want is not here, research it, add an entry with
its sources, then use it. `scripts/check-refs.mjs` fails the build if a ref is missing.

## How to read an entry

- **ID**: `C-<year>-<NAME>`. IDs never change once used (rename the title, not the ID).
- **Basis** (same tags as Yuddh's History panel):
  - `HISTORY`: stated in contemporary or near-contemporary sources and accepted by modern historians.
  - `CONTESTED`: the event happened, but a date, a detail or the account of who did what is disputed. See `CONTESTED.md`.
  - `TRADITION`: ballads (powada), later bakhars, popular retellings. May be shown as story, never as fact.
  - `VERIFY`: found only in weak sources so far. **Do not use in the game until upgraded.**
- **Refs**: source IDs from `SOURCES.md`. `W-*` = web reference read on 23 Nov 2026; the primary text it cites is named where it names one.
- **Game**: which chapter or cards use it.
- **Standard reference:** Babasaheb Purandare, *Raja Shivachhatrapati* (S-PURANDARE). Every entry is
  to be checked against it; the check status of each entry is tracked in `PURANDARE-CHECK.md`.
  When it agrees with the period sources, add `S-PURANDARE` to the entry's Refs with the chapter.
  When it differs, record both versions in `CONTESTED.md` and Pon decides (see CLAUDE.md, "Reference order").

Dates: the Government of Maharashtra and most references give Julian-calendar dates for the 1600s
(the English factories used the Julian calendar). Where a source converts, both are noted.

---

## Prologue: the Deccan before Shivaji

### C-1630-CONTEXT · The three sultanates and Shahaji
- **Date:** 1620s–1630s
- **Event:** At Shivaji's birth the Deccan was divided between the sultanates of Bijapur (Adil Shahi), Ahmadnagar (Nizam Shahi) and Golconda (Qutb Shahi), with the Mughals pressing from the north. His father Shahaji Bhonsle served Ahmadnagar, the Mughals and Bijapur in turn, but kept his jagir at Pune and his own troops. In 1636 Shahaji gave up Mahuli and Junnar to the Mughals and returned to Bijapur service; he later held lands around Bangalore.
- **Basis:** HISTORY
- **Refs:** W-SHIVAJI, W-SHAHAJI
- **Game:** prologue text, `ch00_maval`

### C-1630-BIRTH · Birth at Shivneri
- **Date:** 19 February 1630 (Julian; = 1 March 1630 Gregorian). Marathi date: Phalgun Vadya Tritiya, Shaka 1551. Older tradition: April 1627 (6 or 10 April).
- **Place:** Shivneri hill fort, above Junnar (Pune district).
- **Event:** Born to Shahaji and Jijabai; named after the local goddess Shivai. Jijabai was the daughter of Lakhuji Jadhavrao of Sindkhed.
- **Basis:** HISTORY (event) · CONTESTED (date: see CONTESTED.md #1)
- **Refs:** W-EARLY, W-SHIVAJI, W-SANSAD, W-FPJ, W-BRIT
- **Game:** prologue, campaign map start marker, card `sw_shivaji`

### C-1640-PUNE · Boyhood in the Pune jagir
- **Date:** c. 1636–1647
- **Event:** Shivaji and Jijabai lived in Pune, where Shahaji's administrator Dadoji Kondadeo ran the jagir in Shivaji's name. Shivaji married Saibai at the Lal Mahal, Pune, on 16 May 1640. After Dadoji's death (7 March 1647) Shivaji took full control of the jagir.
- **Basis:** HISTORY (administrator). CONTESTED: that Dadoji was also Shivaji's teacher, as *Raja Shivachhatrapati* tells it (CONTESTED.md #6). By Pon's decision D-15 the game shows him as teacher, as Purandare's account, with the dispute noted.
- **Refs:** W-EARLY, W-LALMAHAL, W-DADOJI, S-PURANDARE (Vol. I, Campaign: Fort Shivneri, "Pant Dadaji Konddev" and "Fort Kondana", pp. 159-165: Dadoji worn out by his work and the teaching of Pant and Jijabai shaping the young Raje; his death at the start of "Fort Kondana", p. 165, no date given there)
- **Game:** tutorial `ch00_maval` setting; Jijabai card text

---

## Act I · The Rebel of the Sahyadri (1646–1659)

### C-1645-RAIRESHWAR · The oath at Raireshwar (tradition)
- **Date:** 1645 (a letter dated 17 April 1645 is cited)
- **Event:** Popular tradition holds that the young Shivaji and his Maval companions swore to found Swarajya at the Raireshwar temple. The evidence usually cited is a letter of 17 April 1645 to Dadaji Naras Prabhu Deshpande of Rohidkhore that speaks of "Hindavi Swarajya" and of the god Rohireshvar giving victory. Scholars do not agree that the letter is genuine; Pagadi notes that several scholars find its language not that of the 17th century.
- **Basis:** TRADITION · CONTESTED (the letter: CONTESTED.md #7)
- **Refs:** W-HINDAVI, W-BHARATPEDIA-HINDAVI
- **Game:** the shahir may sing the oath in the prologue, labelled tradition. Not a playable event.


### C-1646-TORNA · Torna, the first fort
- **Date:** 1646 (popular sources also say 1645 or 1647)
- **Event:** Aged about 16, Shivaji took Torna fort while the Bijapur court was in confusion over the sultan's illness. **Following Purandare (Pon's decision D-19):** the fort stood neglected and unguarded and he took charge without a fight (some references say he took it from its commandant: CONTESTED.md #25). Treasure found there paid for a new fort, Rajgad, which was his seat of government for over a decade. Torna was renamed Prachandagad.
- **Basis:** HISTORY (year: CONTESTED.md #2; unguarded fort: S-PURANDARE, D-19)
- **Refs:** W-SHIVAJI, W-TORNA, S-PURANDARE
- **Game:** `ch01_torna`, cards `sw_gad_torna`, `sw_torna_hoard`

### C-1647-EXPANSION · Kondhana, Purandar, Chakan and the Konkan
- **Date:** c. 1647–1648
- **Event:** Shivaji took or brought under control forts and towns around Pune, including Kondhana (later Sinhagad), Purandar and Chakan, and the districts of Supa, Baramati and Indapur; then turned west and took Kalyan in the Konkan.
- **Basis:** HISTORY (exact order and dates of each fort: VERIFY before using individually)
- **Refs:** W-SHIVAJI, W-BYJUPDF
- **Game:** campaign map (forts lit after `ch01_torna`)

### C-1647-RAJGAD · Murumbdev becomes Rajgad
- **Date:** taken c. 1647 (references vary from 1646 to 1648); **named Rajgad as soon as it was taken (S-PURANDARE; Pon's decision D-20)**; some references say repairs from 1649 and the renaming in 1654
- **Event:** The hill fort of Murumbdev, near Torna, was taken and rebuilt (with treasure from Torna) and renamed Rajgad. It was Shivaji's seat of government until Raigad became the capital. How long it served is given differently: "over a decade" (W-SHIVAJI) or "almost 26 years" (W-RAJGAD, citing A. R. Kulkarni); the move to Raigad is dated anywhere from 1662 to 1674.
- **Basis:** HISTORY (capture, renaming) · CONTESTED (dates, length as capital: CONTESTED.md #21)
- **Refs:** W-RAJGAD, W-SHIVAJI, W-HISTFILES-TORNA
- **Game:** card `sw_gad_rajgad`; campaign map capital marker until `ch18_rajyabhishek`
- **Purandare adds (S-PURANDARE Vol. I, pp. 157-158, 169):** Bijapur had refitted the old fort of Murumbdev in February 1634 and left it empty; Shivaji took it, paid for the work with the treasure found at Torna, and named it Rajgad *at once* (the 1654 renaming above differs: CONTESTED.md #21). His plan was three terraces (machis: Padmavati, Suvela, Sanjeevani) and a citadel (the Bale Killa), with the offices, a palace and workshops; a lake on the Padmavati terrace in the north; the work was expected to take more than a year or two. The map on p. 168 names the Pali, Gunjan, Aalucha and Chor gates, the Darukhana (powder store), horse stable, flag place, watch tower and the Dumba.
- **Refs (added):** S-PURANDARE

### C-1646-TORNA-FORT · What Torna was like and how it was taken, as Purandare tells it
- **Date:** 1646 (the pages give no year; Purandare calls Shivaji a boy of about fifteen, "running sixteen" in 1647)
- **Event:** Torna stands in the Kanad valley, tall and broad, with two terraces (machis): Zunzar machi and Budhla machi. Budhla machi is named for a huge rock on its crest that looks like an upturned oil vessel. One hard path leads down from Zunzar machi. Two gates: Binny Darwaza (north, towards Pune) and Konkan Darwaza (west). The goddess Toranjai has a small temple on the north side. Purandare says Bijapur had neglected the fort: no garrison, no organised lookouts, guns or patrols. Shivaji, with his companions and other Mavle bands, came down the Kanad valley one day and took charge without a fight; a saffron flag went up over Binny Darwaza; Mavle guards were posted at the Shinagar post, the Konkan Darwaza, Zunzar machi and Budhla machi. He then began repairs and appointed a Maratha fort commander, a Brahmin chief accountant, Prabhu karkhanis (clerks) and, for the army, Mavle, Koli, Ramoshi, Mahar and other men. While the repairs went on, a pot of treasure was dug up; Shivaji held it to be Swarajya's, and no Mavle took a coin.
- **Basis:** HISTORY per S-PURANDARE (single source) · CONTESTED (no garrison, no fighting: the entry above says he took it from its commandant; CONTESTED.md #25)
- **Refs:** S-PURANDARE (Vol. I, Campaign: Fort Shivneri, "Fort Torangad", pp. 154-158)
- **Game:** cards `sw_gad_torna`, `as_gad_torna_held`, `sw_torna_hoard`; `ch01_torna` battlefield and `art/PROMPTS-BATCH1.md`

### C-1647-KONDHANA-BAPUJI · Kondhana won by negotiation; Subhanmangal taken
- **Date:** 1647 (after Dadoji's death; the pages give no month)
- **Event:** When Bijapur learned Dadoji had died, the court named Miya Rahim Mahammad, the officer at Shirwal (fort Subhanmangal), as subedar of Kondhana fort and its district. Shivaji wanted Kondhana first. Its commander was Siddi Ambar Wahab, described as old and loyal to Bijapur. Bapuji Mudgal Deshpande, the Deshpande of Khedebara just south of Kondhana, who knew the fort well, went alone, persuaded the commander to change sides and put Shivaji's men in the fort. There was no fight. Miya Rahim, on his way to take up the post, turned back. Shivaji next struck at Shirwal and took Fort Subhanmangal, ending Miya Rahim's local power. Earlier, per the same pages, Shivaji had taken the neglected fort of Kuwari in the Paud valley from the Dhamale Deshmukh, and annexed the surrounding country without fighting; Subhanmangal's commander reported it to Bijapur, which at first ignored it.
- **Basis:** HISTORY per S-PURANDARE (single source; month and order of each fort: VERIFY in Mehendale or Sabhasad before any card states them)
- **Refs:** S-PURANDARE (Vol. I, Campaign: Fort Shivneri, pp. 157-159, 165-167)
- **Game:** campaign map (forts lit after `ch01_torna`); an optional later chapter; Bijapur's reaction is the briefing text of `ch04_pratapgad`

### C-1647-JAVLI · Javli's succession (1647), as Purandare tells it
- **Date:** 1647 (Chandrarao More's death); Shivaji in his seventeenth year
- **Event:** Chandrarao More of Javli (Chandrarao was the family's title; the man who died was Daulatrao) had no son. The widow, fearing the estate would be taken by relatives or by Bijapur, and looking towards Shivaji's Rajgad, asked him to come. He came with cavalry and troops, took over Javli's posts without difficulty and, as she wished, set up the man she had chosen from the More family of Shivthar as the new Chandrarao: an adult with two sons, probably named Yashwantrao. Purandare presents this as Shivaji keeping faith with the widow, and expecting the new Chandrarao's loyalty.
- **Basis:** HISTORY per S-PURANDARE (single source; agrees with pp. 207 and 211, which present Yashwantrao as the heir Shivaji's favour had secured; CONTESTED.md #26 now closed as consistent). Year and the adoption: VERIFY in Mehendale or Jedhe before a card states them.
- **Refs:** S-PURANDARE (Vol. I, Campaign: Fort Shivneri, "Fort Kondana", pp. 165-166)
- **Game:** none yet (D-07: the later killing of Chandrarao More is never playable)

### C-1648-SHAHAJI · Shahaji arrested; Bijapur strikes back
- **Date:** 25 July 1648 (arrest); released 1649
- **Event:** To contain Shivaji, the Bijapur government had Shahaji imprisoned by the Maratha sardar Baji Ghorpade. He was released in 1649 after the capture of Jinji secured Bijapur's position in the Karnatak. Popular accounts add that Bijapur sent Fateh Khan against Pune and was repulsed at Purandar.
- **Basis:** HISTORY (arrest, release) · VERIFY (the Purandar fight against Fateh Khan: find it in Sabhasad, Shivabharat or Jedhe before building a chapter on it)
- **Refs:** W-SHIVAJI (arrest, release), W-VKENDRA (Fateh Khan: popular, weak), S-PURANDARE (Vol. I, pp. 167-169, run-up only)
- **Purandare adds (pp. 167-169):** The run-up: after Shivaji took Kondhana and Subhanmangal, the sultan, Mahammad Adilshah, was alarmed but feared that moving against Shivaji would provoke Shahaji, who had troops of his own in the Karnatak; letters from Afzal Khan and from a court retainer, Lehmaji Jyoti, accused Shahaji of double dealing. The wazir Mustafakhan, with the queen and Baji Ghorpade, advised arresting Shahaji first. Mustafakhan set out from Bijapur for Jinji with Baji Ghorpade on **17 January 1648**; Khankhanan, Rustumjaman and Bahlolkhan were among the sardars with him.
- **Game:** candidate chapter `ch02_purandar1648` (status: blocked on VERIFY)

### C-1649-PAUSE · Five quiet years
- **Date:** 1649–1655
- **Event:** Shivaji paused his conquests and consolidated what he held.
- **Basis:** HISTORY
- **Refs:** W-SHIVAJI
- **Game:** interlude text between chapters 1 and 3

### C-1654-NAVY · The first warships
- **Date:** c. 1654 (some sources c. 1657–59)
- **Event:** Shivaji had the first Maratha naval vessels built in a creek near Kalyan, mainly to check the Siddis of Janjira. By 1659 the fleet is put at about 20 ships.
- **Basis:** HISTORY (start date approximate)
- **Refs:** W-NAVY, W-ESAM-NAVY, S-PURANDARE (Vol. I, "Darya Sarang", pp. 223-225)
- **Purandare adds:** he places the first fleet in late 1657 and early 1658 (after the taking of Kalyan, 24 October 1657): the later range above. Daryasarang was the first naval commander, with Daulatkhan and Maynak Bhandari; a fort and naval centre was started in the Kalyan creek under Abaji Mahadev; warships (Sangamiri among them) were built.
- **Game:** unlocks navy cards (`sw_galbat`)

### C-1656-JAOLI · Jaoli and the Mores
- **Date:** 1656. The Jedhe chronology puts Chandrarao's surrender in Vaishakh, Shaka 1578 (April–May 1656); popular sources and the Gemini report give 15 January 1656. These may be two stages (Javli taken, then Chandrarao's surrender at Rairi): CONTESTED.md #24
- **Event:** Shivaji seized the valley of Jaoli from Chandrarao More, a fellow Maratha feudatory of Bijapur who had backed an attempt to ambush him. Chandrarao and his sons were imprisoned; after an escape attempt Chandrarao and his son Krishnaji were executed, and the son Baji escaped. Raigad (then Rairi) and other forts followed. How Jaoli was taken (Maratha accounts include a pretended marriage embassy) is disputed.
- **Basis:** HISTORY (outcome) · CONTESTED (method: CONTESTED.md #4; sons' fate: #27)
- **Refs:** W-JAOLI, W-TAKAKHAV-JAOLI, S-PURANDARE (Vol. I, Campaign: Pratapgad Wartime, "In Javli Jungles", pp. 207-212)
- **Purandare adds (pp. 207-212), dates he gives:** Javli taken **15 January 1656**; Shivaji's force moved on Rairi fort **6 April 1656**; Chandrarao gave in after about a month of siege (so April-May 1656: this joins the two dates above, CONTESTED #24); he was shown mercy, but while in Shivaji's camp he was caught corresponding with Bijapur and the Ghorpades of Mudhol, fled, was caught and beheaded (after 27 August 1656); his sons Baji and Krishnaji were killed too. **No pretended marriage embassy:** Purandare tells it as a quarrel that grew over months. The Mores' lord and his captain Hanmantrao More claimed Gunjan Mawal, which belonged to the Shilamkar Deshmukhs, harboured a criminal fleeing Shivaji's justice, and attacked Rohidkhore (killing two local patils); Shivaji sent warnings and letters (including a mediator, Raghunathpant), then moved against the Mores with the Deshmukhs Kanhoji Jedhe and Haibatrao Shilamkar, Sambhaji Kavji Kondhalkar, Bandal Naik and Raghunathpant Sabnis. In the fighting at Chaturbet in the Johor valley and at Javli, Sambhaji Kavji killed Hanmantrao; Chandrarao fled to Rairi; his brother Prataprao fled to Bijapur. Murar Baji Deshpande, fighting for the Mores, so impressed Shivaji that he was invited, and agreed, to join Swarajya. Krishnaji Babaji became Javli's subedar and Viro Ram its mujumdar. Chandragad, Makarandgad, Kangori, Songad and Chambhargad then joined Swarajya; Rairi was repaired and renamed Raigad. Shilamkar, Chandrarao's nephew, fought on Shivaji's side. The same pages say the present Chandrarao (Yashwantrao) held Javli only through Shivaji's favour (C-1647-JAVLI).
- **Game:** `ch03_jaoli`; the History panel shows both views

### C-1656-PRATAPGAD-BUILT · Pratapgad raised above Jaoli
- **Date:** 1656
- **Event:** The fort of Pratapgad was built in the Jaoli country.
- **Basis:** HISTORY
- **Refs:** W-PRATAPGAD-FORT, S-PURANDARE (Vol. I, "Darya Sarang", pp. 226-227)
- **Purandare adds (pp. 226-227):** The fort was designed and built by Moropant (Pingle) in the Javli valley; the book gives no year for its completion and tells it after the late-1656 treaty with Sawant (so: started 1656, finished at an unknown later date: VERIFY). Shivaji came to inspect it and named it Pratapgad; Jijabai admired it. It had living quarters, offices, ponds, secret passages, strong armour-like defences and a citadel. A Shiva lingam found under a creeper on the site became a temple, Kedareshwar. Huge mountains of the Mahabaleshwar range lie to the east, sheer drops north and south and deep valleys west; the forest around was so dense that even an elephant hidden in it would be hard to find; only Mavle dared the foot tracks down towards Rohidkhore. First fort commander: Arjoji Yadav, later Ganoji Govind; Gorakhoji Kakde ("Dinkarrao") was subedar of Javli. Nearby guard-forts: Makarandgad (near Ghonaspur), Chandragad (near Umrathe, Tanaji Malusare's village) and Mangalgad.
- **Game:** `ch04_pratapgad` battlefield; card `sw_gad_pratapgad`

### C-1657-MUGHALS · First clash with the Mughals
- **Date:** late March – 31 May 1657
- **Event:** While Aurangzeb, then Mughal viceroy of the Deccan, besieged Bidar, Maratha horsemen raided Mughal villages towards Ahmadnagar and Shivaji raided Junnar. Nasiri Khan beat the raiders back. Aurangzeb soon left for the north to fight the war of succession.
- **Basis:** HISTORY
- **Refs:** W-AHMEDNAGAR, W-SHIVAJI, W-SARKAR-TOC, S-PURANDARE (Vol. I, "Karhe plateau", pp. 218-221)
- **Purandare adds:** Shivaji first sent Sonopant Dabir to Aurangzeb at Bidar to have his Konkan gains approved (Aurangzeb's letter is dated 23 April 1657); then, on a dark night, Shivaji's Mavle went over the wall of the Mughal post at **Junnar (30 April 1657)** and cleared its treasure and stables; he raided Ahmednagar's town, where the Mughal officer Nausirkhan came out against him. Aurangzeb ordered his officers (including Kartalabkhan) to punish Shivaji's land; Shivaji sent Raghunathpant Korde to apologise and Aurangzeb, anxious about his sick father Shah Jahan, forgave him in a letter dated 14 February 1658. Bijapur's sultan Muhammad Adilshah died on 4 November 1656 (the book's date).
- **Game:** interlude text; possible small raid chapter later

### C-1656-SUPA · Supa taken from Sambhaji Mohite
- **Date:** 24 September 1656
- **Event:** Supa, part of Shahaji's jagir, was held by Shahaji's brother-in-law Sambhaji Mohite, whom Shivaji addressed as maternal uncle (his stepmother Tukabai's brother). Complaints of bribes and cruelty reached Shahaji. Shivaji rode to Supa after the Dasara festival, entered unannounced, asked for the post, the fort and the district, was refused, and had Mohite taken into custody. Shivaji then sent him to Shahaji in the Karnatak with an honourable escort; Yesaji Ganesh Atre was made havaldar of Supa.
- **Basis:** HISTORY per S-PURANDARE (single source: VERIFY the date)
- **Refs:** S-PURANDARE (Vol. I, "Karhe plateau", pp. 215-217)
- **Game:** none planned (family matter); person file only

### C-1656-BHAVANI-SWORD · The gift of a European sword
- **Date:** end of 1656 or soon after (the book places it after the treaty with Sawant)
- **Event:** After the Sawants of Sawantwadi accepted Shivaji's overlordship, Govlekar Sawant presented him with a fine double-edged European sword; Shivaji paid for it, and gave ceremonial clothes, and named the sword Bhavani.
- **Basis:** HISTORY per S-PURANDARE (single source) · TRADITION (that this is the sword later called "the Bhavani Talwar")
- **Refs:** S-PURANDARE (Vol. I, "Darya Sarang", p. 226)
- **Game:** possible order or item card; label as tradition

### C-1657-KONDHANA-RETAKEN · Kondhana won back
- **Date:** around 13 August 1657
- **Event:** Kondhana had been handed back to Bijapur at the time of Shahaji's release (1649). With Aurangzeb gone north and Bijapur weakened, Shivaji's forces took it again; a saffron flag went up on the fort.
- **Basis:** HISTORY per S-PURANDARE (single source: VERIFY the date). It was given up again at the Treaty of Purandar (C-1665-TREATY) and taken a third time in 1670 (C-1670-SINHAGAD).
- **Refs:** S-PURANDARE (Vol. I, "Darya Sarang", p. 223)
- **Game:** campaign map only

### C-1657-NORTH-KONKAN · Kalyan, Bhivandi and the northern Konkan
- **Date:** August 1657 – May 1658
- **Event:** Raghunath Ballal Atre took Dabhol (about August 1657) and went on to Dandarajpuri, facing Janjira. In October 1657 Shivaji sent his commanders against Kalyan and Bhivandi (Dadaji Bapuji Ranzekar, Sakho Krishna Lohokare); both fell on 24 October 1657, and about forty hill forts (including Lohgad, Tung, Tikona, Visapur, Rajmachi, Prabalgad and Sarasgad) followed. In January 1658 Shivaji took Mahuli (a fort Shahaji had defended in 1636), then dealt with the Portuguese-held Chaul region, taking Tale and Ghosale. Portugal's governor at Goa reported anxiously to Lisbon (5 May 1658).
- **Basis:** HISTORY per S-PURANDARE (single source: VERIFY each date)
- **Refs:** S-PURANDARE (Vol. I, "Darya Sarang", pp. 223-225)
- **Game:** campaign map; navy cards

### C-1657-SAMBHAJI-BORN · Sambhaji born
- **Date:** 1657
- **Event:** Sambhaji, Shivaji's eldest son, was born to his first wife Saibai.
- **Basis:** HISTORY (day and place: S-PURANDARE)
- **Refs:** W-DECCANWARS, S-PURANDARE (Vol. I, "Karhe plateau", p. 222)
- **Purandare adds:** born **14 May 1657**, probably at Purandar, where Saibai had gone to stay with Jijabai; named for Shivaji's elder brother Sambhaji, who had died at Kanakgiri (CONTESTED.md #28).
- **Game:** person file only

### C-1659-AFZAL-MARCH · Afzal Khan marches
- **Date:** from about May 1659
- **Event:** The Bijapur court sent the veteran general Afzal Khan to arrest or destroy Shivaji. The Sabhasad chronicle and the Shivakavya record that he desecrated temples on the way (the later Chitnis bakhar says the images at Tuljapur and Pandharpur were removed before he arrived). An English factor's letter of 10 December 1659 (Henry Revington) says the queen advised Afzal Khan to pretend friendship. His envoy Krishnaji Bhaskar opened talks; Shivaji's envoy was Gopinath Pant.
- **Basis:** HISTORY (march, envoys, Revington letter) · CONTESTED (temple accounts differ between bakhars)
- **Refs:** W-AFZAL, W-PRATAPGAD
- **Game:** `ch04_pratapgad` briefing

### C-1659-PRATAPGAD · The meeting below Pratapgad
- **Date:** 10 November 1659 (some references print 20 November: calendar conversion)
- **Event:** Shivaji and Afzal Khan met in a pavilion below Pratapgad; by agreement each came armed only with a sword and with a very small escort. Shivaji, expecting treachery, wore armour under his clothes, a bagh nakh (tiger claw) concealed on his left arm and a dagger in his right hand. What happened inside is not known with historical certainty: Maratha sources say Afzal Khan seized Shivaji and struck first; sources hostile to Shivaji call it murder at a parley. Afzal Khan was killed, and the waiting Maratha troops routed his army.
- **Basis:** HISTORY (meeting, death, rout) · CONTESTED (who struck first; army sizes are exaggerated in later bakhars: CONTESTED.md #5)
- **Refs:** W-SHIVAJI, W-PRATAPGAD, W-AFZAL, W-SABHASAD
- **Game:** `ch04_pratapgad` (Bhet parley + battle); cards `as_afzal_khan`, `sw_wagh_nakh`

### C-1659-KOLHAPUR · Battle of Kolhapur
- **Date:** 28 December 1659
- **Event:** After Pratapgad the Marathas pushed south (Panhala came into Shivaji's hands; Vasota and other forts fell). The Bijapur general Rustam Zaman, with Fazl Khan (Afzal's son), came up near Miraj; Shivaji attacked first, early on 28 December, and Rustam Zaman fled the field by afternoon. Siddi Hilal fought on Shivaji's side against Rustam Zaman and Fazl Khan (one account places that fight near Raibag in early 1660).
- **Basis:** HISTORY (battle, result) · VERIFY (troop numbers 10,000 vs 3,500 and casualty figures: do not use)
- **Refs:** W-KOLHAPUR, W-RUSTAM, W-GOODREADS-HILAL, W-PANHALA-FORT
- **Game:** `ch05_kolhapur`; cards `as_rustam_zaman`, `sw_siddi_hilal`

---

## Act II · Two Empires Against One (1660–1665)

### C-1660-PANHALA-SIEGE · Siddi Jauhar besieges Panhala
- **Date:** from 2 March 1660
- **Event:** Bijapur sent the Abyssinian general Siddi Jauhar, with Fazl Khan and Siddi Masud, to besiege Shivaji in Panhala. Siddi Jauhar bought grenades from the English at Rajapur and hired English gunners. Netaji Palkar harassed the besiegers from outside; Siddi Hilal and his son Siddi Wahwah fought with him (Wahwah was wounded and captured). At the same time the Mughals invaded from the north (see C-1660-CHAKAN).
- **Basis:** HISTORY
- **Refs:** W-PANHALA1660, W-SHIVAJI, W-GOODREADS-HILAL
- **Game:** `ch06_pavankhind` (part 1: the breakout); card `as_angrezi_gola`

### C-1660-PAVANKHIND · The pass of Ghod Khind (Pavan Khind)
- **Date:** night of 12–13 July 1660
- **Event:** Shivaji slipped out of Panhala at night in rain with a small force and made for Vishalgad. Pursued by Siddi Masud, he left Baji Prabhu Deshpande and the Bandal contingent to hold the Ghod Khind (Gajapur) pass. The Jedhe chronicle records that they fought hard, Baji Prabhu and others fell, and the enemy could not climb the pass; Shivaji reached Khelna (Vishalgad). The pass is remembered as Pavan Khind ("the sacred pass").
- **Basis:** HISTORY. TRADITION: Shiva Kashid dressed as Shivaji to draw pursuit and was killed; the cannon shots from Vishalgad signalling Shivaji's safe arrival. Show both as tradition.
- **Refs:** W-PAVAN, W-PANHALA1660, W-BAJIPRABHU
- **Game:** `ch06_pavankhind` (part 2: hold the pass); cards `sw_bajiprabhu`, `as_siddi_masud`

### C-1660-RAJAPUR · Rajapur and the English factors
- **Date:** early 1660 (first clash); the factory plundered and four factors taken in December 1660 (Sarkar); held until 1663. The ChatGPT report gives "March 1661" (CONTESTED.md #22).
- **Event:** Early in 1660 Maratha troops seized an English factor (Philip Gyffard) and the factory's broker at Rajapur; the chief factor Henry Revington rescued Gyffard by force. During the Panhala siege the Rajapur factory sold grenades to Siddi Jauhar and some Englishmen served his guns. In December Shivaji surprised Rajapur, plundered the English factory and carried off four factors (Revington, Richard Taylor, Randolph Taylor, Philip Gyffard). They were kept in Maratha forts, latterly at Raigad, until 1663. The English losses at Rajapur were still being negotiated with Shivaji's envoys in 1673.
- **Basis:** HISTORY (Sarkar, from the English factory records)
- **Refs:** W-SARKAR-RAJAPUR, W-RAJAPUR, W-TAKAKHAV-RAJAPUR
- **Game:** History note for `ch06_pavankhind` (why the English grenades mattered); possible card text for `as_angrezi_gola`

### C-1660-PANHALA-FALL · Panhala given up
- **Date:** 22 September 1660 (Sarkar gives about 25 August)
- **Event:** With the Mughals advancing in the north, Shivaji made terms with Bijapur and Panhala was handed over. It was not regained for good until 1673 (C-1673-PANHALA).
- **Basis:** HISTORY (date: CONTESTED.md #8)
- **Refs:** W-PANHALA1660, W-PAVAN
- **Game:** campaign map: Panhala goes dark

### C-1660-CHAKAN · Fifty-six days at Chakan
- **Date:** 23 June – 14 August 1660
- **Event:** Shaista Khan, Mughal viceroy of the Deccan and Aurangzeb's maternal uncle, occupied Pune and besieged Chakan (Sangramdurg), held by the old killedar Firangoji Narsala with a small garrison. Rajput officers (Rai Singh Sisodia, Bhao Singh Hada) served in the Mughal army. A mine brought down part of the wall; after hard fighting Firangoji surrendered and was given safe passage. Shaista Khan then lived in the Lal Mahal in Pune.
- **Basis:** HISTORY (garrison size 320 or 800 differs: do not show a number)
- **Refs:** W-CHAKAN, W-FIRANGOJI
- **Game:** `ch07_chakan` (survive objective); cards `sw_firangoji`, `mg_shaista_khan`, `mg_surang`

### C-1661-UMBERKHIND · The trap at Umberkhind
- **Date:** usually given as 3 February 1661 (some references: 2 February); the Jedhe chronology suggests about 15 January 1661
- **Event:** Shaista Khan sent the Uzbek general Kartalab Khan, with Rai Bagan (wife of a Berar deshmukh, a commander in her own right), to take the North Konkan. Misled about Shivaji's position, he went down by the less-used Umberkhind pass near Pen, where Maratha infantry and light cavalry ambushed his column in the forest. On Rai Bagan's advice he asked for terms; Shivaji let the army go after it gave up its baggage. Netaji Palkar was then posted to watch the pass.
- **Basis:** HISTORY (date: CONTESTED.md #9; force sizes vary wildly: do not use)
- **Refs:** W-UMBER, W-UMBER-IIAB, W-RATTIBHA-UMBER
- **Game:** `ch08_umberkhind` (Khind battlefield); cards `mg_kartalab_khan`, `mg_rai_bagan`, `sw_khind_ambush`

### C-1663-LALMAHAL · The night raid on the Lal Mahal
- **Date:** night of 5–6 April 1663
- **Event:** Shivaji led a small chosen band into Pune at night and broke into the Lal Mahal, his boyhood home, where Shaista Khan was living. Shaista Khan escaped through a window but lost fingers; his son Abul Fath was killed, with guards and attendants. Maharaja Jaswant Singh, camped nearby, did not intervene. The news reached Aurangzeb weeks later. Shaista Khan was moved to Bengal, as its subahdar from March 1664, and is said to have left without the customary audience with the emperor.
- **Basis:** HISTORY. TRADITION: entry disguised as a wedding procession (some accounts say as a Deccani relief party).
- **Refs:** W-LALMAHAL, W-NIGHTRAID, W-SHAISTA, W-BANGLAPEDIA-SHAISTA
- **Game:** `ch09_lalmahal` (Ratra / deadline objective)

### C-1664-SURAT · The first sack of Surat
- **Date:** 5–13 January 1664 (some give 6–10 January)
- **Event:** Shivaji appeared before Surat, the Mughals' richest port. The governor Inayat Khan shut himself in the castle and, according to the accounts, sent a man to assassinate Shivaji (who was wounded or nearly so). The city was plundered for several days. The English factory under George Oxenden and the Dutch factory armed themselves and were not taken. Value of the plunder: estimates differ; do not show a figure.
- **Basis:** HISTORY. TRADITION: Shivaji spared the house of the Capuchin Father Ambrose.
- **Refs:** W-SURAT, W-TAKAKHAV-SURAT
- **Game:** `ch10_surat` (raid objective); cards `mg_inayat_khan`, `ei_factory_guard`

### C-1664-SHAHAJI-DIES · Death of Shahaji
- **Date:** c. 1664–1665
- **Event:** Shahaji died in a hunting accident in the Karnatak.
- **Basis:** HISTORY
- **Refs:** W-SHIVAJI
- **Game:** interlude text

### C-1664-SINDHUDURG · Sindhudurg
- **Date:** November 1664 (foundation)
- **Event:** Shivaji laid the foundations of the sea fort of Sindhudurg at Malvan, later the headquarters of the Maratha navy. The fleet grew to about 50 ships by 1664 and over 85 in the 1670s (estimates).
- **Basis:** HISTORY (ship counts are estimates: show as "dozens")
- **Refs:** W-IDR, W-PNATH, W-ESAM-NAVY
- **Game:** interlude; unlocks `sw_gurab`, `sw_gad_sindhudurg`

### C-1665-PURANDAR · Jai Singh and the siege of Purandar
- **Date:** 31 March – 11 June 1665
- **Event:** Aurangzeb sent Mirza Raja Jai Singh I of Amber, with Diler Khan, at the head of a large army. Diler Khan took Vajragad, beside Purandar, and pressed Purandar itself; its defender Murarbaji Deshpande was killed in a sortie. The Mughals ravaged the surrounding country.
- **Basis:** HISTORY. TRADITION: Diler Khan offered Murarbaji service and shot him with an arrow when he refused.
- **Refs:** W-PURANDAR, W-TREATY
- **Game:** `ch11_purandar` (survive + forced terms); cards `mg_jai_singh`, `mg_diler_khan`, `sw_murarbaji`

### C-1665-TREATY · The Treaty of Purandar
- **Date:** 11 June 1665
- **Event:** Shivaji came to terms with Jai Singh: he gave up 23 forts (among them Purandar, Rudramal, Kondhana, Karnala, Lohagad, Tung, Tikona, Rohida and Mahuli) and kept 12 with lands yielding about 1 lakh hun a year; he agreed to serve the Mughals when called on and to visit the emperor; his son Sambhaji was given a Mughal command (mansab) of 5,000. A money payment is reported differently (4 lakh hun as compensation, or 40 lakh hun tied to a claim on Bijapur's Konkan): CONTESTED #19.
- **Basis:** HISTORY (total fort count is given as 35 or 36 in different sources) · CONTESTED (the payment)
- **Refs:** W-TREATY, W-PURANDAR, W-PREPP
- **Game:** after `ch11_purandar` the campaign map dims 23 forts (the treaty screen)

---

## Act III · The Lion in the Cage (1666)

### C-1666-PANHALA-FAIL · Serving Jai Singh; failure at Panhala
- **Date:** late 1665 – January 1666
- **Event:** Under the treaty Shivaji served with Jai Singh's campaign against Bijapur, which failed. He left Jai Singh about 11 January 1666, reached Panhala about five days later, and failed to take it; the news reached Jai Singh on 20 January. At the end of January Netaji Palkar deserted to Bijapur (he was later won over by Jai Singh into Mughal service).
- **Basis:** HISTORY
- **Refs:** W-SARKAR-1666, W-AURANGZIB-IV, W-NETAJI
- **Game:** interlude text between `ch11_purandar` and `ch12_agra`; Netaji's card text must not contradict this

### C-1666-AGRA · At Aurangzeb's court
- **Date:** 12 May 1666 (the darbar for Aurangzeb's 50th lunar birthday)
- **Event:** Shivaji and his nine-year-old son Sambhaji were presented at the Mughal court in Agra. Made to stand among nobles of lower rank, he took offence, left the hall, and was placed under house arrest in the custody of Ram Singh, Jai Singh's son. The court debated whether to kill him or send him away to service; Jai Singh, who had promised his safety, tried to influence the emperor.
- **Basis:** HISTORY
- **Refs:** W-RAMSINGH, W-BRIT
- **Game:** `ch12_agra` (escape puzzle) briefing

### C-1666-ESCAPE · The escape from Agra
- **Date:** 17 August 1666 (the Sambhaji article on Wikipedia gives 22 July; see CONTESTED.md #10)
- **Event:** After feigning illness and sending out large baskets of sweets as charity for weeks, Shivaji and Sambhaji were carried out past the guards in the baskets. How long the journey home took, and how Sambhaji was brought back, are told differently: VERIFY before using.
- **Basis:** HISTORY (escape) · CONTESTED (the mechanism: Britannica and the standard accounts give the baskets; the ChatGPT report calls the baskets a traditional reconstruction without citing a source. Check Mehendale and the Rajasthani letters: CONTESTED.md #20). TRADITION: Hiroji Farzand lay in Shivaji's bed as a decoy; Madari Mehtar stayed behind to cover the escape.
- **Refs:** W-BRIT, W-RAMSINGH, W-TAWARIKH (Madari Mehtar: tradition)
- **Game:** `ch12_agra`; cards `sw_madari_mehtar`, `sw_hiroji` (both marked TRADITION)

### C-1666-PEACE · An uneasy peace
- **Date:** 1666–1669
- **Event:** The two sides reconciled and relations were cordial until 1670.
- **Basis:** HISTORY
- **Refs:** W-SAMBHAJI
- **Game:** interlude text

---

## Act IV · The Return of the Lion (1670–1674)

### C-1670-SINHAGAD · Kondhana by night
- **Date:** night of 4 February 1670
- **Event:** Tanaji Malusare, a subhedar of the Mavla infantry, led a night assault on Kondhana, held for the Mughals by the Rajput killedar Udaybhan Rathod. The Marathas scaled the walls with rope ladders; in the fighting inside, both Tanaji and Udaybhan were killed, Tanaji's brother Suryaji took command and the fort was taken. A ballad (powada) by the poet Tulsidas made Tanaji's story famous.
- **Basis:** HISTORY. TRADITION: the climb with a monitor lizard (ghorpad); Shivaji's line "the fort is won but the lion is gone"; that Kondhana was renamed Sinhagad for Tanaji. A recent biography states that letters from before Tanaji's death already use the name Sinhagad; the ChatGPT report attributes the point to Mehendale (CONTESTED.md #11).
- **Refs:** W-SINHAGAD, W-TANAJI, W-SURYAJI, W-SCROLL-BIO
- **Game:** `ch13_kondhana` (Ratra); cards `sw_tanaji`, `sw_suryaji`, `mg_udaybhan`

### C-1670-RECAPTURE · Twenty-three forts come back
- **Date:** February–July 1670
- **Event:** Many of the forts given up at Purandar were retaken in a few months.
- **Basis:** HISTORY (which forts and when: VERIFY per fort before naming them on the map)
- **Refs:** W-ESAM-PRATAP
- **Game:** campaign map: forts relit after `ch13_kondhana`

### C-1670-SURAT2 · Surat again
- **Date:** from 3 October 1670 (three days)
- **Event:** Shivaji struck Surat a second time; the defenders retreated under the castle's guns and the town was plundered for about three days. Thereafter he demanded chauth (a quarter of the revenue) from Surat under threat of further raids.
- **Basis:** HISTORY (plunder value: do not show)
- **Refs:** W-SURAT2, W-SAHASA-SURAT2, W-SURAT, W-SARKAR-TOC
- **Game:** `ch14_vani` (part 1: briefing)

### C-1670-VANI · Vani–Dindori
- **Date:** October 1670: 17 October in some references; the night of 16 October in another; Sarkar says only "late in the month"
- **Event:** Prince Muazzam sent Daud Khan to intercept the Maratha army returning with the Surat plunder. They met between Vani and Dindori (Nashik district). Ikhlas Khan charged ahead without waiting for Daud Khan and was wounded; the Marathas got away with the plunder, and Daud Khan's force fell back to Nashik for a month. The eyewitness account is the *Dilkasha* of Bhimsen.
- **Basis:** HISTORY
- **Refs:** W-SARKAR-VANI, W-ESAM-PRATAP, W-VANI, W-VANI-BHARATPEDIA, W-SAHASA-SURAT2
- **Game:** `ch14_vani` (raid-and-escape objective); cards `mg_daud_khan`, `mg_ikhlas_khan`, `sw_prataprao`

### C-1672-SALHER · Salher, the open-field victory
- **Date:** February 1672 (Mughal siege of Salher from October 1671)
- **Event:** In January 1671 Moropant Pingle took the Mughal forts of Aundha, Patta and Trimbak and attacked Salher and Mulher. The Mughals under Ikhlas Khan and Bahlol Khan besieged Salher (from October 1671). Shivaji sent the Peshwa Moropant Pingle from the Konkan and the Sarnaubat Prataprao Gujar from Khandesh; they converged and defeated the Mughal field army in open battle. Ikhlas Khan and Bahlol Khan were captured, with many officers; Suryaji (Suryarao) Kakade fell; Mulher was taken too.
- **Basis:** HISTORY (army sizes: do not use)
- **Refs:** W-SALHER, W-PRATAPRAO
- **Game:** `ch15_salher` (the big pitched battle); cards `sw_moropant`, `sw_prataprao`, `sw_suryarao_kakade`

### C-1672-JAWHAR · Jawhar and Ramnagar
- **Date:** 1672
- **Event:** After Salher the Marathas annexed the hill states of Jawhar and Ramnagar, on the approaches to Gujarat and the northern Konkan.
- **Basis:** HISTORY (exact months: VERIFY)
- **Refs:** W-AURANGZIB-IV
- **Game:** campaign map only

### C-1673-PANHALA · Panhala retaken
- **Date:** night of 6 March 1673
- **Event:** A Maratha party under Kondaji Farzand, sent by Annaji Datto, scaled Panhala at night and took it, killing the Bijapur commander.
- **Basis:** HISTORY (party of about 60 men: popular figure, show as "a few dozen")
- **Refs:** W-PANHALA1701, W-SAHASA-PANHALA, W-PANHALA-FORT
- **Game:** bonus chapter `ch16_panhala` (short night raid); card `sw_kondaji`

### C-1673-UMRANI · Umrani: the enemy let go
- **Date:** March–April 1673
- **Event:** The Bijapur general Bahlol Khan (Abdul Karim) marched to check the Marathas after Panhala fell. Prataprao Gujar surrounded him at Umrani, west of Bijapur, and cut him off from water; Bahlol Khan asked for terms and Prataprao released him (about 15 April 1673) on his promise not to attack again. Shivaji was displeased.
- **Basis:** HISTORY
- **Refs:** W-UMRANI, W-PRATAPRAO, W-SAHASA-UMRANI
- **Game:** `ch17_umrani_nesari` (part 1)

### C-1674-NESARI · The seven at Nesari
- **Date:** 24 February 1674
- **Event:** Bahlol Khan returned. Prataprao Gujar, with only six horsemen, charged his army in a narrow pass at Nesari and all seven were killed. An English interpreter's letter from Raigad (Narayan Shenvi, 4 April 1674) records it. Hambirrao Mohite became senapati.
- **Basis:** HISTORY. TRADITION: the names of the six companions; that Shivaji's rebuke drove Prataprao to the charge.
- **Refs:** W-SARKAR-NESARI, W-PRATAPRAO, W-NESARI
- **Game:** `ch17_umrani_nesari` (part 2, a short memorial scene, not a winnable battle); `as_bahlol_khan`

### C-1674-CORONATION · Rajyabhishek at Raigad
- **Date:** 6 June 1674 (Jyeshtha Shuddha Trayodashi, Shaka 1596; one older account gives 5 June)
- **Event:** Shivaji was crowned at Raigad by Gaga Bhatt of Varanasi with Vedic rites, taking the titles Chhatrapati and Shakakarta. The council of eight ministers (Ashta Pradhan) was formalised, new coins (the copper shivrai and the gold hon) were struck, and a new era, the Rajyabhishek era, was proclaimed. A dictionary of Sanskrit terms for Persian administrative words (Rajyavyavahar Kosh) was compiled. An English embassy under Henry Oxenden attended.
- **Basis:** HISTORY. (Gaga Bhatt's genealogy linking the Bhonsles to the Sisodias, and why the coronation was delayed, are matters of historiographical debate: CONTESTED.md #12.)
- **Refs:** W-HISTFILES-CORONATION, W-ASHTA, W-SHIVAJI, W-SABRANG, W-MEDIUM-1674, W-ORGANISER (Oxenden: VERIFY in Factory Records)
- **Game:** interlude `ch18_rajyabhishek` (no battle); unlocks `sw_chhatrapati` and the Ashta Pradhan set

### C-1674-JIJABAI · Death of Jijabai
- **Date:** 17 or 18 June 1674
- **Event:** Jijabai died at Pachad, the village at the foot of Raigad, less than two weeks after the coronation. Her samadhi is at Pachad.
- **Basis:** HISTORY (day differs by one)
- **Refs:** W-HISTFILES-CORONATION, W-MUKUND, W-JIJABAI, W-DURG-PACHAD
- **Game:** `ch18_rajyabhishek` epilogue

### C-1674-SECOND-CORONATION · The second coronation
- **Date:** 24 September 1674
- **Event:** A second, Tantric coronation was performed (associated with Nischal Puri).
- **Basis:** HISTORY
- **Refs:** W-SHIVAJI, W-MUKUND
- **Game:** History note only

---

## Act V · Chhatrapati (1675–1680)

### C-1676-PONDA · Phonda (Ponda)
- **Date:** siege 1675; fell April 1676
- **Event:** In his Konkan campaign Shivaji besieged the Bijapuri fort of Phonda (Ponda, in present-day Goa). An escalade was beaten off, but the siege went on until April 1676, when a mine brought down the walls and the fort surrendered. The strain of the campaign was followed by months of fever at Satara.
- **Basis:** HISTORY
- **Refs:** W-SOUTH
- **Game:** campaign map; possible Gadkot challenge later


### C-1677-GOLCONDA · The Golconda alliance
- **Date:** early 1677 (in Hyderabad about a month, February–March)
- **Event:** After the death of Ali Adil Shah II left Bijapur divided, Shivaji agreed terms with Abul Hasan Qutb Shah of Golconda through his ministers Madanna and Akkanna, was received in Hyderabad, and marched south with Golconda's support (money and artillery are mentioned).
- **Basis:** HISTORY (army sizes: do not use)
- **Refs:** W-SOUTH, W-DNA-GINGEE, W-HERO-CHRONO
- **Game:** `ch19_dakshin` briefing; cards `gk_madanna`, `gk_topkhana`

### C-1677-GINGEE · Gingee
- **Date:** May 1677
- **Event:** Nasir Khan, holding Gingee for Bijapur, opened talks and handed the fort over (Sabhasad; eSamskriti gives May 1677. The Gemini report's "July 1677" has no source and is not used). Gingee later served as the Maratha capital under Rajaram.
- **Basis:** HISTORY
- **Refs:** W-ESAM-SOUTH, W-DNA-GINGEE
- **Game:** campaign map: Gingee lit

### C-1677-VELLORE · Vellore besieged
- **Date:** from about 23 May 1677; surrendered in August 1678 (Sarkar: early August; another source: 21 August 1678)
- **Event:** Shivaji left a force to besiege Vellore, one of the strongest forts in the south, with a wet ditch and four lines of walls. The Marathas built two small forts on the hill above it (Sajra and Gojra) to bombard it. After a siege of fourteen months its commandant Abdullah Khan surrendered on terms; the English records mention a payment to him. Shivaji had already gone home.
- **Basis:** HISTORY (fall in August 1678; the exact day differs)
- **Refs:** W-HERO-CHRONO, W-SAHASA-SOUTH, W-SARKAR-VELLORE, W-INDCULT-VELLORE, W-SAJRA
- **Game:** campaign map: Vellore lit after `ch19_dakshin`

### C-1677-TIRUVADI · Tiruvadi
- **Date:** 26 June 1677
- **Event:** The Bijapur commander Sher Khan Lodi was defeated near Tiruvadi and put to flight. (A blog says he had the support of the French at Pondicherry: VERIFY.)
- **Basis:** HISTORY
- **Refs:** W-SOUTH, W-SAHASA-SOUTH
- **Game:** `ch19_dakshin` (field battle); card `as_sher_khan_lodi`

### C-1678-RETURN · Home from the south
- **Date:** reached Panhala in March 1678 (Sarkar; the ChatGPT report says April 1678)
- **Event:** Shivaji returned from the Karnatak through the Bellary and Dharwar country, leaving officers to hold and extend the southern conquests.
- **Basis:** HISTORY (month: within a few weeks)
- **Refs:** W-SARKAR-VELLORE
- **Game:** interlude text

### C-1677-VENKOJI · The brothers' quarrel
- **Date:** 1677 (a battle in November 1677 is reported)
- **Event:** Shivaji met his half-brother Venkoji (Ekoji), ruler of Thanjavur, and demanded a share of their father's lands; Venkoji refused, and Maratha forces later defeated Venkoji's army.
- **Basis:** HISTORY (dispute) · VERIFY (battle date, place, commanders)
- **Refs:** W-ESAM-PART3, W-VEDANTU-SOUTH (weak)
- **Game:** History note only until VERIFY is cleared

### C-1678-SAMBHAJI · Sambhaji goes over to Diler Khan
- **Date:** 13 December 1678 (escape); Bhupalgad fell 2 April 1679; back about a year later
- **Event:** Shivaji had confined Sambhaji at Panhala in 1678. Sambhaji escaped with his wife Yesubai and joined the Mughal general Diler Khan, was made a Mughal noble, and was in Diler Khan's camp when Bhupalgad was taken from the Marathas. He returned to his father's side about a year later.
- **Basis:** HISTORY (events) · CONTESTED (reasons for the confinement and the defection: CONTESTED.md #13)
- **Refs:** W-BHUPAL, W-SAMBHAJI, W-PRINT-SAMBHAJI
- **Game:** History note and epilogue only. **No playable battle against Sambhaji** (decision D-07 in STATE.md).

### C-1679-KHANDERI · Khanderi
- **Date:** August – October 1679 (Maratha landing; island held by 15 September; sea fight 18 October 1679)
- **Event:** Shivaji began fortifying the island of Khanderi off the entrance to Bombay harbour. His captain Mai Nayak (Maynak) Bhandari held it with a few small guns against the English East India Company's ships and the Siddi fleet. The English and Siddi could not dislodge the Marathas; the Siddi then fortified the neighbouring island of Underi.
- **Basis:** HISTORY
- **Refs:** W-MAINAYAK, W-NAVY, W-SCROLL-KHANDERI, W-WEEK-KHANDERI
- **Game:** `ch20_khanderi` (naval, survive); cards `sw_mainayak`, `ei_revenge`, `sd_siddi_admiral`

### C-1679-JALNA · Jalna and the last battle at Sangamner
- **Date:** November 1679 (back at Raigad early December). The Jedhe chronology and the Persian accounts order the events of 1679 differently (Takakhav).
- **Event:** In late 1679 Shivaji came to Bijapur's help against Diler Khan, then split his army and raided Mughal territory, sacking Jalna. On the way back he was attacked at Sangamner by a Mughal force under Ranmast Khan. A Maratha rearguard under Sidhoji Nimbalkar fought for about three days; Sidhoji was killed with many of his men, and Shivaji narrowly escaped capture. It was the last battle in which he took part. The result is described as a Mughal victory or as indecisive (Sarkar heads the section "Shiva defeated by Ranmast").
- **Basis:** HISTORY (raid, battle, rearguard) · CONTESTED (result; numbers not used: CONTESTED.md #23)
- **Refs:** W-SANGAMNER, W-SARKAR-JALNA, W-TAKAKHAV-1679, W-AURANGZIB-IV
- **Game:** chapter `ch20b_sangamner` (a rearguard escape, like Pavan Khind at the end of his life). Approved by Pon, 24 Nov 2026.

### C-1680-DEATH · Raigad, April 1680
- **Date:** 3 April 1680 (some sources: 5 April)
- **Event:** Shivaji died at Raigad after an illness, aged about 50. Rajaram (10) was installed on 21 April 1680; Sambhaji, still at Panhala, took Panhala and then Raigad (18 June 1680) and became the second Chhatrapati.
- **Basis:** HISTORY (date: CONTESTED.md #14)
- **Refs:** W-BRIT, W-SHIVAJI, W-SAMBHAJI
- **Game:** campaign epilogue `ch21_raigad` (no battle)

---

## Cross-cutting facts (people and institutions)

### C-X-OFFICERS · Who served whom
- **Event:** Shivaji's officers included Muslims: Siddi Hilal (cavalry commander; Kolhapur, Panhala, Salher), Noor Khan Beg (an early sarnaubat), Daulat Khan and Darya Sarang (navy), Ibrahim Khan, and Madari Mehtar (tradition: Agra). The armies sent against him included Marathas (Baji Ghorpade, the Mores of Jaoli) and Rajputs (Jai Singh and Ram Singh of Amber, Udaybhan Rathod, Rai Singh Sisodia, Bhao Singh Hada, Jaswant Singh). Rai Bagan, a woman, commanded in Kartalab Khan's army.
- **Basis:** HISTORY (named roles) · TRADITION (individual anecdotes)
- **Refs:** W-HISTFILES-MEN, W-TAWARIKH, W-GOODREADS-HILAL, W-CHAKAN, W-UMBER-IIAB, W-RAMSINGH
- **Game:** design rule D-05: cards show who actually fought on which side.

### C-X-ARMY · How the army was organised
- **Event:** Shivaji relied more on infantry than most Deccan powers, because of the hill country. Infantry: **Mavle** (foot soldiers of the western Maharashtra hills, also the fort garrisons) and **Hetkari** (Konkan men, noted matchlock marksmen). Cavalry: the state cavalry (**paga**) of **bargirs**, given horse and arms by the state, and **shiledars**, who brought their own horse and arms. Ranks ran from the naik (over nine men) through havaldar, jumladar and hazari to the sarnaubat (chief). Sabhasad describes a guard of select Mavle infantry, splendidly equipped. The army had some artillery and a small number of elephants.
- **Basis:** HISTORY (Sabhasad via Sarkar and Sen; strength figures are not used: CONTESTED #15)
- **Refs:** W-MARATHA-ARMY, W-SARKAR-ARMY, W-INDANT
- **Game:** unit classes `sw_mavla`, `sw_hetkari`, `sw_bargir`, `sw_shiledar`, `sw_havaldar`

### C-X-BAHIRJI · Bahirji Naik and the intelligence network
- **Event:** Bahirji Naik headed Shivaji's intelligence; Maratha victories are credited to his information gathering. Little is documented about his life.
- **Basis:** HISTORY (role) · TRADITION (specific exploits)
- **Refs:** W-BAHIRJI
- **Game:** card `sw_bahirji` (effect: scouting, no invented exploit in its text)

### C-X-ASHTAPRADHAN · The Council of Eight
- **Event:** Formalised at the coronation (1674): eight ministers with Sanskrit titles (Peshwa, Amatya, Sachiv, Mantri, Senapati, Sumant, Nyayadhish, Panditrao), each over a department, advisory in function.
- **Basis:** HISTORY (the list of eight titles: check against W-ASHTA before printing card names). The state textbook names some holders: Moropant Pingle (Peshwa), Ramchandra Nilkanth (Amatya), Annaji Datto (Sachiv), Dattaji Trimbak Waknis (Mantri), Hambirrao Mohite (Senapati).
- **Refs:** W-ASHTA, W-CBC, W-MSB7
- **Game:** Ashta Pradhan card set after `ch18_rajyabhishek`

### C-X-JANJIRA · Janjira was never taken
- **Event:** Shivaji's attempts on the Siddis' island fortress of Janjira did not succeed; at one point, while serving under the treaty, Jai Singh stopped him from taking it. The Siddis remained a rival power on the coast throughout his life.
- **Basis:** HISTORY
- **Refs:** W-JANJIRA, W-NAVY
- **Game:** no chapter claims a capture of Janjira. A Siddi enemy deck can use it as their Gad.

### C-X-UNESCO · The forts as World Heritage (2025)
- **Event:** On 11 July 2025 UNESCO inscribed the "Maratha Military Landscapes of India" on the World Heritage List: twelve forts, eleven in Maharashtra and one in Tamil Nadu — Salher, Shivneri, Lohagad, Khanderi, Raigad, Rajgad, Pratapgad, Suvarnadurg, Panhala, Vijaydurg, Sindhudurg and Gingee.
- **Basis:** HISTORY (modern fact)
- **Refs:** W-UNESCO-DECISION, W-LOKMAT-UNESCO
- **Game:** these twelve get special treatment on the campaign map (marked as World Heritage); useful for the store listing.

### C-X-SOURCES · What the sources are
- **Event:** The main near-contemporary sources are the Sabhasad Bakhar (Krishnaji Anant Sabhasad, written at Jinji for Rajaram, 1697), the Jedhe chronology (Jedhe Shakavali), the Sanskrit epic Shivabharata by the court poet Kavindra Paramananda, the English East India Company's factory records, Persian accounts (Mughal and Bijapuri, e.g. Bhimsen's Dilkasha, the Tarikh-i-Ali), and Rajasthani letters of the Amber court. Much of the Maratha state's own record was burnt or lost in the wars after 1680.
- **Basis:** HISTORY
- **Refs:** W-SABHASAD, W-AFZAL, W-SHIVBHARAT, W-SCROLL-BIO, W-SARKAR-VANI
- **Game:** each History note ends with "Sources:" naming the ones it rests on
