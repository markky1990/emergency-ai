# App audit: speed, data and space

Measured on a PC on 2026-11-24. Phone numbers will differ, so test on a real phone too.

## Speed
- The page is ready in about 23 ms on a PC (about 80 ms on a fresh address). A search takes 0.24 ms. The page uses about 3 MB of memory and 309 page elements.
- The code is not the slow part. File size is.
- Scripts now load in parallel without blocking the page.

## Data used
| | Before | Now |
|---|---|---|
| Saved to the phone on first visit | 488 KB | 261 KB |
| Needed before the first screen shows | about 250 KB | about 119 KB |
| Step drawings | 206 KB, saved up front | 142 KB, saved in the background |
| Topic icons | 87 KB (192 px) | 50 KB (112 px) |
| Header logo | 20 KB | 2 KB |

Also stopped saving two logo files that are only used when installing the app (96 KB).

## Space on the phone
- The app itself needs about 261 KB.
- The voice files are the only big thing: about 47 MB (small voice) or 65 MB (larger voice). They are saved only if you tap Save.
- Settings now shows the size before downloading, asks you to confirm, and has a "Remove it to free up space" button.
- After saving, the app asks the browser not to delete the voice when the phone is low on space.
- Listening loads the voice into memory while it runs. This uses more memory than the rest of the app, so close other apps if a phone is slow.

## Problems found and fixed
1. After an update, the offline copy could mix old and new files, because the website lets browsers keep files for 10 minutes. The app now always fetches fresh copies when saving.
2. One missing icon could stop the whole offline install. Icons are now saved one by one, and only the app files must all succeed.
3. The timer screen kept refreshing 4 times a second after a timer was cleared. It now stops when nothing is running.
4. Removed unused style rules and an unused variable.

## Checked and left alone
- Shrinking the code files (minifying) would save only about 15 KB. Not worth the added risk.
- The website already compresses text files.
- The sources file (9 KB compressed) is not worth loading separately.

## Still to do
- Hands-free listening uses an older browser feature that runs on the main thread. Moving to the newer one should save battery.
- Show a message when a new version is ready.
- Measure on a real phone: start-up time, battery use during hands-free, and memory.
