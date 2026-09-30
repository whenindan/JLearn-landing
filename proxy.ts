import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, locales, type Locale } from '@/lib/i18n';

// Sends visitors without a locale in the URL to /en or /vi:
// saved choice (NEXT_LOCALE cookie) first, then the browser's Accept-Language.
function pickLocale(req: NextRequest): Locale {
  const saved = req.cookies.get('NEXT_LOCALE')?.value;
  if (saved && isLocale(saved)) return saved;

  const header = req.headers.get('accept-language') ?? '';
  const preferred = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { lang: tag.toLowerCase().split('-')[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .find(({ lang }) => isLocale(lang));
  return (preferred?.lang as Locale | undefined) ?? defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any path with a file extension (favicon, images, etc.).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
