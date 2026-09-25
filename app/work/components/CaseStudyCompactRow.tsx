"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { CaseStudy } from "../content";
import { preventWidow } from "../content";
import { IMPACT_BADGES } from "./CaseStudyCard";

export interface CaseStudyCompactRowProps {
  item: CaseStudy;
  impactBadge?: string;
  className?: string;
}

export function CaseStudyCompactRow({
  item,
  impactBadge,
  className = "",
}: CaseStudyCompactRowProps) {
  const resolvedImpact = impactBadge ?? IMPACT_BADGES[item.slug] ?? "Verified Impact";

  return (
    <article
      className={`group relative p-5 sm:p-6 bg-white hover:bg-cream/40 border-b border-gray-200/90 transition-colors duration-150 motion-reduce:transition-none ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center">
        {/* Company & Timeline Column (3 cols) */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between md:block">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
              {item.company}
            </span>
            <span className="text-xs text-gray-500 font-mono block mt-0.5">
              {item.period}
            </span>
          </div>
          <span className="text-xs text-gray-600 hidden md:block mt-1 font-medium">
            {item.role}
          </span>
        </div>

        {/* Title, Blurb & Badges Column (6 cols) */}
        <div className="md:col-span-6 min-w-0">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-dark transition-colors duration-150">
            <a
              href={`/work/${item.slug}/`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded"
            >
              {preventWidow(item.title)}
            </a>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1 mt-1">
            {item.blurb}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            {/* Impact Badge */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand/10 text-brand-darker border border-brand/20">
              <Sparkles className="w-2.5 h-2.5 text-brand-dark shrink-0" aria-hidden="true" />
              <span>{resolvedImpact}</span>
            </span>

            {/* Stack Tags */}
            {item.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-100 text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {item.stack.length > 3 && (
              <span className="text-[11px] font-mono text-gray-600 px-1">
                +{item.stack.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Explore Link Column (3 cols) */}
        <div className="md:col-span-3 flex md:justify-end items-center pt-2 md:pt-0">
          <a
            href={`/work/${item.slug}/`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark group-hover:text-brand-darker transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded py-1"
          >
            <span>Explore architecture</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default CaseStudyCompactRow;
