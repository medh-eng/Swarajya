/* Phase 2 step 3 (part): siege mechanics for chapter 7, Chakan (session 13).
   - `durgWard` Gad (DESIGN 3.1): each attack on its owner's Durg is 1 weaker while it stands.
   - `gadWard` aura (Firangoji): while he stands on the Rajya line, each blow on his side's Gads is 1 weaker.
   - siege guns (`static` + `vsGad`): cannot move to the Yudhbhumi; bombard an enemy Gad from the Rajya
     line over any Raksha, for extra damage.
   - `target: 'enemyGad'` orders (the Surang): may only be aimed at an enemy Gad; capture still applies.
   All Swarajya-only: the classic/YUDDH golden test is untouched. */
import { describe, expect, it } from 'vitest';
import { CARDS, applyAction, canAttack, canMove, canPlay, newGame, type GameState, type Unit } from '../src/engine';
import { durgWardOf, gadWardOf, strikeDamage } from '../src/engine/rules';

const unit = (uid: number, cardId: string, owner: 0 | 1, over: Partial<Unit> = {}): Unit => {
  const c = CARDS[cardId];
  return {
    uid, cardId, name: c.name, sub: c.sub, glyph: '', empire: c.empire, atk: c.atk ?? 0, hp: c.hp ?? 1, maxHp: c.hp ?? 1,
    op: c.op ?? 1, range: c.range ?? 'melee', kw: [...(c.kw ?? [])], owner, canAct: true, moved: false, attacked: false,
    smokeBroken: false, ...over
  };
};
const mk = (rules: 'swarajya' | 'yuddh' = 'swarajya'): GameState => {
  const st = newGame({
    seed: 3, rules,
    player: { empire: 'swarajya', deck: Array(20).fill('sw_mavla') },
    enemy: { empire: 'mughal', deck: Array(20).fill('mg_mansabdar_sawar') }
  });
  st.players.forEach(p => { p.support = []; p.hand = []; p.kosha = 10; p.maxKosha = 10; });
  st.front = { owner: null, units: [] };
  return st;
};

describe('Chakan siege mechanics (Swarajya rules)', () => {
  it('a durgWard Gad blunts each attack on its owner\'s Durg by 1', () => {
    const st = mk();
    st.active = 1;
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0)];
    st.front = { owner: 1, units: [unit(2, 'mg_rajput_officer', 1)] };
    expect(durgWardOf(st, 0)).toBe(1);
    const hp = st.players[0].hq.hp;
    expect(applyAction(st, { type: 'attack', uid: 2, target: { kind: 'hq', owner: 0 } }).ok).toBe(true);
    expect(st.players[0].hq.hp).toBe(hp - (strikeDamage(st, st.front.units[0]) - 1));
  });

  it('the ward is gone once the walls are taken — and then works for the taker', () => {
    const st = mk();
    st.active = 1;
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0, { hp: 1 })];
    st.players[1].support = [unit(3, 'mg_topkhana', 1)];
    expect(applyAction(st, { type: 'attack', uid: 3, target: { kind: 'unit', owner: 0, uid: 1 } }).ok).toBe(true);
    expect(durgWardOf(st, 0)).toBe(0);
    expect(durgWardOf(st, 1)).toBe(1);
  });

  it('Firangoji on the Rajya line blunts blows on his side\'s Gads; on the Yudhbhumi he does not', () => {
    const st = mk();
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0), unit(2, 'sw_firangoji', 0)];
    expect(gadWardOf(st, 0)).toBe(1);
    const gun = unit(3, 'mg_topkhana', 1);
    expect(strikeDamage(st, gun, st.players[0].support[0])).toBe(4 + 2 - 1);
    st.players[0].support = [st.players[0].support[0]];
    st.front = { owner: 0, units: [unit(2, 'sw_firangoji', 0)] };
    expect(gadWardOf(st, 0)).toBe(0);
  });

  it('siege guns cannot move to the Yudhbhumi', () => {
    const st = mk();
    st.active = 1;
    st.players[1].support = [unit(3, 'mg_topkhana', 1)];
    expect(canMove(st, 1, 3).ok).toBe(false);
  });

  it('siege guns bombard an enemy Gad from the Rajya line, over a Raksha; an ordinary unit cannot', () => {
    const st = mk();
    st.active = 1;
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0), unit(2, 'sw_firangoji', 0)];
    st.players[1].support = [unit(3, 'mg_topkhana', 1), unit(4, 'mg_mansabdar_sawar', 1)];
    expect(canAttack(st, 1, 3, { kind: 'unit', owner: 0, uid: 1 }).ok).toBe(true);
    expect(canAttack(st, 1, 4, { kind: 'unit', owner: 0, uid: 1 }).ok).toBe(false);
    // and the guns may not bombard a soldier on the Rajya line
    expect(canAttack(st, 1, 3, { kind: 'unit', owner: 0, uid: 2 }).ok).toBe(false);
    expect(applyAction(st, { type: 'attack', uid: 3, target: { kind: 'unit', owner: 0, uid: 1 } }).ok).toBe(true);
    expect(st.players[0].support.find(u => u.uid === 1)!.hp).toBe(10 - 5);
  });

  it('the Surang may only be aimed at an enemy Gad, is blunted by Firangoji, and captures a beaten fort', () => {
    const st = mk();
    st.active = 1;
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0, { hp: 4 }), unit(2, 'sw_firangoji', 0)];
    st.players[1].hand = ['mg_surang', 'mg_surang'];
    expect(canPlay(st, 1, 0, { kind: 'unit', owner: 0, uid: 2 }).ok).toBe(false);
    expect(canPlay(st, 1, 0).ok).toBe(false);
    expect(applyAction(st, { type: 'play', handIndex: 0, target: { kind: 'unit', owner: 0, uid: 1 } }).ok).toBe(true);
    // 5 - 1 (Firangoji) = 4: exactly enough
    expect(st.players[1].support.some(u => u.cardId === 'sw_gad_chakan')).toBe(true);
  });

  it('none of it applies outside Swarajya rules', () => {
    const st = mk('yuddh');
    st.players[0].support = [unit(1, 'sw_gad_chakan', 0), unit(2, 'sw_firangoji', 0)];
    expect(durgWardOf(st, 0)).toBe(0);
    expect(gadWardOf(st, 0)).toBe(0);
  });

  it('AI value: the enemy AI uses the Surang and the guns on the walls (a Chakan game)', async () => {
    const { CHAKAN } = await import('../src/campaign/chakan');
    const { aiTurn } = await import('../src/engine/ai');
    let mined = 0, bombarded = 0;
    for (let s = 0; s < 20; s++) {
      const st = CHAKAN.game(s * 7 + 1);
      let k = 0;
      while (!st.over && k++ < 80) aiTurn(st, st.active, 'normal');
      const msgs = st.log.map(l => l.msg);
      if (msgs.some(m => /casts Surang/.test(m))) mined++;
      if (msgs.some(m => /Topkhana attacks Sangramdurg/.test(m))) bombarded++;
    }
    expect(mined).toBeGreaterThan(5);
    expect(bombarded).toBeGreaterThan(10);
  });
});
