import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedHero from "../components/building/FeaturedHero";
import BuildingList from "./BuildingList";
import { featuredHero, items } from "../blog/content";
import { SHOW_BUILDING_IN_PUBLIC } from "../config";

const DESCRIPTION =
  "Repos, writing, and video, in the open as it ships. Proof of work beats claims of it.";

export const metadata: Metadata = {
  ...(SHOW_BUILDING_IN_PUBLIC ? {} : { robots: { index: false, follow: false } }),
  title: "Building | Rodney L. Lewis",
  description: DESCRIPTION,
  alternates: { canonical: "/building" },
  openGraph: {
    title: "Building | Rodney L. Lewis",
    description: DESCRIPTION,
    url: "/building",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Building | Rodney L. Lewis",
    description: DESCRIPTION,
  },
};

export default function BuildingPage() {
  const heroSlugs = new Set(featuredHero.map((i) => i.slug));
  const rest = items.filter((i) => !heroSlugs.has(i.slug));

  return (
    <>
      <Navbar />
      <main id="main" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="section-badge">Building in Public</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Watch the work happen.</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{DESCRIPTION}</p>
          </div>

          <FeaturedHero />

          <BuildingList items={rest} />
        </div>
      </main>
      <Footer />
    </>
  );
}
