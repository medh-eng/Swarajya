/* Phase 1 step 5: a light sanity check on the three vertical-slice scenarios (ch00_maval,
   ch01_torna, ch04_pratapgad) — that each builds a playable game from its own deck and setup,
   and that ch01_torna's capture objective and preset fort are wired as DESIGN 3.1/3.6 describe.
   This is scene-building content, not a new engine mechanic, so it is a sanity test rather than
   a rules test (the Gad/capture mechanics themselves are already covered by tests/gad.test.ts). */
import { describe, expect, it } from 'vitest';
import { findUnit } from '../src/engine';
import { MAVAL_TUTORIAL } from '../src/campaign/mavalTutorial';
import { TORNA } from '../src/campaign/torna';
import { JAOLI } from '../src/campaign/jaoli';
import { PRATAPGAD } from '../src/campaign/pratapgad';
import { CARDS } from '../src/engine/cards';
import { scenarioById, SWARAJYA_CAMPAIGN } from '../src/campaign/campaign';

describe('the Swarajya vertical slice (Phase 1 step 5)', () => {
  it('every scenario builds a game from a non-empty deck on both sides', () => {
    for (const sc of [MAVAL_TUTORIAL, TORNA, JAOLI, PRATAPGAD]) {
      expect(sc.playerDeck.length).toBeGreaterThan(0);
      expect(sc.enemyDeck.length).toBeGreaterThan(0);
      const st = sc.game(1);
      expect(st.over).toBe(false);
      expect(st.rules).toBe('swarajya');
    }
  });

  it('chains ch00_maval → ch01_torna → ch03_jaoli → ch04_pratapgad by nextId', () => {
    expect(MAVAL_TUTORIAL.nextId).toBe('ch01_torna');
    expect(TORNA.nextId).toBe('ch03_jaoli');
    expect(JAOLI.nextId).toBe('ch04_pratapgad');
    expect(scenarioById('ch03_jaoli')).toBe(JAOLI);
    expect(PRATAPGAD.nextId).toBeUndefined();
    expect(scenarioById('ch01_torna')).toBe(TORNA);
    expect(scenarioById('ch04_pratapgad')).toBe(PRATAPGAD);
  });

  it('is reachable as its own campaign, in chapter order', () => {
    expect(SWARAJYA_CAMPAIGN.map(n => n.scenario.id)).toEqual(['ch00_maval', 'ch01_torna', 'ch03_jaoli', 'ch04_pratapgad']);
  });

  it('ch01_torna starts with Bijapur’s fort already on the board, waiting to be captured', () => {
    const st = TORNA.game(1);
    expect(st.objective).toEqual({ type: 'capture', forts: ['as_gad_torna_held'], turns: 14 });
    const held = findUnit(st, 1, st.players[1].support[0]?.uid ?? -1);
    expect(held?.unit.cardId).toBe('as_gad_torna_held');
  });

  it('ch04_pratapgad starts with Afzal Khan already on the Yudhbhumi', () => {
    const st = PRATAPGAD.game(1);
    expect(st.front.owner).toBe(1);
    expect(st.front.units.some(u => u.cardId === 'as_afzal_khan')).toBe(true);
  });

  it('ch03_jaoli: the Mores fight as their own faction, and every id the screens draw is a loaded card', () => {
    const st = JAOLI.game(1);
    expect(st.players[1].empire).toBe('jaoli');
    expect(st.objective).toEqual({ type: 'destroy' });
    // cardFace() looks these up in the live CARDS table (STATE.md lesson 4) — a draft-only id would crash the screen
    const node = SWARAJYA_CAMPAIGN.find(n => n.scenario.id === 'ch03_jaoli')!;
    for (const id of [JAOLI.heroCard, JAOLI.defeatCard, node.face, ...JAOLI.playerDeck, ...JAOLI.enemyDeck]) expect(CARDS[id], id).toBeDefined();
    expect(JAOLI.playerDeck).toContain('sw_shivaji');
  });
});
