import chokidar from "chokidar";
import { loadConfig, CONFIG_FILES } from "./loadConfig.js";
import { generateCss } from "./generateCss.js";
import { writeCss } from "./writeCss.js";

async function build() {
  const { config, configDir } = await loadConfig();
  const { generated, path } = generateCss(config, configDir);

  writeCss(generated, path);
  console.log("CSS Built");
}

async function start() {
  await build();

  const watcher = chokidar.watch(CONFIG_FILES, { ignoreInitial: true });
  watcher.on("change", async () => {
    console.log("Config file changed. Rebuilding CSS...");
    await build();
  });
}

start();
