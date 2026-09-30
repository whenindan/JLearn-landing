import type { Dictionary } from '@/lib/i18n';

// TODO: replace with the real store listings.
const APP_STORE_URL = '#';
const PLAY_STORE_URL = '#';

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.5-1-2.5-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path fill="#34A853" d="M3.6 2.3 13.3 12l-9.7 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" />
      <path fill="#FBBC04" d="m16.6 15.3-3.3-3.3 3.3-3.3 3.8 2.2c1 .6 1 1.6 0 2.2z" />
      <path fill="#EA4335" d="M16.6 15.3 13.3 12l-9.7 9.7c.4.2.9.2 1.4-.1z" />
      <path fill="#4285F4" d="M16.6 8.7 5 2.4c-.5-.3-1-.3-1.4-.1l9.7 9.7z" />
    </svg>
  );
}

export function StoreButtons({ t, light = false }: { t: Dictionary['store']; light?: boolean }) {
  const cls = light ? 'store store-light' : 'store';
  return (
    <div className="store-row">
      <a className={cls} href={APP_STORE_URL} aria-label={t.apple.aria}>
        <AppleIcon />
        <span><small>{t.apple.small}</small>App Store</span>
      </a>
      <a className={cls} href={PLAY_STORE_URL} aria-label={t.play.aria}>
        <PlayIcon />
        <span><small>{t.play.small}</small>Google Play</span>
      </a>
    </div>
  );
}
