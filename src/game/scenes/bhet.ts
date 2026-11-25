/* ============================================================
   DESIGN 3.5 — the Bhet: a secret-stance round played before a battle
   that has one (so far, only Pratapgad). Shown between the campaign
   map and the battle screen: the player picks Trust, Guard or Strike,
   the AI picks in the same breath from RULES.bhet.aiOdds (or the
   scenario's own, if it gives one), both are revealed together, and
   the result (src/engine/bhet.ts, resolveBhet) is carried into the
   battle through newGame()'s preset wound/extra-unit fields.
   Reuses the chapter's own battlefield painting as its backdrop — no
   separate art was needed (it already shows the parley tent; see
   art/PROMPTS-BATCH1.md, B2).
   ============================================================ */
import { Container, Graphics, Text } from 'pixi.js';
import gsap from 'gsap';
import { FONT_BODY, FONT_STORY, FONT_TITLE, INK } from '../theme';
import { view } from '../view';
import { makeButton } from '../ui/button';
import { audio } from '../audio';
import { loadBattlefield } from '../../assets/manifest';
import { RULES } from '../../data';
import { chooseBhetStance, resolveBhet, type BhetOutcome, type BhetStance } from '../../engine/bhet';
import type { Scenario } from '../../campaign/scenario';
import type { Scene, Stage } from '../stage';

/** plain words for each stance, the same everywhere a Bhet is played (DESIGN 3.5) */
const STANCE_INFO: Record<BhetStance, { label: string; body: string }> = {
  trust: { label: 'Trust', body: 'Come as agreed: no armour, no hidden blade.' },
  guard: { label: 'Guard', body: 'Come ready: armour worn under the robe.' },
  strike: { label: 'Strike', body: 'Come with a blade hidden in your sleeve.' }
};

export function bhetScene(stage: Stage, sc: Scenario, onDone: (outcome: BhetOutcome) => void, back: () => void): Scene {
  const cfg = sc.bhet;
  if (!cfg) throw new Error(`bhetScene called for a scenario with no bhet config: ${sc.id}`);
  const s: Scene = new Container();
  const dim = new Graphics();
  s.addChild(dim);

  const title = new Text({ text: 'THE MEETING', style: { fontFamily: FONT_TITLE, fontSize: 40, fontWeight: '700', letterSpacing: 10, fill: INK.goldPale, stroke: { color: 0x1a0d05, width: 5 } } });
  const intro = new Text({ text: cfg.intro, style: { fontFamily: FONT_STORY, fontSize: 26, fontWeight: '500', fill: INK.creamBright, wordWrap: true, wordWrapWidth: 820, lineHeight: 36, align: 'center' } });
  const prompt = new Text({ text: 'Each side chooses in secret; both are shown only once the meeting is over.', style: { fontFamily: FONT_BODY, fontSize: 19, fontStyle: 'italic', fill: INK.gold, wordWrap: true, wordWrapWidth: 820, align: 'center' } });
  [title, intro, prompt].forEach(t => { t.anchor.set(0.5, 0); t.eventMode = 'none'; });
  s.addChild(title, intro, prompt);

  const choices = new Container();
  s.addChild(choices);
  const stanceButtons: Container[] = (['trust', 'guard', 'strike'] as BhetStance[]).map(stance => {
    const info = STANCE_INFO[stance];
    const col = new Container();
    const b = makeButton(info.label, () => pick(stance), { w: 260, primary: false });
    const d = new Text({ text: info.body, style: { fontFamily: FONT_BODY, fontSize: 17, fill: INK.cream, wordWrap: true, wordWrapWidth: 240, align: 'center', lineHeight: 22 } });
    d.anchor.set(0.5, 0); d.position.set(0, 40); d.eventMode = 'none';
    col.addChild(b, d);
    choices.addChild(col);
    return col;
  });

  const reveal = new Container();
  reveal.visible = false;
  s.addChild(reveal);

  let done = false;
  function pick(stance: BhetStance): void {
    if (done) return;
    done = true;
    audio.unlock(); audio.play('click');
    const odds = cfg!.aiOdds ?? RULES.bhet.aiOdds;
    const enemyStance = chooseBhetStance(Math.random, odds);
    const outcome = resolveBhet(stance, enemyStance);
    gsap.to(choices, {
      alpha: 0, duration: 0.3, onComplete: () => {
        choices.visible = false;
        showReveal(outcome);
      }
    });
  }

  function sideLine(label: string, wounded: boolean, extra: boolean): string | null {
    if (wounded) return `${label} starts the battle with its commander already wounded.`;
    if (extra) return `${label} starts the battle with one extra unit ready in support.`;
    return null;
  }

  function showReveal(outcome: BhetOutcome): void {
    reveal.removeChildren().forEach(c => c.destroy());
    const r1 = new Text({ text: outcome.resultLine, style: { fontFamily: FONT_STORY, fontSize: 27, fontStyle: 'italic', fill: INK.creamBright, wordWrap: true, wordWrapWidth: 760, lineHeight: 36, align: 'center' } });
    const lines = [
      sideLine('Your side', outcome.playerWounded, outcome.playerExtra),
      sideLine('The other side', outcome.enemyWounded, outcome.enemyExtra)
    ].filter((l): l is string => l !== null);
    const r2 = new Text({
      text: lines.length ? lines.join('\n') : 'No advantage either way — the meeting ends, and the field decides it.',
      style: { fontFamily: FONT_BODY, fontSize: 20, fill: INK.gold, wordWrap: true, wordWrapWidth: 760, lineHeight: 28, align: 'center' }
    });
    [r1, r2].forEach(t => { t.anchor.set(0.5, 0); t.eventMode = 'none'; });
    const go = makeButton('To the field', () => {
      audio.play('conch');
      gsap.to(s, { alpha: 0, duration: 0.35, onComplete: () => onDone(outcome) });
    }, { primary: true, w: 320 });
    r1.position.set(0, 0);
    r2.position.set(0, r1.height + 26);
    go.position.set(0, r2.y + r2.height + 50);
    reveal.addChild(r1, r2, go);
    reveal.visible = true;
    gsap.from(reveal, { alpha: 0, duration: 0.5 });
  }

  const backBtn = makeButton('Back', back, { w: 160 });

  function layout(): void {
    const W = view.w, H = view.h, ph = view.phone;
    dim.clear().rect(0, 0, W, H).fill({ color: 0x0a0604, alpha: 0.2 });
    title.position.set(W / 2, ph ? 60 : 80);
    intro.style.wordWrapWidth = Math.min(820, W - 80);
    intro.position.set(W / 2, title.y + title.height + 28);
    prompt.style.wordWrapWidth = intro.style.wordWrapWidth;
    prompt.position.set(W / 2, intro.y + intro.height + 18);
    const cy = prompt.y + prompt.height + (ph ? 50 : 70);
    const gap = ph ? 180 : 280;
    stanceButtons.forEach((col, i) => col.position.set(W / 2 + (i - 1) * gap, cy));
    reveal.position.set(W / 2, cy + 10);
    backBtn.position.set(ph ? 90 : 110, H - (ph ? 40 : 50));
  }
  s.addChild(backBtn);
  layout();
  s.relayout = layout;
  s.enter = () => {
    void loadBattlefield(sc.battlefield).then(t => { if (!destroyed) stage.setBackdrop(t, 0.5); });
    gsap.from([title, intro, prompt], { alpha: 0, y: '+=16', duration: 0.8, stagger: 0.1 });
    gsap.from(choices.children, { alpha: 0, y: '+=16', duration: 0.6, delay: 0.5, stagger: 0.1 });
  };
  let destroyed = false;
  s.leave = () => { destroyed = true; };
  return s;
}
