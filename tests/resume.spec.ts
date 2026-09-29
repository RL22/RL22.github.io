import { test, expect } from "@playwright/test";

test.describe("/resume", () => {
  test("reflows without horizontal scrolling and keeps body copy readable on phones", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/resume/");
    await expect(page.locator("main#main")).toBeVisible({ timeout: 15000 });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(390);

    const fontSize = await page.locator(".resume-sheet p").first().evaluate((paragraph) =>
      Number.parseFloat(window.getComputedStyle(paragraph).fontSize)
    );
    expect(fontSize).toBeGreaterThanOrEqual(16);
  });

  test("fits a 320px viewport without horizontal scrolling", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto("/resume/");
    await expect(page.locator("main#main")).toBeVisible({ timeout: 15000 });

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(320);
  });

  test("keeps the print action available with a 44px touch target", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/resume/");

    const printButton = page.getByRole("button", { name: "Print / Save as PDF" });
    await expect(printButton).toBeVisible({ timeout: 15000 });
    const box = await printButton.boundingBox();
    expect(box!.height).toBeGreaterThanOrEqual(44);
  });
});
