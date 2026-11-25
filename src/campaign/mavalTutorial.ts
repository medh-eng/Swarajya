/* ============================================================
   Phase 1 step 5 — "The Mavlas of the Maval" (DESIGN §5, chapter 0):
   a short coached battle that teaches the basics, set in the years
   Shivaji grew up in the Pune jagir. The fight itself is invented
   (see src/data/history.json); the birth, the jagir and Dadoji's
   administration of it are not (CHRONOLOGY C-1630-CONTEXT,
   C-1630-BIRTH, C-1640-PUNE).
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch00_maval');

export const MAVAL_TUTORIAL: Scenario = {
  id: 'ch00_maval',
  title: 'The Mavlas of the Maval',
  place: 'Pune jagir, the Maval valleys',
  year: 'c. 1640s',
  // no painting yet (Pon has not reached this one): loadBattlefield draws a placeholder (step 4)
  battlefield: 'maval',
  briefing: 'Before you lead an army, Jijabai wants to see you command one. A small border post sits across the field, nothing like the forts you will one day take — but a lesson learned small is learned safely.',
  objective: 'Learn to play: destroy the border post.',
  heroCard: 'sw_jijau_counsel',
  defeatCard: 'as_hasham',
  enemyName: 'Border post',
  durgArt: ['durg_pune_jagir', 'durg_border_post'],
  winText: turn => `The border post falls in turn ${turn}. Jijabai nods: the lessons have taken root.`,
  loseText: 'The post holds. Even a Raje must lose a few battles before he wins one. Try again.',
  goLabel: 'Begin training',
  nextId: 'ch01_torna',
  nextLabel: 'Torna',
  playerDeck, enemyDeck,
  coached: true,
  // Phase 1 step 8 (TASKS.md), unreviewed — see src/i18n.ts
  mr: {
    title: 'मावळातले मावळे',
    place: 'पुणे जहागीर, मावळ खोरी',
    briefing: 'सैन्याचे नेतृत्व करण्याआधी, जिजाबाईंना तुम्ही एक तुकडी चालवताना पाहायचे आहे. मैदानापलीकडे एक छोटी सीमाचौकी आहे, पुढे जिंकाल त्या किल्ल्यांसारखी मुळीच नाही — पण लहान धडा सुरक्षित असतो.',
    objective: 'खेळायला शिका: सीमाचौकी उद्ध्वस्त करा.',
    goLabel: 'प्रशिक्षण सुरू करा',
    nextLabel: 'तोरणा',
    winText: turn => `सीमाचौकी ${turn} व्या डावात पडते. जिजाबाई मान हलवतात: धडे रुजले आहेत.`,
    loseText: 'चौकी टिकते. राजालाही जिंकण्याआधी काही लढाया हराव्या लागतात. पुन्हा प्रयत्न करा.'
  },
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: "Jijabai's Camp",
      openingHand: ['sw_bargir', 'sw_hetkari', 'sw_bargir', 'sw_jijau_counsel'] },
    enemy: { empire: 'neutral', deck: enemyDeck, hq: 12, startKosha: 0, faction: 'Border Post', capital: 'Border Post' },
    aiLevel: 'easy',
    objective: { type: 'destroy' },
    scenarioId: 'ch00_maval',
    scenarioName: 'The Mavlas of the Maval',
    rules: 'swarajya'
  })
};
