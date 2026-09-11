import { chromium } from "../artifacts/qa/node_modules/playwright/index.mjs";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";
import { spawn } from "node:child_process";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1200, height: 760 } });
for (const id of process.argv[2] ? [] : [16, 17, 21]) {
  const server = await createServer({
    configFile: false,
    root: path.resolve(`artifacts/sources/${id}`),
    plugins: [react()],
    server: { host: "127.0.0.1", port: 5300 },
    resolve: { dedupe: ["react", "react-dom"] },
  });
  await server.listen();
  try {
    await page.goto("http://127.0.0.1:5300", {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    if (id === 16) await page.waitForSelector(".lista-produtos");
    await page.screenshot({
      path: `public/images/project-${id}.jpg`,
      type: "jpeg",
      quality: 82,
    });
    console.log(`Captura: módulo ${id}`);
  } finally {
    await server.close();
  }
}
// Executa a interface original dos projetos Next.js em cópias descartáveis.
for (const id of process.argv[2]
  ? [Number(process.argv[2])]
  : [22, 23, 24, 26, 30]) {
  const log = fs.openSync(`artifacts/next-${id}.log`, "w");
  const child = spawn(
    process.execPath,
    [
      path.resolve("artifacts/qa/node_modules/next/dist/bin/next"),
      "dev",
      "--hostname",
      "127.0.0.1",
      "--port",
      "5301",
    ],
    {
      cwd: path.resolve(`artifacts/sources/${id}`),
      stdio: ["ignore", log, log],
      windowsHide: true,
    },
  );
  try {
    let ok = false;
    for (let n = 0; n < 60; n++) {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const res = await fetch("http://127.0.0.1:5301");
        if (res.ok) {
          ok = true;
          break;
        }
      } catch {}
    }
    if (!ok)
      throw new Error(`Next ${id} indisponível: veja artifacts/next-${id}.log`);
    await page.goto("http://127.0.0.1:5301", {
      waitUntil: "networkidle",
      timeout: 45000,
    });
    await page.screenshot({
      path: `public/images/project-${id}.jpg`,
      type: "jpeg",
      quality: 82,
    });
    console.log(`Captura: módulo ${id}`);
  } catch (e) {
    console.log(e.message);
  } finally {
    spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      windowsHide: true,
      stdio: "ignore",
    });
    await new Promise((r) => child.once("exit", r));
    fs.closeSync(log);
  }
}
await browser.close();
