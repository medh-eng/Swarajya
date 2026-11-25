/* What the battle screen needs to know about a battle: its story, its two
   Durgs, its music, and how to set up the game. The First Throne and the
   tutorial are both scenarios; later campaign missions will be too. */
import type { GameState } from '../engine/types';
import type { BhetOdds, BhetOutcome } from '../engine/bhet';

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
}
