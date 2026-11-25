/* Phase 1 step 6 (TASKS.md): the Bhet (DESIGN 3.5) — a secret-stance round played before a
   battle. resolveBhet() is the resolution table; chooseBhetStance() is the mechanic's "AI
   value" (a weighted pick among Trust/Guard/Strike); newGame()'s preset wound fields are the
   engine-side effect once the outcome is known. */
import { describe, expect, it } from 'vitest';
import { BHET_STANCES, chooseBhetStance, newGame, resolveBhet, type BhetStance } from '../src/engine';

// decks big enough that the opening draw never hits an empty deck and triggers fatigue damage,
// which would confuse these tests' hq.hp assertions with an unrelated engine mechanic
const deck = (id: string) => Array.from({ length: 12 }, () => id);

describe('resolveBhet (DESIGN 3.5 payoff table)', () => {
  it('two calm meetings (Trust/Trust, Guard/Guard) change nothing', () => {
    for (const s of ['trust', 'guard'] as BhetStance[]) {
      const o = resolveBhet(s, s);
      expect(o).toMatchObject({ playerWounded: false, enemyWounded: false, playerExtra: false, enemyExtra: false });
    }
  });

  it('Strike vs Trust wounds the trusting side only', () => {
    const o = resolveBhet('strike', 'trust'); // player struck, enemy trusted
    expect(o).toMatchObject({ playerWounded: false, enemyWounded: true, playerExtra: false, enemyExtra: false });
    const r = resolveBhet('trust', 'strike'); // player trusted, enemy struck
    expect(r).toMatchObject({ playerWounded: true, enemyWounded: false, playerExtra: false, enemyExtra: false });
  });

  it('Guard vs Strike wounds the striker and reinforces the guard', () => {
    const o = resolveBhet('guard', 'strike'); // player guarded, enemy struck
    expect(o).toMatchObject({ playerWounded: false, enemyWounded: true, playerExtra: true, enemyExtra: false });
    const r = resolveBhet('strike', 'guard'); // player struck, enemy guarded
    expect(r).toMatchObject({ playerWounded: true, enemyWounded: false, playerExtra: false, enemyExtra: true });
  });

  it('Strike vs Strike wounds both sides the same way (no side keeps an edge)', () => {
    const o = resolveBhet('strike', 'strike');
    expect(o).toMatchObject({ playerWounded: true, enemyWounded: true, playerExtra: false, enemyExtra: false });
  });

  it('Guard vs Trust is as calm as Trust vs Trust (Guard alone provokes nothing)', () => {
    const o = resolveBhet('guard', 'trust');
    expect(o).toMatchObject({ playerWounded: false, enemyWounded: false, playerExtra: false, enemyExtra: false });
  });

  it('never claims a side chose badly: every outcome carries a neutral one-line result', () => {
    for (const a of BHET_STANCES) for (const b of BHET_STANCES) expect(resolveBhet(a, b).resultLine.length).toBeGreaterThan(0);
  });
});

describe('chooseBhetStance (the AI value)', () => {
  it('picks the only stance given all the weight', () => {
    expect(chooseBhetStance(() => 0, { trust: 1, guard: 0, strike: 0 })).toBe('trust');
    expect(chooseBhetStance(() => 0.999, { trust: 0, guard: 0, strike: 1 })).toBe('strike');
  });
  it('splits a seeded run across all three stances roughly by their odds', () => {
    const odds = { trust: 0.34, guard: 0.33, strike: 0.33 };
    let seed = 7; // tiny xorshift, deterministic
    const rng = () => { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; seed >>>= 0; return seed / 4294967296; };
    const counts: Record<BhetStance, number> = { trust: 0, guard: 0, strike: 0 };
    for (let i = 0; i < 3000; i++) counts[chooseBhetStance(rng, odds)]++;
    for (const s of BHET_STANCES) expect(counts[s]).toBeGreaterThan(600); // well above a 20% floor for a ~33% odd
  });
});

describe('newGame preset wound fields (engine effect of a Bhet result)', () => {
  it('wounds a preset front commander by the given fraction, never below 1 hp', () => {
    const st = newGame({
      seed: 1, rules: 'swarajya',
      player: { empire: 'swarajya', deck: deck('sw_bargir') },
      enemy: { empire: 'adilshahi', deck: deck('as_hasham') },
      preset: { enemyFront: ['as_afzal_khan'], enemyWoundFrac: 0.4 }
    });
    const afzal = st.front.units[0];
    expect(afzal.cardId).toBe('as_afzal_khan');
    expect(afzal.maxHp).toBe(8);
    expect(afzal.hp).toBe(8 - Math.round(8 * 0.4)); // 5
  });

  it('wounds the Durg instead when that side has no preset front unit', () => {
    const st = newGame({
      seed: 1, rules: 'swarajya',
      player: { empire: 'swarajya', deck: deck('sw_bargir'), hq: 24 },
      enemy: { empire: 'adilshahi', deck: deck('as_hasham') },
      preset: { enemyFront: ['as_afzal_khan'], playerWoundFrac: 0.4 }
    });
    expect(st.players[0].hq.hp).toBe(24 - Math.round(24 * 0.4));
  });

  it('a fraction of 0 or undefined leaves everything untouched', () => {
    const st = newGame({
      seed: 1, rules: 'swarajya',
      player: { empire: 'swarajya', deck: deck('sw_bargir'), hq: 24 },
      enemy: { empire: 'adilshahi', deck: deck('as_hasham') },
      preset: { enemyFront: ['as_afzal_khan'] }
    });
    expect(st.front.units[0].hp).toBe(st.front.units[0].maxHp);
    expect(st.players[0].hq.hp).toBe(24);
  });
});
