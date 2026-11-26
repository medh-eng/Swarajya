/* Session 11 regression (ch06 playtest): on the last turn of a 'survive' chapter, a Durg that falls to
   attrition as the turn begins has lost. The clock must not then declare "the line held". */
import { describe, expect, it } from 'vitest';
import { applyAction, newGame } from '../src/engine';

const mk = (rules: 'swarajya' | 'classic') => {
  const st = newGame({
    seed: 5, rules, objective: { type: 'survive', turns: 8 },
    player: { empire: 'swarajya', deck: Array(12).fill('sw_hetkari') },
    enemy: { empire: 'adilshahi', deck: Array(12).fill('as_hasham') }
  });
  // the enemy is about to end turn 8; the player's deck is empty and the Durg has 1 left
  st.turn = 8; st.active = 1;
  st.players[0].deck = []; st.players[0].fatigue = 0; st.players[0].hq.hp = 1;
  return st;
};

describe('survive vs attrition', () => {
  it('Swarajya: a Durg killed by attrition at the start of the final turn loses', () => {
    const st = mk('swarajya');
    expect(applyAction(st, { type: 'end' }).ok).toBe(true);
    expect(st.turn).toBe(9);
    expect(st.over).toBe(true);
    expect(st.players[0].hq.hp).toBeLessThanOrEqual(0);
    expect(st.winner).toBe(1);
    expect(st.winReason).not.toBe('survive');
  });

  it('Swarajya: with a living Durg the same turn is still a survive win', () => {
    const st = mk('swarajya');
    st.players[0].hq.hp = 10;
    applyAction(st, { type: 'end' });
    expect(st.over).toBe(true);
    expect(st.winner).toBe(0);
    expect(st.winReason).toBe('survive');
  });
});
