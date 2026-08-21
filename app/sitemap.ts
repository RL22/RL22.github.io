import type { MetadataRoute } from "next";
import githubData from "./data/github.json";
import { SHOW_BUILDING_IN_PUBLIC, SHOW_WORK } from "./config";
import { caseStudies } from "./work/content";
import { featured, items } from "./blog/content";
import type { BuildingItem } from "./blog/content";

export const dynamic = "force-static";

const SITE_URL = "https://rl22.github.io";

function lastModifiedFor(item: BuildingItem): Date | undefined {
  if (item.publishedAt) return new Date(item.publishedAt);
  const repo = item.repo ? githubData.repos.find((r) => r.name === item.repo) : undefined;
  return repo?.pushedAt ? new Date(repo.pushedAt) : undefined;
}

function blogEntries(): MetadataRoute.Sitemap {
  // content.ts's `items`/`featured` exports are already filtered to published-only.
  const all: BuildingItem[] = [featured, ...items];

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
    ...(SHOW_BUILDING_IN_PUBLIC
      ? [{ url: `${SITE_URL}/building/`, lastModified: new Date("2026-08-16"), priority: 0.8 }, ...blogEntries()]
      : []),
  ];
}
