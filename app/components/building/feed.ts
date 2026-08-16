import githubData from "../../data/github.json";
import buildingData from "../../data/building.json";

export type FeedItem = {
  type: "code" | "article" | "video";
  placeholder?: boolean;
  category?: string;
  title: string;
  blurb: string;
  url: string;
  meta: string;
};

export const typeLabel: Record<FeedItem["type"], string> = {
  code: "Code",
  article: "Article",
  video: "Video",
};

export const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

export const repoItems: FeedItem[] = githubData.repos.map((r) => ({
  type: "code",
  title: r.name,
  blurb: r.description ?? "",
  url: r.url,
  meta: `${r.language} · Updated ${monthYear(r.pushedAt)}`,
}));

// Repos render in the featured column; the feed carries articles and video.
export const feed: FeedItem[] = buildingData.items as FeedItem[];

export const featured: FeedItem = buildingData.featured as FeedItem;
