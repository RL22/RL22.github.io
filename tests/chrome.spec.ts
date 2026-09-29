import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/work/",
  "/work/pendo-core-web-platform/",
  "/building/",
  "/blog/the-router-i-actually-run/",
  "/does-not-exist/",
];

for (const route of routes) {
  test(`${route} has one opaque site header and one footer`, async ({ page }) => {
    await page.goto(route);

    const header = page.getByRole("banner");
    await expect(header).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
    await expect(header).toHaveCSS("backdrop-filter", "none");
  });
}

test("work navigation identifies the current page", async ({ page }) => {
  await page.goto("/work/");

  await expect(page.getByRole("banner").locator('a[href="/work/"]')).toHaveAttribute(
    "aria-current",
    "page"
  );
});

test("writing navigation identifies the current page", async ({ page }) => {
  await page.goto("/building/");

  await expect(page.getByRole("banner").locator('a[href="/building/"]')).toHaveAttribute(
    "aria-current",
    "page"
  );
});

test("mobile navigation closes on Escape and returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");

  // The accessible name flips between "Open menu" and "Close menu", so match
  // both or the locator loses the button the moment it opens.
  const button = page.getByRole("button", { name: /^(Open|Close) menu$/ });
  await expect(button).toHaveAccessibleName("Open menu");
  await button.click();
  await expect(button).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");

  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(button).toBeFocused();
  const box = await button.boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  expect(box!.height).toBeGreaterThanOrEqual(44);
});
