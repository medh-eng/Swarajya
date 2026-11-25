/* Phase 1 step 5 playtest: the Swarajya vertical slice, driven the way YUDDH's own
   tests/e2e/playtest.cjs drives The First Throne (real mouse drags in headless Chromium,
   reading window.__yuddhButtons / window.__yuddh, which are content-agnostic engine hooks) —
   but following THIS game's own title and briefing labels, since "Card gallery", "To battle"
   and the rest of YUDDH's button text do not exist here (D-17: that content is scaffolding,
   not reachable from the Swarajya title).
   Usage: node tests/e2e/swarajyaPlaytest.cjs <url> <outdir> [width height] */
const { chromium } = require(process.env.PW || 'playwright');
const [url = 'http://localhost:4173/', out = '.', W = '1600', H = '900'] = process.argv.slice(2);

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME, args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  try {
    await run(b);
  } finally {
    await b.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });

async function run(b) {
  const p = await b.newPage({ viewport: { width: +W, height: +H } });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(url); await p.waitForTimeout(2000);
  const shot = n => p.screenshot({ path: `${out}/${n}.png` });

  const press = async (label, nth = 0) => {
    let bs = [];
    for (let i = 0; i < 40; i++) { bs = (await p.evaluate(() => window.__yuddhButtons())).filter(x => x.label === label); if (bs[nth]) break; await p.waitForTimeout(250); }
    if (!bs[nth]) throw new Error(`no button "${label}" (have: ${(await p.evaluate(() => window.__yuddhButtons())).map(x => x.label).join(', ')})`);
    await p.mouse.click(bs[nth].x, bs[nth].y);
  };
  const info = () => p.evaluate(() => { const y = window.__yuddh; const st = y.state(); return { active: st.active, over: st.over, winner: st.winner, winReason: st.winReason, turn: st.turn, busy: y.busy(), hq: st.players.map(q => q.hq.hp) }; });
  const idle = async () => { for (let i = 0; i < 200; i++) { const y = await info(); if (!y.busy && (y.active === 0 || y.over)) return y; await p.waitForTimeout(250); } return info(); };
  const drag = async (f, t) => {
    if (f.y > +H * 0.7) { await p.mouse.move(f.x, +H * 0.45); await p.waitForTimeout(350); }
    await p.mouse.move(f.x, f.y); await p.waitForTimeout(300); await p.mouse.down();
    for (let i = 1; i <= 10; i++) await p.mouse.move(f.x + (t.x - f.x) * i / 10, f.y + (t.y - f.y) * i / 10);
    await p.waitForTimeout(80); await p.mouse.up();
  };

  await shot('01-title');
  await press('Learn to play');
  // the title stays up while the battle's paintings (and the drawn-placeholder battlefield, step 4) load
  await p.waitForFunction(() => !!window.__yuddh, null, { timeout: 60000 });
  await p.waitForTimeout(1000); await shot('02-briefing-ch00');
  await press('Begin training');
  await p.waitForTimeout(2600); await shot('03-dealt');

  // play a handful of turns: whatever move is offered first, else end the turn
  let last = await info();
  for (let turn = 0; turn < 24 && !last.over; turn++) {
    const moves = await p.evaluate(() => window.__yuddh.moves());
    if (moves.length) await drag(moves[0].from, moves[0].to);
    else { const e = await p.evaluate(() => window.__yuddh.endTurn()); await p.mouse.click(e.x, e.y); }
    await p.waitForTimeout(500);
    last = await idle();
  }
  await shot('04-ch00-result');
  console.log('ch00_maval result:', JSON.stringify(last));

  if (errs.length) { console.error('console/page errors:', errs); process.exitCode = 1; }
  else console.log('no console or page errors');
}
