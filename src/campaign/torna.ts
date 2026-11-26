/* ============================================================
   Phase 1 step 5 — "Torna" (DESIGN §5, chapter 1): the first
   `capture` battle, teaching the Gad card type. Following Purandare
   (Pon's decision D-19, CONTESTED #25), Torna stood unguarded —
   no card or text here says "garrison" or "commandant" — so the
   fight is a race to raise the banner and hold it, not a siege.
   The fort itself (`as_gad_torna_held`) starts already on the
   board, Bijapur's side, waiting to be taken.
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch01_torna');

export const TORNA: Scenario = {
  id: 'ch01_torna',
  title: 'Torna',
  place: 'Torna fort, Pune district',
  year: '1646',
  battlefield: 'torna',
  briefing: 'Torna stands neglected, its walls unwatched while the Bijapur court is thrown into confusion over the sultan’s illness. Raise your banner over it, spend what its treasure can buy, and hold it before Bijapur’s response arrives.',
  objective: 'Take and hold Torna before turn 14.',
  heroCard: 'sw_gad_torna',
  defeatCard: 'as_hasham',
  enemyName: 'Bijapur',
  durgArt: ['durg_rajgad', 'durg_bijapur'],
  winText: turn => `The banner is raised over Torna in turn ${turn}. Its treasure will build Rajgad.`,
  loseText: "Bijapur's response arrives in time. Torna stays dark a while longer.",
  goLabel: 'To Torna',
  nextId: 'ch03_jaoli',
  nextLabel: 'Jaoli',
  playerDeck, enemyDeck,
  // Phase 1 step 8 (TASKS.md), unreviewed — see src/i18n.ts
  mr: {
    title: 'तोरणा',
    place: 'तोरणा किल्ला, पुणे जिल्हा',
    briefing: 'विजापूरच्या दरबारात सुलतानाच्या आजारपणामुळे गोंधळ माजला असताना तोरणा दुर्लक्षित उभा आहे, त्याच्या भिंतींवर कोणाचेही लक्ष नाही. त्यावर आपला झेंडा फडकवा, त्याच्या खजिन्याचा उपयोग करा, आणि विजापूरचे उत्तर येण्याआधी तो राखून ठेवा.',
    objective: '१४ व्या डावाआधी तोरणा ताब्यात घ्या आणि राखा.',
    goLabel: 'तोरण्याकडे',
    nextLabel: 'जावळी',
    winText: turn => `${turn} व्या डावात तोरण्यावर झेंडा फडकतो. त्याच्या खजिन्यातून राजगड उभा राहील.`,
    loseText: 'विजापूरचे उत्तर वेळेत पोहोचते. तोरणा आणखी काही काळ अंधारात राहतो.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: 'The Maval' },
    enemy: { empire: 'adilshahi', deck: enemyDeck, hq: 20, startKosha: 0, faction: 'Bijapur', capital: 'Bijapur' },
    preset: { enemySupport: ['as_gad_torna_held'] },
    aiLevel: 'normal',
    objective: { type: 'capture', forts: ['as_gad_torna_held'], turns: 14 },
    scenarioId: 'ch01_torna',
    scenarioName: 'Torna',
    rules: 'swarajya',
    season: 'sharad'
  })
};
