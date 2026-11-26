/* ============================================================
   The balance harness. Skipped by default — `npm test` never
   runs it and it never blocks a commit. Run it by hand whenever
   a chapter's numbers need checking:

       BALANCE=1 npx vitest run tests/balance.harness.test.ts --reporter=verbose

   What it does: plays each scenario hundreds of times with the
   built-in AI on both sides (same aiTurn() the in-game AI uses),
   a different seed each time, and reports the player's win rate.
   No browser, no clicking — just the rules engine run to the end,
   over and over, fast. CLAUDE.md's Gate 1 band is 45-70% player
   wins; this is how you check a chapter against that band before
   asking Pon to playtest it by hand.

   To check a chapter you haven't added here yet: import its
   Scenario (e.g. `import { TORNA } from '../src/campaign/torna'`)
   and add `it('Chapter name', () => { report(TORNA.title, s => TORNA.game(s)); })`.

   To try a hypothetical deck or card change before committing to
   it: build a GameState by hand with newGame({...}) instead of
   TORNA.game() — pass a different deck array, or mutate a CARDS
   entry in-memory for the duration of one measurement. See
   LOG.md, 25 Nov 2026 session 8 (balance pass), for a worked
   example of both.
   ============================================================ */
import { describe, it } from 'vitest';
import { aiTurn, type GameState } from '../src/engine';
import { TORNA } from '../src/campaign/torna';
import { JAOLI } from '../src/campaign/jaoli';
import { PRATAPGAD } from '../src/campaign/pratapgad';
import { KOLHAPUR } from '../src/campaign/kolhapur';
import { PAVANKHIND } from '../src/campaign/pavankhind';

const BAND: [number, number] = [45, 70]; // Gate 1 band, CLAUDE.md

function playOut(st: GameState) {
  let k = 0;
  while (!st.over && k++ < 500) aiTurn(st, st.active, 'normal');
  return { winner: st.winner, turns: st.turn, timedOut: k >= 500 };
}

function report(label: string, mk: (seed: number) => GameState, n = 300) {
  let p = 0, e = 0, d = 0, t = 0;
  const turns: number[] = [];
  for (let s = 0; s < n; s++) {
    const r = playOut(mk(s * 13 + 1));
    if (r.timedOut) t++; else if (r.winner === 0) p++; else if (r.winner === 1) e++; else d++;
    turns.push(r.turns);
  }
  turns.sort((a, b) => a - b);
  const pct = (p / n) * 100;
  const inBand = pct >= BAND[0] && pct <= BAND[1];
  console.log(
    `${label}: player ${pct.toFixed(1)}% | enemy ${((e / n) * 100).toFixed(1)}% | draw ${d} | timeout ${t} | ` +
    `median turn ${turns[Math.floor(n / 2)]} | ${inBand ? 'IN BAND' : 'OUT OF BAND (target 45-70%)'}`
  );
  return pct;
}

describe.skipIf(!process.env.BALANCE)('balance harness (run with BALANCE=1)', () => {
  it('Torna', () => { report('Torna', s => TORNA.game(s)); });
  it('Jaoli', () => { report('Jaoli', s => JAOLI.game(s)); });
  it('Kolhapur', () => { report('Kolhapur', s => KOLHAPUR.game(s)); });
  it('Pavan Khind', () => { report('Pavan Khind', s => PAVANKHIND.game(s)); });
  it('Pratapgad', () => { report('Pratapgad', s => PRATAPGAD.game(s)); });
});
