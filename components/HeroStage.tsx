'use client';

import { Character, type CharacterName } from './Character';
import { useCelebrate } from './useCelebrate';

function StageCharacter({ name }: { name: CharacterName }) {
  const { celebrating, celebrate, onAnimationEnd } = useCelebrate();
  return (
    <div className={`c c-${name}`} onClick={celebrate}>
      <Character name={name} celebrating={celebrating} onAnimationEnd={onAnimationEnd} />
    </div>
  );
}

export function HeroStage() {
  return (
    <div className="stage">
      <StageCharacter name="mame" />
      <StageCharacter name="poko" />
      <StageCharacter name="kon" />
    </div>
  );
}
