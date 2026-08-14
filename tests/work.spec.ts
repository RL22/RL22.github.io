import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import workData from "../app/data/work.json";

const slugs = workData.caseStudies.map((c) => c.slug);

test.describe("/work index", () => {
  test("renders the heading and every case study", async ({ page }) => {
    await page.goto("/work/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Four builds, from the platform side."
    );

    for (const c of workData.caseStudies) {
      await expect(page.getByRole("heading", { level: 2, name: c.title })).toBeVisible();
      await expect(page.locator(`a[href="/work/${c.slug}/"]`).first()).toBeVisible();
    }
  });

  test("has no detectable accessibility violations", async ({ page }) => {
    await page.goto("/work/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});

test.describe("/work detail", () => {
  for (const slug of slugs) {
    test(`${slug} renders with one h1, a skip target, and the brief`, async ({ page }) => {
      await page.goto(`/work/${slug}/`);

      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main#main")).toHaveCount(1);

      for (const term of ["Challenge", "Solution", "Outcome"]) {
        await expect(page.getByRole("term").filter({ hasText: term })).toBeVisible();
      }

      // Two blocks: the site-wide Person schema from the root layout, plus
      // this page's CreativeWork.
      const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(jsonLd).toHaveLength(2);
      expect(jsonLd.some((s) => JSON.parse(s)["@type"] === "CreativeWork")).toBe(true);
    });

    test(`${slug} has no detectable accessibility violations`, async ({ page }) => {
      await page.goto(`/work/${slug}/`);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    });
  }

  const DIAGRAMS = [
    {
      slug: "pendo-demand-gen-systems",
      name: /campaign path before and after the template system/i,
      textNodes: 11,
      viewBoxWidth: 480,
      captionPhrase: /instrumentation is added page by page/i,
    },
    {
      slug: "carrot-integrated-marketing-systems",
      name: /split funnel compared with the one-domain funnel/i,
      textNodes: 9,
      viewBoxWidth: 480,
      captionPhrase: /tracking resets/i,
    },
    {
      slug: "carrot-cms-architecture",
      name: /schema record becoming a page/i,
      textNodes: 11,
      viewBoxWidth: 460,
      captionPhrase: /constraint every page is assembled against/i,
    },
  ];

  for (const d of DIAGRAMS) {
    test(`${d.slug} diagram renders with a real accessible name`, async ({ page }) => {
      await page.goto(`/work/${d.slug}/`);

      const svg = page.locator('svg[role="img"]');
      await expect(svg).toHaveCount(1);

      // Labelled by <title> + <desc>, not by a wall of alt text.
      await expect(svg).toHaveAccessibleName(d.name);

      // Labels must be real text nodes, not paths.
      await expect(svg.locator("text")).toHaveCount(d.textNodes);

      // Explanatory prose belongs in the figcaption, not inside the viewBox,
      // where it would scale down with the drawing on small screens.
      const labels = await svg.locator("text").allTextContents();
      for (const label of labels) {
        expect(label.length).toBeLessThanOrEqual(28);
      }
      await expect(page.locator("figure", { has: svg }).locator("figcaption")).toContainText(
        d.captionPhrase
      );

      // Diagrams stay metric-free even on the one case study whose prose
      // carries the sanctioned 30% figure — that number belongs to the
      // outcome field alone, never to a visual.
      const figureText = await page
        .locator("figure", { has: svg })
        .innerText();
      expect(figureText).not.toMatch(/\d+(\.\d+)?%/);

      // It has to actually occupy space: `w-full h-auto` on an SVG collapses
      // to zero if the viewBox or the container is wrong.
      const box = await svg.boundingBox();
      expect(box!.width).toBeGreaterThan(300);
      expect(box!.height).toBeGreaterThan(100);
    });

    test(`${d.slug} diagram stays legible at mobile width`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 800 });
      await page.goto(`/work/${d.slug}/`);

      const svg = page.locator('svg[role="img"]');
      const box = await svg.boundingBox();
      expect(box!.width).toBeLessThanOrEqual(375);

      // At 375px the SVG scales down; the smallest label must still land above
      // ~7px rendered or the diagram is decoration.
      const scale = box!.width / d.viewBoxWidth;
      expect(scale * 10).toBeGreaterThan(6.5);
    });
  }

  test("the sanctioned metric appears on exactly one case study", async ({ page }) => {
    const carriers: string[] = [];
    for (const slug of slugs) {
      await page.goto(`/work/${slug}/`);
      const text = (await page.locator("main").innerText()).toLowerCase();
      if (text.includes("30%")) carriers.push(slug);
    }
    expect(carriers).toEqual(["carrot-cms-architecture"]);
  });
});
