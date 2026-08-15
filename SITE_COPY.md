# Rodney L. Lewis — Site Copy

## Navigation

### Main Navigation Links (desktop, matches page order)
- About (#about)
- Experience (#projects)
- Building in Public (#building)
- Skills (#skills)
- Resume (links to `/resume`)
- Contact (separate CTA button, not in the link list)

### Mobile Menu
Same set and order as desktop; Contact renders as the CTA button at the bottom of the menu. The RL monogram logo links home.

---

## Typography

- **Display / headings (h1–h4, `.font-display`):** Bricolage Grotesque (weights 600, 700, 800)
- **Body / base:** Figtree (weights 400, 500, 600, 700)
- Loaded via `next/font/google` in `app/layout.tsx` as CSS variables `--font-display` and `--font-body`; wired into `tailwind.config.ts` (`font-sans` → body, `font-display` → headings). Replaced the previous Inter typeface (2026-07-16).

## Page Metadata (`app/layout.tsx`)

**Title:** Rodney L. Lewis | Senior Web Platform Engineer  
**Description:** Nine years owning marketing-site lifecycles for Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.

## Page Loader (`PageLoader.tsx`)

Animated curtain shown once per browser session (sessionStorage), skipped entirely for reduced-motion users.

- **Monogram:** RL
- **Tagline:** Senior Web Platform Engineer

---

## Hero Section

### Badge
Senior Web Platform Engineer

### Main Headline (Line-by-line)
Build platforms.
Scale marketing impact.

### Description
Nine years owning marketing-site lifecycles: CMS architecture, reusable component systems, and the performance work that turns a website into a compounding asset. I work across design, engineering, and marketing, with an AI-native workflow underneath.

### Call-to-Action Buttons
- Primary: "Let's talk" (with arrow icon) → `#contact`
- Secondary: "See the work →" → `/work/` (added 2026-08-14; previously scrolled to `#projects`)

*(The text credibility strip below the CTAs — "8+ yrs · 5 orgs · Owned site lifecycles end-to-end · 30% fewer dev requests" — was removed. The floating cards carry those facts.)*

### Floating Cards (Desktop)
1. **9+** Years
   - Owning marketing-site lifecycles

2. **Organizations**: **6**
   - Pendo · Carrot · Kiddom · Mednition · Andersen · Revel

3. **Self-Serve** Marketing ships without me
   - The measure I build for

### Mobile Stats Cards
1. **9+** Years
   - Owning marketing-site lifecycles

2. **6** Organizations
   - Pendo · Carrot · Kiddom · Mednition · Andersen · Revel

3. **Self-Serve** Marketing ships without me
   - The measure I build for

### Tech Stack Label
Stack I work in

### Tech Stack Icons
TypeScript, React, Tailwind CSS, WordPress, Vercel, Figma, Anthropic, OpenAI

---

## About Section

### Section Badge
About

### Block 1 — Claim (heading + narrative)

**Main Heading:** I treat marketing sites like product.

**Narrative P1:**
Most marketing websites get refactored from the inside every time the brand pivots, and the platform underneath erodes. For nine years at Pendo, Carrot Fertility, Kiddom, Mednition, Andersen, and Revel Systems, my job has been the same at every logo: take an inherited marketing site, treat it like product, and make the team faster.

*(Mednition added 2026-08-14 to match the Experience section's Earlier Roles tier and the Hero "Organizations" count, both updated the same day — see the Hero section note above.)*

**Narrative P2:**
I'm based in Oakland, CA. Today I run [Sprintz](https://sprintz.agency), helping founders and small marketing teams adopt AI into how they work, and building the sites and workflows that come out of it.

### Block 2 — Beliefs ("HOW I THINK", oversized numerals)

1. **Platforms compound or decay.**
   Every architecture decision either adds to the foundation or chips away at it. I build systems that grow in value over time.

2. **Marketing self-serve is the measure.**
   Not the launch: how long the team operates without filing a ticket.

3. **Every page is a hypothesis.**
   Ship with a metric attached. Instrument it, run the test, iterate. Experimentation is baked in at the component level.

4. **AI amplifies good architecture.**
   Agents write boilerplate fast, which means sloppy systems break faster too. The architecture underneath is the differentiator.

### Closing statement
The best web platforms make the people around them faster. **That's the work.**

*(Folded 2026-07-16 to three blocks — claim, "How I think" principles, closing. The "Where I've owned it" indexed proof list (01–06) was removed as duplicative of the Experience section, and the "cut marketing dev requests by 30%" sentence was dropped from Narrative P1 (that metric lives in the hero card and the Experience section).)*

*(Removed in the earlier 2026-07 restructure: "How I Work" timeline, traits/tags row, quote block, and the "Let's Connect" sub-section — all redundant with Skills, Projects, or Contact.)*

---

## Projects / Experience

### Section Badge
Experience

### Section Heading
Marketing-site lifecycles, owned end-to-end.

### Section Subheading
Every role has followed the same arc: an inherited marketing site, a platform reset, and a team that ships without me afterward.

Cards render in two visually distinct tiers, reverse-chronological within each:

- **Featured** — the 3 big cards (org block, description, outcome, capability tags).
- **Earlier roles** — compact rows (org, role/period, one-line outcome). Briefly reformatted to the Featured card layout on 2026-08-14, then reverted the same day to the original compact-row format on the owner's direction — Experience is meant to stay the resume-density view, distinct from the deep-dive `/work` case studies. Outbound "Visit site" / "Source" buttons and earlier-role company links were removed 2026-07-21 and were not reintroduced.

Titles reflect the owner-directed 2026-07-21 revision (see Revision note). Featured cards lead with the operating-model change (what was inherited, what changed, what the team could do afterward) rather than metrics or tool lists; tools live in the Skills section.

Cards/rows for orgs with a published `/work` case study show a "Case study: {title}" link — under the tags on Featured cards, inline beneath the outcome line on Earlier-role rows — gated on `SHOW_WORK` (`app/config.ts`). Sprintz and Revel Systems have no case study and show no link. Case-study pages do not link back to this section; the role/company context is already stated in the case study's own rail (company, role, period), per the owner's direction (2026-08-14) that Work and Experience overlap in subject but are not meant to be woven together as one navigable unit.

A one-line pointer to `/work` was added under the section subheading, gated on `SHOW_WORK`: "This is the resume view. A few of these roles are written up in full at Work."

### Featured Tier

#### Featured 1: Sprintz

**Role:** Founder · 2023–present
**Category:** Client Strategy & AI Adoption
**Description:** Partner to founders and small marketing teams: audit what is blocking conversion, name the highest-leverage fix, then build it. Engagements now start with AI adoption, sorting what to automate from what stays human. The same workflow runs my own delivery, so I stay in production every week.
**Outcome:** Clients keep shipping after handoff, with AI in the loop.
**Tags:** AI Adoption · Conversion Strategy · Design + Build · Marketing Ops

#### Featured 2: Pendo.io

**Role:** Sr. Marketing Engineer · 2022–2023
**Category:** Campaign Systems
**Description:** Inherited a marketing site where every campaign needed engineering time. Rebuilt the landing-page and email template system into modules the marketing team could assemble themselves, then worked with marketing ops to wire in personalization and progressive profiling for enterprise prospects.
**Outcome:** Campaigns stopped being engineering tickets.
**Tags:** Landing Page Systems · Personalization · Demand Gen Partnership

#### Featured 3: Carrot Fertility

**Role:** Sr. Web Developer · 2021–2022
**Category:** Site Ownership
**Description:** Owned the corporate site end to end: look and feel, growth strategy, and conversion. Standardized how web work got scoped and shipped, and partnered with teams across the company to turn new page and campaign needs into a modular template system.
**Outcome:** Left a site the marketing team ran without a developer in the loop.
**Tags:** Site Ownership · Template Systems · Conversion

### Earlier Roles Tier

Compact rows: title, role/period, one-line outcome, and (where one exists) an inline "Case study: {title}" link. No category, description, or tags at this tier — that detail lives in the Featured tier and in the linked `/work` case study.

#### Earlier 1: Kiddom

**Role:** Sr. Web Developer · 2021
**Outcome:** Streamlined the marketing component library and audited the site against funnel data and heatmaps, leaving the team a base they could iterate on without starting over.
**Case study:** `kiddom-component-architecture`

#### Earlier 2: Mednition

Added 2026-08-14 — a contract that ran concurrently with Andersen Digital and Kiddom, previously absent from this tier entirely.

**Role:** HubSpot Developer / Designer · Feb–Jul 2021 · Contract
**Outcome:** Built modular HubSpot landing page templates for KATE, an emergency-department triage AI, concurrently with the Andersen Digital and Kiddom contracts below.
**Case study:** `mednition-landing-page-templates`

#### Earlier 3: Andersen Digital

**Role:** Sr. Web Developer · 2020–2021
**Outcome:** Ran CMS and marketing-automation migrations for enterprise clients including Rancher IO, AppZen, and Illumio, connecting their campaign tooling to the platforms their sales teams already worked in.
**Case study:** `appzen-campaign-templates` (the row is titled Andersen Digital; the linked case study is scoped to the AppZen engagement specifically, not Rancher IO or Illumio)

#### Earlier 4: Revel Systems

**Role:** Web Developer to Sr. Web Developer · 2016–2020
**Outcome:** Spent four years rebuilding the company's web properties around SEO and growth priorities, then helped build an on-demand product training platform that gave customers a reason to stay after the sale.
**Case study:** none — no `/work` entry exists for Revel Systems.

### CTA
View all resources (links to `/blog`)

---

## Blog & Resources Page (`/blog`)

Hub page (`app/blog/page.tsx`) reached from the Building in Public section button; not in the nav yet. Reuses the section's shared components (`app/components/building/`: FeaturedBlock, FeedRow, PlaceholderChip, feed.ts).

- **Badge:** Building in Public
- **h1:** Blog & Resources
- **Sub:** Every repo, article, and video, in one place, updated as the work ships.
- **Structure:** Back-to-site link, featured block (video + stacked repos), full feed (all building.json items AND repos), "Full profile on GitHub" CTA at bottom (moved here from the homepage section).
- **SEO:** canonical `/blog`, OpenGraph + Twitter summary metadata, `metadataBase` https://rl22.github.io set in layout, JSON-LD ItemList of real (non-placeholder) entries only.

---

## Skills Section

### Section Badge
Skills

### Section Heading
What I work in.

### Section Subheading
Everything here comes out of shipped work, not a reading list. Capped at five per group: what I leave off matters as much as what I keep.

Each group renders as a curated 5-tag list (no icons in the current component; tags are capped, not exhaustive).

### Skill Group 1: Frontend & Backend

**Title:** Frontend & Backend  
**Description:** The web layer I own, from markup to API. Agents write the boilerplate; I own the architecture.  
**Tags:** TypeScript, React, Next.js, Tailwind, Supabase

### Skill Group 2: CMS Platforms

**Title:** CMS Platforms  
**Description:** Headless and traditional. The publishing system is a product: templates, components, and editorial workflows that let marketing move without a ticket.  
**Tags:** Sanity, Headless WordPress, WordPress, Webflow, GraphQL

### Skill Group 3: Mar-Tech & Data

**Title:** Mar-Tech & Data  
**Description:** The tools demand gen, lifecycle, and CRM teams live in. I connect the marketing site to the revenue motion.  
**Tags:** HubSpot, Marketo, Salesforce, GA4, Vercel

### Skill Group 4: Conversion & SEO

**Title:** Conversion & SEO  
**Description:** Where a marketing site earns its keep. I instrument the page, run the test, and act on what the data says.  
**Tags:** A/B Testing, Technical SEO, Core Web Vitals, Lighthouse, Reusable Components

### Skill Group 5: Design

**Title:** Design  
**Description:** Building with designers, not handing off to them. Pixel-accurate production from Figma to browser.  
**Tags:** Figma, Sketch, Photoshop, Illustrator, Lightroom

### Skill Group 6: AI-Native Stack

**Title:** AI-Native Stack  
**Description:** How I build now: agents, orchestration, and AI-assisted delivery as defaults, the production workflow at Sprintz.  
**Tags:** Claude Code, Codex, Gemini, MCP, Agentic Workflows

---

## Contact Section

### Section Badge
Contact

### Section Heading
If you're hiring a platform owner, let's talk.

### Section Description
Currently open to senior roles owning marketing web platforms, Bay Area or remote. I reply within one business day.

### Contact Info ("Where to find me")

**Section Title:** Where to find me

**Location:** Oakland, CA (Bay Area)  
**Email:** lewis.rodneyl@gmail.com  
**Studio:** sprintz.agency  
**GitHub:** github.com/RL22  
**LinkedIn:** in/rodney-lewis-abb11b73

### Actions ("Reach out")

**Section Title:** Reach out

**Intro line:** Send a message directly, grab time on my calendar, or take the resume with you.

**Form:** Name / Email / Message, submits to Formspree (`ContactForm.tsx`, endpoint `xyegprkr`). Success state replaces the form with an inline confirmation.

**Buttons (stacked, below the form):**
- "Book a call" (outline, https://cal.com/rodlew/consultation)
- "View resume" (outline, links to `/resume`)

*(Contact form re-added 2026-08-14 via Formspree, replacing the mailto "Email me" CTA. Direct email is still listed under "Where to find me".)*

---

## Resume Page (`/resume`)

Standalone route (`app/resume/page.tsx`) rendering the full resume in the site typefaces with a screen-only action bar ("Back to site" link, "Print / Save as PDF" button that triggers `window.print()`). Print styles produce the PDF: letter size, 0.6in margins, break-inside guards, terracotta accents with print-color-adjust. Content sections: header (name, title, contact line), Summary, Experience (6 roles, reverse-chronological, 30% metric once at Carrot), Open Source (readworthy, character.md), Skills (6 groups). Nav, footer, and Contact "View resume" all link to `/resume`.

---

## Footer

### Footer Navigation
- Home
- Projects
- Skills
- About
- Resume (links to `/resume`)

### Social Links
- GitHub — https://github.com/RL22
- LinkedIn — https://www.linkedin.com/in/rodney-lewis-abb11b73
- Email — lewis.rodneyl@gmail.com

### Copyright
© 2026 **Rodney L. Lewis**. Oakland, CA.

---

## Legacy Copy Archive

### Original About Section (Legacy)

#### Think
Every project begins with research into your brand, market, and competition. The strategy is treated like writing a story, walking visitors through a narrative that represents your brand and culture.

#### Design
Not just what it looks like and feels like, but how it works. I go beyond just the surface and start at the core organization of my code, building with a philosophy that promotes user experience and usability.

#### Develop
Working primarily with Front-End technologies, skilled in HTML5, CSS3, Vanilla JavaScript, JQuery & a handful of popular JS Libraries. Shipping responsive, functional, and scalable solutions quickly.

### Original Portfolio Section (Legacy)

#### Revel Systems
- **Live site:** https://revelsystems.com/
- **My Role:** As business goals change it's been my duty to produce new layouts, write clean & reusable code, incorporate best practices around usability and performance, create new lead generation strategies while developing a standardized style guide to enhance user experience and improve workflow.

#### KoolApp
- **Live site:** http://rl22.github.io/koolapp/
- **About:** I created this landing-page theme for anyone with a cool app that needed a cool website to match. I decided to follow material design principles for this project. Product mocks where created in photoshop & I used HTML, CSS, & JS on the dev side.

#### SF Business Portal
- **Live site:** http://businessportal.sfgov.org/
- **My Role:** While on the staging environment I was responsible for remediating Q.A. issues. I then ran a thorough battery of test to ensure the Business portal was accessible for users with impairments.

#### Acoustic Guitar
- **Live site:** http://acousticguitar.com/
- **My Role:** My contribution to Acoustic Guitar's redesign was during the development stage ensuring cross-browser compatibility & responsiveness. I also assisted with content migration from previous CMS to Wordpress.

#### Fitness Pro
- **Live site:** http://rl22.github.io/fitpro/
- **My Role:** I took this project end to end. I created the concept for the look and feel, wireframes and user stories followed, then I developed the page using HTML, CSS, & JS and deployed this landing page for CF Power, a new Crossfit Gym.

#### Ukulele
- **Live site:** http://www.ukulelemag.com/
- **My Role:** My contribution to Ukulele's redesign was during the development stage ensuring cross-browser compatibility & responsiveness. I also assisted with content migration from previous CMS to Wordpress.

---

## Archive

### Previous hero description (replaced 2026-07-16)

I build marketing platforms that scale by working across design, dev, and marketing fluidly. Most people don't. My hybrid perspective allows me to see where teams get stuck, what connections matter, and how systems should actually work. CMS architecture, reusable components, performance that sustains growth. AI is accelerating everything; the architecture is what enables 10x results.


---

## Revision note (2026-07-21)

- Job titles across Experience and all three resume variants now match the
  2023 resume of record: Sr. Marketing Engineer (Pendo), Marketing Developer
  Lead (Carrot, Kiddom), Sr. Marketing Developer (Andersen), Web Team Lead
  (Revel). The site previously used generic Web Developer / Web Designer
  titles that conflicted with the resume.
- The "30% fewer dev requests" metric was removed everywhere (hero card,
  Experience, all resume variants). It could not be confidently defended in
  an interview, and it appeared in neither resume of record.
  **Superseded 2026-08-06** for the `/work` section only — see the revision
  note at the foot of this file. The hero card, Experience section, and all
  three resume variants remain metric-free.
- Experience cards now lead with the operating-model change (what was
  inherited, what changed, what the team could do afterward) instead of
  metrics or tool lists. Tools live in the Skills section.
- Outbound "Visit site" / "Source" buttons and earlier-role company links
  were removed from the Experience section.
- Titles for Carrot, Kiddom, and Andersen were changed to Sr. Web Developer,
  and Revel to Web Developer to Sr. Web Developer, at the owner's direction.
  These supersede the earlier resume-of-record titles listed above.

---

## Revision note (2026-08-05)

- The 2026-07-21 removal of the "30% fewer dev requests" metric is **partially
  superseded**. The owner has confirmed the figure is real and defensible in an
  interview, so it has been reinstated in the Everlaw-tailored materials only,
  in the canonical phrasing: *"Architected modular Webflow templates that
  reduced marketing dev requests by 30% and returned roadmap capacity to
  engineering."*
- Scope of the reinstatement is `Sprintz/jobs/everlaw` (the noindexed, tailored
  resume at that repo's `/resume` route and its outreach drafts). **This public
  site remains metric-free** — no hero card, Experience entry, or resume variant
  here was changed. If the metric is ever added back to this site, update the
  2026-07-21 note above rather than leaving the two in conflict.
- Rationale for keeping the split: the earlier removal was made because the
  number could not be defended on demand. That objection is resolved for a
  tailored document Rodney controls and can speak to directly; it was not
  re-litigated for the general-audience site, where the operating-model framing
  ("let marketing launch pages without a developer in the loop") still reads
  stronger than a bare percentage.

---

## Revision note (2026-08-05, tenure)

- Tenure copy moved from "eight years" to **nine years** site-wide, and the Hero
  credibility cards from "8+" to "9+".
- **Why nine and not ten.** The career history in
  `Internal/job-search/rodney-profile.md` starts at String Letter Publishing,
  Nov 2015, which is ten years nine months to Aug 2026. But the three roles
  before Revel were magazine WordPress, government QA, and healthcare visual
  design - none of them owning a marketing site. This copy claims years
  *owning marketing-site lifecycles* for a named set of five orgs, and that
  clock starts at Revel Systems, **Oct 2016**: nine years ten months. Nine is
  the honest figure for the claim as written, and it is the more conservative
  one to defend in an interview.
- Changed in ten places: page metadata, Hero description and both stat cards,
  About narrative P1, the `/resume` metadata description, and all three resume
  variant summaries (default, platform, design).
- The historical note above quoting the retired credibility strip ("8+ yrs, 5
  orgs, ...") keeps its original numbers on purpose: it records copy that no
  longer ships, so it should not track the current figure.
- **If the claim is ever rewritten to cover total career rather than
  marketing-web ownership, the figure becomes ten, not nine.** The two counts
  are not interchangeable; changing one without the other is what produced the
  earlier drift.
- Related: the Everlaw-tailored resume states nine in its summary
  (`RL22/everlaw#2`). `rodney-profile.md` line 17 also states nine.

---

## Revision note (2026-08-06, /work section)

- New `/work` section shipped: four case studies at `/work/<slug>/`, sourced
  from `app/data/work.json`, behind the `SHOW_WORK` flag in `app/config.ts`.
  The flag is `false` at time of writing, so the routes build but carry
  `noindex`, stay out of `sitemap.xml`, and appear in no nav list.
- **The 30% metric is reinstated on this public site, scoped to one place.**
  It appears only in the `outcome` field of the `carrot-cms-architecture` case
  study, in the canonical phrasing from the 2026-08-05 note. It does not appear
  in that study's blurb or body, in any other case study, or anywhere else on
  the site. This supersedes the 2026-07-21 removal for `/work` only; the hero
  card, Experience section, and all three resume variants remain metric-free.
- The constraint is enforced by test, not by convention:
  `app/work/content.test.ts` fails the build if the metric appears in more than
  one study, appears outside the `outcome` field, or if any other quantified
  claim (`N%`, `N percent`, `Nx`) is introduced into case-study prose. The same
  file also fails on management verbs and on the banned marketing register from
  `PRODUCT.md`. `tests/work.spec.ts` re-checks the metric against rendered HTML.
- The owner is responsible for defending the figure on demand. That was the
  original objection in the 2026-07-21 removal, and it is the only thing
  standing behind the reinstatement.

## Revision note (2026-08-06, contrast)

`PRODUCT.md` has claimed "contrast-checked text on cream/terracotta surfaces"
and WCAG 2.1 AA throughout. Axe found that claim was not true. Four sitewide
failures were fixed while building `/work`:

| Element | Before | After |
| --- | --- | --- |
| `.btn-primary`, white on `bg-brand` `#C0614A` | 4.16:1 | 5.42:1 (`bg-brand-dark`) |
| "RL" monogram, white on `bg-brand` at 14px bold | 4.15:1 | 5.42:1 (`bg-brand-dark`) |
| Footer links, `text-gray-500` on cream | 4.23:1 | 6.61:1 (`text-gray-600`) |
| Link hover, `hover:text-brand` on cream | 3.64:1 | 4.74:1 (`hover:text-brand-dark`) |

A `brand.darker` token (`#8A4433`, 7.11:1 on white) was added to
`tailwind.config.ts` to give `.btn-primary` a hover step above `brand-dark`.
The visible effect is that terracotta buttons and the monogram are one shade
deeper across the whole site. `bg-brand` is still correct for non-text surfaces
but must not carry white body text.
