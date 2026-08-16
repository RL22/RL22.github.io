// Three tailored resume variants. Facts (orgs, dates, held titles) are
// identical everywhere; only summary, bullet emphasis, headline title, and
// skills ordering shift per target-role archetype. Titles match the 2023
// resume of record.

export type ResumeVariant = "marketing" | "platform" | "design";

export type Entry = {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type SkillLine = { group: string; tags: string };

export type ResumeContent = {
  variant: ResumeVariant;
  label: string;
  path: string;
  headline: string;
  summary: string;
  experience: Entry[];
  skills: SkillLine[];
};

export type EducationEntry = {
  school: string;
  location: string;
  credential: string;
  year: string;
};

export const education: EducationEntry[] = [
  {
    school: "General Assembly",
    location: "San Francisco, CA",
    credential: "UX Immersive",
    year: "2019",
  },
  {
    school: "Free Code Camp",
    location: "Online",
    credential: "Full Stack Web Development Certificate",
    year: "2015",
  },
];

export const contactLine = ["Oakland, CA", "lewis.rodneyl@gmail.com", "rl22.github.io"];

export const variants: Record<ResumeVariant, ResumeContent> = {
  marketing: {
    variant: "marketing",
    label: "Marketing Web",
    path: "/resume",
    headline: "Senior Web Platform Engineer",
    summary:
      "Nine years owning marketing-site lifecycles: CMS architecture, reusable component systems, and the performance work that turns a website into a compounding asset. Senior IC who owns the platform end to end, from inherited site to a system marketing can self-serve on, with an AI-native workflow underneath.",
    experience: [
      {
        org: "Sprintz",
        role: "Founder",
        dates: "Jun 2023 - Present",
        bullets: [
          "Partner with founders and marketing teams to audit what blocks conversion, then design and build the solution.",
        ],
      },
      {
        org: "Pendo.io",
        role: "Sr. Marketing Engineer",
        dates: "Oct 2022 - Jun 2023",
        bullets: [
          "Built reusable landing-page modules and marketing templates on a headless WordPress stack; marketing launched campaigns without an engineering ticket.",
          "Partnered with demand gen on A/B tests and SEO; shipped data-integrated components for personalization and analytics.",
        ],
      },
      {
        org: "Carrot Fertility",
        role: "Sr. Web Developer",
        dates: "Sep 2021 - Jul 2022",
        bullets: [
          "Owned the marketing-site lifecycle end-to-end: Core Web Vitals, responsiveness, page speed, mobile-first performance.",
          "Built modular Webflow templates that let marketing launch pages without a developer in the loop, giving engineering their roadmap back.",
        ],
      },
      {
        org: "Kiddom",
        role: "Sr. Web Developer",
        dates: "Apr - Sep 2021",
        bullets: [
          "Shipped SEO-optimized components and front-end refactors that lifted Lighthouse scores and gave marketing a base to iterate on.",
        ],
      },
      {
        org: "Andersen Digital",
        role: "Sr. Web Developer",
        dates: "Aug 2020 - May 2021",
        bullets: [
          "Led CMS and mar-tech migrations for Rancher IO, AppZen, and Illumio, including Marketo to HubSpot.",
        ],
      },
      {
        org: "Revel Systems",
        role: "Web Developer to Sr. Web Developer",
        dates: "Oct 2016 - Feb 2020",
        bullets: [
          "Rebuilt the company's web properties around SEO and growth priorities over four years, and contributed to an on-demand customer training platform.",
        ],
      },
    ],
    skills: [
      { group: "Frontend & Backend", tags: "TypeScript, React, Next.js, Tailwind, Supabase" },
      { group: "CMS Platforms", tags: "Sanity, Headless WordPress, WordPress, Webflow, GraphQL" },
      { group: "Mar-Tech & Data", tags: "HubSpot, Marketo, Salesforce, GA4, Vercel" },
      { group: "Conversion & SEO", tags: "A/B Testing, Technical SEO, Core Web Vitals, Lighthouse, Reusable Components" },
      { group: "Design", tags: "Figma, Sketch, Photoshop, Illustrator, Lightroom" },
      { group: "AI-Native Stack", tags: "Claude Code, Codex, Gemini, MCP, Agentic Workflows" },
    ],
  },

  platform: {
    variant: "platform",
    label: "Platform",
    path: "/resume/platform",
    headline: "Senior Frontend Platform Engineer",
    summary:
      "Nine years building the platform layer under marketing web: reusable component systems, CMS architecture, and the conventions that keep teams shipping in one direction. I own abstractions end to end, from templates and publishing workflows to performance budgets, so stakeholders build on the platform instead of around it.",
    experience: [
      {
        org: "Sprintz",
        role: "Founder",
        dates: "Jun 2023 - Present",
        bullets: [
          "Own conventions, tooling, and delivery end to end for client marketing sites, from audit through handoff.",
        ],
      },
      {
        org: "Pendo.io",
        role: "Sr. Marketing Engineer",
        dates: "Oct 2022 - Jun 2023",
        bullets: [
          "Built a reusable landing-page component system on headless WordPress, wired for personalization and analytics; consumers launched campaigns without an engineering ticket.",
          "Established template and testing conventions with demand gen across A/B and SEO programs.",
        ],
      },
      {
        org: "Carrot Fertility",
        role: "Sr. Web Developer",
        dates: "Sep 2021 - Jul 2022",
        bullets: [
          "Architected a modular Webflow template system that let marketing operate the site without engineering involvement.",
          "Owned Core Web Vitals, page speed, and mobile-first performance across the site.",
        ],
      },
      {
        org: "Kiddom",
        role: "Sr. Web Developer",
        dates: "Apr - Sep 2021",
        bullets: [
          "Drove Lighthouse-led refactors and SEO-optimized components that gave the team a stable base to iterate on.",
        ],
      },
      {
        org: "Andersen Digital",
        role: "Sr. Web Developer",
        dates: "Aug 2020 - May 2021",
        bullets: [
          "Led CMS and mar-tech platform migrations for Rancher IO, AppZen, and Illumio, including Marketo to HubSpot.",
        ],
      },
      {
        org: "Revel Systems",
        role: "Web Developer to Sr. Web Developer",
        dates: "Oct 2016 - Feb 2020",
        bullets: [
          "Built the template foundation and standards the company's properties were rebuilt on over four years, plus an on-demand customer training platform.",
        ],
      },
    ],
    skills: [
      { group: "Frontend & Backend", tags: "TypeScript, React, Next.js, Tailwind, Supabase" },
      { group: "Component Systems", tags: "Reusable Components, Modular Templates, Publishing Workflows, Design Handoff, Conventions" },
      { group: "CMS Platforms", tags: "Sanity, Headless WordPress, WordPress, Webflow, GraphQL" },
      { group: "Performance & SEO", tags: "Core Web Vitals, Lighthouse, Technical SEO, A/B Testing, Vercel" },
      { group: "AI-Native Stack", tags: "Claude Code, Codex, Gemini, MCP, Agentic Workflows" },
      { group: "Mar-Tech & Data", tags: "HubSpot, Marketo, Salesforce, GA4, Analytics Integration" },
    ],
  },

  design: {
    variant: "design",
    label: "Design",
    path: "/resume/design",
    headline: "Design Engineer",
    summary:
      "Designer who builds what he designs. Nine years across web design and engineering: Figma to production, motion and interaction written in code, and component systems that survive contact with real content. AI tools are collaborators in the workflow, from image generation to agent-driven builds.",
    experience: [
      {
        org: "Sprintz",
        role: "Founder",
        dates: "Jun 2023 - Present",
        bullets: [
          "Design, art-direct, and build client marketing sites end to end, from brief through launch.",
        ],
      },
      {
        org: "Pendo.io",
        role: "Sr. Marketing Engineer",
        dates: "Oct 2022 - Jun 2023",
        bullets: [
          "Built reusable landing-page modules and marketing templates with pixel-accurate design fidelity on headless WordPress.",
          "Partnered with design and demand gen on A/B tests; shipped data-integrated components for personalization.",
        ],
      },
      {
        org: "Carrot Fertility",
        role: "Sr. Web Developer",
        dates: "Sep 2021 - Jul 2022",
        bullets: [
          "Built modular Webflow templates with mobile-first, responsive design that let marketing run the site themselves.",
          "Owned Core Web Vitals and page speed so the design never shipped slower than it looked.",
        ],
      },
      {
        org: "Kiddom",
        role: "Sr. Web Developer",
        dates: "Apr - Sep 2021",
        bullets: [
          "Shipped SEO-optimized components and refactors that lifted Lighthouse scores without compromising the design system.",
        ],
      },
      {
        org: "Andersen Digital",
        role: "Sr. Web Developer",
        dates: "Aug 2020 - May 2021",
        bullets: [
          "Delivered CMS and mar-tech migrations for Rancher IO, AppZen, and Illumio, including Marketo to HubSpot.",
        ],
      },
      {
        org: "Revel Systems",
        role: "Web Developer to Sr. Web Developer",
        dates: "Oct 2016 - Feb 2020",
        bullets: [
          "Designed and rebuilt the company's web properties around SEO and growth priorities over four years, plus an on-demand product training platform.",
        ],
      },
    ],
    skills: [
      { group: "Design", tags: "Figma, Sketch, Photoshop, Illustrator, Lightroom" },
      { group: "Motion & Interaction", tags: "GSAP, Motion, Lenis, Micro-interactions, Scroll Choreography" },
      { group: "AI-Native Stack", tags: "Claude Code, Codex, Gemini, Image Generation, MCP" },
      { group: "Frontend", tags: "TypeScript, React, Next.js, Tailwind, Supabase" },
      { group: "CMS Platforms", tags: "Sanity, Headless WordPress, WordPress, Webflow, GraphQL" },
      { group: "Conversion & SEO", tags: "A/B Testing, Core Web Vitals, Technical SEO, Lighthouse, Mobile-First" },
    ],
  },
};
