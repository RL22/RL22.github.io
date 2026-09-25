"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WorkHero } from "./components/WorkHero";
import { WorkFilterBar, type FilterCategory } from "./components/WorkFilterBar";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { CaseStudyCompactRow } from "./components/CaseStudyCompactRow";
import { type WorkViewMode } from "./components/WorkViewToggle";
import { caseStudies, CASE_STUDY_METRICS, getPillarCounts } from "./content";

export function WorkPageClient() {
  const [selectedPillar, setSelectedPillar] = useState<FilterCategory>("All");
  const [viewMode, setViewMode] = useState<WorkViewMode>("grid");
  const prefersReducedMotion = useReducedMotion();

  const pillarCounts = useMemo(() => getPillarCounts(), []);

  const filteredStudies = useMemo(() => {
    if (selectedPillar === "All") return caseStudies;
    return caseStudies.filter((c) => c.pillars.includes(selectedPillar));
  }, [selectedPillar]);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Editorial Hero with Scan-first Proof Ticker */}
      <WorkHero />

      {/* Interactive Controls & Case Studies Section */}
      <section className="pt-2 pb-20" aria-label="Case studies directory">
        <WorkFilterBar
          activeFilter={selectedPillar}
          onFilterChange={setSelectedPillar}
          counts={pillarCounts}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          contentPanelId="work-case-studies-panel"
        />

        {/* Dynamic Case Studies View */}
        {viewMode === "grid" ? (
          <div
            id="work-case-studies-panel"
            role="region"
            aria-label="Case studies showcase grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredStudies.map((c, idx) => (
                <motion.div
                  key={c.slug}
                  layout={!prefersReducedMotion}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                  }
                >
                  <CaseStudyCard
                    item={c}
                    impactBadge={CASE_STUDY_METRICS[c.slug]?.badge}
                    priority={idx < 2}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div
            id="work-case-studies-panel"
            role="region"
            aria-label="Case studies compact list"
            className="divide-y divide-gray-200/90 border border-gray-200/90 bg-white rounded-2xl shadow-xs overflow-hidden mt-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredStudies.map((c) => (
                <motion.div
                  key={c.slug}
                  layout={!prefersReducedMotion}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                  }
                >
                  <CaseStudyCompactRow
                    item={c}
                    impactBadge={CASE_STUDY_METRICS[c.slug]?.badge}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredStudies.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            <p className="text-base font-medium">No case studies found for this pillar.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default WorkPageClient;
