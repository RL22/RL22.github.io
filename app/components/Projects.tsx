import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { getCaseStudyBySlug } from "../work/content";
import { SHOW_WORK } from "../config";

type Role = {
  title: string;
  role: string;
  points: string[];
  focus: string[];
  caseStudySlugs?: string[];
};

const featured: Role[] = [
  {
    title: "Sprintz",
    role: "Founder · 2023–present",
    points: [
      "Audit marketing bottlenecks for founders and growth teams, then build the fix: Sanity Studio workspaces with previews, validation and role permissions.",
      "Wire landing pages, paid acquisition and CRM into one funnel.",
    ],
    focus: ["Sanity Studio", "Next.js", "Marketing Ops", "AI Workflows"],
  },
  {
    title: "Pendo.io",
    role: "Senior Marketing Engineer · 2022–2023",
    points: [
      "Rebuilt Marketo and WordPress templates into modular blocks; marketing launched 30+ campaign pages without filing an engineering ticket.",
      "Maintained 75 solution and adoption pages across 3 page families with authoring guardrails.",
      "Built consent-aware measurement across Segment, OneTrust and Salesforce.",
    ],
    focus: ["Campaign Systems", "Marketo", "Segment"],
    caseStudySlugs: ["pendo-core-web-platform", "pendo-demand-gen-systems"],
  },
  {
    title: "Carrot Fertility",
    role: "Senior Web Developer · 2021–2022",
    points: [
      "Owned the corporate site end to end: architecture, performance, accessibility.",
      "Built modular Webflow templates that cut routine dev requests by about 30% within 90 days.",
      "Ran consent and tracking governance (OneTrust, GTM, Salesforce) across 20+ launches.",
    ],
    focus: ["Site Ownership", "Modular Templates", "Consent & Tracking"],
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
    role: "2021",
    outcome: "40+ React components on headless WordPress; the performance work earned a contract renewal.",
    caseStudySlugs: ["kiddom-component-architecture"],
  },
  {
    title: "Mednition",
    role: "2021 · Contract",
    outcome: "HubSpot landing templates still live, unchanged, years later.",
    caseStudySlugs: ["mednition-landing-page-templates"],
  },
  {
    title: "Andersen Digital",
    role: "2020–2021",
    outcome: "Ran migrations for Rancher Labs (87 landing pages), AppZen and Illumio.",
    caseStudySlugs: ["appzen-campaign-templates"],
  },
  {
    title: "Revel Systems",
    role: "2016–2020",
    outcome: "Owned marketing web properties; hired and led two developers.",
  },
];

function RoleCard({ p, delay }: { p: Role; delay: number }) {
  const studies = SHOW_WORK
    ? (p.caseStudySlugs ?? [])
        .map((slug) => getCaseStudyBySlug(slug))
        .filter((c): c is NonNullable<typeof c> => !!c)
    : [];

  return (
    <Reveal delay={delay}>
    <article className="bg-white rounded-2xl border border-cream-dark p-8 md:p-10 grid md:grid-cols-[240px_1fr] gap-8">
      {/* Org identity block */}
      <div className="flex flex-col justify-between bg-brand/10 rounded-xl p-6">
        <span className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight">
          {p.title}
        </span>
        <p className="mt-6 text-gray-700 text-sm font-medium">{p.role}</p>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <ul className="list-disc marker:text-brand-dark pl-5 space-y-2 text-gray-700 leading-relaxed mb-5">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
        <p className="text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-900">Focus:</span>{" "}
          {p.focus.map((t, ti) => (
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
    </article>
    </Reveal>
  );
}

function EarlierRoleRow({ p, delay }: { p: EarlierRole; delay: number }) {
  const studies = SHOW_WORK
    ? (p.caseStudySlugs ?? [])
        .map((slug) => getCaseStudyBySlug(slug))
        .filter((c): c is NonNullable<typeof c> => !!c)
    : [];

  return (
    <Reveal delay={delay} className="border-t border-gray-200 py-6 grid md:grid-cols-[200px_1fr] gap-x-8 gap-y-2 items-baseline">
      <div>
        <h4 className="font-semibold text-lg">{p.title}</h4>
        <p className="text-gray-600 text-sm">{p.role}</p>
      </div>
      <div>
        <p className="text-gray-700 leading-relaxed">{p.outcome}</p>
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
    </Reveal>
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
            <p className="text-gray-700 text-sm leading-relaxed mt-3">
              Five of these roles have full case studies on the{" "}
              <a href="/work/" className="text-brand-dark font-semibold underline underline-offset-4 hover:no-underline">Work</a> page.
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
