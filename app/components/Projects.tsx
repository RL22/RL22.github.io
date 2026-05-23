"use client";
import { Globe, Github } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Cover = { label: string; bg: string; fg?: string };
type Project = {
  title: string;
  role: string;
  category: string;
  desc: string;
  tags: string[];
  liveUrl: string | null;
  sourceUrl: string | null;
  image?: string;
  cover?: Cover;
};

const projects: Project[] = [
  {
    title: "Sprintz",
    role: "Founder · 2023–present",
    category: "Studio + AI Systems",
    desc: "Hybrid studio pairing high-converting marketing sites with AI-native delivery systems. Built on Next.js 16, Sanity CMS, Supabase, Cal.com, and Playwright. Drives the open-source work that sits next to it: the BMAD-OpenCode Engine, readworthy, character.md, and antenna-os.",
    tags: ["Next.js 16", "Sanity", "Supabase", "BMAD"],
    liveUrl: "https://sprintz.agency",
    sourceUrl: "https://github.com/RL22",
    cover: { label: "Sprintz", bg: "#C0614A" },
  },
  {
    title: "Pendo.io",
    role: "Sr. Web Developer · 2022–2023",
    category: "Reusable Components",
    desc: "Built reusable landing-page modules and marketing templates on a headless WordPress stack. Partnered with demand gen on A/B tests and SEO; shipped data-integrated components for personalization and analytics. Marketing launched campaigns without an engineering ticket.",
    tags: ["Headless WordPress", "A/B Testing", "SEO", "Personalization"],
    liveUrl: "https://pendo.io",
    sourceUrl: null,
    cover: { label: "Pendo", bg: "#FF4876" },
  },
  {
    title: "Carrot Fertility",
    role: "Sr. Web Developer · 2021–2022",
    category: "CMS Architecture & Performance",
    desc: "Owned the marketing-site lifecycle end-to-end: Core Web Vitals, responsiveness, page speed, mobile-first performance. Modular WordPress and Webflow templates reduced marketing dev requests by 30%. Marketing self-served; engineering got their roadmap back.",
    tags: ["WordPress", "Webflow", "Core Web Vitals", "Mobile-First"],
    liveUrl: "https://www.get-carrot.com",
    sourceUrl: null,
    cover: { label: "Carrot", bg: "#FF7043" },
  },
  {
    title: "Kiddom",
    role: "Sr. Web Developer · 2021",
    category: "SEO + Performance",
    desc: "Built SEO-optimized page components and conversion tooling aligned to growth KPIs. Partnered with UX and data teams on behavioral testing. Front-end refactors lifted Lighthouse scores and gave the marketing team a base they could iterate on.",
    tags: ["SEO", "Conversion", "Lighthouse", "UX"],
    liveUrl: "https://www.kiddom.co",
    sourceUrl: null,
    cover: { label: "Kiddom", bg: "#1ABC9C" },
  },
  {
    title: "Andersen Digital",
    role: "Web Developer · 2020–2021",
    category: "CMS & Mar-Tech Migrations",
    desc: "Led CMS and mar-tech migrations for enterprise clients: Rancher IO (Marketo to HubSpot). Also shipped WordPress themes, HubSpot landing pages, and lead-gen components for AppZen and Illumio.",
    tags: ["Marketo to HubSpot", "A/B Testing", "Lead Gen", "WordPress"],
    liveUrl: null,
    sourceUrl: null,
    cover: { label: "Andersen", bg: "#2C3E50" },
  },
  {
    title: "Revel Systems",
    role: "Web Designer · 2016–2020",
    category: "Marketing CMS",
    desc: "Built and maintained WordPress sites and custom templates for marketing and client education. Led optimization of training pages and the knowledge center to reduce bounce and improve retention, the foundation that was later migrated to headless WordPress.",
    tags: ["WordPress", "Templates", "UX", "Retention"],
    liveUrl: "https://revelsystems.com",
    sourceUrl: null,
    image: "/img/revelsystems.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-badge">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Marketing-site lifecycles, owned end-to-end.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            One card per role. Each follows the same arc: an inherited site, a platform reset, a team that ships faster afterward.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.09}>
              <motion.article
                className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col"
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative h-48 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  ) : p.cover ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: p.cover.bg, color: p.cover.fg ?? "#ffffff" }}
                    >
                      <span className="text-4xl font-extrabold tracking-tight">{p.cover.label}</span>
                    </div>
                  ) : null}
                  <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-gray-400 text-xs mb-3">{p.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1">
                        <Globe className="w-3 h-3" /> Visit site
                      </a>
                    )}
                    {p.sourceUrl && (
                      <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4 inline-flex items-center gap-1">
                        <Github className="w-3 h-3" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/RL22" target="_blank" rel="noopener noreferrer" className="btn-outline">
            More work on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
