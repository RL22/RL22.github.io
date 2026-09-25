"use client";

import { useRef, type KeyboardEvent } from "react";
import { PILLARS, caseStudies, type Pillar } from "../content";
import { WorkViewToggle, type WorkViewMode } from "./WorkViewToggle";

export type FilterCategory = "All" | Pillar;

export const FILTER_CATEGORIES: FilterCategory[] = ["All", ...PILLARS];

export interface WorkFilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (pillar: FilterCategory) => void;
  counts?: Record<FilterCategory, number>;
  viewMode?: WorkViewMode;
  onViewModeChange?: (mode: WorkViewMode) => void;
  contentPanelId?: string;
  className?: string;
}

export function WorkFilterBar({
  activeFilter,
  onFilterChange,
  counts,
  viewMode,
  onViewModeChange,
  contentPanelId = "work-case-studies-panel",
  className = "",
}: WorkFilterBarProps) {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Derive default counts from caseStudies if not explicitly passed
  const resolvedCounts: Record<FilterCategory, number> = counts ?? {
    All: caseStudies.length,
    Engineering: caseStudies.filter((c) => c.pillars.includes("Engineering")).length,
    Product: caseStudies.filter((c) => c.pillars.includes("Product")).length,
    Marketing: caseStudies.filter((c) => c.pillars.includes("Marketing")).length,
    Analytics: caseStudies.filter((c) => c.pillars.includes("Analytics")).length,
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        nextIndex = (currentIndex + 1) % FILTER_CATEGORIES.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        nextIndex = (currentIndex - 1 + FILTER_CATEGORIES.length) % FILTER_CATEGORIES.length;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = FILTER_CATEGORIES.length - 1;
        break;
      default:
        return;
    }

    const nextCategory = FILTER_CATEGORIES[nextIndex];
    onFilterChange(nextCategory);
    tabsRef.current[nextIndex]?.focus();
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/90 ${className}`}
    >
      {/* Accessible Pill Filter Tablist */}
      <div
        role="tablist"
        aria-label="Filter case studies by discipline pillar"
        className="flex flex-wrap items-center gap-2"
      >
        {FILTER_CATEGORIES.map((category, index) => {
          const isSelected = activeFilter === category;
          const count = resolvedCounts[category] ?? 0;

          return (
            <button
              key={category}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`filter-tab-${category.toLowerCase()}`}
              aria-selected={isSelected}
              aria-controls={contentPanelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onFilterChange(category)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-1 motion-reduce:transition-none ${
                isSelected
                  ? "bg-brand-dark text-white shadow-xs"
                  : "bg-cream/90 hover:bg-cream-dark text-gray-700 border border-cream-dark/90"
              }`}
            >
              <span>{category}</span>
              <span
                className={`inline-flex items-center justify-center px-1.5 py-0.2 rounded-full text-[11px] font-mono leading-tight ${
                  isSelected
                    ? "bg-white/20 text-white font-medium"
                    : "bg-black/5 text-gray-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* View Toggle (Grid vs. List) */}
      {viewMode && onViewModeChange && (
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <span className="text-xs font-medium text-gray-500 hidden md:inline">
            View:
          </span>
          <WorkViewToggle viewMode={viewMode} onChange={onViewModeChange} />
        </div>
      )}
    </div>
  );
}

export default WorkFilterBar;
