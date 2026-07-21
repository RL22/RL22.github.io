import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "../Reveal";
import PlaceholderChip from "./PlaceholderChip";
import { featured, repoItems, typeLabel } from "./feed";

export default function FeaturedBlock() {
  return (
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
  );
}
