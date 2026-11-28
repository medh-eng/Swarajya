/* ============================================================
   Phase 2 step 4 — "Fifty-six Days at Chakan" (DESIGN §5, chapter 7):
   Shaista Khan's siege of Chakan (Sangramdurg), 21–23 June to 14–15 August 1660
   (CHRONOLOGY C-1660-CHAKAN; sources W-CHAKAN and W-SARKAR-CHAKAN = Sarkar,
   Shivaji and His Times ch. IV §4, checked session 13; Takakhav ch. 16 agrees).
   The first Mughal chapter and the first enemy *siege*: the player defends.
   Sangramdurg's outer walls are a Gad (`durgWard`: each attack on the Durg is
   1 weaker while it stands); the Durg itself is the citadel, where Sarkar says
   the garrison made its last stand. Firangoji Narsala, the old killedar, starts
   on the walls (`gadWard`: blows on the Gad are 1 weaker). The Mughals bring
   siege guns that bombard the Gad from their own Rajya line, and the Surang
   (the mine under the north-east tower). If the walls fall they flip to the
   Mughals, as Chakan did.
   History: the fort was taken after the mine; Firangoji surrendered on terms and
   went back to Shivaji. So winning here is holding the turns; the History note and
   epilogue say plainly what happened. No numbers (D-04), no fall shown (D-07).
   Balance (session 13): the viceroy's army starts rich (startKosha 3) and already holds the
   plain (a horseman and a Rajput officer on the Yudhbhumi, one battery dug in). Without that
   the AI siege never reached the citadel (100% player wins; the only damage was the player's
   deck running dry). 55.3% over 400 AI-vs-AI games; the walls fall in about 3 games of 4,
   as Chakan's did. Slope is gentle in the citadel's health (16 → 52%, 18 → 56%) and steep in
   the turns to hold (9 → 78%).
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch07_chakan');
const HOLD = 10;

export const CHAKAN: Scenario = {
  id: 'ch07_chakan',
  title: 'Fifty-six Days at Chakan',
  place: 'Chakan, north of Pune',
  year: '1660',
  battlefield: 'chakan',
  briefing: 'While the Raje is shut in Panhala, the Mughal viceroy Shaista Khan has come down from the north and taken Pune. Chakan stands in his way: a square ground fort with a moat, on the open plain. The Raje cannot send help. You are Firangoji Narsala, the old killedar, and your orders are to hold as long as you can. The monsoon has come, and so have the imperial guns.',
  objective: `Hold Chakan for ${HOLD} turns. Keep the citadel standing; the walls will help while they are yours.`,
  heroCard: 'sw_firangoji',
  defeatCard: 'mg_shaista_khan',
  enemyName: 'Shaista Khan',
  durgArt: ['durg_chakan', 'durg_mughal_camp'],
  winText: () => 'Chakan is still yours when the turns run out. In history it held for close to two months, far longer than the viceroy had planned. Read the History note for how it ended.',
  loseText: 'The citadel is taken before its time. History gave Firangoji longer than this: play it again.',
  goLabel: 'Man the walls',
  nextId: 'ch08_umberkhind',
  nextLabel: 'Umberkhind',
  playerDeck, enemyDeck,
  // unreviewed Marathi, same status as the vertical slice's (Q-05) — see src/i18n.ts
  mr: {
    title: 'चाकणचे छप्पन्न दिवस',
    place: 'चाकण (संग्रामदुर्ग), पुण्याच्या उत्तरेस',
    briefing: 'राजे पन्हाळ्यात अडकले असताना मोगल सुभेदार शाहिस्तेखान उत्तरेतून उतरला आणि त्याने पुणे घेतले. चाकण त्याच्या वाटेत उभा आहे: मोकळ्या मैदानातला, खंदकाने वेढलेला चौकोनी भुईकोट. राजे मदत पाठवू शकत नाहीत. तुम्ही फिरंगोजी नरसाळा, जुने किल्लेदार आहात, आणि जितका काळ शक्य तितका किल्ला लढवा असा तुम्हाला हुकूम आहे. पावसाळा आला आहे, आणि बादशाही तोफाही.',
    objective: `${HOLD} डाव चाकण लढवा. बालेकिल्ला उभा ठेवा; तट तुमच्या ताब्यात असेपर्यंत तुम्हाला साथ देतील.`,
    goLabel: 'तटावर चला',
    nextLabel: 'उंबरखिंड',
    winText: () => 'डाव संपले तरी चाकण तुमचाच आहे. इतिहासात तो जवळजवळ दोन महिने टिकला, सुभेदाराच्या अंदाजापेक्षा कितीतरी जास्त. शेवट कसा झाला ते इतिहासाच्या टिपेत वाचा.',
    loseText: 'बालेकिल्ला वेळेआधीच पडतो. इतिहासाने फिरंगोजींना यापेक्षा जास्त काळ दिला: पुन्हा खेळा.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 18, faction: 'Swarajya', capital: 'The citadel of Chakan' },
    enemy: { empire: 'mughal', deck: enemyDeck, hq: 30, startKosha: 3, faction: 'Mughal', capital: "Shaista Khan's camp" },
    preset: { playerSupport: ['sw_gad_chakan', 'sw_firangoji'], enemySupport: ['mg_topkhana'], enemyFront: ['mg_mansabdar_sawar', 'mg_rajput_officer'] },
    aiLevel: 'normal',
    objective: { type: 'survive', turns: HOLD },
    scenarioId: 'ch07_chakan',
    scenarioName: 'Fifty-six Days at Chakan',
    rules: 'swarajya',
    season: 'varsha'
  })
};
