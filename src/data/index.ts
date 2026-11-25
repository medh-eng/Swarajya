/* ============================================================
   Typed access to the JSON data files in this folder.
   Balance changes (stats, costs, deck lists, rule constants) are
   edits to cards.json / decks.json / rules.json, not to code.
   ============================================================ */
import type { CardDef, Empire, EmpireId, Season } from '../engine/types';
import cardsJson from './cards.json';
import decksJson from './decks.json';
import rulesJson from './rules.json';
import historyJson from './history.json';

export const EMPIRE_DATA = cardsJson.empires as unknown as Record<EmpireId, Empire>;
export const EMPIRE_ORDER_DATA = cardsJson.empireOrder as EmpireId[];
export const CLASSIC_CARDS = cardsJson.classic as unknown as CardDef[];
export const YUDDH_CARDS = cardsJson.yuddh as unknown as CardDef[];
/** Swarajya cards (Phase 1: only cards the engine can already play; the rest wait in data/cards.draft.json) */
export const SWARAJYA_CARDS = cardsJson.swarajya as unknown as CardDef[];
/** designed but unpainted: not loaded by the engine until their art arrives */
export const PENDING_CARDS = cardsJson.pendingArt as unknown as CardDef[];

/** 'id*3' → three copies of id; order is kept (decks are shuffled from a seeded generator) */
export function expandDeck(list: readonly string[]): string[] {
  return list.flatMap(e => { const [id, n] = e.split('*'); return Array.from({ length: n ? Number(n) : 1 }, () => id); });
}

type DeckEntry = { player: string[]; enemy: string[] };
const decks = decksJson as unknown as Record<string, DeckEntry>;
/** the two decks of a battle, by scenario id (see decks.json) */
export function decksOf(scenarioId: string): { player: string[]; enemy: string[] } {
  const d = decks[scenarioId];
  if (!d) throw new Error(`no deck entry for ${scenarioId} in src/data/decks.json`);
  return { player: expandDeck(d.player), enemy: expandDeck(d.enemy) };
}

export const RULES = {
  ranks: rulesJson.ranks as string[],
  dharmaMax: rulesJson.dharmaMax,
  morale: {
    lineDivisor: rulesJson.morale.lineDivisor,
    steadfastKeywords: new Set<string>(rulesJson.morale.steadfastKeywords),
    steadfastClasses: new Set<string>(rulesJson.morale.steadfastClasses),
    steadfastRank: rulesJson.morale.steadfastRank,
    rallyCards: new Set<string>(rulesJson.morale.rallyCards)
  },
  kutaCards: new Set<string>(rulesJson.kutaCards),
  ai: rulesJson.ai as { beam: number; maxDepth: number; finalists: number; replies: number },
  chargeClasses: new Set<string>(rulesJson.chargeClasses),
  seasons: rulesJson.seasons as Record<Season, { name: string; english: string; rule: string }>,
  bhet: rulesJson.bhet as { aiOdds: { trust: number; guard: number; strike: number }; woundFraction: number }
};

/* ---- the history notes (history.json) ---- */
// CONTESTED (Swarajya, session 8 — DESIGN 3.9, CLAUDE.md basis tags): a point historians argue
// over, where the game still had to pick one version for play; see history/CONTESTED.md.
export type HistoryBasis = 'HISTORY' | 'TRADITION' | 'INVENTED' | 'CONTESTED';
export interface HistoryNote {
  kicker: string;
  happened: string;
  changed: { basis: HistoryBasis; text: string }[];
  source: string;
  epilogue: string;
  /** DESIGN 3.9: "the other side wrote…" — a Persian, Bijapuri or English record's different
      account, in one or two lines, shown as its own block when present. */
  otherSide?: string;
}
export const HISTORY_NOTICE = historyJson.notice;
/** the History note of a battle, if it has one (the Training Ground has none) */
export const historyOf = (scenarioId: string): HistoryNote | undefined =>
  (historyJson.battles as unknown as Record<string, HistoryNote>)[scenarioId];
