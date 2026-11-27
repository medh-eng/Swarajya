/* Phase 2 balance pass: the Wagh Nakh (`powerVsLegendary`). A Shakti order that deals `power`
   damage to an enemy unit, or `powerVsLegendary` if the victim is a Legendary card.
   It is the Swarajya answer to a pre-deployed commander such as Afzal Khan (ch04 Pratapgad). */
import { describe, expect, it } from 'vitest';
import { CARDS, aiTurn, applyAction, newGame, type Unit } from '../src/engine';

const unit = (uid: number, cardId: string, owner: 0 | 1, atk: number, hp: number): Unit => ({
  uid, cardId, name: cardId, sub: '', glyph: '', empire: 'neutral', atk, hp, maxHp: hp, op: 1,
  range: 'melee', kw: [], owner, canAct: true, moved: false, attacked: false, smokeBroken: false
});

const mk = () => newGame({
  seed: 3, rules: 'swarajya',
  player: { empire: 'swarajya', deck: Array(12).fill('sw_wagh_nakh') },
  enemy: { empire: 'adilshahi', deck: Array(12).fill('as_hasham') }
});

describe('Wagh Nakh (powerVsLegendary)', () => {
  it('is defined as a Shakti order with 4 / 8 damage', () => {
    const c = CARDS['sw_wagh_nakh'];
    expect(c.type).toBe('order');
    expect(c.kind).toBe('shakti');
    expect(c.power).toBe(4);
    expect(c.powerVsLegendary).toBe(8);
  });

  it('deals only 4 to an ordinary unit', () => {
    const st = mk();
    st.players[1].support = [unit(500, 'as_gaja', 1, 4, 6)]; // rare, not legendary
    st.players[0].hand = ['sw_wagh_nakh']; st.players[0].kosha = 10;
    const r = applyAction(st, { type: 'play', handIndex: 0, target: { kind: 'unit', owner: 1, uid: 500 } });
    expect(r.ok).toBe(true);
    expect(st.players[1].support.find(u => u.uid === 500)!.hp).toBe(2);
  });

  it('deals 8 to a Legendary unit, enough to remove Afzal Khan outright', () => {
    const st = mk();
    st.players[1].support = [unit(501, 'as_afzal_khan', 1, 5, 8)];
    st.players[0].hand = ['sw_wagh_nakh']; st.players[0].kosha = 10;
    const r = applyAction(st, { type: 'play', handIndex: 0, target: { kind: 'unit', owner: 1, uid: 501 } });
    expect(r.ok).toBe(true);
    expect(st.players[1].support.some(u => u.uid === 501)).toBe(false);
  });

  it('the AI saves it for the legendary: it picks Afzal over a Hasham', () => {
    const st = mk();
    st.players[1].support = [unit(502, 'as_hasham', 1, 2, 3), unit(503, 'as_afzal_khan', 1, 5, 8)];
    st.players[0].hand = ['sw_wagh_nakh']; st.players[0].kosha = 10;
    aiTurn(st, 0, 'normal');
    expect(st.players[1].support.some(u => u.uid === 503)).toBe(false);
  });
});
