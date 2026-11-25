/* Phase 2 step 1 (TASKS.md): the Ganim keyword — "strike and fade" (DESIGN 3.3). After a Ganim
   unit attacks, its owner may pull it back to the Rajya line at no Kosha cost, if there is room.
   It cannot be counter-charged there next turn because it is no longer on the Yudhbhumi. */
import { describe, expect, it } from 'vitest';
import {
  CARDS, aiTurn, applyAction, canFallback, findUnit, newGame, type Keyword, type Unit
} from '../src/engine';

const unit = (uid: number, cardId: string, owner: 0 | 1, atk: number, hp: number, kw: Keyword[] = []): Unit => ({
  uid, cardId, name: cardId, sub: '', glyph: '', empire: 'neutral', atk, hp, maxHp: hp, op: 1,
  range: 'melee', kw, owner, canAct: true, moved: false, attacked: false, smokeBroken: false
});

const repeat = (ids: string[], n: number): string[] => Array.from({ length: n }, () => ids).flat();

const mk = (rules: 'swarajya' | 'yuddh' = 'swarajya') => newGame({
  seed: 1, rules,
  player: { empire: 'swarajya', deck: repeat(['sw_mavla'], 10) },
  enemy: { empire: 'adilshahi', deck: repeat(['as_hasham'], 10) }
});

describe('Ganim keyword (DESIGN 3.3)', () => {
  it('the four vertical-slice Ganim units carry the keyword', () => {
    for (const id of ['sw_shivaji', 'sw_mavla', 'sw_havaldar', 'sw_shiledar']) {
      expect(CARDS[id]?.kw, id).toContain('ganim');
    }
    expect(CARDS['sw_bargir']?.kw ?? []).not.toContain('ganim');
  });

  it('cannot fall back before it has attacked', () => {
    const st = mk();
    st.front.owner = 0; st.front.units = [unit(100, 'sw_mavla', 0, 1, 2, ['ganim'])];
    expect(canFallback(st, 0, 100).ok).toBe(false);
    expect(applyAction(st, { type: 'fallback', uid: 100 }).ok).toBe(false);
  });

  it('cannot fall back without the Ganim keyword', () => {
    const st = mk();
    const u = unit(101, 'sw_bargir', 0, 2, 2);
    u.attacked = true;
    st.front.owner = 0; st.front.units = [u];
    expect(canFallback(st, 0, 101).ok).toBe(false);
  });

  it('cannot fall back if the Rajya line is full', () => {
    const st = mk();
    const u = unit(102, 'sw_mavla', 0, 1, 2, ['ganim']);
    u.attacked = true;
    st.front.owner = 0; st.front.units = [u];
    st.players[0].support = [0, 1, 2, 3].map(i => unit(200 + i, 'sw_bargir', 0, 2, 2));
    expect(canFallback(st, 0, 102).ok).toBe(false);
  });

  it('is a Swarajya rule only — the same position under yuddh rules cannot fall back', () => {
    const st = mk('yuddh');
    const u = unit(103, 'sw_mavla', 0, 1, 2, ['ganim']);
    u.attacked = true;
    st.front.owner = 0; st.front.units = [u];
    expect(canFallback(st, 0, 103).ok).toBe(false);
  });

  it('after attacking, falls back to the Rajya line at no Kosha cost', () => {
    const st = mk();
    const u = unit(104, 'sw_mavla', 0, 1, 2, ['ganim']);
    u.attacked = true;
    st.front.owner = 0; st.front.units = [u];
    st.players[0].kosha = 0; // free: must not be blocked by an empty treasury
    expect(applyAction(st, { type: 'fallback', uid: 104 }).ok).toBe(true);
    expect(st.players[0].kosha).toBe(0);
    expect(st.front.units.length).toBe(0);
    expect(st.front.owner).toBeNull(); // the Yudhbhumi is given up, not just vacated by this one unit
    const found = findUnit(st, 0, 104);
    expect(found!.line).toBe('support');
    expect(st.events.some(e => e.t === 'fallback' && e.owner === 0 && e.uid === 104)).toBe(true);
  });

  it('falling back does not empty the Yudhbhumi if another unit still holds it', () => {
    const st = mk();
    const a = unit(105, 'sw_mavla', 0, 1, 2, ['ganim']);
    a.attacked = true;
    const b = unit(106, 'sw_bargir', 0, 2, 2);
    st.front.owner = 0; st.front.units = [a, b];
    applyAction(st, { type: 'fallback', uid: 105 });
    expect(st.front.owner).toBe(0);
    expect(st.front.units.map(x => x.uid)).toEqual([106]);
  });

  it('once back on the Rajya line, it cannot attack or move again the same turn', () => {
    const st = mk();
    const u = unit(107, 'sw_mavla', 0, 1, 2, ['ganim']);
    u.attacked = true;
    st.front.owner = 0; st.front.units = [u];
    applyAction(st, { type: 'fallback', uid: 107 });
    expect(applyAction(st, { type: 'move', uid: 107 }).ok).toBe(false); // attacked still true (Yuddh rule)
  });

  it('the AI value: a Ganim unit ready to attack ends the turn back on the Rajya line, not on the front', () => {
    const st = mk();
    const u = unit(108, 'sw_mavla', 0, 1, 2, ['ganim']);
    st.front.owner = 0; st.front.units = [u];
    st.players[0].hand = []; st.players[0].kosha = 10; st.players[0].maxKosha = 10;
    st.players[1].support = []; // nothing guards the enemy Durg, so it will want to strike it
    aiTurn(st, 0, 'normal');
    // it attacked (the Durg took damage) and — being Ganim — faded back to safety rather than
    // standing on the Yudhbhumi open to a counter-charge next turn
    expect(st.players[1].hq.hp).toBeLessThan(st.players[1].hq.maxHp);
    expect(st.front.units.some(x => x.uid === 108)).toBe(false);
    expect(st.players[0].support.some(x => x.uid === 108)).toBe(true);
  });

  it("the AI value exception: the sole defender holds the ground if the enemy has massed a second wave", () => {
    const st = mk();
    const u = unit(109, 'sw_mavla', 0, 1, 2, ['ganim']);
    u.attacked = true; // already struck this turn; only the fallback decision is left to make
    st.front.owner = 0; st.front.units = [u];
    st.players[0].hand = []; st.players[0].kosha = 10; st.players[0].maxKosha = 10;
    st.players[1].support = [unit(300, 'as_hasham', 1, 2, 3), unit(301, 'as_hasham', 1, 2, 3)];
    aiTurn(st, 0, 'normal');
    expect(st.front.units.some(x => x.uid === 109)).toBe(true); // stayed to hold the ground
  });
});
