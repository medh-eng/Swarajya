/* ============================================================
   Phase 2 step 4 — "Panhala and the Pass" (DESIGN §5, chapter 6): the
   rearguard at Ghod Khind (Pavan Khind), night of 12–13 July 1660
   (CHRONOLOGY C-1660-PANHALA-SIEGE, C-1660-PAVANKHIND, C-1660-PANHALA-FALL;
   second source W-SARKAR-CH4, checked session 11).
   The first Khind chapter (DESIGN 3.2): the Yudhbhumi holds only 2, so a
   few defenders can hold back many. A `survive` objective: the player
   holds the pass with Baji Prabhu Deshpande and the Bandal men until the
   Raje is safe. History lost this fight (Baji Prabhu fell), so the band
   is 40–60% (DESIGN §9); the History note says what really happened.
   Balance lever (session 11): the defenders were few, so the Swarajya deck is only 8 cards
   beside Baji Prabhu; once it runs dry, attrition wears down the Durg (the Raje's lead). The
   enemy AI never trades into Baji Prabhu, so without this the pass could not fall at all.
   57% over 300 games (7 cards gives 0%, 9 gives 97%: a steep cliff, recheck at the balance Gate).
   TRADITION, labelled so: Shiva Kashid's ride as a decoy, and the guns
   from Vishalgad that signalled the Raje's arrival.
   The siege-of-Panhala cards (Siddi Jauhar, the English grenades) are
   not in this battle: neither was at the pass.
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch06_pavankhind');
const HOLD = 8;

export const PAVANKHIND: Scenario = {
  id: 'ch06_pavankhind',
  title: 'Panhala and the Pass',
  place: 'Ghod Khind, on the road to Vishalgad',
  year: '12–13 July 1660',
  battlefield: 'ghod_khind',
  briefing: 'For months Siddi Jauhar has ringed Panhala. On a night of monsoon rain the Raje slipped out with a small force and made for Vishalgad, and Siddi Masud is on his trail. At Ghod Khind the road narrows to a gully. You are Baji Prabhu Deshpande: with the Bandal men you will hold it while the Raje rides on.',
  objective: `Hold the pass for ${HOLD} turns, until the Raje is safe at Vishalgad.`,
  heroCard: 'sw_bajiprabhu',
  defeatCard: 'as_siddi_masud',
  enemyName: 'Siddi Masud',
  durgArt: ['durg_vishalgad', 'durg_bijapur_camp'],
  winText: () => 'The pass held. The Raje reached Vishalgad, and Ghod Khind is remembered as Pavan Khind, the sacred pass. (Tradition tells of guns fired from the fort as the signal.)',
  loseText: 'Siddi Masud\'s men force the pass before the Raje is safe. History went otherwise: play it again.',
  goLabel: 'Hold the pass',
  nextId: 'ch07_chakan',
  nextLabel: 'Fifty-six Days at Chakan',
  playerDeck, enemyDeck,
  // unreviewed Marathi, same status as the vertical slice's (Q-05) — see src/i18n.ts
  mr: {
    title: 'पन्हाळा आणि पावनखिंड',
    place: 'घोडखिंड, विशाळगडाच्या वाटेवर',
    briefing: 'महिनोन्महिने सिद्दी जौहरने पन्हाळ्याला वेढा घातला आहे. पावसाळ्यातल्या एका रात्री राजे थोड्या फौजेसह निसटले आणि विशाळगडाकडे निघाले, आणि सिद्दी मसूद त्यांच्या मागावर आहे. घोडखिंडीत वाट अरुंद होऊन एक घळ बनते. तुम्ही बाजीप्रभू देशपांडे आहात: बांदलांच्या माणसांसह राजे पुढे जाईपर्यंत तुम्ही ती खिंड लढवाल.',
    objective: `${HOLD} डाव खिंड लढवा, राजे विशाळगडावर सुखरूप पोहोचेपर्यंत.`,
    goLabel: 'खिंड लढवा',
    nextLabel: 'चाकणचे छप्पन्न दिवस',
    winText: () => 'खिंड टिकली. राजे विशाळगडावर पोहोचले, आणि तेव्हापासून घोडखिंडीला पावनखिंड म्हणतात. (परंपरेनुसार गडावरून तोफांचे बार इशारा म्हणून उडवले गेले.)',
    loseText: 'राजे सुखरूप होण्याआधी सिद्दी मसूदची माणसे खिंड फोडतात. इतिहास वेगळा घडला: पुन्हा खेळा.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 13, faction: 'Swarajya', capital: 'The road to Vishalgad' },
    enemy: { empire: 'adilshahi', deck: enemyDeck, hq: 30, faction: 'Adilshahi', capital: "Siddi Masud's column" },
    preset: { playerFront: ['sw_bajiprabhu'] },
    aiLevel: 'normal',
    objective: { type: 'survive', turns: HOLD },
    scenarioId: 'ch06_pavankhind',
    scenarioName: 'Panhala and the Pass',
    rules: 'swarajya',
    season: 'varsha',
    frontSize: 2
  })
};
