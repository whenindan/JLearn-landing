'use client';

import Link from 'next/link';
import { locales, type Locale } from '@/lib/i18n';

/** EN / VI switch. Remembers the choice in a cookie that proxy.ts reads on the next visit to "/". */
export function LangSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <div className="lang" role="group" aria-label={label}>
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === current ? 'true' : undefined}
          onClick={() => { document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`; }}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
