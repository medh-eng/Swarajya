/* ============================================================
   Art manifest. Card paintings live in public/assets/cards/<id>.webp
   (made by `npm run assets` from Pon's masters). A card listed here
   shows its painting; any other card falls back to the placeholder.

   Paintings load on demand: each scene asks for the ones it needs
   (a battle loads its two decks, the gallery one empire at a time),
   so the game starts without downloading every painting first.
   ============================================================ */
import { Assets, Texture } from 'pixi.js';

import delivered from './card-art.json';

/** ids of paintings that have been delivered (written by scripts/convert-assets.mjs) */
export const CARD_ART: string[] = delivered as string[];
const HAS = new Set(CARD_ART);

const BASE = import.meta.env.BASE_URL;
const images = new Map<string, HTMLImageElement>();
const pending = new Map<string, Promise<void>>();
const textures = new Map<string, Texture>();

export const hasArt = (id: string): boolean => HAS.has(id);

/** the decoded painting, once loaded */
export const artImage = (id: string): HTMLImageElement | undefined => images.get(id);

/** callbacks waiting for a painting that was not ready when a face was drawn */
const waiting = new Map<string, Array<() => void>>();
/** run `cb` once the painting for `id` has loaded (at once if it already has) */
export function whenArt(id: string, cb: () => void): void {
  if (images.has(id)) { cb(); return; }
  const l = waiting.get(id) ?? [];
  l.push(cb); waiting.set(id, l);
}

const RETRIES = 5;
/** one painting: retried with a growing pause (phones on a weak connection drop requests), decoded before use */
function fetchOne(id: string): Promise<void> {
  return new Promise<void>(res => {
    let tries = 0;
    const attempt = (): void => {
      const img = new Image();
      let over = false;
      // a request that neither succeeds nor fails would hold the whole screen: give up on it after a while
      const stall = setTimeout(() => { if (over) return; over = true; img.onload = img.onerror = null; img.src = ''; retry(); }, 15000);
      const retry = (): void => {
        if (++tries > RETRIES) { pending.delete(id); res(); return; }
        setTimeout(attempt, 400 * tries);
      };
      img.onload = () => {
        if (over) return; over = true; clearTimeout(stall);
        const done = (): void => {
          images.set(id, img);
          for (const cb of waiting.get(id) ?? []) { try { cb(); } catch { /* a stale view */ } }
          waiting.delete(id);
          res();
        };
        // decode now, so the first canvas draw never meets a half-ready image
        if (img.decode) img.decode().then(done, done); else done();
      };
      img.onerror = () => { if (over) return; over = true; clearTimeout(stall); retry(); };
      img.src = `${BASE}assets/cards/${id}.webp`;
    };
    attempt();
  });
}

/** at most this many paintings in flight at once: forty at a time overwhelmed phones */
const MAX_PARALLEL = 6;
let active = 0;
const queue: Array<() => void> = [];
function limited(id: string): Promise<void> {
  return new Promise<void>(res => {
    const run = (): void => {
      active++;
      void fetchOne(id).then(() => { active--; res(); queue.shift()?.(); });
    };
    if (active < MAX_PARALLEL) run(); else queue.push(run);
  });
}

/** wait for `p`, but never longer than `ms`: a slow painting must not keep a screen blank */
export const orTimeout = (p: Promise<unknown>, ms: number): Promise<unknown> =>
  Promise.race([p, new Promise(r => setTimeout(r, ms))]);

/** load these paintings (ids without a painting are skipped); resolves when all are ready */
export function loadArt(ids: Iterable<string>): Promise<void> {
  const jobs: Promise<void>[] = [];
  for (const id of new Set(ids)) {
    if (!HAS.has(id) || images.has(id)) continue;
    let p = pending.get(id);
    if (!p) { p = limited(id); pending.set(id, p); }
    jobs.push(p);
  }
  return Promise.all(jobs).then(() => undefined);
}

/** the painting as a Pixi texture, or null until it has loaded */
export function cardArt(id: string): Texture | null {
  const img = images.get(id);
  if (!img) return null;
  let t = textures.get(id);
  if (!t) { t = Texture.from(img); textures.set(id, t); }
  return t;
}

/** a battlefield or title painting from public/assets/battlefields */
export const battlefieldUrl = (name: string): string => `${BASE}assets/battlefields/${name}.webp`;

/* Phase 1 step 4: a plain painted gradient standing in for a battlefield that has no painting yet
   (Pon paints these one chapter at a time; not every scenario has one on day one). A dawn sky over
   a row of jagged ridges, in the same spirit as the Phase 0 title screen — drawn to a canvas once
   per name and cached, so it never costs a network request. */
const FALLBACK_W = 1920, FALLBACK_H = 1080;
const fallbacks = new Map<string, Texture>();

function hashOf(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h;
}

function ridgePath(ctx: CanvasRenderingContext2D, top: number, base: number, seed: number): void {
  ctx.beginPath();
  ctx.moveTo(0, FALLBACK_H);
  ctx.lineTo(0, base);
  const n = 14;
  for (let i = 0; i <= n; i++) {
    const x = (FALLBACK_W * i) / n;
    const wave = Math.sin(i * 1.7 + seed) * 0.5 + Math.sin(i * 0.63 + seed * 2.1) * 0.5;
    ctx.lineTo(x, top + (base - top) * (0.5 - wave * 0.5));
  }
  ctx.lineTo(FALLBACK_W, FALLBACK_H);
  ctx.closePath();
}

function fallbackBattlefield(name: string): Texture {
  const cached = fallbacks.get(name);
  if (cached) return cached;
  const h = hashOf(name);
  const canvas = document.createElement('canvas');
  canvas.width = FALLBACK_W; canvas.height = FALLBACK_H;
  const ctx = canvas.getContext('2d');
  if (!ctx) { const blank = Texture.WHITE; fallbacks.set(name, blank); return blank; }
  const hue = h % 360;
  const hz = FALLBACK_H * 0.64;
  const sky = ctx.createLinearGradient(0, 0, 0, hz);
  sky.addColorStop(0, `hsl(${(hue + 255) % 360}, 36%, 13%)`);
  sky.addColorStop(0.4, `hsl(${(hue + 300) % 360}, 42%, 22%)`);
  sky.addColorStop(0.68, `hsl(${(hue + 10) % 360}, 55%, 36%)`);
  sky.addColorStop(0.86, `hsl(${(hue + 28) % 360}, 68%, 48%)`);
  sky.addColorStop(1, `hsl(${(hue + 42) % 360}, 78%, 62%)`);
  ctx.fillStyle = sky; ctx.fillRect(0, 0, FALLBACK_W, hz);
  ctx.fillStyle = `hsl(${(hue + 42) % 360}, 78%, 62%)`;
  ctx.fillRect(0, hz, FALLBACK_W, FALLBACK_H - hz);
  ridgePath(ctx, FALLBACK_H * 0.52, FALLBACK_H * 0.68, 1.3 + (h % 7)); ctx.fillStyle = '#4a2a30'; ctx.fill();
  ridgePath(ctx, FALLBACK_H * 0.62, FALLBACK_H * 0.8, 4.1 + (h % 5)); ctx.fillStyle = '#2a1a20'; ctx.fill();
  ridgePath(ctx, FALLBACK_H * 0.8, FALLBACK_H * 0.95, 7.7 + (h % 3)); ctx.fillStyle = '#160d10'; ctx.fill();
  const tex = Texture.from(canvas);
  fallbacks.set(name, tex);
  return tex;
}

/** the named battlefield painting, or (until Pon paints it) a drawn placeholder in the same style. Never rejects. */
export async function loadBattlefield(name: string): Promise<Texture> {
  try {
    return await Assets.load<Texture>(battlefieldUrl(name));
  } catch {
    return fallbackBattlefield(name);
  }
}
