"use client";

import { LayoutGrid, List } from "lucide-react";

export type WorkViewMode = "grid" | "compact";

export interface WorkViewToggleProps {
  viewMode: WorkViewMode;
  onChange: (mode: WorkViewMode) => void;
  className?: string;
  id?: string;
}

export function WorkViewToggle({
  viewMode,
  onChange,
  className = "",
  id = "work-view-toggle",
}: WorkViewToggleProps) {
  return (
    <div
      id={id}
      role="group"
      aria-label="View mode layout options"
      className={`inline-flex items-center p-1 bg-cream-dark/70 rounded-lg border border-gray-200/80 shadow-xs ${className}`}
    >
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-pressed={viewMode === "grid"}
        aria-label="Grid showcase view"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark motion-reduce:transition-none ${
          viewMode === "grid"
            ? "bg-white text-gray-900 shadow-xs"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <LayoutGrid className="w-3.5 h-3.5 text-current" aria-hidden="true" />
        <span>Grid</span>
      </button>

      <button
        type="button"
        onClick={() => onChange("compact")}
        aria-pressed={viewMode === "compact"}
        aria-label="Compact table view"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark motion-reduce:transition-none ${
          viewMode === "compact"
            ? "bg-white text-gray-900 shadow-xs"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <List className="w-3.5 h-3.5 text-current" aria-hidden="true" />
        <span>Compact</span>
      </button>
    </div>
  );
}

export default WorkViewToggle;
