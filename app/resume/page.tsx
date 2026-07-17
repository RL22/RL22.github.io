import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import PrintButton from "./PrintButton";
import "./resume.css";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Resume",
  description:
    "Resume of Rodney L. Lewis, Senior Web Platform Engineer in Oakland, CA. Eight years owning marketing-site lifecycles.",
};

const experience = [
  {
    org: "Sprintz",
    role: "Founder",
    dates: "2023 – Present",
    intro:
      "Daily production environment designing, building, and shipping high-converting marketing sites on Next.js 16, Sanity CMS, Supabase, Cal.com, and Playwright, with an AI-native, agent-driven delivery workflow.",
    bullets: [
      "Built and run an AI-native delivery workflow that ships production marketing sites end-to-end, solo.",
    ],
  },
  {
    org: "Pendo.io",
    role: "Senior Web Developer",
    dates: "2022 – 2023",
    intro: null,
    bullets: [
      "Built reusable landing-page modules and marketing templates on a headless WordPress stack.",
      "Partnered with demand gen on A/B tests and SEO; shipped data-integrated components for personalization and analytics.",
      "Marketing launched campaigns without an engineering ticket.",
    ],
  },
  {
    org: "Carrot Fertility",
    role: "Senior Web Developer",
    dates: "2021 – 2022",
    intro: null,
    bullets: [
      "Owned the marketing-site lifecycle end-to-end: Core Web Vitals, responsiveness, page speed, mobile-first performance.",
      "Built modular Webflow templates that let marketing self-serve, giving engineering their roadmap back.",
      "Cut marketing dev requests by 30%.",
    ],
  },
  {
    org: "Kiddom",
    role: "Senior Web Developer",
    dates: "2021",
    intro: null,
    bullets: [
      "Shipped SEO-optimized components and front-end refactors that lifted Lighthouse scores and gave marketing a base to iterate on.",
    ],
  },
  {
    org: "Andersen Digital",
    role: "Web Developer",
    dates: "2020 – 2021",
    intro: null,
    bullets: [
      "Led CMS and mar-tech migrations for enterprise clients, including Rancher IO from Marketo to HubSpot.",
    ],
  },
  {
    org: "Revel Systems",
    role: "Web Designer",
    dates: "2016 – 2020",
    intro: null,
    bullets: [
      "Built and maintained WordPress sites and templates; the foundation later migrated to headless WordPress.",
    ],
  },
];

const openSource = [
  {
    name: "readworthy",
    url: "github.com/RL22/readworthy",
    desc: "AI-native docs optimized for readability, structure, and context efficiency.",
  },
  {
    name: "character.md",
    url: "github.com/RL22/character.md",
    desc: "A free, open-source starter system for creating consistent photorealistic AI characters with GPT-5 Image 2 and other image generation tools.",
  },
];

const skills = [
  { group: "Frontend & Backend", tags: "TypeScript, React, Next.js, Tailwind, Supabase" },
  { group: "CMS Platforms", tags: "Sanity, Headless WordPress, WordPress, Webflow, GraphQL" },
  { group: "Mar-Tech & Data", tags: "HubSpot, Marketo, Salesforce, GA4, Vercel" },
  { group: "Conversion & SEO", tags: "A/B Testing, Technical SEO, Core Web Vitals, Lighthouse, Reusable Components" },
  { group: "Design", tags: "Figma, Sketch, Photoshop, Illustrator, Lightroom" },
  { group: "AI-Native Stack", tags: "Claude Code, Codex, Gemini, MCP, Agentic Workflows" },
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-actions">
        <a href="/" className="text-gray-600 hover:text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to site
        </a>
        <PrintButton />
      </div>

      <main id="main" className="resume-sheet">
        <header>
          <h1>Rodney L. Lewis</h1>
          <div className="resume-title">Senior Web Platform Engineer</div>
          <div className="resume-contact">
            <span>Oakland, CA</span>
            <span>lewis.rodneyl@gmail.com</span>
            <span>github.com/RL22</span>
            <span>linkedin.com/in/rodney-lewis-abb11b73</span>
            <span>sprintz.agency</span>
            <span>rl22.github.io</span>
          </div>
        </header>

        <section>
          <h2>Summary</h2>
          <p className="resume-summary">
            Eight years owning marketing-site lifecycles: CMS architecture, reusable component
            systems, and the performance work that turns a website into a compounding asset. I work
            across design, engineering, and marketing, with an AI-native workflow underneath. Senior
            IC who owns the platform end to end, from inherited site to a system marketing can
            self-serve on.
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((e) => (
            <div className="resume-entry" key={e.org}>
              <div className="resume-entry-head">
                <h3>{e.org}</h3>
                <span className="resume-entry-dates">{e.dates}</span>
              </div>
              <div className="resume-entry-role">{e.role}</div>
              {e.intro && <p style={{ margin: "4px 0 0" }}>{e.intro}</p>}
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Open Source</h2>
          {openSource.map((o) => (
            <div className="resume-oss" key={o.name}>
              <div className="resume-oss-name">{o.name}</div>
              <div className="resume-oss-url">{o.url}</div>
              <div className="resume-oss-desc">{o.desc}</div>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          {skills.map((s) => (
            <div className="resume-skills-line" key={s.group}>
              <span className="resume-skills-group">{s.group}: </span>
              <span className="resume-skills-tags">{s.tags}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
