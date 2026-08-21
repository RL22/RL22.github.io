import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader, BlogFooter } from "../BlogChrome";
import VideoLayout from "../VideoLayout";
import ArticleLayout from "../ArticleLayout";
import RepoReviewLayout from "../RepoReviewLayout";
import AnnouncementLayout from "../AnnouncementLayout";
import { getAllSlugs, getBody, getItemBySlug, getRepoMeta, wordCount } from "../content";
import { SHOW_BUILDING_IN_PUBLIC } from "../../config";

const SITE_URL = "https://rl22.github.io";
const AUTHOR = { "@type": "Person", name: "Rodney L. Lewis", url: SITE_URL };

function breadcrumbJsonLd(title: string, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${SITE_URL}/blog/${slug}/`;

  const item = getItemBySlug(slug);
  if (!item) return { title: "Not found | Rodney L. Lewis" };

  const title = `${item.title} | Rodney L. Lewis`;
  return {
    title,
    description: item.blurb,
    alternates: { canonical },
    ...(SHOW_BUILDING_IN_PUBLIC ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description: item.blurb,
      url: canonical,
      siteName: "Rodney L. Lewis",
      type: item.type === "video" ? "video.other" : "article",
      ...(item.type !== "video" ? { publishedTime: item.publishedAt, authors: ["Rodney L. Lewis"] } : {}),
    },
    twitter: {
      card: item.type === "video" ? "summary_large_image" : "summary",
      title,
      description: item.blurb,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonical = `${SITE_URL}/blog/${slug}/`;

  const item = getItemBySlug(slug);
  if (!item) notFound();

  if (item.type === "video") {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: item.title,
      description: item.blurb,
      uploadDate: item.publishedAt,
      author: AUTHOR,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      ...(item.videoId
        ? {
            embedUrl: `https://www.youtube-nocookie.com/embed/${item.videoId}`,
            thumbnailUrl: `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`,
          }
        : {}),
      ...(item.duration ? { duration: item.duration } : {}),
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(item.title, canonical)) }}
        />
        <BlogHeader />
        <main id="main" className="bg-white">
          <VideoLayout item={item} />
        </main>
        <BlogFooter />
      </>
    );
  }

  if (item.type === "product") {
    const meta = item.repo ? getRepoMeta(item.repo) : undefined;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: item.title,
      description: meta?.description ?? item.blurb,
      codeRepository: meta?.url ?? item.url,
      programmingLanguage: meta?.language,
      author: AUTHOR,
      url: canonical,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(item.title, canonical)) }}
        />
        <BlogHeader />
        <main id="main" className="bg-white">
          <AnnouncementLayout item={item} />
        </main>
        <BlogFooter />
      </>
    );
  }

  // "thoughts" and "repo review"
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: item.title,
    description: item.blurb,
    datePublished: item.publishedAt,
    dateModified: item.publishedAt,
    articleSection: item.category[0],
    wordCount: wordCount(getBody(item)),
    author: AUTHOR,
    publisher: AUTHOR,
    url: canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(item.title, canonical)) }}
      />
      <BlogHeader />
      <main id="main" className="bg-white">
        {item.type === "repo review" ? <RepoReviewLayout item={item} /> : <ArticleLayout item={item} />}
      </main>
      <BlogFooter />
    </>
  );
}
