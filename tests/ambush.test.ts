/* Phase 2, chapter 8 (session 14): the Khind Ambush, a Yantra with the new
   `onEnemyAdvance` trigger. When an enemy unit advances to the Yudhbhumi it
   springs and deals its power to that unit. Swarajya-only. */
import { describe, expect, it } from 'vitest';
import { applyAction, newGame, type GameState } from '../src/engine';
import { aiPlayPhase } from '../src/engine/ai';

const mk = (rules: 'swarajya' | 'yuddh' = 'swarajya'): GameState => {
  const st = newGame({
    seed: 5, rules,
    player: { empire: 'swarajya', deck: Array(20).fill('sw_mavla') },
    enemy: { empire: 'mughal', deck: Array(20).fill('mg_mansabdar_sawar') }
  });
  st.players.forEach(p => { p.kosha = 10; p.maxKosha = 10; });
  st.front = { owner: null, units: [] };
  return st;
};
const deployAndAdvance = (st: GameState, cardId: string) => {
  st.active = 1;
  st.players[1].hand = [cardId];
  expect(applyAction(st, { type: 'play', handIndex: 0 }).ok).toBe(true);
  const u = st.players[1].support[st.players[1].support.length - 1];
  u.canAct = true;
  expect(applyAction(st, { type: 'move', uid: u.uid }).ok).toBe(true);
  return u;
};

describe('Khind Ambush (onEnemyAdvance)', () => {
  it('springs when an enemy unit advances and strikes it for 3', () => {
    const st = mk();
    st.players[0].yantras = [{ cardId: 'sw_khind_ambush', uid: 900 }];
    const u = deployAndAdvance(st, 'mg_rajput_officer'); // 4/4
    expect(st.players[0].yantras).toHaveLength(0);
    expect(u.hp).toBe(1);
    expect(st.players[0].discard).toContain('sw_khind_ambush');
  });
  it('destroys a unit it can kill, and the pass stays open', () => {
    const st = mk();
    st.players[0].yantras = [{ cardId: 'sw_khind_ambush', uid: 900 }];
    deployAndAdvance(st, 'mg_mansabdar_sawar'); // 3/3
    expect(st.front.units).toHaveLength(0);
    expect(st.front.owner).toBeNull();
  });
  it('does nothing outside Swarajya rules', () => {
    const st = mk('yuddh');
    st.players[0].yantras = [{ cardId: 'sw_khind_ambush', uid: 900 }];
    const u = deployAndAdvance(st, 'mg_rajput_officer');
    expect(st.players[0].yantras).toHaveLength(1);
    expect(u.hp).toBe(4);
  });
  it('the AI sets an ambush when it holds one', () => {
    const st = mk();
    st.active = 0;
    st.players[0].hand = ['sw_khind_ambush'];
    st.players[1].support = [];
    st.players[1].hand = ['mg_mansabdar_sawar'];
    aiPlayPhase(st, 0, 'normal');
    expect(st.players[0].yantras.map(y => y.cardId)).toEqual(['sw_khind_ambush']);
  });
});
