# JLearn landing page

A static landing page (plain HTML, CSS and JS, no build step). Open `index.html` in a browser, or deploy the folder to any static host.

- `index.html`: page content and the three character SVGs (Poko, Mame, Kon)
- `styles.css`: theme tokens matched to the app design (warm off-white, coral, green and yellow tints; Lexend with Zen Maru Gothic) and the character animations
- `main.js`: places the characters on the page, plays a celebration when you tap one, and draws the placeholder QR code

## Placeholders to replace
- App Store and Google Play links: the `href="#"` on each `.store` button in `index.html`
- QR code: `fakeQR()` in `main.js` draws a code that looks real but encodes nothing. Replace it with a real QR, ideally one smart link that sends each phone to the right store.
- Footer links: Privacy, Terms and Contact
