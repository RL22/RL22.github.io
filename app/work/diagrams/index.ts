import type { ComponentType } from "react";
import CampaignLoop from "./CampaignLoop";
import OneDomainFunnel from "./OneDomainFunnel";
import SuiteHierarchy from "./SuiteHierarchy";
import WebflowCmsSchema from "./WebflowCmsSchema";

export type Diagram = {
  Component: ComponentType;
  caption: string;
};

// Keyed by case study slug. A study may have a diagram, screenshots, both, or
// neither — `images` in work.json stays the slot for archived screenshots, and
// this stays the slot for original artwork.
export const diagrams: Record<string, Diagram> = {
  "pendo-core-web-platform": {
    Component: SuiteHierarchy,
    caption:
      "Above, every product route is flat and disconnected from the catalog, requiring a scoping conversation, an engineering ticket, and a bespoke build that took 72 hours to launch. Below, product families organize under a shared /{family}/{use-case}/ pattern: new pages assemble from existing React components against structured headless CMS records, reducing launch time to 24 hours without an engineer rebuilding the section.",
  },
  "pendo-demand-gen-systems": {
    Component: CampaignLoop,
    caption:
      "Above, every campaign asset passes through engineering, and instrumentation is added page by page, so it is only as complete as whoever remembered it. Below, marketing ops composes from template modules and the tracking comes with the template, which is what makes the return arrow worth having: a hypothesis can be formed, shipped, and read against a clean baseline without a ticket.",
  },
  "carrot-cms-architecture": {
    Component: WebflowCmsSchema,
    caption:
      "Webflow CMS collection schemas bind structured content fields to modular component templates: eBooks & Guides map to gated Marketo form symbols, while Open Roles bind directly to the Greenhouse ATS API, enforcing design system constraints by construction and reducing dev requests by ~30%.",
  },
  "carrot-integrated-marketing-systems": {
    Component: OneDomainFunnel,
    caption:
      "Above, the visitor crosses a domain boundary at the moment they are most likely to convert, and tracking resets with them. The intent, and the SEO value it earns, lands off the main domain. Below, the form is embedded in the page and the funnel never leaves the site: one unbroken path, with Marketo still owning the record. Both panels are drawn to the same width, so the difference is the thing missing from the lower one.",
  },
};

export function getDiagram(slug: string): Diagram | undefined {
  return diagrams[slug];
}
