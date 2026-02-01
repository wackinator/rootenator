import fs from "node:fs";

export function writeCss(css: string, outPath: string) {
  fs.writeFileSync(outPath, css, "utf-8");
}
