import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkHeader, WorkFooter } from "../WorkChrome";
import WorkLayout from "../WorkLayout";
import { getAllSlugs, getCaseStudyBySlug } from "../content";
import { SHOW_WORK } from "../../config";

const SITE_URL = "https://rl22.github.io";
const AUTHOR = { "@type": "Person", name: "Rodney L. Lewis", url: SITE_URL };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) return { title: "Not found | Rodney L. Lewis" };

  const canonical = `${SITE_URL}/work/${slug}/`;
  const title = `${item.title} | Rodney L. Lewis`;

  return {
    title,
    description: item.blurb,
    alternates: { canonical },
    ...(SHOW_WORK ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description: item.blurb,
      url: canonical,
      siteName: "Rodney L. Lewis",
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description: item.blurb,
    },
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);
  if (!item) notFound();

  const canonical = `${SITE_URL}/work/${slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    headline: item.title,
    description: item.blurb,
    datePublished: item.publishedAt,
    keywords: item.pillars.join(", "),
    author: AUTHOR,
    publisher: AUTHOR,
    url: canonical,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkHeader />
      <main id="main" className="bg-white">
        <WorkLayout item={item} />
      </main>
      <WorkFooter />
    </>
  );
}
