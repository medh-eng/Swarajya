# art/source: where finished paintings go

Drop each finished painting here as a **PNG named exactly with the card id** (the id is in the heading of each prompt in `art/PROMPTS-BATCH1.md`),
then run `npm run assets`. The game picks it up automatically; a card without a painting keeps its drawn placeholder.

| Folder | What goes in it | Shape | Master size | Example |
|---|---|---|---|---|
| `cards/` | character, order and object cards | **5:7 portrait** | 1500 x 2100 (at least 1080 x 1512) | `cards/sw_shivaji.png` |
| `forts/` | fort (Gad) cards | **1:1 square** | 1536 x 1536 (at least 1080 x 1080) | `forts/sw_gad_torna.png` |
| `battlefields/` | battle backgrounds | **16:9 landscape** | 2560 x 1440 | `battlefields/torna.png` |

Rules in short: no text, no border, no frame, no stained paper edge; Shivaji is never dressed in teal or green (D-21); the safe areas for heads,
forts and the calm middle band of the battlefields are in `art/PROMPTS-BATCH1.md` ("Format and safe-area specification").
Fort files go through the same converter as cards (output: `public/assets/cards/<id>.webp`).
