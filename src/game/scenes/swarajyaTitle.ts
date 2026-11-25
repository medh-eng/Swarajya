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
import { makeButton } from '../ui/button';
import { battlesWon } from '../../campaign/campaign';
import { MAVAL_TUTORIAL } from '../../campaign/mavalTutorial';
import { getLang, pick, toggleLang } from '../../i18n';
import type { Scene, Stage } from '../stage';

/** Phase 1 step 5: the title now leads somewhere — the coached tutorial for a first-time
    player, the campaign for a returning one, mirroring YUDDH's own title screen. */
export interface TitleNav { tutorial(): void; campaign(): void }

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

export function swarajyaTitleScene(stage: Stage, go: TitleNav): Scene {
  const s: Scene = new Container();
  const sky = new Graphics();
  const sun = new Graphics();
  const far = new Graphics();
  const mid = new Graphics();
  const fort = new Graphics();
  const near = new Graphics();
  s.addChild(sky, sun, far, mid, fort, near);
  [sky, sun, far, mid, fort, near].forEach(g => { g.eventMode = 'none'; });

  // Phase 1 step 8 (TASKS.md): the title's own actionable text switches with the language toggle
  // below; the Marathi here is unreviewed (src/i18n.ts) pending a trusted reader (Q-05).
  const deva = new Text({ text: 'स्वराज्य', style: { fontFamily: FONT_DEVA, fontSize: 96, fill: INK.goldPale, stroke: { color: 0x1a0d05, width: 5 } } });
  const title = new Text({ text: 'YUDDH: SWARAJYA', style: { fontFamily: FONT_TITLE, fontSize: 104, fontWeight: '700', letterSpacing: 14, fill: INK.goldPale, stroke: { color: 0x1a0d05, width: 6 }, dropShadow: { color: 0x000000, blur: 16, distance: 0, alpha: 0.85 } } });
  const sub = new Text({ text: pick('A CARD GAME OF CHHATRAPATI SHIVAJI MAHARAJ’S WARS', 'छत्रपती शिवाजी महाराजांच्या लढायांचा पत्त्यांचा खेळ'), style: { fontFamily: FONT_DEVA, fontSize: 26, fontWeight: '700', letterSpacing: getLang() === 'mr' ? 1 : 6, fill: INK.gold, stroke: { color: 0x1a0d05, width: 4 } } });
  const soon = new Text({ text: pick('Act I · The Rebel', 'अंक १ · बंडखोर'), style: { fontFamily: getLang() === 'mr' ? FONT_DEVA : FONT_SERIF, fontSize: 40, fontStyle: getLang() === 'mr' ? 'normal' : 'italic', fontWeight: '600', fill: INK.cream, stroke: { color: 0x000000, width: 4 } } });
  const note = new Text({ text: pick('Phase 1 vertical slice · the Maval to Pratapgad', 'पहिला टप्पा · मावळ ते प्रतापगड'), style: { fontFamily: getLang() === 'mr' ? FONT_DEVA : FONT_SERIF, fontSize: 20, fontStyle: getLang() === 'mr' ? 'normal' : 'italic', fill: INK.cream, stroke: { color: 0x000000, width: 3 } } });
  [deva, title, sub, soon, note].forEach(t => { t.anchor.set(0.5); t.eventMode = 'none'; });
  const rule = new Graphics();
  rule.eventMode = 'none';
  s.addChild(deva, title, sub, rule, soon, note);

  // one choice per visit: a second tap while a battle's paintings load would start a second scene
  let chosen = false;
  const buttons = new Container();
  s.addChild(buttons);
  const fresh = !battlesWon().includes(MAVAL_TUTORIAL.id);
  const learnLabel = pick('Learn to play', 'खेळायला शिका');
  const campaignLabel = pick('Campaign', 'मोहीम');
  const list: [string, () => void, boolean][] = fresh
    ? [[learnLabel, go.tutorial, true], [campaignLabel, go.campaign, false]]
    : [[campaignLabel, go.campaign, true], [learnLabel, go.tutorial, false]];
  list.forEach(([label, fn, primary]) => {
    const b = makeButton(label, () => { if (chosen) return; chosen = true; fn(); }, { primary, w: 320 });
    buttons.addChild(b);
  });

  // Phase 1 step 8: a small toggle, named for the language it switches TO. Re-shows this
  // scene so every label on it (and the campaign screen, scenario text) redraws in the new one.
  const langBtn = makeButton(getLang() === 'mr' ? 'English' : 'मराठी', () => {
    if (chosen) return;
    toggleLang();
    stage.show(swarajyaTitleScene(stage, go));
  }, { w: 170, ui: 0.78 });
  s.addChild(langBtn);

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
    langBtn.position.set(W - (ph ? 100 : 120), ph ? 36 : 44);
    const by = soon.y + (ph ? 54 : 64);
    buttons.children.forEach((b, i) => { b.position.set(W / 2, by + i * (ph ? 58 : 64)); });
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
    gsap.from(buttons.children, { alpha: 0, duration: 0.8, delay: 1.1, stagger: 0.12 });
  };
  s.leave = () => { Ticker.shared.remove(tick); };
  return s;
}
