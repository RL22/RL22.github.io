import type { ComponentType } from "react";
import CampaignLoop from "./CampaignLoop";
import OneDomainFunnel from "./OneDomainFunnel";
import TemplateOverlap from "./TemplateOverlap";

export type Diagram = {
  Component: ComponentType;
  caption: string;
};

// Keyed by case study slug. A study may have a diagram, screenshots, both, or
// neither — `images` in work.json stays the slot for archived screenshots, and
// this stays the slot for original artwork.
export const diagrams: Record<string, Diagram> = {
  "pendo-demand-gen-systems": {
    Component: CampaignLoop,
    caption:
      "Above, every campaign asset passes through engineering, and instrumentation is added page by page — so it is only as complete as whoever remembered it. Below, marketing ops composes from template modules and the tracking comes with the template, which is what makes the return arrow worth having: a hypothesis can be formed, shipped, and read against a clean baseline without a ticket.",
  },
  "carrot-cms-architecture": {
    Component: TemplateOverlap,
    caption:
      "Schema, tokens, and the rendered page overlap rather than sit in a row: each one picks up where the last leaves off. The tokens in the middle are the constraint every page is assembled against, not a checklist reviewed afterward — which is why the page's layout lines up with the tokens panel's grid rather than being checked against it later.",
  },
  "carrot-integrated-marketing-systems": {
    Component: OneDomainFunnel,
    caption:
      "Above, the visitor crosses a domain boundary at the moment they are most likely to convert, and tracking resets with them — the intent, and the SEO value it earns, lands off the main domain. Below, the form is embedded in the page and the funnel never leaves the site: one unbroken path, with Marketo still owning the record. Both panels are drawn to the same width, so the difference is the thing missing from the lower one.",
  },
};

export function getDiagram(slug: string): Diagram | undefined {
  return diagrams[slug];
}
