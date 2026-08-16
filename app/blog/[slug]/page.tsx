import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader, BlogFooter } from "../BlogChrome";
import VideoLayout from "../VideoLayout";
import ArticleLayout from "../ArticleLayout";
import RepoLayout from "../RepoLayout";
import {
  getAllSlugs,
  getRepoMeta,
  getRepoPageBySlug,
  getVideoOrArticleBySlug,
  wordCount,
} from "../content";
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

  const post = getVideoOrArticleBySlug(slug);
  if (post) {
    const title = `${post.title} | Rodney L. Lewis`;
    const isArticle = post.type !== "video";
    return {
      title,
      description: post.blurb,
      alternates: { canonical },
      ...(SHOW_BUILDING_IN_PUBLIC ? {} : { robots: { index: false, follow: false } }),
      openGraph: {
        title,
        description: post.blurb,
        url: canonical,
        siteName: "Rodney L. Lewis",
        type: post.type === "video" ? "video.other" : "article",
        ...(isArticle ? { publishedTime: post.publishedAt, authors: ["Rodney L. Lewis"] } : {}),
      },
      twitter: {
        card: post.type === "video" ? "summary_large_image" : "summary",
        title,
        description: post.blurb,
      },
    };
  }

  const repoPage = getRepoPageBySlug(slug);
  if (repoPage) {
    const title = `${repoPage.repo} | Rodney L. Lewis`;
    return {
      title,
      description: repoPage.tagline,
      alternates: { canonical },
      ...(SHOW_BUILDING_IN_PUBLIC ? {} : { robots: { index: false, follow: false } }),
      openGraph: {
        title,
        description: repoPage.tagline,
        url: canonical,
        siteName: "Rodney L. Lewis",
        type: "article",
        publishedTime: repoPage.publishedAt,
        authors: ["Rodney L. Lewis"],
      },
      twitter: {
        card: "summary",
        title,
        description: repoPage.tagline,
      },
    };
  }

  return { title: "Not found | Rodney L. Lewis" };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonical = `${SITE_URL}/blog/${slug}/`;

  const post = getVideoOrArticleBySlug(slug);
  if (post) {
    if (post.type === "video") {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: post.title,
        description: post.blurb,
        uploadDate: post.publishedAt,
        author: AUTHOR,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        ...(post.videoId
          ? {
              embedUrl: `https://www.youtube-nocookie.com/embed/${post.videoId}`,
              thumbnailUrl: `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`,
            }
          : {}),
        ...(post.duration ? { duration: post.duration } : {}),
      };
      return (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(post.title, canonical)) }}
          />
          <BlogHeader />
          <main id="main" className="bg-white">
            <VideoLayout item={post} />
          </main>
          <BlogFooter />
        </>
      );
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.blurb,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      articleSection: post.category,
      wordCount: wordCount(post.body),
      ...("image" in post && post.image ? { image: post.image } : {}),
      author: AUTHOR,
      publisher: AUTHOR,
      url: canonical,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(post.title, canonical)) }}
        />
        <BlogHeader />
        <main id="main" className="bg-white">
          <ArticleLayout item={post} />
        </main>
        <BlogFooter />
      </>
    );
  }

  const repoPage = getRepoPageBySlug(slug);
  if (repoPage) {
    const meta = getRepoMeta(repoPage.repo);
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: repoPage.repo,
      description: meta?.description ?? repoPage.tagline,
      codeRepository: meta?.url,
      programmingLanguage: meta?.language,
      author: AUTHOR,
      url: canonical,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(repoPage.repo, canonical)) }}
        />
        <BlogHeader />
        <main id="main" className="bg-white">
          <RepoLayout page={repoPage} meta={meta} />
        </main>
        <BlogFooter />
      </>
    );
  }

  notFound();
}
