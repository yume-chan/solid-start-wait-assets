import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const path = resolve(
  fileURLToPath(import.meta.url),
  "..",
  "node_modules",
  "@solidjs",
  "start",
  "dist",
  "router",
  "lazyRoute.js",
);

let content = readFileSync(path, "utf-8");

if (process.argv[2] === "restore") {
  content = content.replaceAll(/component\.build/g, "component.import");
} else {
  content = content.replaceAll(/component\.import/g, "component.build");
}

writeFileSync(path, content);
