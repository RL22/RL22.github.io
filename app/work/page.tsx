import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies, PILLARS } from "./content";
import { SHOW_WORK } from "../config";

const SITE_URL = "https://rl22.github.io";
const DESCRIPTION =
  "Four case studies from nine years owning marketing-site lifecycles: CMS architecture, component systems, demand gen platforms, and the integrations underneath.";

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
    <main id="main" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <a
          href="/"
          className="text-gray-600 hover:text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to site
        </a>

        <div className="max-w-3xl mb-6">
          <span className="section-badge">Work</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Four builds, from the platform side.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-[62ch]">
            Case studies from nine years owning marketing-site lifecycles. Each one starts the same
            way: an inherited site, a team blocked behind engineering, and a platform that had to be
            rebuilt while it stayed live. What follows is the architecture underneath, and what
            marketing could do afterward.
          </p>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-14">
          {PILLARS.join(" · ")}
        </p>

        <ul className="space-y-px border-t border-gray-200">
          {caseStudies.map((c) => (
            <li key={c.slug} className="list-none border-b border-gray-200">
              <a
                href={`/work/${c.slug}/`}
                className="group grid md:grid-cols-[1fr_2fr] gap-x-10 gap-y-3 py-10 items-baseline"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">
                    {c.company}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{c.period}</p>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-brand-dark transition-colors">
                    {c.title}
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
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-10 mt-2 flex flex-wrap gap-4">
          <a href="/resume" className="btn-outline">
            Resume
          </a>
          <a href="/#contact" className="btn-primary">
            Get in touch
          </a>
        </div>
      </div>
    </main>
  );
}
