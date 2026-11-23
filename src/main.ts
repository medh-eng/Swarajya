/* YUDDH: Swarajya — entry point.
   Phase 0: boots the YUDDH renderer and shows the placeholder title.
   The full wiring of a playable game (title → campaign map → battle,
   duel, gallery) is YUDDH's src/main.ts at the engine baseline
   (see ENGINE_BASELINE); Phase 1 brings it back with Swarajya chapters. */
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
  stage.show(swarajyaTitleScene(stage));
}

void boot();
