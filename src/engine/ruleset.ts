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

/** the Yudhbhumi's capacity. 4 everywhere, except in a Swarajya Khind (mountain pass) chapter,
    where the scenario narrows it (DESIGN 3.2). Classic and YUDDH games always get 4 */
export const frontCap = (st: { rules?: Ruleset; frontSize?: number }): number =>
  isSwarajyaRules(st.rules) && st.frontSize && st.frontSize > 0 ? st.frontSize : 4;

/** a Khind battle: the Yudhbhumi is narrower than usual */
export const isKhind = (st: { rules?: Ruleset; frontSize?: number }): boolean => frontCap(st) < 4;
