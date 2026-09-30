// Inject the character SVGs into every <!--POKO--> / <!--MAME--> / <!--KON--> slot.
(function injectCharacters() {
  const tpls = {
    POKO: document.getElementById('tpl-poko'),
    MAME: document.getElementById('tpl-mame'),
    KON: document.getElementById('tpl-kon'),
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT);
  const slots = [];
  while (walker.nextNode()) {
    const name = walker.currentNode.nodeValue.trim();
    if (tpls[name]) slots.push([walker.currentNode, tpls[name]]);
  }
  for (const [node, tpl] of slots) node.replaceWith(tpl.content.cloneNode(true));
})();

// Tap / click a character to play its "correct" celebration, then return to idle.
(function celebrateOnTap() {
  function celebrate(el) {
    if (!el || el.classList.contains('st-correct')) return;
    el.classList.replace('st-idle', 'st-correct');
    const whole = el.querySelector('.whole');
    const done = () => el.classList.replace('st-correct', 'st-idle');
    whole.addEventListener('animationend', done, { once: true });
    setTimeout(done, 1400); // fallback when animations are disabled
  }
  document.querySelectorAll('.stage .c').forEach((c) => c.addEventListener('click', () => celebrate(c)));
  document.querySelectorAll('[data-char]').forEach((card) =>
    card.addEventListener('click', () => celebrate(card.querySelector('.poko, .mame, .kon')))
  );
  // Hero bubble cycles through each character's line.
  const bubble = document.querySelector('.bubble');
  const lines = ['いっしょに がんばろう！', 'やった！できた！', 'ふーん、まあまあだね。'];
  let i = 0;
  if (bubble) setInterval(() => { bubble.textContent = lines[++i % lines.length]; }, 3500);
})();

// Placeholder QR code: looks like a real one, encodes nothing.
// TODO: replace with a real QR (e.g. a smart link that redirects to the right store).
(function fakeQR() {
  const N = 25;
  let seed = 20260930;
  const rand = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);

  const grid = Array.from({ length: N }, () => Array.from({ length: N }, () => rand() > 0.52));
  const finder = (r0, c0) => {
    for (let r = -1; r <= 7; r++) for (let c = -1; c <= 7; c++) {
      const rr = r0 + r, cc = c0 + c;
      if (rr < 0 || cc < 0 || rr >= N || cc >= N) continue;
      const ring = Math.max(Math.abs(r - 3), Math.abs(c - 3));
      grid[rr][cc] = r >= 0 && c >= 0 && r <= 6 && c <= 6 && ring !== 2;
    }
  };
  finder(0, 0); finder(0, N - 7); finder(N - 7, 0);
  for (let i = 8; i < N - 8; i++) { grid[6][i] = i % 2 === 0; grid[i][6] = i % 2 === 0; } // timing
  for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) { // alignment
    const ring = Math.max(Math.abs(r), Math.abs(c));
    grid[N - 7 + r][N - 7 + c] = ring !== 1;
  }

  let d = '';
  grid.forEach((row, r) => row.forEach((on, c) => { if (on) d += `M${c} ${r}h1v1h-1z`; }));
  const svg = `<svg viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges" role="img" aria-label="QR code (placeholder)"><path d="${d}" fill="#2B2320"/></svg>`;
  document.querySelectorAll('[data-qr]').forEach((el) => { el.innerHTML = svg; });
})();
