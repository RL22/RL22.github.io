import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import FeaturedBlock from "../components/building/FeaturedBlock";
import FeedRow from "../components/building/FeedRow";
import { feed, repoItems } from "../components/building/feed";
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

// Complete inventory: repos join the written/video feed here (they render
// separately in the featured column on the homepage section).
const allFeedItems = [...feed, ...repoItems];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: allFeedItems
    .filter((item) => !item.placeholder)
    .map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      url: item.url,
    })),
};

export default function BlogPage() {
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

        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
          Featured
        </h2>
        <FeaturedBlock />

        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
          All resources
        </h2>
        <ul className="grid md:grid-cols-2 gap-x-14">
          {allFeedItems.map((item, i) => (
            <li key={item.title} className="list-none">
              <FeedRow item={item} delay={(i % 2) * 0.05} />
            </li>
          ))}
        </ul>

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
