/* YUDDH: Swarajya — entry point.
   Phase 1 step 5: the title now leads somewhere — a coached tutorial,
   the Swarajya campaign, and the battle screen, chained by each
   scenario's `nextId` (ch00_maval → ch01_torna → ch04_pratapgad).
   The YUDDH campaigns in src/campaign/ stay as scaffolding (D-17):
   this entry point never shows them; only the Swarajya campaign
   (src/campaign/campaign.ts, SWARAJYA_CAMPAIGN) is reachable. */
// fonts ship with the game (offline, Android) — no Google Fonts request
import '@fontsource/alegreya/500.css';
import '@fontsource/alegreya/500-italic.css';
import '@fontsource/alegreya/700.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/tiro-devanagari-hindi/400.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/alegreya-sans/500.css';
import '@fontsource/alegreya-sans/500-italic.css';
import '@fontsource/alegreya-sans/700.css';
import '@fontsource/alegreya-sans/800.css';
import { Stage } from './game/stage';
import { swarajyaTitleScene } from './game/scenes/swarajyaTitle';
import { campaignScene } from './game/scenes/campaign';
import { battleScene, preloadBattle } from './game/scenes/battle';
import { SWARAJYA, scenarioById } from './campaign/campaign';
import { MAVAL_TUTORIAL } from './campaign/mavalTutorial';
import type { Scenario } from './campaign/scenario';
import { FONT_DEVA, FONT_SERIF, FONT_TITLE } from './game/theme';

async function boot(): Promise<void> {
  // Pixi draws text onto canvas, so the web fonts must be ready first.
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load(`700 40px ${FONT_TITLE}`),
        document.fonts.load(`italic 600 40px ${FONT_SERIF}`),
        document.fonts.load(`italic 500 40px ${FONT_SERIF}`),
        document.fonts.load(`40px ${FONT_DEVA}`, 'स्वराज्य')
      ]),
      new Promise(r => setTimeout(r, 2500))
    ]);
  } catch { /* fall back to system serif */ }

  const stage = new Stage();
  await stage.init();
  document.getElementById('boot')?.remove();

  const showTitle = (): void => stage.show(swarajyaTitleScene(stage, { tutorial: () => void enterBattle(MAVAL_TUTORIAL), campaign: showCampaign }));
  // the Swarajya campaign only: pass a single-campaign pool so "More empires" (the YUDDH
  // scaffolding campaigns) never shows up here (D-17).
  const showCampaign = (): void => stage.show(campaignScene(stage, sc => void enterBattle(sc), showTitle, SWARAJYA, [SWARAJYA]));
  async function enterBattle(sc: Scenario): Promise<void> {
    await preloadBattle(sc);
    const goNext = (): void => {
      const n = sc.nextId && scenarioById(sc.nextId);
      if (n) void enterBattle(n); else showCampaign();
    };
    stage.show(battleScene(stage, showCampaign, sc, sc.nextId ? goNext : undefined));
  }

  showTitle();
}

void boot();
