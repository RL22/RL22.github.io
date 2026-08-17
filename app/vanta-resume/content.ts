// Vanta-tailored resume. Standalone from app/resume/content.ts's variant system:
// that system keeps facts identical across variants (only emphasis shifts), but
// this one has real factual differences (phone number, a third education entry)
// sourced from docs/vanta-resume.md for the Vanta Senior Web Developer application.

export type Entry = {
  org: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type SkillLine = { group: string; tags: string };

export type EducationEntry = {
  school: string;
  location: string;
  credential: string;
  year: string;
};

export const headline = "Senior Web Developer";

export const contactLine = [
  "Oakland, California",
  "510-305-6620",
  "lewis.rodneyl@gmail.com",
  "linkedin.com/in/rodney-lewis-abb11b73",
  "rl22.github.io",
];

export const summary =
  "Marketing web engineer with nine years of experience across frontend development, content architecture, performance, analytics, and cross-functional delivery. Builds reusable component and publishing systems that let marketing move independently while protecting accessibility, measurement, and site health. Senior individual contributor experienced with modern JavaScript, headless stacks, and AI-assisted workflows grounded in clear standards and automated quality checks.";

export const experience: Entry[] = [
  {
    org: "Sprintz",
    role: "Founder",
    dates: "July 2023 - Present",
    bullets: [
      "Lead marketing web engagements from discovery and requirements through architecture, design, development, quality assurance, launch, and handoff.",
      "Build accessible, conversion-focused websites and reusable publishing systems with React, Next.js, Sanity, Contentful, GraphQL, and Vercel.",
      "Establish component standards, content workflows, development conventions, and automated quality checks that make systems easier for marketing teams to operate.",
    ],
  },
  {
    org: "Pendo.io",
    role: "Senior Marketing Engineer",
    dates: "October 2022 - June 2023",
    bullets: [
      "Built reusable campaign and landing-page modules in Marketo, enabling demand generation to launch routine campaigns without engineering tickets.",
      "Produced or maintained 75 distinct pages across product solutions, demand-generation landing pages, and digital-adoption content.",
      "Partnered on A/B testing, technical SEO, personalization, progressive profiling, analytics, and campaign quality assurance as part of the marketing web team.",
    ],
  },
  {
    org: "Carrot Fertility",
    role: "Senior Web Developer",
    dates: "September 2021 - July 2022",
    bullets: [
      "Owned the marketing website lifecycle across intake, prioritization, implementation, quality assurance, publishing, Core Web Vitals, responsiveness, and page speed.",
      "Built modular Webflow templates that made routine publishing self-service for marketing and implemented 5+ major improvements to the marketing web development process.",
      "Partnered with content, demand generation, design, marketing, and engineering across 20+ projects.",
    ],
  },
  {
    org: "Kiddom",
    role: "Senior Web Developer",
    dates: "April 2021 - September 2021",
    bullets: [
      "Served as the sole developer for the marketing website and built 40+ React components in Gatsby, backed by headless WordPress and GraphQL.",
      "Used Lighthouse, funnel analysis, heatmaps, conversion data, and technical diagnostics to prioritize search-optimized components and front-end improvements; contract renewed based on performance.",
    ],
  },
  {
    org: "Andersen Digital",
    role: "Senior Web Developer",
    dates: "August 2020 - May 2021",
    bullets: [
      "Led content-management and marketing-technology migrations for Rancher Labs, AppZen, and Illumio while coordinating requirements, content workflows, quality assurance, and releases.",
      "Supported AppZen's Marketo-to-HubSpot migration, built a reusable ROI-calculator landing-page template, and connected campaign, lead, attribution, marketing, and sales data.",
    ],
  },
  {
    org: "Revel Systems",
    role: "Web Developer to Senior Web Developer",
    dates: "October 2016 - February 2020",
    bullets: [
      "Developed web properties supporting search, content, demand generation, brand, customer education, and growth; built Angular experiences for an annual user-event microsite and interactive lead-generation calculators.",
      "Built reusable development patterns and content workflows, optimized Marketo templates, and contributed to an on-demand customer training platform.",
      "Managed two junior developers during the final five months, covering hiring, onboarding, sprint priorities, code reviews, feedback, and transition handoff.",
    ],
  },
];

export const skills: SkillLine[] = [
  {
    group: "Frontend and platform",
    tags: "JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, Vercel, GraphQL, Git, continuous integration and delivery",
  },
  {
    group: "Content systems",
    tags: "Sanity, Contentful, headless WordPress, WordPress, Gutenberg, Advanced Custom Fields, Webflow, content modeling, localization workflows",
  },
  {
    group: "Quality and growth",
    tags: "Playwright, Core Web Vitals, Lighthouse, responsive development, WCAG-aware accessibility, technical SEO, Google Analytics 4, Google Tag Manager, A/B testing, Segment, APIs, personalization",
  },
  {
    group: "Workflow",
    tags: "Visual Studio Code, terminal tooling, AI-assisted and agent-driven development, automated quality checks, Agile Scrum and Kanban",
  },
];

export const education: EducationEntry[] = [
  { school: "General Assembly", location: "San Francisco, California", credential: "UX Immersive", year: "2019" },
  { school: "freeCodeCamp", location: "Online", credential: "Full Stack Web Development Certificate", year: "2015" },
  {
    school: "Peralta Community Colleges",
    location: "Oakland, California",
    credential: "Associate of Arts, Digital Media",
    year: "2013",
  },
];
