/* ============================================================
   SWARAJYA — language toggle (D-09: English and Marathi from the
   start, not a later-phase extra).

   Scope of this first pass (Phase 1 step 8): the vertical slice's
   own content — the title screen's actionable text, the three
   chapters (title/place/briefing/objective/labels), and the Bhet
   scene. The generic battle screen chrome inherited from YUDDH
   (End Turn, Back, card tooltips, the History panel, log lines) is
   NOT translated yet — PLAN.md lists a "Full Marathi pass" as its
   own later gate, reviewed by a Marathi reader Pon trusts (Q-05,
   still open in STATE.md); doing that sweep here, unreviewed, over
   a 2000-line shared file used by every chapter would risk shipping
   wrong Marathi with no one to check it. Everything in THIS file has
   not been reviewed by a Marathi speaker either — treat it the same
   way: present, switchable, and pending that review before Gate 1.
   ============================================================ */

export type Lang = 'en' | 'mr';

const KEY = 'swarajya.lang.v1';
let current: Lang = 'en';
try {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(KEY) : null;
  if (saved === 'en' || saved === 'mr') current = saved;
} catch { /* private mode */ }

export const getLang = (): Lang => current;
export function setLang(l: Lang): void {
  current = l;
  try { localStorage.setItem(KEY, l); } catch { /* private mode */ }
}
export const toggleLang = (): Lang => { setLang(current === 'en' ? 'mr' : 'en'); return current; };

/** pick the Marathi string when it exists and Marathi is on, else fall back to English */
export function pick<T>(en: T, mr: T | undefined): T {
  return current === 'mr' && mr !== undefined ? mr : en;
}
