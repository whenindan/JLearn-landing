import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Lexend, Zen_Maru_Gothic } from 'next/font/google';
import { getDictionary, isLocale, locales } from '@/lib/i18n';
import '../globals.css';

// Lexend carries all English and Vietnamese text: its "vietnamese" subset covers every
// Vietnamese letter and stacked tone mark, so accents never fall back to another font.
const lexend = Lexend({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-lexend',
  display: 'swap',
});

// Zen Maru Gothic is for Japanese only (it has no Vietnamese glyphs). Its Japanese
// glyphs load on demand by unicode-range, so nothing is preloaded.
const zenMaru = Zen_Maru_Gothic({
  weight: ['500', '700', '900'],
  variable: '--font-zen',
  display: 'swap',
  preload: false,
});

// Absolute URLs for canonical and hreflang tags. Set NEXT_PUBLIC_SITE_URL in production.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', vi: '/vi', 'x-default': '/' },
    },
  };
}

export const viewport: Viewport = { themeColor: '#FBF8F3' };

export default async function LangLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang} className={`${lexend.variable} ${zenMaru.variable}`}>
      <body>{children}</body>
    </html>
  );
}
