"use client";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import PlaceholderChip from "./building/PlaceholderChip";
import buildingDataRaw from "../data/building.json";
import githubData from "../data/github.json";

type BuildingItem = {
  slug: string;
  layout?: string;
  title: string;
  blurb: string;
  meta: string;
  type: "video" | "article";
  placeholder?: boolean;
  videoId?: string;
  publishedAt?: string;
  body?: string[];
  url?: string;
};

type RepoPage = {
  slug: string;
  repo: string;
  publishedAt?: string;
  tagline: string;
  body?: string[];
  highlights?: string[];
};

type BuildingData = {
  featured: BuildingItem;
  items: BuildingItem[];
  repoPages: RepoPage[];
};

const buildingData = buildingDataRaw as unknown as BuildingData;

const typeLabel: Record<BuildingItem["type"], string> = {
  video: "Video",
  article: "Article",
};

const monthYear = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "";

const featured = buildingData.featured;
const feed = buildingData.items ?? [];

// Data-driven: match each repoPage to its GitHub repo metadata by name.
const repoCards = (buildingData.repoPages ?? [])
  .map((page) => {
    const repo = githubData.repos.find((r) => r.name === page.repo);
    if (!repo) return null;
    return {
      slug: page.slug,
      title: repo.name,
      blurb: page.tagline,
      meta: `${repo.language} · Updated ${monthYear(page.publishedAt ?? repo.pushedAt)}`,
    };
  })
  .filter((r): r is { slug: string; title: string; blurb: string; meta: string } => r !== null)
  .slice(0, 2);

export default function BuildingInPublic() {
  return (
    <section id="building" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-14">
          <span className="section-badge">Building in Public</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Watch the work happen.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Repos, writing, and video, in the open as it ships. Proof of work beats claims of it.
          </p>
        </Reveal>

        {/* Featured: video + stacked repos */}
        <Reveal className="mb-14">
          <div className="grid md:grid-cols-[1fr_minmax(0,360px)] gap-6">
            {/* Col 1: featured item */}
            <a
              href={`/blog/${featured.slug}/`}
              className="group flex flex-col bg-cream rounded-2xl border border-cream-dark p-6"
            >
              <div className="relative aspect-video rounded-xl bg-brand/10 flex items-center justify-center overflow-hidden mb-5">
                <span className="w-14 h-14 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-white translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-2">
                Featured {typeLabel[featured.type]}{" "}
                {featured.placeholder && <PlaceholderChip />}
              </p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-dark transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{featured.blurb}</p>
              <p className="text-sm font-medium text-gray-600 mt-auto">{featured.meta}</p>
            </a>

            {/* Col 2: two stacked repos */}
            <div className="flex flex-col gap-6">
              {repoCards.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  className="group flex-1 flex flex-col bg-cream rounded-2xl border border-cream-dark p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-2">
                    Code
                  </p>
                  <h3 className="font-bold text-lg mb-1 flex items-center gap-1.5">
                    <span className="group-hover:text-brand-dark transition-colors">{r.title}</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{r.blurb}</p>
                  <p className="text-sm font-medium text-gray-600 mt-auto">{r.meta}</p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Feed */}
        <div className="grid md:grid-cols-2 gap-x-14">
          {feed.map((item, i) => (
            <motion.a
              key={item.slug}
              href={`/blog/${item.slug}/`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
              className="group border-t border-gray-200 py-6 flex gap-5 items-baseline"
            >
              <span className="text-brand-dark text-xs font-bold uppercase tracking-widest w-14 shrink-0">
                {typeLabel[item.type]}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-1.5">
                  <span className="group-hover:text-brand-dark transition-colors">{item.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  {item.placeholder && <PlaceholderChip />}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.blurb}</p>
                <p className="text-sm font-medium text-gray-600">{item.meta}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <Reveal className="border-t border-gray-200 pt-10 mt-2">
          <a href="/blog" className="btn-outline">
            View all resources
          </a>
        </Reveal>
      </div>
    </section>
  );
}
