import { chromium } from "../artifacts/qa/node_modules/playwright/index.mjs";
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
const children = [];
try {
  for (const app of ["micro-cardapio", "micro-pedido", "container-app"]) {
    const log = fs.openSync(`artifacts/${app}.log`, "w");
    children.push(
      spawn(
        process.execPath,
        [
          path.resolve(
            "artifacts/sources/33/node_modules/webpack-cli/bin/cli.js",
          ),
          "serve",
        ],
        {
          cwd: path.resolve(`artifacts/sources/33/apps/${app}`),
          stdio: ["ignore", log, log],
          windowsHide: true,
        },
      ),
    );
  }
  for (const port of [3001, 3002, 3000]) {
    let ready = false;
    for (let i = 0; i < 60; i++) {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const res = await fetch(`http://localhost:${port}`, {
          signal: AbortSignal.timeout(3000),
        });
        if (res.ok) {
          ready = true;
          break;
        }
      } catch {}
    }
    if (!ready) throw new Error(`Porta ${port} indisponível`);
  }
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 760 },
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page
    .getByRole("heading", { name: "Sabores preparados para você" })
    .waitFor();
  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((i) => {
        i.loading = "eager";
        return i.decode().catch(() => {});
      }),
    );
  });
  console.log(
    await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.slice(0, 3).map((i) => ({ loaded: i.naturalWidth > 0 })),
      ),
  );
  await page.screenshot({
    path: "public/images/project-33.jpg",
    type: "jpeg",
    quality: 82,
  });
  await browser.close();
  console.log("Captura: módulo 33");
} finally {
  for (const child of children)
    spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      windowsHide: true,
      stdio: "ignore",
    });
}
