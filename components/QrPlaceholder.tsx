// Placeholder QR code: looks like a real one, encodes nothing.
// TODO: replace with a real QR (e.g. a smart link that redirects to the right store).

const N = 25;

function buildPath(): string {
  let seed = 20260930;
  const rand = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const grid = Array.from({ length: N }, () => Array.from({ length: N }, () => rand() > 0.52));

  const finder = (r0: number, c0: number) => {
    for (let r = -1; r <= 7; r++)
      for (let c = -1; c <= 7; c++) {
        const rr = r0 + r;
        const cc = c0 + c;
        if (rr < 0 || cc < 0 || rr >= N || cc >= N) continue;
        const ring = Math.max(Math.abs(r - 3), Math.abs(c - 3));
        grid[rr][cc] = r >= 0 && c >= 0 && r <= 6 && c <= 6 && ring !== 2;
      }
  };
  finder(0, 0);
  finder(0, N - 7);
  finder(N - 7, 0);
  for (let i = 8; i < N - 8; i++) {
    grid[6][i] = i % 2 === 0;
    grid[i][6] = i % 2 === 0;
  }
  for (let r = -2; r <= 2; r++)
    for (let c = -2; c <= 2; c++) grid[N - 7 + r][N - 7 + c] = Math.max(Math.abs(r), Math.abs(c)) !== 1;

  let d = '';
  grid.forEach((row, r) => row.forEach((on, c) => { if (on) d += `M${c} ${r}h1v1h-1z`; }));
  return d;
}

const path = buildPath();

export function QrPlaceholder({ label, big = false }: { label: string; big?: boolean }) {
  return (
    <div className={big ? 'qr qr-big' : 'qr'}>
      <svg viewBox={`0 0 ${N} ${N}`} shapeRendering="crispEdges" role="img" aria-label={label}>
        <path d={path} fill="#1F1A17" />
      </svg>
    </div>
  );
}
