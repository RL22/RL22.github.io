import type { MetadataRoute } from "next";
import buildingDataRaw from "./data/building.json";
import githubData from "./data/github.json";
import { SHOW_BUILDING_IN_PUBLIC, SHOW_WORK } from "./config";
import { caseStudies } from "./work/content";

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

function workEntries(): MetadataRoute.Sitemap {
  const latestCaseStudy = caseStudies.reduce<Date | undefined>((latest, c) => {
    if (!c.publishedAt) return latest;
    const d = new Date(c.publishedAt);
    return !latest || d > latest ? d : latest;
  }, undefined);

  return [
    {
      url: `${SITE_URL}/work/`,
      lastModified: latestCaseStudy,
      priority: 0.8,
    },
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}/`,
      lastModified: c.publishedAt ? new Date(c.publishedAt) : undefined,
      priority: 0.7,
    })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-08-16"),
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume/`,
      lastModified: new Date("2026-08-16"),
      priority: 0.8,
    },
    ...(SHOW_WORK ? workEntries() : []),
    ...(SHOW_BUILDING_IN_PUBLIC ? blogEntries() : []),
  ];
}
