import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { WorkNavbar } from "./WorkChrome";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { caseStudies, PILLARS, preventWidow, slugifyCompany, type CaseStudy } from "./content";
import { SHOW_WORK } from "../config";

// Adjacent case studies from the same company are grouped under one company/
// period header instead of repeating it — the data is already ordered in
// company blocks (see app/data/work.json), so a simple adjacency scan is
// enough; it does not need to handle a company's entries being split apart.
type CompanyGroup = { company: string; period: string; studies: CaseStudy[] };

function groupByCompany(studies: CaseStudy[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const c of studies) {
    const last = groups[groups.length - 1];
    if (last && last.company === c.company) {
      last.studies.push(c);
    } else {
      groups.push({ company: c.company, period: c.period, studies: [c] });
    }
  }
  return groups;
}

const SITE_URL = "https://rl22.github.io";
const DESCRIPTION =
  "Seven case studies from nine years owning marketing-site lifecycles: CMS architecture, component systems, demand gen platforms, and the integrations underneath.";

export const metadata: Metadata = {
  ...(SHOW_WORK ? {} : { robots: { index: false, follow: false } }),
  title: "Work | Rodney L. Lewis",
  description: DESCRIPTION,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Rodney L. Lewis",
    description: DESCRIPTION,
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work | Rodney L. Lewis",
    description: DESCRIPTION,
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: caseStudies.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    url: `${SITE_URL}/work/${c.slug}/`,
  })),
};

export default function WorkPage() {
  return (
    <>
      <WorkNavbar />
      <main id="main" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-6">
          <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Work
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {preventWidow("Seven builds, from the platform side.")}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-[62ch]">
            Case studies from nine years owning marketing-site lifecycles. Each one starts the same
            way: an inherited site, a team blocked behind engineering, and a platform that had to be
            rebuilt while it stayed live. What follows is the architecture underneath, and what
            marketing could do afterward.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[62ch] mt-3">
            Not the full work history — that&apos;s the <a href="/#experience" className="text-brand-dark hover:underline">Experience</a> section.
            These are the write-ups for the roles worth walking through in detail.
          </p>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-14">
          {PILLARS.join(" · ")}
        </p>

        <ul className="space-y-px border-t border-gray-200">
          {groupByCompany(caseStudies).map((group) => (
            <li
              key={group.company}
              id={slugifyCompany(group.company)}
              className="list-none border-b border-gray-200 scroll-mt-24"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-6 py-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                    {group.company}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{group.period}</p>
                </div>

                <div className="space-y-8">
                  {group.studies.map((c) => (
                    <a key={c.slug} href={`/work/${c.slug}/`} className="group block">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-brand-dark transition-colors">
                        {preventWidow(c.title)}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4 max-w-[60ch]">{c.blurb}</p>
                      <ul className="flex flex-wrap gap-2 mb-4">
                        {c.pillars.map((p) => (
                          <li key={p} className="tag">
                            {p}
                          </li>
                        ))}
                      </ul>
                      <span className="text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5">
                        Read the case study
                        <ArrowRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
