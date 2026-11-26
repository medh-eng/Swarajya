/* ============================================================
   Phase 2 step 4 — "Kolhapur" (DESIGN §5, chapter 5): the battle near
   Kolhapur, 28 December 1659 (CHRONOLOGY C-1659-KOLHAPUR; second source
   W-SARKAR-CH4, checked session 11).
   Weeks after Pratapgad, Bijapur sends Rustam Zaman with Fazl Khan
   (Afzal Khan's son). Shivaji strikes first, early in the morning.
   Siddi Hilal, who had served under Afzal Khan at Pratapgad and changed
   sides after that defeat (CONTESTED #29, resolved), fights for Swarajya.
   No troop or casualty numbers anywhere (D-04, CONTESTED #15).
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch05_kolhapur');

export const KOLHAPUR: Scenario = {
  id: 'ch05_kolhapur',
  title: 'Kolhapur',
  place: 'Near Kolhapur and Panhala',
  year: '28 December 1659',
  battlefield: 'kolhapur',
  briefing: 'Afzal Khan is dead and his army scattered. You have pressed south: Panhala is yours and fort after fort has fallen. Now Bijapur sends Rustam Zaman, with Afzal Khan\'s son Fazl Khan beside him, and they have come up near Miraj. Do not wait for them. Strike first, at first light, before they are ready. Siddi Hilal rides with you now.',
  objective: "Rout Rustam Zaman's army: bring down his camp before it can reach Panhala.",
  heroCard: 'sw_shivaji',
  defeatCard: 'as_rustam_zaman',
  enemyName: 'Bijapur army',
  durgArt: ['durg_panhala', 'durg_bijapur_camp'],
  winText: turn => `By turn ${turn} Rustam Zaman has fled the field. Bijapur will answer with a siege.`,
  loseText: 'Rustam Zaman holds the field. The road to Panhala lies open to him.',
  goLabel: 'Strike at dawn',
  nextId: 'ch06_pavankhind',
  nextLabel: 'Panhala and the Pass',
  playerDeck, enemyDeck,
  // unreviewed Marathi, same status as the vertical slice's (Q-05) — see src/i18n.ts
  mr: {
    title: 'कोल्हापूर',
    place: 'कोल्हापूर आणि पन्हाळ्याजवळ',
    briefing: 'अफझलखान मेला आणि त्याचे सैन्य पांगले. तुम्ही दक्षिणेकडे मुसंडी मारली आहे: पन्हाळा तुमचा झाला आहे आणि एकामागून एक किल्ले पडले आहेत. आता विजापूर रुस्तमजमानला पाठवते, त्याच्यासोबत अफझलखानाचा मुलगा फाजलखान आहे, आणि ते मिरजेजवळ येऊन ठेपले आहेत. त्यांची वाट पाहू नका. ते तयार होण्याआधी, पहाटेच पहिला घाव घाला. सिद्दी हिलाल आता तुमच्यासोबत आहे.',
    objective: 'रुस्तमजमानच्या सैन्याची दाणादाण उडवा: ते पन्हाळ्यापर्यंत पोहोचण्याआधी त्याची छावणी पाडा.',
    goLabel: 'पहाटेचा हल्ला',
    nextLabel: 'पन्हाळा आणि पावनखिंड',
    winText: turn => `${turn} व्या डावापर्यंत रुस्तमजमान रणांगण सोडून पळाला आहे. विजापूर वेढ्याने उत्तर देईल.`,
    loseText: 'रुस्तमजमान रणांगण राखतो. पन्हाळ्याचा रस्ता त्याच्यासाठी मोकळा आहे.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: 'Panhala' },
    enemy: { empire: 'adilshahi', deck: enemyDeck, hq: 22, faction: 'Adilshahi', capital: 'Bijapur camp' },
    aiLevel: 'normal',
    objective: { type: 'destroy' },
    scenarioId: 'ch05_kolhapur',
    scenarioName: 'Kolhapur',
    rules: 'swarajya',
    season: 'hemanta'
  })
};
