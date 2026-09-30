import type { AnimationEventHandler } from 'react';
import { KonArt, MameArt, PokoArt } from './CharacterArt';

export type CharacterName = 'poko' | 'mame' | 'kon';

const art = { poko: PokoArt, mame: MameArt, kon: KonArt };

type Props = {
  name: CharacterName;
  celebrating?: boolean;
  className?: string;
  onAnimationEnd?: AnimationEventHandler<HTMLDivElement>;
};

/** A character in its idle loop, or playing its "correct" celebration. */
export function Character({ name, celebrating = false, className = '', onAnimationEnd }: Props) {
  const Art = art[name];
  return (
    <div
      className={`${name} ${celebrating ? 'st-correct' : 'st-idle'} ${className}`.trim()}
      onAnimationEnd={onAnimationEnd}
      aria-hidden
    >
      <Art />
    </div>
  );
}
