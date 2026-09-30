# JLearn landing page

A static landing page (plain HTML, CSS and JS, no build step). Open `index.html` in a browser, or deploy the folder to any static host.

- `index.html`: page content and the three character SVGs (Poko, Mame, Kon)
- `styles.css`: theme tokens matched to the app design (warm off-white, coral, green and yellow tints; Lexend with Zen Maru Gothic) and the character animations
- `main.js`: places the characters on the page, plays a celebration when you tap one, draws the placeholder QR code, and holds the Vietnamese translations

## Placeholders to replace
- App Store and Google Play links: the `href="#"` on each `.store` button in `index.html`
- QR code: `fakeQR()` in `main.js` draws a code that looks real but encodes nothing. Replace it with a real QR, ideally one smart link that sends each phone to the right store.
- Footer links: Privacy, Terms and Contact

## Languages
English is written in `index.html`, and Vietnamese lives in the `VI` dictionary in `main.js`. Each translatable element carries a `data-i18n` key. Visitors switch with the EN / VI toggle; the page also follows `?lang=vi` or `?lang=en`, then a saved choice, then the browser language.

Vietnamese text must stay in **Lexend**, which covers every Vietnamese letter and tone mark. Zen Maru Gothic has no Vietnamese glyphs, so keep it (`--font-jp`) on Japanese-only elements; otherwise accented letters fall back to another font and look inconsistent.
