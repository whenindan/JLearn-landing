'use client';

import { useEffect, useState } from 'react';

const lines = ['いっしょに がんばろう！', 'やった！できた！', 'ふーん、まあまあだね。'];

/** Cycles through each character's catchphrase. */
export function SpeechBubble() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % lines.length), 3500);
    return () => clearInterval(id);
  }, []);
  return <span className="bubble" lang="ja">{lines[i]}</span>;
}
