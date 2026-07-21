"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Featured = {
  title: string;
  role: string;
  category: string;
  desc: string;
  outcome: string;
  tags: string[];
};

type Earlier = {
  title: string;
  role: string;
  outcome: string;
};

const featured: Featured[] = [
  {
    title: "Sprintz",
    role: "Founder · 2023–present",
    category: "Client Strategy & AI Adoption",
    desc: "Partner to founders and small marketing teams: audit what is blocking conversion, name the highest-leverage fix, then build it. Engagements now start with AI adoption, sorting what to automate from what stays human. The same workflow runs my own delivery, so I stay in production every week.",
    outcome: "Clients keep shipping after handoff, with AI in the loop.",
    tags: ["AI Adoption", "Conversion Strategy", "Design + Build", "Marketing Ops"],
  },
  {
    title: "Pendo.io",
    role: "Sr. Marketing Engineer · 2022–2023",
    category: "Campaign Systems",
    desc: "Inherited a marketing site where every campaign needed engineering time. Rebuilt the landing-page and email template system into modules the marketing team could assemble themselves, then worked with marketing ops to wire in personalization and progressive profiling for enterprise prospects.",
    outcome: "Campaigns stopped being engineering tickets.",
    tags: ["Landing Page Systems", "Personalization", "Demand Gen Partnership"],
  },
  {
    title: "Carrot Fertility",
    role: "Sr. Web Developer · 2021–2022",
    category: "Site Ownership",
    desc: "Owned the corporate site end to end: look and feel, growth strategy, and conversion. Standardized how web work got scoped and shipped, and partnered with teams across the company to turn new page and campaign needs into a modular template system.",
    outcome: "Left a site the marketing team ran without a developer in the loop.",
    tags: ["Site Ownership", "Template Systems", "Conversion"],
  },
];

const earlier: Earlier[] = [
  {
    title: "Kiddom",
    role: "Sr. Web Developer · 2021",
    outcome: "Streamlined the marketing component library and audited the site against funnel data and heatmaps, leaving the team a base they could iterate on without starting over.",
  },
  {
    title: "Andersen Digital",
    role: "Sr. Web Developer · 2020–2021",
    outcome: "Ran CMS and marketing-automation migrations for enterprise clients including Rancher IO, AppZen, and Illumio, connecting their campaign tooling to the platforms their sales teams already worked in.",
  },
  {
    title: "Revel Systems",
    role: "Web Developer to Sr. Web Developer · 2016–2020",
    outcome: "Spent four years rebuilding the company's web properties around SEO and growth priorities, then helped build an on-demand product training platform that gave customers a reason to stay after the sale.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Experience</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Marketing-site lifecycles, owned end-to-end.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every role has followed the same arc: an inherited marketing site, a platform reset, and a team that ships without me afterward.
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
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-1">
                    {p.category}
                  </p>
                  <p className="text-gray-500 text-sm">{p.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <p className="text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                <p className="text-lg font-bold text-brand mb-5">{p.outcome}</p>
                <p className="text-sm font-medium text-gray-700">
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
              </div>
            </motion.article>
          ))}
        </div>

        {/* Earlier roles tier */}
        <Reveal>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-dark mb-2">
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
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-gray-500 text-xs">{p.role}</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{p.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
