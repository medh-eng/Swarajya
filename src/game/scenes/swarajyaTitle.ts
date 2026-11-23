/* ============================================================
   SWARAJYA — placeholder title (Phase 0).
   Drawn entirely in code until Pon's title painting arrives:
   a dawn sky over the Sahyadri, a hill fort on the highest ridge,
   and the title. Replace the drawn landscape with the painting in
   Phase 1 (see TASKS.md); keep the lettering and its layout.
   ============================================================ */
import { Container, Graphics, Text, Ticker } from 'pixi.js';
import gsap from 'gsap';
import { FONT_DEVA, FONT_SERIF, FONT_TITLE, INK } from '../theme';
import { view } from '../view';
import type { Scene, Stage } from '../stage';

/** a jagged ridge line across the width: `seed` varies the shape, `base` is the height of the valley floor */
function ridge(W: number, H: number, top: number, base: number, seed: number): number[] {
  const pts: number[] = [0, H, 0, base];
  const n = 14;
  for (let i = 0; i <= n; i++) {
    const x = (W * i) / n;
    const wave = Math.sin(i * 1.7 + seed) * 0.5 + Math.sin(i * 0.63 + seed * 2.1) * 0.5;
    pts.push(x, top + (base - top) * (0.5 - wave * 0.5));
  }
  pts.push(W, H);
  return pts;
}

/** a colour part-way along a list of colour stops (t from 0 to 1) */
function blend(stops: number[], t: number): number {
  const f = t * (stops.length - 1), i = Math.min(stops.length - 2, Math.floor(f)), u = f - i;
  const a = stops[i], b = stops[i + 1];
  const ch = (sh: number) => Math.round(((a >> sh) & 255) * (1 - u) + ((b >> sh) & 255) * u) << sh;
  return ch(16) | ch(8) | ch(0);
}

export function swarajyaTitleScene(stage: Stage): Scene {
  const s: Scene = new Container();
  const sky = new Graphics();
  const sun = new Graphics();
  const far = new Graphics();
  const mid = new Graphics();
  const fort = new Graphics();
  const near = new Graphics();
  s.addChild(sky, sun, far, mid, fort, near);
  [sky, sun, far, mid, fort, near].forEach(g => { g.eventMode = 'none'; });

  const deva = new Text({ text: 'स्वराज्य', style: { fontFamily: FONT_DEVA, fontSize: 96, fill: INK.goldPale, stroke: { color: 0x1a0d05, width: 5 } } });
  const title = new Text({ text: 'YUDDH: SWARAJYA', style: { fontFamily: FONT_TITLE, fontSize: 104, fontWeight: '700', letterSpacing: 14, fill: INK.goldPale, stroke: { color: 0x1a0d05, width: 6 }, dropShadow: { color: 0x000000, blur: 16, distance: 0, alpha: 0.85 } } });
  const sub = new Text({ text: 'A CARD GAME OF CHHATRAPATI SHIVAJI MAHARAJ’S WARS', style: { fontFamily: FONT_TITLE, fontSize: 26, fontWeight: '700', letterSpacing: 6, fill: INK.gold, stroke: { color: 0x1a0d05, width: 4 } } });
  const soon = new Text({ text: 'Coming soon', style: { fontFamily: FONT_SERIF, fontSize: 40, fontStyle: 'italic', fontWeight: '600', fill: INK.cream, stroke: { color: 0x000000, width: 4 } } });
  const note = new Text({ text: 'Phase 0 build · the YUDDH engine under a new banner', style: { fontFamily: FONT_SERIF, fontSize: 20, fontStyle: 'italic', fill: INK.cream, stroke: { color: 0x000000, width: 3 } } });
  [deva, title, sub, soon, note].forEach(t => { t.anchor.set(0.5); t.eventMode = 'none'; });
  const rule = new Graphics();
  rule.eventMode = 'none';
  s.addChild(deva, title, sub, rule, soon, note);

  // birds wheeling over the ridge
  const birds = new Container();
  birds.eventMode = 'none';
  s.addChild(birds);
  const flock: { g: Graphics; vx: number; ph: number; y0: number }[] = [];
  for (let i = 0; i < 7; i++) {
    const g = new Graphics().moveTo(-9, 0).quadraticCurveTo(-4, -6, 0, 0).quadraticCurveTo(4, -6, 9, 0).stroke({ width: 2, color: 0x2a1a10, alpha: 0.75 });
    birds.addChild(g);
    flock.push({ g, vx: 0.35 + Math.random() * 0.3, ph: Math.random() * 6, y0: 0 });
  }

  function layout(): void {
    const W = view.w, H = view.h, ph = view.phone;
    // dawn: deep indigo above, saffron at the horizon
    const stops = [0x1c1630, 0x3a2340, 0x6b2f3a, 0xa8452f, 0xd9772f, 0xf0b25a];
    sky.clear();
    const hz = H * 0.62, n = 48;
    for (let i = 0; i < n; i++) sky.rect(0, (hz * i) / n, W, hz / n + 1).fill(blend(stops, i / (n - 1)));
    sky.rect(0, hz, W, H - hz).fill(0xf0b25a);
    sun.clear().circle(W * 0.5, hz + 10, ph ? 120 : 150).fill({ color: 0xffd98a, alpha: 0.9 })
      .circle(W * 0.5, hz + 10, ph ? 220 : 270).fill({ color: 0xffc46a, alpha: 0.18 });
    far.clear().poly(ridge(W, H, H * 0.52, H * 0.66, 1.3)).fill(0x6a3a3c);
    mid.clear().poly(ridge(W, H, H * 0.6, H * 0.76, 4.1)).fill(0x40242c);
    // a hill fort on the near crest: walls, two bastions and a flagstaff (drawn at the origin, then placed)
    fort.clear()
      .poly([-230, 400, -150, 30, -60, -10, 70, -20, 170, 20, 260, 400]).fill(0x24141a)
      .rect(-110, -64, 200, 56).fill(0x24141a)
      .roundRect(-132, -92, 46, 86, 8).fill(0x24141a)
      .roundRect(70, -92, 46, 86, 8).fill(0x24141a)
      .rect(-8, -170, 4, 110).fill(0x24141a)
      .poly([-4, -170, 52, -156, -4, -140]).fill(0xe07a1f);
    for (let i = 0; i < 9; i++) fort.rect(-108 + i * 22, -74, 12, 10).fill(0x24141a);
    fort.scale.set(ph ? 0.72 : 1);
    fort.position.set(W * (ph ? 0.8 : 0.72), H * (ph ? 0.76 : 0.7));
    near.clear().poly(ridge(W, H, H * 0.8, H * 0.92, 7.7)).fill(0x1a0f12);

    const ty = ph ? 250 : 300;
    deva.position.set(W / 2, ty - (ph ? 120 : 140));
    title.style.fontSize = ph ? 92 : 104; title.position.set(W / 2, ty);
    sub.style.fontSize = ph ? 24 : 26; sub.position.set(W / 2, ty + (ph ? 80 : 92));
    const ry = ty + (ph ? 124 : 140);
    rule.clear().moveTo(W / 2 - 300, ry).lineTo(W / 2 + 300, ry).stroke({ width: 1.5, color: INK.gold, alpha: 0.85 })
      .poly([W / 2, ry - 8, W / 2 + 8, ry, W / 2, ry + 8, W / 2 - 8, ry]).fill(INK.gold);
    soon.position.set(W / 2, ry + (ph ? 70 : 80));
    note.position.set(W / 2, H - (ph ? 34 : 40));
    flock.forEach((b, i) => { b.y0 = H * (0.36 + (i % 3) * 0.05); b.g.position.set((W * i) / flock.length, b.y0); });
  }
  layout();

  const tick = (t: Ticker) => {
    const W = view.w;
    for (const b of flock) {
      b.ph += 0.02 * t.deltaTime;
      b.g.x += b.vx * t.deltaTime;
      b.g.y = b.y0 + Math.sin(b.ph) * 12;
      b.g.scale.y = 0.7 + Math.abs(Math.sin(b.ph * 3)) * 0.5;
      if (b.g.x > W + 20) b.g.x = -20;
    }
  };
  s.relayout = layout;
  s.enter = () => {
    stage.setBackdrop(null);
    Ticker.shared.add(tick);
    gsap.from([deva, title, sub], { y: '+=30', alpha: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' });
    gsap.from([soon, note], { alpha: 0, duration: 1, delay: 0.9 });
  };
  s.leave = () => { Ticker.shared.remove(tick); };
  return s;
}
