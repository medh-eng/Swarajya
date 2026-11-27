/* The player's choice of foe. Standard = the heuristic opponent each battle was balanced
   against. Easy = the same opponent playing carelessly (the 'easy' AI level: it skips plays
   and attacks at random), for learning the game. Veteran = the search AI (src/engine/search.ts),
   which plans whole turns ahead. One setting for the whole game, kept in the browser. */
import type { AiLevel } from '../engine/types';

export type FoeMode = 'easy' | 'standard' | 'veteran';
const KEY = 'yuddh.foe.v1';
export const foeMode = (): FoeMode => {
  try { const v = localStorage.getItem(KEY); return v === 'veteran' || v === 'easy' ? v : 'standard'; } catch { return 'standard'; }
};
export const setFoeMode = (m: FoeMode): void => { try { localStorage.setItem(KEY, m); } catch { /* private mode */ } };
/** the next mode when the button is pressed: Easy → Standard → Veteran → Easy */
export const nextFoeMode = (m: FoeMode): FoeMode => (m === 'easy' ? 'standard' : m === 'standard' ? 'veteran' : 'easy');
export const veteranFoe = (): boolean => foeMode() === 'veteran';
/** the AI level for a battle whose own default is `base` */
export const foeLevel = (base: AiLevel): AiLevel => {
  const m = foeMode();
  return m === 'veteran' ? 'search' : m === 'easy' ? 'easy' : base;
};
