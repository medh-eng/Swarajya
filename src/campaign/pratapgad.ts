/* ============================================================
   Phase 1 step 5-6 — "Pratapgad" (DESIGN §5, chapter 4): Afzal Khan's
   army, below the fort built from Torna's own treasure (CHRONOLOGY
   C-1656-PRATAPGAD-BUILT, C-1659-AFZAL-MARCH, C-1659-PRATAPGAD).
   DESIGN 3.5's Bhet (parley) minigame now plays before the battle
   (Phase 1 step 6, 25 Nov 2026 session 8): `bhet` below frames it,
   `RULES.bhet` and src/engine/bhet.ts hold the odds and the
   resolution table. The battle itself, and who struck first in the
   pavilion, stay exactly as undecided as before (CONTESTED; "the
   fear of treachery both men had" — DESIGN 3.5): a Strike in this
   game is never more than the player's or the AI's own secret pick.
   ============================================================ */
import { newGame } from '../engine/rules';
import { RULES, decksOf } from '../data';
import type { BhetOutcome } from '../engine/bhet';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch04_pratapgad');

export const PRATAPGAD: Scenario = {
  id: 'ch04_pratapgad',
  title: 'Pratapgad',
  place: 'Below Pratapgad fort',
  year: '10 November 1659',
  battlefield: 'pratapgad',
  briefing: "Afzal Khan marched from Bijapur to end your rebellion. He has asked for a private meeting below the fort, each of you to come with only a small escort. How you walk into that tent may matter as much as how you fight afterwards.",
  objective: "Meet Afzal Khan below the fort, then destroy his army.",
  heroCard: 'sw_gad_pratapgad',
  defeatCard: 'as_gaja',
  enemyName: "Afzal Khan's army",
  durgArt: ['durg_pratapgad', 'durg_bijapur_camp'],
  winText: turn => `Afzal Khan's army breaks in turn ${turn}. Pratapgad's name will travel far beyond the Maval.`,
  loseText: "The line breaks below Pratapgad. The rebellion's first great test is lost.",
  goLabel: 'To the meeting below Pratapgad',
  nextId: 'ch05_kolhapur',
  nextLabel: 'Kolhapur',
  playerDeck, enemyDeck,
  bhet: {
    intro: "Afzal Khan's tent stands in a cleared space on the slope below the fort. You will meet him with only a few men at your side — he asks the same of you. How do you come to the meeting?",
    extraUnit: { player: 'sw_bargir', enemy: 'as_hasham' },
    mr: { intro: 'अफझल खानाचा तंबू किल्ल्याखालच्या उतारावरील मोकळ्या जागेत उभा आहे. तुम्ही फक्त थोड्या माणसांसह त्याला भेटाल — त्यानेही तेच मागितले आहे. तुम्ही या भेटीला कसे जाता?' }
  },
  // Phase 1 step 8 (TASKS.md), unreviewed — see src/i18n.ts
  mr: {
    title: 'प्रतापगड',
    nextLabel: 'कोल्हापूर',
    place: 'प्रतापगड किल्ल्याच्या पायथ्याशी',
    briefing: 'अफझल खान तुमचे बंड मोडून काढण्यासाठी विजापूरहून निघाला आहे. त्याने किल्ल्याच्या पायथ्याशी खासगी भेटीची मागणी केली आहे, दोघांनीही फक्त थोडे रक्षक घेऊन यावे. त्या तंबूत तुम्ही कसे जाता, हे नंतरच्या लढाईइतकेच महत्त्वाचे ठरू शकते.',
    objective: 'किल्ल्याच्या पायथ्याशी अफझल खानाला भेटा, मग त्याचे सैन्य उद्ध्वस्त करा.',
    goLabel: 'प्रतापगडाच्या पायथ्याशी भेटीसाठी',
    winText: turn => `${turn} व्या डावात अफझल खानाचे सैन्य कोलमडते. प्रतापगडाचे नाव मावळाच्या सीमा ओलांडून दूरवर पोहोचेल.`,
    loseText: 'प्रतापगडाच्या पायथ्याशी फळी तुटते. बंडाची पहिली मोठी कसोटी हरली जाते.'
  },
  game: (seed, bhet?: BhetOutcome) => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: 'Pratapgad' },
    enemy: { empire: 'adilshahi', deck: enemyDeck, hq: 24, faction: 'Bijapur', capital: "Afzal Khan's Camp" },
    preset: {
      enemyFront: ['as_afzal_khan'],
      ...(bhet?.playerExtra ? { playerSupport: [PRATAPGAD.bhet!.extraUnit.player] } : {}),
      ...(bhet?.enemyExtra ? { enemySupport: [PRATAPGAD.bhet!.extraUnit.enemy] } : {}),
      ...(bhet?.playerWounded ? { playerWoundFrac: RULES.bhet.woundFraction } : {}),
      ...(bhet?.enemyWounded ? { enemyWoundFrac: RULES.bhet.woundFraction } : {})
    },
    aiLevel: 'normal',
    objective: { type: 'destroy' },
    scenarioId: 'ch04_pratapgad',
    scenarioName: 'Pratapgad',
    rules: 'swarajya',
    season: 'hemanta'
  })
};
