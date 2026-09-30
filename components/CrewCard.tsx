'use client';

import { Character, type CharacterName } from './Character';
import { useCelebrate } from './useCelebrate';

type Props = {
  name: CharacterName;
  displayName: string;
  kana: string;
  tag: string;
  tone: 'green' | 'yellow' | 'coral';
  desc: string;
  catchphrase: string;
  translation: string;
};

const artTone = { green: 'art-green', yellow: 'art-yellow', coral: 'art-peach' };

export function CrewCard({ name, displayName, kana, tag, tone, desc, catchphrase, translation }: Props) {
  const { celebrating, celebrate, onAnimationEnd } = useCelebrate();
  return (
    <article className="card" onClick={celebrate}>
      <div className={`card-art ${artTone[tone]}`}>
        <Character name={name} celebrating={celebrating} onAnimationEnd={onAnimationEnd} />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3>{displayName}</h3>
          <span className="jp" lang="ja">{kana}</span>
          <span className={`tag tag-${tone}`}>{tag}</span>
        </div>
        <p>{desc}</p>
        <div className="quote">
          <b lang="ja">{catchphrase}</b>
          <span>{translation}</span>
        </div>
      </div>
    </article>
  );
}
