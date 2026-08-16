"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { getCaseStudyBySlug } from "../work/content";
import { SHOW_WORK } from "../config";

type Role = {
  title: string;
  role: string;
  category: string;
  desc: string;
  outcome: string;
  tags: string[];
  caseStudySlugs?: string[];
};

const featured: Role[] = [
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
    caseStudySlugs: ["pendo-core-web-platform", "pendo-demand-gen-systems"],
  },
  {
    title: "Carrot Fertility",
    role: "Sr. Web Developer · 2021–2022",
    category: "Site Ownership",
    desc: "Owned the corporate site end to end: look and feel, growth strategy, and conversion. Standardized how web work got scoped and shipped, and partnered with teams across the company to turn new page and campaign needs into a modular template system.",
    outcome: "Left a site the marketing team ran without a developer in the loop.",
    tags: ["Site Ownership", "Template Systems", "Conversion"],
    caseStudySlugs: ["carrot-cms-architecture", "carrot-integrated-marketing-systems"],
  },
];

type EarlierRole = {
  title: string;
  role: string;
  outcome: string;
  caseStudySlugs?: string[];
};

const earlier: EarlierRole[] = [
  {
    title: "Kiddom",
    role: "Sr. Web Developer · 2021",
    outcome: "Streamlined the marketing component library and audited the site against funnel data and heatmaps, leaving the team a base they could iterate on without starting over.",
    caseStudySlugs: ["kiddom-component-architecture"],
  },
  {
    title: "Mednition",
    role: "HubSpot Developer / Designer · Feb–Jul 2021 · Contract",
    outcome: "Designed and built modular HubSpot landing page templates for KATE, an emergency-department triage AI, that stayed in production unchanged for years after the five-month contract ended.",
    caseStudySlugs: ["mednition-landing-page-templates"],
  },
  {
    title: "Andersen Digital",
    role: "Sr. Web Developer · 2020–2021",
    outcome: "Ran CMS and marketing-automation migrations for enterprise clients including Rancher IO, AppZen, and Illumio, connecting their campaign tooling to the platforms their sales teams already worked in.",
    caseStudySlugs: ["appzen-campaign-templates"],
  },
  {
    title: "Revel Systems",
    role: "Web Developer to Sr. Web Developer · 2016–2020",
    outcome: "Spent four years rebuilding the company's web properties around SEO and growth priorities, then helped build an on-demand product training platform that gave customers a reason to stay after the sale.",
  },
];

function RoleCard({ p, delay }: { p: Role; delay: number }) {
  const studies = SHOW_WORK
    ? (p.caseStudySlugs ?? [])
        .map((slug) => getCaseStudyBySlug(slug))
        .filter((c): c is NonNullable<typeof c> => !!c)
    : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
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

        {studies.length > 0 && (
          <ul className="flex flex-col gap-y-2 mt-6 pt-6 border-t border-cream-dark">
            {studies.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/work/${c.slug}/`}
                  className="group text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 hover:underline"
                >
                  Case study: {c.title}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

function EarlierRoleRow({ p, delay }: { p: EarlierRole; delay: number }) {
  const studies = SHOW_WORK
    ? (p.caseStudySlugs ?? [])
        .map((slug) => getCaseStudyBySlug(slug))
        .filter((c): c is NonNullable<typeof c> => !!c)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className="border-t border-gray-200 py-6 grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-2 items-baseline"
    >
      <div>
        <h4 className="font-semibold text-lg">{p.title}</h4>
        <p className="text-gray-500 text-xs">{p.role}</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm leading-relaxed">{p.outcome}</p>
        {studies.length > 0 && (
          <ul className="flex flex-col gap-y-1 mt-2">
            {studies.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/work/${c.slug}/`}
                  className="group text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 hover:underline"
                >
                  Case study: {c.title}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="experience" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Experience</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Marketing-site lifecycles, owned end-to-end.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every role has followed the same arc: an inherited marketing site, a platform reset, and a team that ships without me afterward.
          </p>
          {SHOW_WORK && (
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              <a href="/work/" className="text-brand-dark hover:underline">Work</a> is a showcase
              of the projects I completed in previous roles.
            </p>
          )}
        </Reveal>

        {/* Featured tier */}
        <div className="space-y-6 mb-20">
          {featured.map((p, i) => (
            <RoleCard key={p.title} p={p} delay={i * 0.06} />
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
            <EarlierRoleRow key={p.title} p={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
