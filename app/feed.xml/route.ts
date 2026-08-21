import { featured, items } from "../blog/content";
import { SHOW_BUILDING_IN_PUBLIC } from "../config";

export const dynamic = "force-static";

const SITE_URL = "https://rl22.github.io";
const FEED_TITLE = "Rodney L. Lewis | Blog & Resources";
const FEED_DESCRIPTION =
  "Repos, articles, and video on building in public: marketing web platforms, open source, and the systems behind them.";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type FeedEntry = { title: string; link: string; description: string; pubDate: string };

function toFeedEntries(): FeedEntry[] {
  const posts = [featured, ...items].map((p) => ({
    title: p.title,
    link: `${SITE_URL}/blog/${p.slug}/`,
    description: p.blurb,
    pubDate: new Date(p.publishedAt).toUTCString(),
  }));

  return posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
}

export async function GET() {
  const entries = SHOW_BUILDING_IN_PUBLIC ? toFeedEntries() : [];

  const itemsXml = entries
    .map(
      (e) => `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${e.link}</link>
      <guid>${e.link}</guid>
      <description>${escapeXml(e.description)}</description>
      <pubDate>${e.pubDate}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog/</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
