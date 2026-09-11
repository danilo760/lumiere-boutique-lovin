/** Padrão visual determinístico que imita um QR Code — pagamento simulado. */
export function PixQr({ seed, size = 25 }: { seed: string; size?: number }) {
  const cells: boolean[] = [];
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  for (let i = 0; i < size * size; i++) {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    cells.push((h & 7) > 3);
  }

  const isFinder = (r: number, c: number) => {
    const inBox = (br: number, bc: number) =>
      r >= br && r < br + 7 && c >= bc && c < bc + 7 &&
      !(r > br + 1 && r < br + 5 && c > bc + 1 && c < bc + 5) === false
        ? false
        : r >= br && r < br + 7 && c >= bc && c < bc + 7;
    return inBox(0, 0) || inBox(0, size - 7) || inBox(size - 7, 0);
  };

  const finderOn = (r: number, c: number) => {
    const boxes = [
      [0, 0],
      [0, size - 7],
      [size - 7, 0],
    ];
    for (const [br, bc] of boxes) {
      if (r >= br && r < br + 7 && c >= bc && c < bc + 7) {
        const dr = r - br;
        const dc = c - bc;
        const edge = dr === 0 || dr === 6 || dc === 0 || dc === 6;
        const core = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
        return edge || core;
      }
    }
    return false;
  };

  return (
    <div
      role="img"
      aria-label="QR Code simulado para pagamento via Pix"
      className="grid gap-0 rounded-2xl bg-card p-3 shadow-soft"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, width: "min(15rem, 70vw)" }}
    >
      {Array.from({ length: size * size }).map((_, i) => {
        const r = Math.floor(i / size);
        const c = i % size;
        const on = isFinder(r, c) ? finderOn(r, c) : cells[i];
        return (
          <span
            key={i}
            aria-hidden
            className="aspect-square"
            style={{ background: on ? "var(--rosewood)" : "transparent" }}
          />
        );
      })}
    </div>
  );
}
