import buildingData from "../data/building.json";
import githubData from "../data/github.json";

export type BlogCategory =
  | "Bookmarks"
  | "Repo Review"
  | "Thoughts"
  | "Marketing"
  | "AI"
  | "Design"
  | "Code";

export type VideoItem = {
  type: "video";
  layout: "video";
  slug: string;
  placeholder?: boolean;
  category: BlogCategory;
  title: string;
  blurb: string;
  url: string | null;
  meta: string;
  videoId: string | null;
  /** ISO 8601 duration (e.g. "PT24M58S"), for VideoObject structured data. */
  duration?: string;
  publishedAt: string;
  body: string[];
};

export type ArticleItem = {
  type: "article";
  layout: "article";
  slug: string;
  placeholder?: boolean;
  category: BlogCategory;
  title: string;
  blurb: string;
  url: string | null;
  meta: string;
  publishedAt: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
};

export type RepoPage = {
  slug: string;
  repo: string;
  category: BlogCategory;
  publishedAt: string;
  tagline: string;
  body: string[];
  highlights: string[];
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
  featured: VideoItem;
  items: (VideoItem | ArticleItem)[];
  repoPages: RepoPage[];
};

export const featured = data.featured;
export const items = data.items;
export const repoPages = data.repoPages;
export const repos = githubData.repos as RepoMeta[];

export function getRepoMeta(repoName: string): RepoMeta | undefined {
  return repos.find((r) => r.name === repoName);
}

export function getVideoOrArticleBySlug(slug: string): VideoItem | ArticleItem | undefined {
  if (featured.slug === slug) return featured;
  return items.find((i) => i.slug === slug);
}

export function getRepoPageBySlug(slug: string): RepoPage | undefined {
  return repoPages.find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return [featured.slug, ...items.map((i) => i.slug), ...repoPages.map((r) => r.slug)];
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function monthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function wordCount(body: string[]): number {
  return body.join(" ").split(/\s+/).filter(Boolean).length;
}

export function readingTime(body: string[]): string {
  const minutes = Math.max(1, Math.round(wordCount(body) / 200));
  return `${minutes} min read`;
}
