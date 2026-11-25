/* DESIGN 3.5: the Bhet — a short, secret-stance round played before some
   battles. Each side privately picks Trust (come as agreed), Guard (armour
   under the robe) or Strike (a hidden blade), then both are revealed at
   once. The pair of choices can leave one side's commander wounded at the
   start of the battle, or give the other side an extra unit in support.

   This file is pure and knows nothing about Pixi, Scenario or the UI: it
   is the "AI value" and the resolution table for the mechanic, exactly
   like ai.ts is for card play. The odds a side leans on are data
   (RULES.bhet in src/data/rules.json), not a historical claim — the Bhet
   "never claims to show what really happened in the tent" (DESIGN 3.5),
   so the default odds are deliberately even between the two sides and
   between the two secretive stances (Guard, Strike). A scenario may pass
   its own odds (see Scenario['bhet']) without this file needing to know
   why. */

export type BhetStance = 'trust' | 'guard' | 'strike';
export const BHET_STANCES: BhetStance[] = ['trust', 'guard', 'strike'];

export interface BhetOdds { trust: number; guard: number; strike: number }

/** A weighted pick among the three stances. `rng()` must return [0, 1). */
export function chooseBhetStance(rng: () => number, odds: BhetOdds): BhetStance {
  const total = odds.trust + odds.guard + odds.strike;
  let r = rng() * (total > 0 ? total : 1);
  for (const s of BHET_STANCES) {
    r -= odds[s];
    if (r <= 0) return s;
  }
  return 'trust';
}

export interface BhetOutcome {
  player: BhetStance;
  enemy: BhetStance;
  /** the side's commander starts the battle wounded (DESIGN 3.5: "Strike vs Trust, the trusting side starts with its commander damaged") */
  playerWounded: boolean;
  enemyWounded: boolean;
  /** the side starts with one extra unit already in support (DESIGN 3.5: "Guard vs Strike, ... the guarding side starts with an extra unit on the Yudhbhumi") */
  playerExtra: boolean;
  enemyExtra: boolean;
  /** one or two sentences for the reveal screen. Dignified, no verdict on who "really" meant harm (D-05, DESIGN 3.5). */
  resultLine: string;
}

const STANCE_WORD: Record<BhetStance, string> = { trust: 'came as agreed', guard: 'came armoured, ready for treachery', strike: 'came with a hidden blade' };

/** The full 3x3 table. Only a Strike actually does anything: Trust and Guard are not
    themselves provocations, so two sides that never drew a blade part as they met. */
export function resolveBhet(player: BhetStance, enemy: BhetStance): BhetOutcome {
  let playerWounded = false, enemyWounded = false, playerExtra = false, enemyExtra = false;
  if (player === 'strike' && enemy === 'strike') {
    // both struck at once: the ambush cancels itself out, no one keeps the edge
    playerWounded = true; enemyWounded = true;
  } else if (player === 'strike' && enemy === 'trust') {
    enemyWounded = true; // the trusting side is caught open
  } else if (enemy === 'strike' && player === 'trust') {
    playerWounded = true;
  } else if (player === 'strike' && enemy === 'guard') {
    playerWounded = true; enemyExtra = true; // the guarded side saw it coming
  } else if (enemy === 'strike' && player === 'guard') {
    enemyWounded = true; playerExtra = true;
  }
  // trust/trust and guard/guard: no blade was ever drawn, nothing happens.
  const resultLine = player === enemy && player !== 'strike'
    ? `Both sides ${STANCE_WORD[player]}. The meeting passes without incident.`
    : `You ${STANCE_WORD[player]}; the other side ${STANCE_WORD[enemy]}.`;
  return { player, enemy, playerWounded, enemyWounded, playerExtra, enemyExtra, resultLine };
}
