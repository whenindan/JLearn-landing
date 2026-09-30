# JLearn landing page

A Next.js (App Router, TypeScript) landing page for JLearn, in English and Vietnamese.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploys to Vercel as is. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) so canonical and hreflang links use the real domain.

## Structure
- `app/[lang]/page.tsx`: the page. Both `/en` and `/vi` are pre-rendered as static HTML.
- `app/[lang]/layout.tsx`: fonts, `<html lang>`, per-language title, description and hreflang links.
- `app/globals.css`: theme tokens (coral, warm off-white, green and yellow tints) and the character animations.
- `lib/i18n.ts`: all page copy, in English and Vietnamese. TypeScript fails the build if a Vietnamese string is missing.
- `proxy.ts`: sends `/` to `/en` or `/vi`, using the saved choice first (`NEXT_LOCALE` cookie, set by the EN / VI switch), then the browser language.
- `components/`: the characters (Poko, Mame, Kon) with tap-to-celebrate, the store buttons, the QR placeholder and the language switch.

## Placeholders to replace
- Store links: `APP_STORE_URL` and `PLAY_STORE_URL` in `components/StoreButtons.tsx`.
- QR code: `components/QrPlaceholder.tsx` draws a code that looks real but encodes nothing. Replace it with a real QR, ideally one smart link that sends each phone to the right store.
- Footer links: Privacy, Terms and Contact in `app/[lang]/page.tsx`.

## Fonts and Vietnamese
Fonts are self-hosted through `next/font`, so there are no requests to Google at runtime.

- **Lexend** carries all English and Vietnamese text. It loads with its `vietnamese` subset, which covers every Vietnamese letter and tone mark.
- **Zen Maru Gothic** is for Japanese only, and has no Vietnamese glyphs. Keep it (`--font-jp`) on Japanese-only elements, marked `lang="ja"`. If Vietnamese text lands in that font, accented letters fall back to another font and look inconsistent.
- Write Vietnamese in precomposed (NFC) form, which is what normal keyboards produce.
