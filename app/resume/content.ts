// Single resume of record. Facts synced from the job-search core-cv.md
// resume of record (Sep 2026); Revel Systems is kept here even though
// core-cv.md's condensed one-pager omits it.

export type Entry = {
  org: string;
  role: string;
  dates: string;
  description: string;
};

export type SkillLine = { group: string; tags: string };

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

export const headline = "Web Developer, Marketing Site";

export const summary =
  "Nine years owning marketing-site lifecycles — architecting the component systems and self-serve publishing workflows that create operational leverage, so marketing ships without opening a ticket. Full-funnel growth engineer with a repeated pattern: inherit a site under strain, rebuild it into one marketing runs itself, shipped through AI-assisted, agent-driven development workflows.";

export const experience: Entry[] = [
  {
    org: "Sprintz",
    role: "Principal Marketing Engineer",
    dates: "Jul 2023 - Present",
    description:
      "Migrated the platform from Webflow to custom React and built a full acquisition funnel for client Deliberate Canine on Go High Level—paid Facebook campaigns into a free video-course lead magnet—capturing 227 leads and closing 44 customers for a ~19.4% conversion rate, powered by 2+ years of AI-assisted workflows and automations across the client roster.",
  },
  {
    org: "Pendo.io",
    role: "Sr. Marketing Engineer",
    dates: "Oct 2022 - Jun 2023",
    description:
      "Empowered demand generation to launch 30+ campaign landing pages with zero engineering tickets via a suite of reusable Marketo templates, including a 16-section dynamic master, and maintained 75 pages across 3 verified page families, while engineering a consent-aware measurement and lead-routing stack across Segment, OneTrust, ZoomInfo, Marketo, and Salesforce.",
  },
  {
    org: "Carrot Fertility",
    role: "Sr. Web Developer",
    dates: "Sep 2021 - Jul 2022",
    description:
      "In-housed marketing web operations from an external agency, reclaiming ~30% of routine development time via modular Webflow templates and self-service publishing workflows, implementing 5+ major process improvements, while owning QA, release quality, and GA4/GTM/A-B-test instrumentation across 20+ cross-functional projects.",
  },
  {
    org: "Kiddom",
    role: "Sr. Web Developer",
    dates: "Apr - Sep 2021",
    description:
      "Owned a 40+ component Gatsby/React frontend connected to headless WordPress via REST and GraphQL, and turned Lighthouse, funnel, and conversion findings into prioritized UX improvements across 20+ components, expanding the sitemap from 51 to 54 URLs with 3 new lead-gen pages—earning a performance-based contract renewal.",
  },
  {
    org: "Andersen Digital",
    role: "Sr. Web Developer",
    dates: "Aug 2020 - May 2021",
    description:
      "Migrated CMS/mar-tech systems for three B2B clients—87 verified Rancher Labs landing pages in Marketo, a Marketo-to-HubSpot migration for AppZen, and 36 distinct Illumio landing pages—and built a reusable AppZen ROI-calculator (React, jsPDF, HubSpot) for real-time sales reports.",
  },
  {
    org: "Revel Systems",
    role: "Web Developer to Sr. Web Developer",
    dates: "Oct 2016 - Feb 2020",
    description:
      "Owned Revel's web properties over three years, building Angular experiences—an annual user-event microsite and ROI calculators—plus an on-demand customer training platform, optimizing Marketo email and landing-page templates with Salesforce Sales Cloud CRM integration for lead-handoff automation, and hiring and directing two junior developers in the final five months.",
  },
];

export const skills: SkillLine[] = [
  { group: "CMS Platforms", tags: "Sanity, Contentful, Headless WordPress, WordPress, Webflow, GraphQL" },
  { group: "Frontend & Backend", tags: "TypeScript, React, Next.js, Node.js, Tailwind, Supabase, Figma, Docker, Vercel" },
  { group: "MarTech", tags: "HubSpot, Marketo, Salesforce, GA4, GTM, Segment, OneTrust, Mutiny" },
  { group: "Performance & Growth", tags: "CRO, A/B Testing, Technical SEO, Core Web Vitals, Lighthouse, Accessibility Testing" },
  { group: "AI & Automation", tags: "Claude Code, Codex, Gemini, MCP, Agentic Workflows, n8n, Groq, OpenRouter" },
];
