/* Phase 2 step 2 (TASKS.md): Khind, the mountain-pass battlefield (DESIGN 3.2). A scenario sets
   `frontSize`; in a Swarajya game the Yudhbhumi then holds only that many units. Classic and YUDDH
   games ignore it and keep 4, so the golden traces cannot change. */
import { describe, expect, it } from 'vitest';
import { aiTurn, applyAction, canMove, frontCap, isKhind, newGame, type Unit } from '../src/engine';

const unit = (uid: number, cardId: string, owner: 0 | 1, atk = 2, hp = 3): Unit => ({
  uid, cardId, name: cardId, sub: '', glyph: '', empire: 'neutral', atk, hp, maxHp: hp, op: 1,
  range: 'melee', kw: [], owner, canAct: true, moved: false, attacked: false, smokeBroken: false
});
const repeat = (ids: string[], n: number): string[] => Array.from({ length: n }, () => ids).flat();

const mk = (rules: 'swarajya' | 'yuddh' | 'classic', frontSize?: number) => newGame({
  seed: 3, rules, frontSize,
  player: { empire: 'swarajya', deck: repeat(['sw_hetkari'], 12) },
  enemy: { empire: 'adilshahi', deck: repeat(['as_hasham'], 12) }
});

describe('Khind (DESIGN 3.2)', () => {
  it('a Swarajya game with frontSize 2 is a Khind; without it the Yudhbhumi holds 4', () => {
    expect(frontCap(mk('swarajya', 2))).toBe(2);
    expect(isKhind(mk('swarajya', 2))).toBe(true);
    expect(frontCap(mk('swarajya'))).toBe(4);
    expect(isKhind(mk('swarajya'))).toBe(false);
  });

  it('YUDDH and classic games ignore frontSize (the golden traces stay valid)', () => {
    for (const r of ['yuddh', 'classic'] as const) {
      const st = mk(r, 2);
      expect(st.frontSize, r).toBeUndefined();
      expect(frontCap(st), r).toBe(4);
    }
  });

  it('a third unit cannot advance into a pass that holds two', () => {
    const st = mk('swarajya', 2);
    st.players[0].kosha = 10;
    st.front.owner = 0; st.front.units = [unit(200, 'sw_hetkari', 0), unit(201, 'sw_hetkari', 0)];
    st.players[0].support = [unit(202, 'sw_hetkari', 0)];
    const r = canMove(st, 0, 202);
    expect(r.ok).toBe(false);
    expect(r.ok ? '' : r.reason).toMatch(/pass is full/);
    expect(applyAction(st, { type: 'move', uid: 202 }).ok).toBe(false);
    // with one place free it may advance
    st.front.units.pop();
    expect(canMove(st, 0, 202).ok).toBe(true);
  });

  it('outside a Khind the same third unit may advance', () => {
    const st = mk('swarajya');
    st.players[0].kosha = 10;
    st.front.owner = 0; st.front.units = [unit(200, 'sw_hetkari', 0), unit(201, 'sw_hetkari', 0)];
    st.players[0].support = [unit(202, 'sw_hetkari', 0)];
    expect(canMove(st, 0, 202).ok).toBe(true);
  });

  it('a preset cannot overfill the pass', () => {
    const st = newGame({ seed: 1, rules: 'swarajya', frontSize: 1,
      player: { empire: 'swarajya', deck: repeat(['sw_hetkari'], 12) },
      enemy: { empire: 'adilshahi', deck: repeat(['as_hasham'], 12) },
      preset: { enemyFront: ['as_hasham', 'as_hasham', 'as_hasham'] } });
    expect(st.front.units.length).toBe(1);
  });

  it('the AI never crowds more than frontSize units into the pass, on either level, over whole games', () => {
    for (const level of ['normal', 'hard'] as const) {
      for (let seed = 1; seed <= 12; seed++) {
        const st = newGame({ seed, rules: 'swarajya', frontSize: 2, aiLevel: level,
          player: { empire: 'swarajya', deck: repeat(['sw_hetkari', 'sw_bargir', 'sw_mavla'], 5) },
          enemy: { empire: 'adilshahi', deck: repeat(['as_hasham', 'as_gaja'], 7) } });
        let i = 0;
        while (!st.over && i++ < 400) {
          aiTurn(st, st.active, level);
          expect(st.front.units.length).toBeLessThanOrEqual(2);
        }
        expect(st.over, `seed ${seed} ${level}`).toBe(true);
      }
    }
  });
});
