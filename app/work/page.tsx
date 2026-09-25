import type { Metadata } from "next";
import { WorkNavbar } from "./WorkChrome";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WorkPageClient from "./WorkPageClient";
import { caseStudies } from "./content";
import { SHOW_WORK } from "../config";

const SITE_URL = "https://rl22.github.io";
const DESCRIPTION =
  "Seven case studies from nine years owning marketing-site lifecycles: CMS architecture, component systems, demand gen platforms, and the integrations underneath.";

export const metadata: Metadata = {
  ...(SHOW_WORK ? {} : { robots: { index: false, follow: false } }),
  title: "Work | Rodney L. Lewis",
  description: DESCRIPTION,
  alternates: { canonical: "/work/" },
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
      <main id="main" className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <WorkPageClient />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
