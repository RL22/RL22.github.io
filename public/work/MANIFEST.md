# Work assets manifest

Web-ready case-study figures captured from the Internet Archive Wayback Machine.

**Method.** Each page was loaded from its normal Wayback replay URL (`/web/<timestamp>/<url>`) in
headless Chromium at a 1600×2000 viewport. Before screenshotting, the Wayback replay banner
(`#wm-ipp-base`, `#wm-ipp`) and the site's own cookie-consent overlay were removed — consent was
accepted via the site's own button (`#onetrust-accept-btn-handler`) where one existed, then any
remaining fixed-position consent node was deleted from the DOM. No consent overlay appears in any
asset in this directory. Images are the **top region** of each page, not a full-page archive.

**Format.** Every asset ships as an optimized 256-colour PNG and a WebP at quality 85. All files are
under 300 KB. Prefer the WebP with the PNG as fallback.

**Serving path.** `/work/<filename>`.

| file | case study slug | original URL | wayback timestamp | dimensions | size | alt |
|---|---|---|---|---|---|---|
| `pendo-product-experience-hub.png` | `pendo-core-web-platform` | `https://www.pendo.io/product-experience/` | 20221022152521 | 1600×2000 | 147 KB | Archived screenshot of the Pendo product-experience solutions hub page. A purple announcement bar and a white navigation bar with the Pendo logo, Solutions, Products, Pricing, Careers and Resources menus and Try Free and Get a Demo buttons sit at the top. Below is a hero with the heading "Deliver digital experiences that users love" beside a cut-out photo collage of two people holding laptops. Under the hero, a centred "Explore use cases" heading with five pill-shaped tabs reading User onboarding, Product engagement, In-app support, Feedback collection and Revenue growth, followed by alternating two-column rows that pair a product interface screenshot with a heading, paragraph and Learn more link. |
| `pendo-product-experience-hub.webp` | `pendo-core-web-platform` | `https://www.pendo.io/product-experience/` | 20221022152521 | 1600×2000 | 115 KB | (same as PNG above) |
| `pendo-in-app-support.png` | `pendo-core-web-platform` | `https://www.pendo.io/product-experience/in-app-support/` | 20221022152505 | 1600×2000 | 141 KB | Archived screenshot of the Pendo in-app support product page. The Pendo navigation bar sits at the top, followed by a centred hero reading "Alleviate confusion for stuck users, in-app" with the subheading "Support your users when and where they need it". Below that, a three-column row of pink line icons with the labels "Deflect support tickets and reduce costs", "Increase customer satisfaction with self-service resources" and "Build user proficiency and reinforce critical workflows". The rest of the capture shows alternating two-column sections, each pairing a heading and paragraph with a screenshot of an in-product overlay — a tooltip, an onboarding checklist showing four tasks at forty percent complete, and a feature-adoption widget. |
| `pendo-in-app-support.webp` | `pendo-core-web-platform` | `https://www.pendo.io/product-experience/in-app-support/` | 20221022152505 | 1600×2000 | 135 KB | (same as PNG above) |
| `pendo-demo-lp.png` | `pendo-demand-gen-systems` | `https://go.pendo.io/demo-pendo.html` | 20221022213806 | 1600×1068 | 206 KB | Archived screenshot of a Pendo demo-request landing page. The page has no site navigation. On the left, the Pendo logo sits above the heading "Let's talk about you" and a paragraph inviting the visitor to fill out the form for a personalized demo, then a three-column statistics row labelled Grow adoption 28% increase in active users, Iterate quickly 30% faster feature validation, and Retain customers 5% reduction in customer churn, then a row of four customer logos under the line "We're trusted by industry leaders like". On the right, a white card holds a five-field form — First Name, Last Name, Company Name, Email Address, Phone Number — a privacy-policy consent checkbox and a pink Schedule Now button. A dark footer with policy links closes the page. |
| `pendo-demo-lp.webp` | `pendo-demand-gen-systems` | `https://go.pendo.io/demo-pendo.html` | 20221022213806 | 1600×1068 | 68 KB | (same as PNG above) |
| `pendo-demo-analytics-lp.png` | `pendo-demand-gen-systems` | `https://go.pendo.io/demo-analytics.html` | 20221207181657 | 1600×1340 | 70 KB | Archived screenshot of an earlier, teal-accented Pendo demo-request landing page, cropped to the top of the page. A thin header holds only the Pendo logo. On the left is the heading "Product and journey analytics by user and account" with an explanatory paragraph. On the right, a white card headed "Get started today!" holds a five-field form — Email Address, First Name, Last Name, Company Name, Phone Number — a privacy-policy consent checkbox and a teal Get A Free Demo button. Below, a two-column section pairs an abstract teal-highlighted diagram of product analytics reports with the heading "Learn why customers engage, return, and succeed" and a paragraph. |
| `pendo-demo-analytics-lp.webp` | `pendo-demand-gen-systems` | `https://go.pendo.io/demo-analytics.html` | 20221207181657 | 1600×1340 | 59 KB | (same as PNG above) |
| `carrot-resource-center.png` | `carrot-cms-architecture` | `https://www.get-carrot.com/resource-center` | 20210919053346 | 1600×2000 | 149 KB | Archived screenshot of the Carrot Resource Center page. A sage-green hero holds the Carrot logo and navigation, the eyebrow "Carrot fertility and family-forming", the heading "Resource Center", and a filter row reading All, Blog, Webinars, eBooks & Guides, Case studies and Podcast with All selected. Below the hero, the page is divided into one section per content collection. Each section has a serif heading and a View all button on the right, above a three-card grid; each card shows an illustrated thumbnail and a linked title. The visible sections are Blog, Webinars and eBooks & Guides. |
| `carrot-resource-center.webp` | `carrot-cms-architecture` | `https://www.get-carrot.com/resource-center` | 20210919053346 | 1600×2000 | 94 KB | (same as PNG above) |
| `carrot-ebooks-guides.png` | `carrot-cms-architecture` | `https://www.get-carrot.com/ebooks-guides` | 20211026144620 | 1600×2000 | 215 KB | Archived screenshot of the Carrot eBooks & Guides collection page. The same sage-green hero and navigation as the Resource Center appear at the top, with the eyebrow "Resource Center", the heading "eBooks & Guides", and the filter row All, Blog, Webinars, eBooks & Guides, Case studies, Podcast with eBooks & Guides underlined as the active filter. Below is a three-column grid of eight items; each card shows a mock-up photograph of a printed report or booklet above a linked title. A peach call-to-action band headed "See how Carrot can transform your company." closes the capture. The Carrot wordmark did not load in this snapshot, so the logo appears as a plain orange circle. |
| `carrot-ebooks-guides.webp` | `carrot-cms-architecture` | `https://www.get-carrot.com/ebooks-guides` | 20211026144620 | 1600×2000 | 121 KB | (same as PNG above) |
| `carrot-for-employers.png` | `carrot-integrated-marketing-systems` | `https://www.get-carrot.com/for-employers` | 20210901183631 | 1600×2000 | 145 KB | Archived screenshot of the Carrot "For employers" marketing page. A sage-green hero holds the Carrot logo and navigation, the eyebrow "How it works", the heading "A fertility benefit that's right for your company, right now", an orange Request a demo button, and a flat vector illustration of five people and a dog. Below, a light-grey section headed "Simplify the complex world of fertility." presents four columns, each with an icon, a bold label and a short paragraph: Carrot Care Team, Global provider network, Carrot Card, and Financial and benefit administration. A further section headed "Carrot empowers employees everywhere with the opportunity to have a child." begins at the bottom beside a card titled "Donor-assisted reproduction". The Carrot Care Team icon failed to load in this snapshot and shows as a broken-image placeholder. |
| `carrot-for-employers.webp` | `carrot-integrated-marketing-systems` | `https://www.get-carrot.com/for-employers` | 20210901183631 | 1600×2000 | 108 KB | (same as PNG above) |
| `carrot-careers.png` | `carrot-integrated-marketing-systems` | `https://www.get-carrot.com/carrot-careers/open-roles` | 20220517075937 | 1600×2000 | 61 KB | Archived screenshot of the Carrot open-roles careers page. A pale-blue hero holds the Carrot logo, site navigation and the centred heading "Open Roles". Below, a two-column layout places a Departments filter rail on the left — Business Operations, Customer Experience, Engineering, Finance, Marketing, People, Product, Sales — beside a job list grouped under orange department headings. Each listing shows the role title, the department name in small capitals, and a Learn More link on the right. Visible roles include Fertility Billing Analyst, Care Navigator, Claims Processor, Enrollment Marketing Manager, Associate Software Engineer, Senior Software Engineer, Global Finance Operations Specialist, Demand Generation Manager, Events Manager and Lifecycle Marketing Manager. |
| `carrot-careers.webp` | `carrot-integrated-marketing-systems` | `https://www.get-carrot.com/carrot-careers/open-roles` | 20220517075937 | 1600×2000 | 70 KB | (same as PNG above) |
| `mednition-early.png` | `mednition-landing-page-templates` | `https://insights.mednition.com/kate-for-esi-acuity-assignment` | 20210227064056 | 1600×1829 | 144 KB | Archived screenshot of the KATE for ESI Acuity Assignment landing page as first captured, February 2021. |
| `mednition-early.webp` | `mednition-landing-page-templates` | `https://insights.mednition.com/kate-for-esi-acuity-assignment` | 20210227064056 | 1600×1829 | 88 KB | (same as PNG above) |
| `mednition-aha-event.png` | `mednition-landing-page-templates` | `https://insights.mednition.com/aha-innovation-event` | 20210227055503 | 1600×2000 | 164 KB | Archived screenshot of the American Heart Association Innovation Event landing page, February 2021. |
| `mednition-aha-event.webp` | `mednition-landing-page-templates` | `https://insights.mednition.com/aha-innovation-event` | 20210227055503 | 1600×2000 | 102 KB | (same as PNG above) |
| `mednition-recent.png` | `mednition-landing-page-templates` | `https://insights.mednition.com/kate-for-esi-acuity-assignment` | 20260209234441 | 1600×1282 | 115 KB | Archived screenshot of the same KATE landing page, captured years later, showing the same structure still in production. |
| `mednition-recent.webp` | `mednition-landing-page-templates` | `https://insights.mednition.com/kate-for-esi-acuity-assignment` | 20260209234441 | 1600×1282 | 74 KB | (same as PNG above) |
| `kiddom-start.png` | `kiddom-component-architecture` | `https://www.kiddom.co/` | 20210330191511 | 1600×2000 | 227 KB | Archived screenshot of the Kiddom marketing homepage, March 2021, before the engagement began. |
| `kiddom-start.webp` | `kiddom-component-architecture` | `https://www.kiddom.co/` | 20210330191511 | 1600×2000 | 116 KB | (same as PNG above) |
| `kiddom-end.png` | `kiddom-component-architecture` | `https://www.kiddom.co/` | 20210927010005 | 1600×2000 | 218 KB | Archived screenshot of the Kiddom marketing homepage, September 2021, at the end of the engagement. |
| `kiddom-end.webp` | `kiddom-component-architecture` | `https://www.kiddom.co/` | 20210927010005 | 1600×2000 | 113 KB | (same as PNG above) |
| `appzen-mastermindsummit.png` | `appzen-campaign-templates` | `https://info.appzen.com/mastermindsummit` | 20201230 | 1600×1300 | 483 KB | Archived screenshot of the AppZen Mastermind Summit event landing page, December 2020. |
| `appzen-mastermindsummit.webp` | `appzen-campaign-templates` | `https://info.appzen.com/mastermindsummit` | 20201230 | 1600×1300 | 63 KB | (same as PNG above) |
| `appzen-roi-calculator-live.png` | `appzen-campaign-templates` | `https://info.appzen.com/roi-calculator` | live capture, 2026 | 1600×2000 | 275 KB | Current live capture of the ROI calculator template — the 2020/2021 instance never rendered in Wayback because its scripts were never archived, so this stands in as illustrative evidence of the template pattern rather than a historical snapshot. |
| `appzen-roi-calculator-live.webp` | `appzen-campaign-templates` | `https://info.appzen.com/roi-calculator` | live capture, 2026 | 1600×2000 | 99 KB | (same as PNG above) |

**Note on the Mednition/Kiddom/AppZen batch.** These seven assets were supplied as full-page
captures rather than produced with the 1600×2000-viewport method above; each was resized to
1600px wide and cropped to its top region, then recompressed to a 256-colour PNG and a WebP, to
match the serving format used by the rest of this directory. `appzen-mastermindsummit.png` was
cropped shorter (1300px) than the standard 2000px to keep the PNG fallback near the size budget.

## Notes on what was excluded

- `pendo-demo-analytics-lp` is cropped at 1340px, above the G2 Grid for Product Analytics Software
  quadrant graphic that appears further down that page. That graphic is a third-party research
  firm's chart carrying roughly two dozen competitor logos, and is not part of the work being shown.
- `carrot-resource-center` is cropped at 2000px, which ends above the Case studies row. That row
  uses photography of identifiable people and names two named customers.
- No member-facing content was captured: nothing from `/member-stories/*`, `/podcast/*`, the
  member-facing webinar pages, or `app.get-carrot.com`.

## Known cosmetic defects in the archived snapshots

These are artifacts of the archive, not of the capture:

- `carrot-ebooks-guides`: the Carrot wordmark did not load; the logo renders as an orange circle.
- `carrot-for-employers`: the "Carrot Care Team" icon renders as a broken-image placeholder with its
  alt text visible.
