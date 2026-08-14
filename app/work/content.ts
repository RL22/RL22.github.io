import workData from "../data/work.json";

export type Pillar = "Engineering" | "Product" | "Marketing" | "Analytics";

export type WorkImage = {
  /** PNG fallback. */
  src: string;
  /** Preferred source; see public/work/MANIFEST.md. */
  webp?: string;
  alt: string;
  caption?: string;
  /** Intrinsic dimensions; see public/work/MANIFEST.md. Reserves layout space to prevent CLS. */
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  company: string;
  role: string;
  period: string;
  publishedAt: string;
  title: string;
  pillars: Pillar[];
  blurb: string;
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  body: string[];
  diagramNote: string;
  images: WorkImage[];
};

// JSON is untyped at rest, so the double cast is required under `strict`.
// Same pattern as app/blog/content.ts.
const data = workData as unknown as { caseStudies: CaseStudy[] };

export const caseStudies = data.caseStudies;

// Filter order is fixed rather than derived, so the pillar rail reads the same
// on every page regardless of which studies happen to be present.
export const PILLARS: Pillar[] = ["Engineering", "Product", "Marketing", "Analytics"];

export function getAllSlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByPillar(pillar: Pillar): CaseStudy[] {
  return caseStudies.filter((c) => c.pillars.includes(pillar));
}

// Glue the last two words with a non-breaking space so headline reflow never
// strands a single word alone on its own line. Rendering-only: the copy
// checked by content.test.ts and used in metadata stays the plain string.
export function preventWidow(text: string): string {
  const lastSpace = text.lastIndexOf(" ");
  if (lastSpace === -1) return text;
  return `${text.slice(0, lastSpace)} ${text.slice(lastSpace + 1)}`;
}
