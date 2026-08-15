import { describe, expect, it } from "vitest";
import {
  PILLARS,
  caseStudies,
  getAllSlugs,
  getCaseStudiesByPillar,
  getCaseStudyBySlug,
  type CaseStudy,
} from "./content";

// Prose fields only. `period` and `publishedAt` are dates and are exempt from
// the numeric-claim rules below.
const PROSE_FIELDS = ["title", "blurb", "challenge", "solution", "outcome"] as const;

// Image alt text and captions are reader-facing prose too, so they are held to
// the same claim policy as the body.
function proseOf(c: CaseStudy): string {
  return [
    ...PROSE_FIELDS.map((f) => c[f]),
    ...c.body,
    ...c.images.flatMap((i) => [i.alt, i.caption ?? ""]),
  ].join("\n");
}

describe("work content shape", () => {
  it("exposes seven case studies", () => {
    expect(caseStudies).toHaveLength(7);
  });

  it("has unique, url-safe slugs", () => {
    const slugs = getAllSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("looks up by slug and returns undefined for unknown slugs", () => {
    expect(getCaseStudyBySlug("carrot-cms-architecture")?.company).toBe("Carrot Fertility");
    expect(getCaseStudyBySlug("nope")).toBeUndefined();
  });

  it("filters by pillar, and every pillar has at least one study", () => {
    for (const pillar of PILLARS) {
      expect(getCaseStudiesByPillar(pillar).length).toBeGreaterThan(0);
    }
  });

  it("only uses declared pillars", () => {
    for (const c of caseStudies) {
      expect(c.pillars.length).toBeGreaterThan(0);
      for (const p of c.pillars) expect(PILLARS).toContain(p);
    }
  });

  it("keeps every blurb usable as a meta description", () => {
    for (const c of caseStudies) {
      expect(c.blurb.length).toBeLessThanOrEqual(155);
      expect(c.blurb.length).toBeGreaterThan(40);
    }
  });

  it("gives every study a lead plus supporting paragraphs and a stack", () => {
    for (const c of caseStudies) {
      expect(c.body.length).toBeGreaterThanOrEqual(4);
      expect(c.stack.length).toBeGreaterThan(0);
    }
  });

  it("requires alt text on every image", () => {
    for (const c of caseStudies) {
      for (const img of c.images) {
        expect(img.src).toMatch(/^\/work\//);
        expect(img.alt.trim().length).toBeGreaterThan(10);
      }
    }
  });
});

// These guard the claim policy recorded in SITE_COPY.md. The 30% figure was
// retracted from the public site on 2026-07-21 and deliberately reinstated for
// /work on 2026-08-06, scoped to the Carrot CMS study and stated once.
describe("claim policy", () => {
  const SANCTIONED = "reduced marketing dev requests by 30%";

  it("states the sanctioned metric exactly once, in one study's outcome", () => {
    const carriers = caseStudies.filter((c) => proseOf(c).includes(SANCTIONED));
    expect(carriers.map((c) => c.slug)).toEqual(["carrot-cms-architecture"]);

    const carrier = carriers[0];
    expect(carrier.outcome).toContain(SANCTIONED);
    expect(carrier.blurb).not.toContain("30%");
    expect(carrier.body.join("\n")).not.toContain("30%");
  });

  it("introduces no other quantified claim anywhere", () => {
    for (const c of caseStudies) {
      const numeric = proseOf(c).match(/\d+(\.\d+)?\s?(%|percent|x\b)/gi) ?? [];
      const allowed = c.slug === "carrot-cms-architecture" ? ["30%"] : [];
      expect(numeric).toEqual(allowed);
    }
  });

  it("uses ownership verbs, not management verbs", () => {
    for (const c of caseStudies) {
      expect(proseOf(c)).not.toMatch(/\b(managed|oversaw|supervised|spearheaded)\b/i);
    }
  });

  it("avoids the banned marketing register", () => {
    const banned =
      /\b(leverage[ds]?|seamless(ly)?|robust|cutting.edge|supercharge[ds]?|unlock(ed|s)?|10x|growth hacker|best.in.class|game.chang(er|ing))\b/i;
    for (const c of caseStudies) {
      expect(proseOf(c)).not.toMatch(banned);
    }
  });
});
