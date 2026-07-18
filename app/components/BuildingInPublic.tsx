"use client";
import Reveal from "./Reveal";
import FeaturedBlock from "./building/FeaturedBlock";
import FeedRow from "./building/FeedRow";
import { feed } from "./building/feed";

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
        <FeaturedBlock />

        {/* Feed */}
        <div className="grid md:grid-cols-2 gap-x-14">
          {feed.map((item, i) => (
            <FeedRow key={item.title} item={item} delay={(i % 2) * 0.08} />
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
