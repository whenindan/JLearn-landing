'use client';

import { useCallback, useEffect, useRef, useState, type AnimationEvent } from 'react';

/** Tap-to-celebrate state: plays the one-shot "correct" animation, then returns to idle. */
export function useCelebrate() {
  const [celebrating, setCelebrating] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const stop = useCallback(() => {
    clearTimeout(timer.current);
    setCelebrating(false);
  }, []);

  const celebrate = useCallback(() => {
    setCelebrating((on) => {
      if (on) return on;
      // Fallback for reduced motion, where no animationend fires.
      timer.current = setTimeout(() => setCelebrating(false), 1400);
      return true;
    });
  }, []);

  const onAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLDivElement>) => {
      if ((e.target as Element).classList.contains('whole')) stop();
    },
    [stop],
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  return { celebrating, celebrate, onAnimationEnd };
}
