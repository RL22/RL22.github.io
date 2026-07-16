"use client";
import { Globe, Github } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Featured = {
  title: string;
  role: string;
  category: string;
  desc: string;
  outcome: string;
  tags: string[];
  liveUrl: string | null;
  sourceUrl: string | null;
};

type Earlier = {
  title: string;
  role: string;
  outcome: string;
  liveUrl: string | null;
};

const featured: Featured[] = [
  {
    title: "Sprintz",
    role: "Founder · 2023–present",
    category: "Studio + AI Systems",
    desc: "My daily production environment: designing, building, and shipping high-converting marketing sites on Next.js 16, Sanity CMS, Supabase, Cal.com, and Playwright, with an AI-native, agent-driven delivery workflow.",
    outcome: "An AI-native delivery workflow that ships production marketing sites end-to-end.",
    tags: ["Next.js 16", "Sanity", "Supabase", "AI-Native"],
    liveUrl: "https://sprintz.agency",
    sourceUrl: "https://github.com/RL22",
  },
  {
    title: "Carrot Fertility",
    role: "Sr. Web Developer · 2021–2022",
    category: "CMS Architecture & Performance",
    desc: "Owned the marketing-site lifecycle end-to-end: Core Web Vitals, responsiveness, page speed, mobile-first performance. Modular WordPress and Webflow templates let marketing self-serve; engineering got their roadmap back.",
    outcome: "Cut marketing dev requests by 30%.",
    tags: ["WordPress", "Webflow", "Core Web Vitals", "Mobile-First"],
    liveUrl: "https://www.get-carrot.com",
    sourceUrl: null,
  },
  {
    title: "Pendo.io",
    role: "Sr. Web Developer · 2022–2023",
    category: "Reusable Components",
    desc: "Built reusable landing-page modules and marketing templates on a headless WordPress stack. Partnered with demand gen on A/B tests and SEO; shipped data-integrated components for personalization and analytics.",
    outcome: "Marketing launched campaigns without an engineering ticket.",
    tags: ["Headless WordPress", "A/B Testing", "SEO", "Personalization"],
    liveUrl: "https://pendo.io",
    sourceUrl: null,
  },
];

const earlier: Earlier[] = [
  {
    title: "Kiddom",
    role: "Sr. Web Developer · 2021",
    outcome: "SEO-optimized components and front-end refactors that lifted Lighthouse scores and gave marketing a base to iterate on.",
    liveUrl: "https://www.kiddom.co",
  },
  {
    title: "Andersen Digital",
    role: "Web Developer · 2020–2021",
    outcome: "Led CMS and mar-tech migrations for enterprise clients, including Rancher IO from Marketo to HubSpot.",
    liveUrl: null,
  },
  {
    title: "Revel Systems",
    role: "Web Designer · 2016–2020",
    outcome: "Built and maintained WordPress sites and templates; the foundation later migrated to headless WordPress.",
    liveUrl: "https://revelsystems.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Marketing-site lifecycles, owned end-to-end.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            One card per role. Each follows the same arc: an inherited site, a platform reset, a team that ships faster afterward.
          </p>
        </Reveal>

        {/* Featured tier */}
        <div className="space-y-6 mb-20">
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-cream-dark p-8 md:p-10 grid md:grid-cols-[240px_1fr] gap-8"
            >
              {/* Org identity block */}
              <div className="flex flex-col justify-between bg-brand/10 rounded-xl p-6">
                <span className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
                  {p.title}
                </span>
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
                    {p.category}
                  </p>
                  <p className="text-gray-500 text-sm">{p.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                <p className="text-lg font-bold text-brand mb-5">{p.outcome}</p>
                <p className="text-sm font-medium text-gray-700 mb-6">
                  {p.tags.map((t, ti) => (
                    <span key={t}>
                      {ti > 0 && (
                        <>
                          {" "}
                          <span className="text-brand/50 mx-1" aria-hidden="true">·</span>{" "}
                        </>
                      )}
                      {t}
                    </span>
                  ))}
                </p>
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
          ))}
        </div>

        {/* Earlier roles tier */}
        <Reveal>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
            Earlier roles
          </h3>
        </Reveal>
        <div className="mb-12">
          {earlier.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="border-t border-gray-200 py-6 grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-2 items-baseline"
            >
              <div>
                <h4 className="font-semibold text-lg">
                  {p.liveUrl ? (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h4>
                <p className="text-gray-400 text-xs">{p.role}</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{p.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
