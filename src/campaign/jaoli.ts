/* ============================================================
   Phase 2 step 4 — "Jaoli" (DESIGN §5, chapter 3): the assault on
   the More strongholds of the Jaoli valley, 1656 (CHRONOLOGY
   C-1656-JAOLI, C-1656-PRATAPGAD-BUILT).
   How Jaoli was really taken is disputed (CONTESTED #4): Purandare
   tells a quarrel that grew over months and then a campaign with the
   Deshmukhs; other Maratha accounts add a pretended marriage embassy.
   Following the chapter design, it is played as a straight assault
   and the History note gives both accounts. Chandrarao's later
   execution is not playable (D-07) and is told plainly in the note.
   This is the first chapter that decks Shivaji's own card and the
   Ganim (strike and fade) units from Phase 2 step 1; the Mores'
   forest foot use Dhuan (hidden until they strike) — the valley is
   theirs, and they know where to wait.
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch03_jaoli');

export const JAOLI: Scenario = {
  id: 'ch03_jaoli',
  title: 'Jaoli',
  place: 'The Jaoli valley, Satara district',
  year: '1656',
  battlefield: 'jaoli',
  briefing: 'The Mores of Jaoli have claimed land that is not theirs, sheltered a man fleeing your justice and raided Rohidkhore. Your warnings and letters went unanswered. Now you march into their forest with the Deshmukhs of the Maval. The Mores know every tree in this valley: expect their men to strike from where you cannot see them.',
  objective: "Break the Mores' hold on Jaoli: bring down Chandrarao's stronghold.",
  heroCard: 'sw_shivaji',
  defeatCard: 'jm_chandrarao',
  enemyName: 'Mores of Jaoli',
  durgArt: ['durg_rajgad', 'durg_jaoli'],
  winText: turn => `Jaoli falls in turn ${turn}. Above the valley, a new fort will rise: Pratapgad.`,
  loseText: 'The forest swallows the attack. The Mores keep their valley a while longer.',
  goLabel: 'Into Jaoli',
  nextId: 'ch04_pratapgad',
  nextLabel: 'Pratapgad',
  playerDeck, enemyDeck,
  // unreviewed Marathi, same status as the vertical slice's (Q-05) — see src/i18n.ts
  mr: {
    title: 'जावळी',
    place: 'जावळीचे खोरे, सातारा जिल्हा',
    briefing: 'जावळीच्या मोऱ्यांनी आपली नसलेली जमीन बळकावली आहे, तुमच्या न्यायापासून पळालेल्या माणसाला आश्रय दिला आहे आणि रोहिडखोऱ्यावर हल्ला केला आहे. तुमच्या ताकिदींना आणि पत्रांना उत्तर आले नाही. आता मावळच्या देशमुखांना सोबत घेऊन तुम्ही त्यांच्या जंगलात उतरता. मोऱ्यांना या खोऱ्यातले प्रत्येक झाड ठाऊक आहे: त्यांची माणसे न दिसणाऱ्या जागेतून हल्ला करतील.',
    objective: 'जावळीवरची मोऱ्यांची पकड मोडा: चंद्ररावाचा गड पाडा.',
    goLabel: 'जावळीत',
    nextLabel: 'प्रतापगड',
    winText: turn => `${turn} व्या डावात जावळी पडते. खोऱ्याच्या वर एक नवा किल्ला उभा राहील: प्रतापगड.`,
    loseText: 'जंगल हल्ला गिळून टाकते. मोरे आणखी काही काळ आपले खोरे राखतात.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: 'Rajgad' },
    enemy: { empire: 'jaoli', deck: enemyDeck, hq: 22, faction: 'Mores of Jaoli', capital: 'Jaoli' },
    aiLevel: 'normal',
    objective: { type: 'destroy' },
    scenarioId: 'ch03_jaoli',
    scenarioName: 'Jaoli',
    rules: 'swarajya',
    season: 'hemanta'
  })
};
