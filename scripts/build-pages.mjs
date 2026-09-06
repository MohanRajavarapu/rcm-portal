import { mkdirSync, existsSync, writeFileSync, copyFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();

const env = {
  ...process.env,
  GITHUB_PAGES: "true",
  GITHUB_ACTIONS: process.env.GITHUB_ACTIONS || "true",
  NEXT_PUBLIC_BASE_PATH: "/rcm-portal",
};

const result = spawnSync("npx", ["next", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: true,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

mkdirSync(join(root, "out"), { recursive: true });
writeFileSync(join(root, "out", ".nojekyll"), "");
const index = join(root, "out", "index.html");
if (existsSync(index)) {
  copyFileSync(index, join(root, "out", "404.html"));
}

console.log("GitHub Pages static export ready in ./out (logo: /rcm-portal/brand/logo.jpg)");
