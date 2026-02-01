export function mixHexColors(
  color1: string,
  color2: string,
  setWeight: number,
  steps: number,
): string {
  // WACKY DECIMAL MAGIC
  const c1 = parseInt(color1.replace("#", ""), 16);
  const c2 = parseInt(color2.replace("#", ""), 16);

  // WACKY BITWISE MAGIC
  const r1 = (c1 >> 16) & 0xff,
    g1 = (c1 >> 8) & 0xff,
    b1 = c1 & 0xff;
  const r2 = (c2 >> 16) & 0xff,
    g2 = (c2 >> 8) & 0xff,
    b2 = c2 & 0xff;

  const weight = setWeight / steps;

  // WACKY LERPING MAGIC
  const mix = (start: number, end: number): number => {
    const result = Math.round(start + (end - start) * weight);
    return Math.max(0, Math.min(255, result));
  };

  const r = mix(r1, r2);
  const g = mix(g1, g2);
  const b = mix(b1, b2);

  // WACKY CONVERSION BACK TO HEX MAGIC
  const toHex = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();

  const mixedColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return mixedColor;
}
