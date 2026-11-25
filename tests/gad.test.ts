/* Phase 1 step 2 (TASKS.md): the Gad card type (DESIGN 3.1) and the `capture` objective
   (DESIGN 3.6). A Gad is played to the Rajya line, has defence and no attack, cannot move or
   attack, and cannot be destroyed outright — only beaten down and captured. */
import { describe, expect, it } from 'vitest';
import {
  CARDS, applyAction, canAttack, canMove, findUnit, isGadCard, newGame, type Unit
} from '../src/engine';

const unit = (uid: number, cardId: string, owner: 0 | 1, atk: number, hp: number, kw: ('veg' | 'raksha' | 'dhuan')[] = []): Unit => ({
  uid, cardId, name: cardId, sub: '', glyph: '', empire: 'neutral', atk, hp, maxHp: hp, op: 1,
  range: 'melee', kw, owner, canAct: true, moved: false, attacked: false, smokeBroken: false
});

const repeat = (ids: string[], n: number): string[] => Array.from({ length: n }, () => ids).flat();

const mk = (objective?: Parameters<typeof newGame>[0]['objective']) => newGame({
  seed: 1, rules: 'swarajya',
  player: { empire: 'swarajya', deck: repeat(['sw_gad_torna', 'sw_gad_rajgad', 'sw_gad_pratapgad'], 10) },
  enemy: { empire: 'adilshahi', deck: repeat(['as_hasham'], 10) },
  objective
});

describe('Gad card type (DESIGN 3.1)', () => {
  it('CARDS knows the four vertical-slice Gads', () => {
    for (const id of ['sw_gad_torna', 'sw_gad_rajgad', 'sw_gad_pratapgad', 'as_gad_torna_held']) {
      expect(CARDS[id]?.type, id).toBe('gad');
      expect(isGadCard(id), id).toBe(true);
    }
    expect(isGadCard('sw_bargir')).toBe(false);
  });

  it('is played to the Rajya line, takes a slot, and cannot act', () => {
    const st = mk();
    st.players[0].hand = ['sw_gad_torna'];
    st.players[0].kosha = 10;
    expect(applyAction(st, { type: 'play', handIndex: 0 }).ok).toBe(true);
    const u = st.players[0].support.find(x => x.cardId === 'sw_gad_torna')!;
    expect(u).toBeTruthy();
    expect(u.hp).toBe(8);
    expect(u.canAct).toBe(false);
    expect(st.front.units.length).toBe(0);
  });

  it('a full Rajya line blocks playing another Gad, the same as a unit', () => {
    const st = mk();
    st.players[0].support = [0, 1, 2, 3].map(i => unit(100 + i, 'sw_bargir', 0, 2, 2));
    st.players[0].hand = ['sw_gad_torna'];
    st.players[0].kosha = 10;
    expect(applyAction(st, { type: 'play', handIndex: 0 }).ok).toBe(false);
  });

  it('cannot move to the Yudhbhumi', () => {
    const st = mk();
    st.players[0].support = [unit(200, 'sw_gad_torna', 0, 0, 8)];
    expect(canMove(st, 0, 200).ok).toBe(false);
    expect(applyAction(st, { type: 'move', uid: 200 }).ok).toBe(false);
  });

  it('cannot attack', () => {
    const st = mk();
    st.front.owner = 0; st.front.units = [unit(300, 'sw_gad_torna', 0, 0, 8)];
    st.players[1].support = [unit(301, 'as_hasham', 1, 2, 3)];
    expect(canAttack(st, 0, 300, { kind: 'unit', owner: 1, uid: 301 }).ok).toBe(false);
  });

  it('startTurn never makes a Gad able to act', () => {
    const st = mk();
    st.players[0].support = [unit(400, 'sw_gad_torna', 0, 0, 8)];
    st.players[0].support[0].canAct = false;
    applyAction(st, { type: 'end' }); // -> player 1's turn
    applyAction(st, { type: 'end' }); // -> back to player 0: startTurn(0) runs
    expect(findUnit(st, 0, 400)!.unit.canAct).toBe(false);
  });

  it('is never caught by a Vighna Yantra trap on deploy (immune to "destroy" orders)', () => {
    const st = mk();
    st.players[1].yantras.push({ cardId: 'y_vighna', uid: 9999 });
    st.players[0].hand = ['sw_gad_torna'];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'play', handIndex: 0 });
    expect(st.players[0].support.some(u => u.cardId === 'sw_gad_torna')).toBe(true);
    expect(st.players[1].yantras.length).toBe(1); // the trap is still set: it never fired
  });

  it('beaten to 0 health in combat, it flips to the attacker at a third of its defence (rounded up)', () => {
    const st = mk();
    st.players[0].support = [unit(500, 'sw_gad_torna', 0, 0, 8)]; // 8 hp -> captured at ceil(8/3)=3
    st.front.owner = 1; st.front.units = [unit(501, 'as_hasham', 1, 9, 3)];
    st.players[1].kosha = 10;
    st.active = 1;
    applyAction(st, { type: 'attack', uid: 501, target: { kind: 'unit', owner: 0, uid: 500 } });
    expect(findUnit(st, 0, 500)).toBeNull(); // gone from the original side
    const captured = findUnit(st, 1, 500);
    expect(captured).toBeTruthy();
    expect(captured!.line).toBe('support');
    expect(captured!.unit.hp).toBe(3);
    expect(captured!.unit.maxHp).toBe(3);
    expect(captured!.unit.owner).toBe(1);
    expect(st.players[0].discard).not.toContain('sw_gad_torna'); // captured, not destroyed/discarded
    expect(st.events.some(e => e.t === 'capture' && e.cardId === 'sw_gad_torna' && e.owner === 1 && e.from === 0)).toBe(true);
  });

  it('a Gad with no standing benefit can still be captured (as_gad_torna_held)', () => {
    const st = mk();
    st.players[1].support = [unit(600, 'as_gad_torna_held', 1, 0, 9)];
    st.front.owner = 0; st.front.units = [unit(601, 'sw_bargir', 0, 9, 2, ['veg'])];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'attack', uid: 601, target: { kind: 'unit', owner: 1, uid: 600 } });
    expect(findUnit(st, 0, 600)).toBeTruthy();
    expect(findUnit(st, 0, 600)!.unit.hp).toBe(3); // ceil(9/3)
  });

  it("Torna (kosha1): yields 1 Kosha at the start of its owner's turn", () => {
    const st = mk();
    st.players[0].support = [unit(700, 'sw_gad_torna', 0, 0, 8)];
    applyAction(st, { type: 'end' }); // player 1's turn
    applyAction(st, { type: 'end' }); // back to player 0: startTurn fills to maxKosha, then +1 from the fort
    expect(st.players[0].kosha).toBe(st.players[0].maxKosha + 1);
  });

  it('Rajgad (drawEvery2): an extra card only on even turns', () => {
    const st = mk();
    st.players[0].support = [unit(800, 'sw_gad_rajgad', 0, 0, 10)];
    const handLen = () => st.players[0].hand.length;
    const before = handLen();
    applyAction(st, { type: 'end' }); // turn 1 -> player 1 (draws)
    applyAction(st, { type: 'end' }); // -> player 0, turn becomes 2 (even): +1 base, +1 from Rajgad
    expect(handLen()).toBe(before + 2);
    const afterTurn2 = handLen();
    applyAction(st, { type: 'end' }); // turn 2 -> player 1 (draws)
    applyAction(st, { type: 'end' }); // -> player 0, turn becomes 3 (odd): +1 base only
    expect(handLen()).toBe(afterTurn2 + 1);
  });

  it('Pratapgad (rakshaHp): a Raksha unit already on the board gets +1 health when it is raised', () => {
    const st = mk();
    st.players[0].support = [unit(900, 'as_gaja', 0, 4, 6, ['raksha'])];
    st.players[0].hand = ['sw_gad_pratapgad'];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'play', handIndex: 0 });
    const raksha = findUnit(st, 0, 900)!.unit;
    expect([raksha.hp, raksha.maxHp]).toEqual([7, 7]);
  });

  it('Pratapgad (rakshaHp): a Raksha unit raised afterwards is born with the bonus', () => {
    const st = mk();
    st.players[0].support = [unit(1000, 'sw_gad_pratapgad', 0, 0, 9)];
    st.players[0].hand = ['as_gaja'];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'play', handIndex: 0 });
    const raksha = st.players[0].support.find(u => u.cardId === 'as_gaja')!;
    expect([raksha.hp, raksha.maxHp]).toEqual([7, 7]);
  });

  it('Pratapgad (rakshaHp): capturing it moves the bonus from the old side to the new', () => {
    // a direct-damage order, not a Yudhbhumi attack: a Raksha unit in the same Rajya line would
    // otherwise shield the Gad from a melee/ranged attack (the general guard rule), which is not
    // what this case is about — s_agni (Agni Baan) is unaffected by that rule, like any order.
    const st = mk();
    st.players[0].support = [
      unit(1100, 'sw_gad_pratapgad', 0, 0, 5), // wounded to exactly the 5 damage Agni Baan deals
      unit(1101, 'as_gaja', 0, 4, 7, ['raksha']) // carrying the +1, as if born while Pratapgad stood
    ];
    st.players[1].support = [unit(1103, 'as_gaja', 1, 4, 6, ['raksha'])];
    st.players[1].hand = ['s_agni'];
    st.players[1].kosha = 10;
    st.active = 1;
    applyAction(st, { type: 'play', handIndex: 0, target: { kind: 'unit', owner: 0, uid: 1100 } });
    expect(findUnit(st, 0, 1100)).toBeNull();
    expect(findUnit(st, 1, 1100)).toBeTruthy(); // captured
    expect(findUnit(st, 0, 1101)!.unit.hp).toBe(6); // lost the bonus with the fort
    expect(findUnit(st, 1, 1103)!.unit.hp).toBe(7); // the new holder gains it
  });
});

describe("the `capture` objective (DESIGN 3.6)", () => {
  it('player 0 wins the instant it holds every listed fort', () => {
    const st = mk({ type: 'capture', forts: ['as_gad_torna_held'] });
    st.players[1].support = [unit(1200, 'as_gad_torna_held', 1, 0, 9)];
    st.front.owner = 0; st.front.units = [unit(1201, 'sw_bargir', 0, 9, 2, ['veg'])];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'attack', uid: 1201, target: { kind: 'unit', owner: 1, uid: 1200 } });
    expect(st.over).toBe(true);
    expect(st.winner).toBe(0);
    expect(st.winReason).toBe('capture');
  });

  it('is not won while part of a multi-fort list is still held by the other side', () => {
    const st = mk({ type: 'capture', forts: ['as_gad_torna_held', 'sw_gad_rajgad'] });
    st.players[1].support = [
      unit(1300, 'as_gad_torna_held', 1, 0, 9),
      unit(1301, 'sw_gad_rajgad', 1, 0, 10)
    ];
    st.front.owner = 0; st.front.units = [unit(1302, 'sw_bargir', 0, 9, 2, ['veg'])];
    st.players[0].kosha = 10;
    applyAction(st, { type: 'attack', uid: 1302, target: { kind: 'unit', owner: 1, uid: 1300 } });
    expect(st.over).toBe(false); // only one of the two forts taken
  });

  it('the defender wins if the turn limit passes uncaptured', () => {
    const st = mk({ type: 'capture', forts: ['as_gad_torna_held'], turns: 1 });
    st.players[1].support = [unit(1400, 'as_gad_torna_held', 1, 0, 50)]; // too tough to take turn 1
    let guard = 0;
    while (!st.over && guard++ < 10) applyAction(st, { type: 'end' });
    expect(st.over).toBe(true);
    expect(st.winner).toBe(1);
    expect(st.winReason).toBe('capture');
  });
});
