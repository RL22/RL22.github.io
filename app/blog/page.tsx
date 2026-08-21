import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import FeaturedHero from "../components/building/FeaturedHero";
import BuildingList from "../building/BuildingList";
import { featured, featuredHero, items } from "./content";
import { SHOW_BUILDING_IN_PUBLIC } from "../config";

export const metadata: Metadata = {
  ...(SHOW_BUILDING_IN_PUBLIC ? {} : { robots: { index: false, follow: false } }),
  title: "Blog & Resources | Rodney L. Lewis",
  description:
    "Repos, articles, and video on building in public: marketing web platforms, open source, and the systems behind them.",
  alternates: {
    canonical: "/blog",
    ...(SHOW_BUILDING_IN_PUBLIC ? { types: { "application/rss+xml": "/feed.xml" } } : {}),
  },
  openGraph: {
    title: "Blog & Resources | Rodney L. Lewis",
    description:
      "Repos, articles, and video on building in public: marketing web platforms, open source, and the systems behind them.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog & Resources | Rodney L. Lewis",
    description:
      "Repos, articles, and video on building in public: marketing web platforms, open source, and the systems behind them.",
  },
};

const allItems = [featured, ...items];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: allItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.title,
    url: `https://rl22.github.io/blog/${item.slug}/`,
  })),
};

export default function BlogPage() {
  const heroSlugs = new Set(featuredHero.map((i) => i.slug));
  const rest = items.filter((i) => !heroSlugs.has(i.slug));

  return (
    <main id="main" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <a
          href="/"
          className="text-gray-600 hover:text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to site
        </a>

        <div className="max-w-3xl mb-14">
          <span className="section-badge">Building in Public</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog & Resources</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every repo, article, and video, in one place, updated as the work ships.
          </p>
        </div>

        <FeaturedHero />

        <BuildingList items={rest} />

        <div className="border-t border-gray-200 pt-10 mt-2">
          <a
            href="https://github.com/RL22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Full profile on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
