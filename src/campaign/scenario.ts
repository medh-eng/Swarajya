/* What the battle screen needs to know about a battle: its story, its two
   Durgs, its music, and how to set up the game. The First Throne and the
   tutorial are both scenarios; later campaign missions will be too. */
import type { GameState } from '../engine/types';
import type { BhetOdds, BhetOutcome } from '../engine/bhet';
import { pick } from '../i18n';

export interface DuelSide { name: string; hero: string; durg: string }

/** DESIGN 3.5: a scenario that opens with a Bhet (parley) before the battle. The resolution
    table and the AI's pick live in the engine (`src/engine/bhet.ts`) and in `RULES.bhet`; this
    is only the per-chapter framing and, when "Guard" wins out, which card each side's extra
    unit is. */
export interface BhetConfig {
  /** shown on the Bhet scene before the player picks a stance */
  intro: string;
  /** override the even default odds (RULES.bhet.aiOdds) for this chapter's AI pick */
  aiOdds?: BhetOdds;
  /** the unit a side gains in support when its Guard reads the other side's Strike */
  extraUnit: { player: string; enemy: string };
  /** Marathi for `intro` (Phase 1 step 8; unreviewed — see src/i18n.ts) */
  mr?: { intro?: string };
}

export interface Scenario {
  id: string;
  title: string;
  place: string;
  year: string;
  battlefield: string;
  briefing: string;
  /** one line under the briefing: how to win */
  objective: string;
  /** the painting beside the briefing and on the victory screen; and on defeat */
  heroCard: string;
  defeatCard: string;
  /** the enemy as the turn banner and hints name it */
  enemyName: string;
  /** Durg paintings: [yours, theirs] */
  durgArt: [string, string];
  winText: (turn: number) => string;
  loseText: string;
  /** the button on the briefing */
  goLabel: string;
  playerDeck: string[];
  enemyDeck: string[];
  game: (seed: number, bhet?: BhetOutcome) => GameState;
  /** DESIGN 3.5: play a Bhet scene before the battle. Absent on most chapters. */
  bhet?: BhetConfig;
  /** the battle that follows in the campaign, and the label of the victory button that leads to it */
  nextId?: string;
  nextLabel?: string;
  /** this battle's own music (files named music_<x> in art/source/sfx); any piece not delivered falls back to the standard one */
  music?: { briefing?: string; calm?: string; intense?: string };
  /** a guided battle: the coach explains each step */
  coached?: boolean;
  /** pass-and-play: two humans, no AI; sides[0] moves first. The battle turns the board between turns. */
  duel?: { sides: [DuelSide, DuelSide] };
  /** two phones: the link to the other player, and which end this is (the host moves first and keeps the real frame) */
  online?: { link: import('../game/net/link').Link; role: 'host' | 'guest' };
  /** two phones: both devices deal from this seed */
  fixedSeed?: number;
  /** Marathi for the chapter's own text (Phase 1 step 8; unreviewed — see src/i18n.ts).
      Generic battle-screen chrome (buttons, tooltips, the History panel) is not covered
      here — that is PLAN.md's later "Full Marathi pass." Use `localizeScenario()` to apply. */
  mr?: {
    title?: string; place?: string; briefing?: string; objective?: string;
    goLabel?: string; nextLabel?: string;
    winText?: (turn: number) => string; loseText?: string;
    // `enemyName` is deliberately NOT here: battle.ts splices it into English sentences
    // ("The ${enemyName} is moving…", "THE ${enemyName} MOVES") that this pass doesn't translate,
    // so a lone Marathi word there would read as broken, not bilingual. Leave it English until
    // those two sentences are translated too (part of the later "Full Marathi pass", PLAN.md).
  };
}

/** a shallow copy of `sc` with its Marathi text swapped in for the fields that have it,
    when Marathi is the active language; English fields stand in for any gap. */
export function localizeScenario(sc: Scenario): Scenario {
  const m = sc.mr;
  if (!m) return sc;
  return {
    ...sc,
    title: pick(sc.title, m.title),
    place: pick(sc.place, m.place),
    briefing: pick(sc.briefing, m.briefing),
    objective: pick(sc.objective, m.objective),
    goLabel: pick(sc.goLabel, m.goLabel),
    nextLabel: pick(sc.nextLabel, m.nextLabel),
    winText: pick(sc.winText, m.winText),
    loseText: pick(sc.loseText, m.loseText),
    bhet: sc.bhet && { ...sc.bhet, intro: pick(sc.bhet.intro, sc.bhet.mr?.intro) }
  };
}
