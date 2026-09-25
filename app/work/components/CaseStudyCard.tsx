"use client";

import { ArrowRight, Sparkles, Network } from "lucide-react";
import type { CaseStudy } from "../content";
import { preventWidow } from "../content";
import { getDiagram } from "../diagrams";
import { WorkMediaPreview } from "./WorkMediaPreview";

export const IMPACT_BADGES: Record<string, string> = {
  "pendo-core-web-platform": "72h → 24h launch velocity",
  "pendo-demand-gen-systems": "40+ conversion paths",
  "carrot-cms-architecture": "~30% dev dependency cut",
  "carrot-integrated-marketing-systems": "Single-domain funnel · 0 tracking loss",
  "kiddom-component-architecture": "40+ React components · 0 lost pages",
  "mednition-landing-page-templates": "5 yrs in production unchanged",
  "appzen-campaign-templates": "Multi-campaign template reuse",
};

export interface CaseStudyCardProps {
  item: CaseStudy;
  impactBadge?: string;
  priority?: boolean;
  className?: string;
}

export function CaseStudyCard({
  item,
  impactBadge,
  priority = false,
  className = "",
}: CaseStudyCardProps) {
  const resolvedImpact = impactBadge ?? IMPACT_BADGES[item.slug] ?? "Verified Impact";
  const primaryImage = item.images && item.images.length > 0 ? item.images[0] : undefined;
  const hasDiagram = Boolean(getDiagram(item.slug));

  return (
    <article
      className={`group relative bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col justify-between overflow-hidden motion-reduce:transition-none ${className}`}
    >
      <div>
        {/* Visual Browser Preview */}
        <div className="p-4 sm:p-5 pb-0">
          <WorkMediaPreview
            image={primaryImage}
            company={item.company}
            slug={item.slug}
            priority={priority}
            aspectRatio="16/10"
          />
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 sm:pt-5">
          {/* Header Metadata: Company, Role, Period */}
          <div className="flex flex-wrap items-center justify-between gap-y-1 gap-x-3 mb-3 text-xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold uppercase tracking-wider text-brand-dark">
                {item.company}
              </span>
              <span className="text-gray-300 select-none" aria-hidden="true">
                ·
              </span>
              <span className="text-gray-600 font-medium">{item.role}</span>
            </div>
            <span className="font-mono text-gray-500 text-[11px]">{item.period}</span>
          </div>

          {/* Impact Highlight Badge & Diagram Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand-darker border border-brand/20">
              <Sparkles className="w-3 h-3 text-brand-dark shrink-0" aria-hidden="true" />
              <span>{resolvedImpact}</span>
            </span>

            {hasDiagram && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-700 border border-gray-200">
                <Network className="w-3 h-3 text-gray-500 shrink-0" aria-hidden="true" />
                <span>Architecture Diagram</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-dark transition-colors duration-200">
            <a
              href={`/work/${item.slug}/`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded"
            >
              {preventWidow(item.title)}
            </a>
          </h2>

          {/* Editorial Blurb */}
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4">
            {item.blurb}
          </p>

          {/* Pillars tags */}
          <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Discipline pillars">
            {item.pillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-block bg-cream-dark text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {pillar}
              </span>
            ))}
          </div>

          {/* Stack chips */}
          <div
            className="flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-100"
            aria-label="Technologies used"
          >
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-50 border border-gray-200/80 text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
        <a
          href={`/work/${item.slug}/`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark group-hover:text-brand-darker transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded py-0.5"
        >
          <span>Explore architecture &amp; build</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

export default CaseStudyCard;
