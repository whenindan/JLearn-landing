import { notFound } from 'next/navigation';
import { Character } from '@/components/Character';
import { CrewCard } from '@/components/CrewCard';
import { HeroStage } from '@/components/HeroStage';
import { BookIcon, CheckIcon, FlameIcon, MicIcon } from '@/components/Icons';
import { LangSwitch } from '@/components/LangSwitch';
import { QrPlaceholder } from '@/components/QrPlaceholder';
import { SpeechBubble } from '@/components/SpeechBubble';
import { StoreButtons } from '@/components/StoreButtons';
import { getDictionary, isLocale } from '@/lib/i18n';

const stepIcons = [
  { Icon: BookIcon, tone: 'icon-coral' },
  { Icon: MicIcon, tone: 'icon-green' },
  { Icon: FlameIcon, tone: 'icon-yellow' },
];

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#" className="logo" aria-label="JLearn">
            <span className="logo-mark">J</span>
            <span>JLearn</span>
          </a>
          <nav className="nav-links">
            <a href="#crew">{t.nav.crew}</a>
            <a href="#how">{t.nav.how}</a>
            <LangSwitch current={lang} label={t.nav.language} />
            <a href="#download" className="btn btn-small">{t.nav.cta}</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <div className="chips">
                <span className="chip chip-dark">N5</span>
                <span className="chip">N4</span>
                <span className="chip chip-streak"><FlameIcon />{t.hero.streak}</span>
              </div>
              <h1>
                {t.hero.title.before}
                <span className="hl">{t.hero.title.highlight}</span>
                {t.hero.title.after}
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <StoreButtons t={t.store} />
              <div className="qr-inline">
                <QrPlaceholder label={t.qr.alt} />
                <div>
                  <strong>{t.qr.title}</strong>
                  <span>{t.qr.body}</span>
                </div>
              </div>
            </div>

            <div className="hero-art">
              <div className="hero-panel">
                <span className="watermark" lang="ja" aria-hidden>学</span>
                <div className="panel-label" lang="ja" aria-hidden>いっしょに まなぼう</div>
                <HeroStage />
              </div>
              <div className="float float-ok" aria-hidden>
                <span className="ok-dot"><CheckIcon /></span>
                <div>
                  <b>{t.hero.correct}</b>
                  <SpeechBubble />
                </div>
              </div>
              <div className="float float-kana" aria-hidden>
                <span lang="ja">がっこう</span>
                <small>{t.hero.school}</small>
              </div>
            </div>
          </div>
        </section>

        {/* CREW */}
        <section className="section" id="crew">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow"><span lang="ja">なかまたち</span> · {t.crew.eyebrow}</div>
              <h2>{t.crew.title}</h2>
              <p className="sub">{t.crew.sub}</p>
            </div>
            <div className="crew-grid">
              <CrewCard name="poko" displayName="Poko" kana="ぽこ" tone="green" tag={t.crew.poko.tag}
                desc={t.crew.poko.desc} catchphrase="いっしょに がんばろう！" translation={t.crew.poko.quote} />
              <CrewCard name="mame" displayName="Mame" kana="まめ" tone="yellow" tag={t.crew.mame.tag}
                desc={t.crew.mame.desc} catchphrase="やった！できた！" translation={t.crew.mame.quote} />
              <CrewCard name="kon" displayName="Kon" kana="こん" tone="coral" tag={t.crew.kon.tag}
                desc={t.crew.kon.desc} catchphrase="ふーん、まあまあだね。" translation={t.crew.kon.quote} />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section-alt" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow"><span lang="ja">まなびかた</span> · {t.how.eyebrow}</div>
              <h2>{t.how.title}</h2>
            </div>
            <div className="steps">
              {t.how.steps.map((step, i) => {
                const { Icon, tone } = stepIcons[i];
                return (
                  <div className="step" key={step.title}>
                    <span className={`icon ${tone}`}><Icon /></span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section className="section" id="download">
          <div className="wrap">
            <div className="cta">
              <span className="watermark" lang="ja" aria-hidden>始</span>
              <div className="cta-copy">
                <div className="cta-label">{t.cta.label}</div>
                <h2>{t.cta.title}</h2>
                <p>{t.cta.body}</p>
                <StoreButtons t={t.store} light />
              </div>
              <div className="cta-qr">
                <QrPlaceholder label={t.qr.alt} big />
                <span>{t.cta.scan}</span>
              </div>
              <Character name="mame" className="cta-mascot" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a href="#" className="logo"><span className="logo-mark">J</span><span>JLearn</span></a>
          <div className="footer-links">
            {/* TODO: real policy and contact pages */}
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="#">{t.footer.contact}</a>
          </div>
          <span className="copy">© 2026 JLearn</span>
        </div>
      </footer>
    </>
  );
}
