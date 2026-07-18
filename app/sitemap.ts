import type { MetadataRoute } from "next";
import buildingDataRaw from "./data/building.json";
import githubData from "./data/github.json";

export const dynamic = "force-static";

const SITE_URL = "https://rl22.github.io";

type BuildingItem = {
  slug: string;
  publishedAt?: string;
};

type RepoPage = {
  slug: string;
  repo?: string;
  publishedAt?: string;
};

type BuildingData = {
  featured: BuildingItem;
  items: BuildingItem[];
  repoPages: RepoPage[];
};

const buildingData = buildingDataRaw as unknown as BuildingData;

function lastModifiedFor(item: BuildingItem | RepoPage): Date | undefined {
  if (item.publishedAt) return new Date(item.publishedAt);
  const repo = "repo" in item ? githubData.repos.find((r) => r.name === item.repo) : undefined;
  return repo?.pushedAt ? new Date(repo.pushedAt) : undefined;
}

function blogEntries(): MetadataRoute.Sitemap {
  const all: (BuildingItem | RepoPage)[] = [
    buildingData.featured,
    ...(buildingData.items ?? []),
    ...(buildingData.repoPages ?? []),
  ].filter(Boolean);

  // De-dupe by slug (the featured item also appears in items/repoPages in
  // some data shapes) so each /blog/<slug>/ is listed once.
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  for (const item of all) {
    if (!item?.slug || seen.has(item.slug)) continue;
    seen.add(item.slug);
    entries.push({
      url: `${SITE_URL}/blog/${item.slug}/`,
      lastModified: lastModifiedFor(item),
      priority: 0.7,
    });
  }

  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume/`,
      priority: 0.8,
    },
    ...blogEntries(),
  ];
}
