/* ============================================================
   SWARAJYA — which rules a game uses.
   'swarajya' includes everything in 'yuddh'. Every YUDDH rule is
   switched on with isYuddhRules(); a rule that belongs to Swarajya
   alone is switched on with isSwarajyaRules(). 'classic' (the
   prototype's rules) stays untouched so the golden traces replay.
   ============================================================ */
import type { Ruleset } from './types';

/** the YUDDH rules apply (true for 'yuddh' and for 'swarajya') */
export const isYuddhRules = (r?: Ruleset | null): boolean => r === 'yuddh' || r === 'swarajya';

/** a Swarajya-only rule applies */
export const isSwarajyaRules = (r?: Ruleset | null): boolean => r === 'swarajya';
