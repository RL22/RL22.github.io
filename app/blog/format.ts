import type { ContentType } from "./content";

export const typeLabel: Record<ContentType, string> = {
  video: "Video",
  thoughts: "Thoughts",
  "repo review": "Repo Review",
  product: "Product",
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function monthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function wordCount(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

export function readingTime(body: string): string {
  const minutes = Math.max(1, Math.round(wordCount(body) / 200));
  return `${minutes} min read`;
}
