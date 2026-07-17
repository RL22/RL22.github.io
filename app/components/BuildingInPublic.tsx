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

const feed: FeedItem[] = [
  ...(buildingData.items as FeedItem[]),
  ...repoItems,
];

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

        {/* Featured */}
        <Reveal className="mb-14">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-[minmax(0,420px)_1fr] gap-8 items-center bg-cream rounded-2xl border border-cream-dark p-6 md:p-8"
          >
            <div className="relative aspect-video rounded-xl bg-brand/10 flex items-center justify-center overflow-hidden">
              <span className="w-14 h-14 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-white translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-2">
                Featured {typeLabel[featured.type]}{" "}
                {featured.placeholder && <PlaceholderChip />}
              </p>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-dark transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">{featured.blurb}</p>
              <p className="text-sm font-medium text-gray-600">{featured.meta}</p>
            </div>
          </a>
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
      </div>
    </section>
  );
}
