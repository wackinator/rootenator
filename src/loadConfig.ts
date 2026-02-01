import path from "node:path";
import fs from "node:fs";
import { createJiti } from "jiti";
import type { WackyConfig } from "./index.js";

export const CONFIG_FILES = ["rootenator.config.js", "rootenator.config.ts"];

export async function loadConfig() {
  const cwd = process.cwd();

  const configPath = CONFIG_FILES.map((f) => path.join(cwd, f)).find((f) => {
    return fs.existsSync(f);
  });

  if (!configPath) {
    throw new Error(
      "No configuration file found. Please create rootenator.config.js or rootenator.config.ts",
    );
  }

  const jiti = createJiti(import.meta.url, {
    moduleCache: false,
    fsCache: false,
  });

  const config = (await jiti.import(`${configPath}`, {
    default: true,
  })) as WackyConfig;

  return { config, configDir: path.dirname(configPath) };
}
