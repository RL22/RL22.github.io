import fs from "node:fs";
import path from "node:path";
import buildingData from "../data/building.json";
import githubData from "../data/github.json";

export type Discipline =
  | "ENGINEERING"
  | "PRODUCT"
  | "MARKETING"
  | "ANALYTICS"
  | "AI"
  | "DESIGN"
  | "SEO";

export type ContentType = "video" | "thoughts" | "repo review" | "product";
export type Layout = "video" | "article" | "comparison" | "review" | "announcement";
export type PublishStatus = "published" | "unpublished";

export type RepoRef = {
  name: string;
  url: string;
  ogImage: string;
};

export type BuildingItem = {
  type: ContentType;
  layout: Layout;
  slug: string;
  category: Discipline[];
  status?: PublishStatus;
  title: string;
  blurb: string;
  url: string | null;
  ctaLabel?: string;
  meta: string;
  videoId?: string | null;
  /** ISO 8601 duration (e.g. "PT24M58S"), for VideoObject structured data. */
  duration?: string;
  publishedAt: string;
  bodyFile: string;
  /** Repos under review — populated for type: "repo review". */
  repos?: RepoRef[];
  /** Own-repo name to cross-reference against github.json — populated for type: "product". */
  repo?: string;
};

export type RepoMeta = {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  topics: string[];
  pushedAt: string;
};

const data = buildingData as unknown as {
  featuredHero: string[];
  featured: BuildingItem;
  items: BuildingItem[];
};

const isPublished = (entry: { status?: PublishStatus }) => entry.status !== "unpublished";

const POSTS_ROOT = path.join(process.cwd(), "content-strategy", "posts");
const bodyCache = new Map<string, string>();

/** Markdown body for an item, read once at build/request time and cached. */
export function getBody(item: Pick<BuildingItem, "bodyFile">): string {
  const cached = bodyCache.get(item.bodyFile);
  if (cached !== undefined) return cached;
  const filePath = path.isAbsolute(item.bodyFile) ? item.bodyFile : path.join(process.cwd(), item.bodyFile);
  const text = fs.readFileSync(filePath, "utf-8");
  bodyCache.set(item.bodyFile, text);
  return text;
}

export const featured = data.featured;
export const items = data.items.filter(isPublished);
export const repos = githubData.repos as RepoMeta[];

/** The 3 slugs curated for the featured hero (1 video + 2 articles), in display order. */
export const featuredHero: BuildingItem[] = data.featuredHero
  .map((slug) => getItemBySlug(slug))
  .filter((item): item is BuildingItem => Boolean(item));

export function getRepoMeta(repoName: string): RepoMeta | undefined {
  return repos.find((r) => r.name === repoName);
}

export function getItemBySlug(slug: string): BuildingItem | undefined {
  if (featured.slug === slug) return featured;
  return items.find((i) => i.slug === slug);
}

export function getAllSlugs(): string[] {
  return [featured.slug, ...items.map((i) => i.slug)];
}

// Pure formatters (typeLabel, formatDate, monthYear, wordCount, readingTime) live in
// ./format.ts, which imports only types from here — keeping it free of the `node:fs`
// import above so client components can use them without pulling fs into the bundle.
export { typeLabel, formatDate, monthYear, wordCount, readingTime } from "./format";
