# Rodney L. Lewis — Site Copy

## Navigation

### Main Navigation Links (desktop, matches page order)
- About (#about)
- Experience (#projects)
- Open Source (#open-source)
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
**Description:** Eight years owning marketing-site lifecycles for Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.

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
Eight years owning marketing-site lifecycles: CMS architecture, reusable component systems, and the performance work that turns a website into a compounding asset. I work across design, engineering, and marketing, with an AI-native workflow underneath.

### Call-to-Action Buttons
- Primary: "Let's talk" (with arrow icon)
- Secondary: "See the work →"

*(The text credibility strip below the CTAs — "8+ yrs · 5 orgs · Owned site lifecycles end-to-end · 30% fewer dev requests" — was removed. The floating cards carry those facts.)*

### Floating Cards (Desktop)
1. **8+** Years
   - Owning marketing-site lifecycles

2. **Organizations**: **5**
   - Pendo · Carrot · Kiddom · Andersen · Revel

3. **30%** Fewer Dev Requests
   - Marketing self-serve at Carrot Fertility

### Mobile Stats Cards
1. **8+** Years
   - Owning marketing-site lifecycles

2. **5** Organizations
   - Pendo · Carrot · Kiddom · Andersen · Revel

3. **30%** Fewer Dev Requests
   - Marketing self-serve at Carrot Fertility

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
Most marketing websites get refactored from the inside every time the brand pivots, and the platform underneath erodes. For eight years at Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems, my job has been the same at every logo: take an inherited marketing site, treat it like product, and make the team faster.

**Narrative P2:**
I'm based in Oakland, CA. Today I build at [Sprintz](https://sprintz.agency): Next.js, Sanity, and an AI-native delivery workflow.

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
One card per role. Each follows the same arc: an inherited site, a platform reset, a team that ships faster afterward.

Cards render in two tiers: a **Featured** tier (full cards with description, tags, and links) and an **Earlier roles** tier (compact rows: title, role, one-line outcome). Both tiers are reverse-chronological.

### Featured Tier

#### Featured 1: Sprintz

**Title:** Sprintz  
**Role:** Founder · 2023–present  
**Category:** Studio + AI Systems  
**Description:** My daily production environment: designing, building, and shipping high-converting marketing sites on Next.js 16, Sanity CMS, Supabase, Cal.com, and Playwright, with an AI-native, agent-driven delivery workflow.  
**Outcome:** An AI-native delivery workflow that ships production marketing sites end-to-end.  
**Tags:** Next.js 16, Sanity, Supabase, AI-Native  
**Links:**
- Live: https://sprintz.agency
- Source: https://github.com/RL22

#### Featured 2: Pendo.io

**Title:** Pendo.io  
**Role:** Sr. Web Developer · 2022–2023  
**Category:** Reusable Components  
**Description:** Built reusable landing-page modules and marketing templates on a headless WordPress stack. Partnered with demand gen on A/B tests and SEO; shipped data-integrated components for personalization and analytics.  
**Outcome:** Marketing launched campaigns without an engineering ticket.  
**Tags:** Headless WordPress, A/B Testing, SEO, Personalization  
**Links:**
- Live: https://pendo.io
- Source: —

#### Featured 3: Carrot Fertility

**Title:** Carrot Fertility  
**Role:** Sr. Web Developer · 2021–2022  
**Category:** CMS Architecture & Performance  
**Description:** Owned the marketing-site lifecycle end-to-end: Core Web Vitals, responsiveness, page speed, mobile-first performance. Modular Webflow templates let marketing self-serve; engineering got their roadmap back.  
**Outcome:** Cut marketing dev requests by 30%.  
**Tags:** Webflow, Core Web Vitals, Mobile-First  
**Links:**
- Live: https://www.get-carrot.com
- Source: —

### Earlier Roles Tier

#### Earlier 1: Kiddom

**Title:** Kiddom  
**Role:** Sr. Web Developer · 2021  
**Outcome:** SEO-optimized components and front-end refactors that lifted Lighthouse scores and gave marketing a base to iterate on.  
**Live:** https://www.kiddom.co

#### Earlier 2: Andersen Digital

**Title:** Andersen Digital  
**Role:** Web Developer · 2020–2021  
**Outcome:** Led CMS and mar-tech migrations for enterprise clients, including Rancher IO from Marketo to HubSpot.  
**Live:** — (no link)

#### Earlier 3: Revel Systems

**Title:** Revel Systems  
**Role:** Web Designer · 2016–2020  
**Outcome:** Built and maintained WordPress sites and templates; the foundation later migrated to headless WordPress.  
**Live:** https://revelsystems.com

### CTA
More work on GitHub — https://github.com/RL22

---

## Skills Section

### Section Badge
Skills

### Section Heading
What I work in.

### Section Subheading
Six categories, drawn straight from the work, not aspirational. Tools are table stakes; the principles behind them are what compound.

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
**Description:** The practice that turns a marketing site into a compounding asset. Every page ships with a metric.  
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

**Intro line:** No forms. Email me directly, grab time on my calendar, or take the resume with you.

**Buttons (stacked):**
- "Email me" (primary, mailto:lewis.rodneyl@gmail.com)
- "Book a call" (outline, https://cal.com/rodlew/consultation)
- "View resume" (outline, links to `/resume`)

*(The contact form was removed 2026-07-16; no form endpoint is used. Visitors email or book a call.)*

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
