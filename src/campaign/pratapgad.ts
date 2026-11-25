/* ============================================================
   Phase 1 step 5 — "Pratapgad" (DESIGN §5, chapter 4): Afzal Khan's
   army, below the fort built from Torna's own treasure (CHRONOLOGY
   C-1656-PRATAPGAD-BUILT, C-1659-AFZAL-MARCH, C-1659-PRATAPGAD).
   DESIGN 3.5 calls this a Bhet-and-battle chapter; the Bhet (parley)
   minigame is Phase 1 step 6 and is not built yet, so this chapter
   is the battle alone for now — Afzal Khan starts on the field, as
   the meeting has already happened offscreen. Wire in the Bhet when
   step 6 lands, the same way the Gad mechanic was added in step 2.
   ============================================================ */
import { newGame } from '../engine/rules';
import { decksOf } from '../data';
import type { Scenario } from './scenario';

const { player: playerDeck, enemy: enemyDeck } = decksOf('ch04_pratapgad');

export const PRATAPGAD: Scenario = {
  id: 'ch04_pratapgad',
  title: 'Pratapgad',
  place: 'Below Pratapgad fort',
  year: '10 November 1659',
  battlefield: 'pratapgad',
  briefing: "Afzal Khan marched from Bijapur to end your rebellion. Whatever truly passed between you in the meeting below the fort, his army did not expect what came after. Break it, and the gates of the Deccan begin to open.",
  objective: "Destroy Afzal Khan's army.",
  heroCard: 'sw_gad_pratapgad',
  defeatCard: 'as_gaja',
  enemyName: "Afzal Khan's army",
  durgArt: ['durg_pratapgad', 'durg_bijapur_camp'],
  winText: turn => `Afzal Khan's army breaks in turn ${turn}. Pratapgad's name will travel far beyond the Maval.`,
  loseText: "The line breaks below Pratapgad. The rebellion's first great test is lost.",
  goLabel: 'To the field below Pratapgad',
  playerDeck, enemyDeck,
  game: seed => newGame({
    seed,
    player: { empire: 'swarajya', deck: playerDeck, hq: 24, faction: 'Swarajya', capital: 'Pratapgad' },
    enemy: { empire: 'adilshahi', deck: enemyDeck, hq: 24, faction: 'Bijapur', capital: "Afzal Khan's Camp" },
    preset: { enemyFront: ['as_afzal_khan'] },
    aiLevel: 'normal',
    objective: { type: 'destroy' },
    scenarioId: 'ch04_pratapgad',
    scenarioName: 'Pratapgad',
    rules: 'swarajya',
    season: 'hemanta'
  })
};
