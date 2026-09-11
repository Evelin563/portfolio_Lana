import { chromium } from "../artifacts/qa/node_modules/playwright/index.mjs";
import fs from "node:fs";
import assert from "node:assert/strict";
import { projects } from "../src/data/projects.js";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
try {
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
    assert.equal(await page.locator("main article").count(), projects.length + 4);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Overflow em ${width}px`,
    );
    await page.evaluate(async () => {
      await Promise.all(
        [...document.images].map((img) => {
          img.loading = "eager";
          return img.decode().catch(() => {});
        }),
      );
    });
    const missing = await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs
          .filter((i) => !i.complete || i.naturalWidth === 0)
          .map((i) => i.src),
      );
    assert.deepEqual(missing, []);
    await page.screenshot({
      path: `artifacts/portfolio-${width}.png`,
      fullPage: width === 390,
    });
    console.log(`Tela ${width}px: sem overflow, imagens carregadas`);
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle" });
  for (const p of projects) {
    const button = page.getByRole("button", {
      name: `Ver detalhes de ${p.title}`,
      exact: true,
    });
    await button.click();
    await page.getByRole("dialog").waitFor();
    assert.equal(await page.locator("#project-title").innerText(), p.title);
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("dialog").count(), 0);
    assert.ok(
      await button.evaluate((el) => el === document.activeElement),
      "Foco não restaurado",
    );
    assert.ok(fs.existsSync("public/" + p.image.slice(2)));
    assert.ok(fs.existsSync("public/" + p.source.slice(2)));
    if (p.demo?.startsWith("./"))
      assert.ok(fs.existsSync("public/" + p.demo.slice(2)));
  }
  assert.deepEqual(errors, []);
  console.log(
    "Diálogos: abertura, Escape, retorno de foco e arquivos válidos. Sem erros JavaScript.",
  );
} finally {
  await browser.close();
}
