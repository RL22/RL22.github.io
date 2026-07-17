"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "./Reveal";
import githubData from "../data/github.json";
import buildingData from "../data/building.json";

type FeedItem = {
  type: "code" | "article" | "video";
  placeholder?: boolean;
  title: string;
  blurb: string;
  url: string;
  meta: string;
};

const typeLabel: Record<FeedItem["type"], string> = {
  code: "Code",
  article: "Article",
  video: "Video",
};

const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

const repoItems: FeedItem[] = githubData.repos.map((r) => ({
  type: "code",
  title: r.name,
  blurb: r.description ?? "",
  url: r.url,
  meta: `${r.language} · Updated ${monthYear(r.pushedAt)}`,
}));

// Repos render in the featured column; the feed carries articles and video.
const feed: FeedItem[] = buildingData.items as FeedItem[];

const featured = buildingData.featured as FeedItem;

function PlaceholderChip() {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-gray-400 rounded px-1.5 py-0.5 align-middle">
      Placeholder
    </span>
  );
}

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
            {/* Col 1: featured video */}
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
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
              {repoItems.slice(0, 2).map((r) => (
                <a
                  key={r.title}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
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
          <a
            href="https://github.com/RL22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Full profile on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
