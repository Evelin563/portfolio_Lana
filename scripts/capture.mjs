import { chromium } from "../artifacts/qa/node_modules/playwright/index.mjs";
import fs from "node:fs";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 760 },
  deviceScaleFactor: 1,
});
const items = JSON.parse(
  fs.readFileSync("artifacts/project-inventory.json", "utf8"),
);
for (const p of items.filter((p) => p.demo?.startsWith("./"))) {
  try {
    await page.goto("http://127.0.0.1:5173/" + p.demo.slice(2), {
      waitUntil: "networkidle",
      timeout: 25000,
    });
    await page.screenshot({
      path: `public/images/project-${p.module}.jpg`,
      type: "jpeg",
      quality: 82,
    });
    console.log(`Captura: módulo ${p.module}`);
  } catch (e) {
    console.log(`Falha ${p.module}: ${e.message.slice(0, 100)}`);
  }
}
await browser.close();
