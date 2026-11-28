/* ============================================================
   Phase 2 step 4 — "Umberkhind" (DESIGN §5, chapter 8): the trap at
   Umberkhind, early 1661 (CHRONOLOGY C-1661-UMBERKHIND; sources W-UMBER,
   W-UMBER-IIAB, W-HISTFILES-MARATHAS05, W-SAHASA-SKONKAN and Vaidya ch. XVII
   = W-VAIDYA-UMBER, checked session 14).
   Shaista Khan sends the Uzbek general Kartalab Khan, with Rai Bagan, down the
   little-used Umberkhind pass towards the Konkan. Shivaji's men wait in the
   forest. The column is already in the pass when the battle opens (enemy units
   preset on a Khind of 2), and every unit it sends down after them can spring
   a Khind Ambush (the `onEnemyAdvance` Yantra).
   History: the column was surrounded, Rai Bagan advised terms, and Shivaji let
   the army go after it gave up its baggage. So the win text is the truce, not a
   slaughter (D-07), and no numbers anywhere (D-04).
   Design change (D-26): the draft's Bhet "rai_bagan_offer" is not built. Her advice
   comes at the end of the battle, so it is told in the win text and the History
   note instead of a scene before the fight.
   Balance (session 14): 56.7% over 300 AI-vs-AI games (enemy camp 22; nothing preset on the
   player's side; two Mughal units already in the pass). With a Mavla and a Hetkari preset for
   the player it was 84% (76% with the camp at 24). Skill ladder: beginner 18%, standard 55%,
   careful 100%.
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch08_umberkhind');

export const UMBERKHIND: Scenario = {
  id: 'ch08_umberkhind',
  title: 'Umberkhind',
  place: 'Umberkhind, near Pen',
  year: 'February 1661',
  battlefield: 'umberkhind',
  briefing: 'Shaista Khan holds Pune and wants the Konkan. He has sent the Uzbek general Kartalab Khan down the ghats, with the commander Rai Bagan beside him. They think you are far away, so they have taken the quiet road: Umberkhind, a pass so narrow that men come down it one by one. Your men are already in the forest on both sides. Let them come.',
  objective: "Break Kartalab Khan's column in the pass: bring down his camp.",
  heroCard: 'sw_shivaji',
  defeatCard: 'mg_kartalab_khan',
  enemyName: 'Mughal column',
  durgArt: ['durg_umberkhind', 'durg_mughal_camp'],
  winText: turn => `By turn ${turn} the column is surrounded. On Rai Bagan's advice Kartalab Khan asks for terms; the Raje lets the army go back up the pass, leaving its baggage behind.`,
  loseText: 'The column fights its way down the pass and out into the Konkan.',
  goLabel: 'Spring the trap',
  playerDeck, enemyDeck,
  // unreviewed Marathi, same status as the vertical slice's (Q-05) — see src/i18n.ts
  mr: {
    title: 'उंबरखिंड',
    place: 'उंबरखिंड, पेणकडे जाणारी खिंड',
    briefing: 'शाहिस्तेखान पुण्यात बसला आहे आणि त्याला कोकण हवे आहे. त्याने उझबेक सरदार कारतलबखानाला घाट उतरायला पाठवले आहे, सोबत सरदार रायबागन आहे. तुम्ही खूप दूर आहात असे त्यांना वाटते, म्हणून त्यांनी शांत वाट धरली आहे: उंबरखिंड, इतकी अरुंद की माणसे एकेक करून उतरतात. तुमची माणसे दोन्ही बाजूंच्या जंगलात आधीच दबा धरून बसली आहेत. येऊ द्या त्यांना.',
    objective: 'खिंडीत कारतलबखानाच्या फौजेची फळी फोडा: त्याची छावणी पाडा.',
    goLabel: 'सापळा मिटवा',
    winText: turn => `${turn} व्या डावापर्यंत फौजेला चारी बाजूंनी घेरले आहे. रायबागनच्या सल्ल्याने कारतलबखान अटी मागतो; राजे सामान मागे ठेवून फौजेला खिंडीतून परत जाऊ देतात.`,
    loseText: 'फौज लढत खिंड उतरते आणि कोकणात पोहोचते.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 20, faction: 'Swarajya', capital: 'The forest above the pass' },
    enemy: { empire: 'mughal', deck: enemyDeck, hq: 22, faction: 'Mughal', capital: "Kartalab Khan's camp" },
    aiLevel: 'normal',
    preset: { enemyFront: ['mg_mansabdar_sawar', 'mg_rajput_officer'] },
    objective: { type: 'destroy' },
    scenarioId: 'ch08_umberkhind',
    scenarioName: 'Umberkhind',
    rules: 'swarajya',
    season: 'hemanta',
    frontSize: 2
  })
};
