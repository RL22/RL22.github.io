"use client";

import type { WorkImage } from "../content";
import { slugifyCompany } from "../content";

export interface WorkMediaPreviewProps {
  image?: WorkImage;
  company?: string;
  url?: string;
  slug?: string;
  priority?: boolean;
  aspectRatio?: "16/10" | "4/3" | "16/9" | "auto";
  showCaption?: boolean;
  className?: string;
}

/**
 * Derives a realistic domain / URL tag for the browser chrome bar
 * if no explicit URL is passed.
 */
function resolveDisplayUrl(url?: string, company?: string, slug?: string): string {
  if (url) return url;

  if (slug) {
    if (slug.startsWith("pendo-demand-gen")) return "go.pendo.io";
    if (slug.startsWith("pendo")) return "pendo.io";
    if (slug.startsWith("carrot")) return "getcarrot.com";
    if (slug.startsWith("kiddom")) return "kiddom.co";
    if (slug.startsWith("mednition")) return "insights.mednition.com";
    if (slug.startsWith("appzen")) return "info.appzen.com";
  }

  if (company) {
    const slugified = slugifyCompany(company);
    if (slugified.includes("pendo")) return "pendo.io";
    if (slugified.includes("carrot")) return "getcarrot.com";
    if (slugified.includes("kiddom")) return "kiddom.co";
    if (slugified.includes("mednition")) return "mednition.com";
    if (slugified.includes("appzen") || slugified.includes("andersen")) return "appzen.com";
    return `${slugified}.com`;
  }

  return "platform.internal";
}

export function WorkMediaPreview({
  image,
  company,
  url,
  slug,
  priority = false,
  aspectRatio = "16/10",
  showCaption = false,
  className = "",
}: WorkMediaPreviewProps) {
  const displayUrl = resolveDisplayUrl(url, company, slug);

  const aspectClass =
    aspectRatio === "16/10"
      ? "aspect-[16/10]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "16/9"
      ? "aspect-video"
      : "";

  return (
    <figure
      className={`rounded-xl border border-gray-200/90 bg-gray-50 shadow-xs overflow-hidden flex flex-col transition-all duration-200 group-hover:border-gray-300 ${className}`}
    >
      {/* Browser chrome header */}
      <div className="bg-gray-100/95 px-3 py-2 border-b border-gray-200/80 flex items-center justify-between gap-2 select-none">
        {/* macOS-style window dots */}
        <div className="flex items-center gap-1.5 w-12" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
        </div>

        {/* Faux browser URL / domain bar */}
        <div
          className="flex-1 max-w-[220px] sm:max-w-xs mx-auto flex items-center justify-center px-2.5 py-0.5 rounded-md bg-white border border-gray-200/70 text-[11px] font-mono text-gray-700 truncate shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          title={displayUrl}
        >
          <span className="text-gray-600 mr-1 select-none" aria-hidden="true">
            https://
          </span>
          <span className="truncate font-semibold text-gray-900">{displayUrl}</span>
        </div>

        {/* Right balance spacer */}
        <div className="w-12 flex justify-end" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-gray-300/60" />
        </div>
      </div>

      {/* Viewport content area */}
      <div className={`relative w-full overflow-hidden bg-gray-100 ${aspectClass}`}>
        {image ? (
          <picture className="block w-full h-full">
            {image.webp && <source srcSet={image.webp} type="image/webp" />}
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </picture>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs font-mono p-6 text-center">
            <span>Visual preview unavailable</span>
          </div>
        )}
      </div>

      {/* Optional visible caption */}
      {showCaption && image?.caption && (
        <figcaption className="p-3 bg-white border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default WorkMediaPreview;
