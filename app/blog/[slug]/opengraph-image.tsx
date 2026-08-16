import { ImageResponse } from "next/og";
import { loadOgFonts, loadAvatarDataUri } from "../../lib/og-assets";
import { OG_SIZE, ogTokens, TopRow, Byline } from "../../lib/og-theme";
import { featured, items, repoPages, getAllSlugs } from "../content";

export const alt = "Rodney L. Lewis";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function findEntry(slug: string) {
  if (featured.slug === slug) return { kind: "video" as const, item: featured };
  const post = items.find((i) => i.slug === slug);
  if (post) return { kind: post.type, item: post };
  const repo = repoPages.find((r) => r.slug === slug);
  if (repo) return { kind: "repo" as const, item: repo };
  return null;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  const fonts = loadOgFonts();

  const title = entry ? ("repo" === entry.kind ? entry.item.repo : entry.item.title) : "Rodney L. Lewis";
  const kicker =
    entry?.kind === "repo"
      ? "OPEN SOURCE"
      : entry
        ? entry.item.category.toUpperCase()
        : "BLOG";
  const isVideo = entry?.kind === "video";

  return new ImageResponse(
    (
      <div
        style={{
          width: OG_SIZE.width,
          height: OG_SIZE.height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ogTokens.cream,
          padding: 72,
          fontFamily: "Figtree",
        }}
      >
        <TopRow kicker={kicker} />

        {isVideo ? (
          <div style={{ display: "flex", alignItems: "center", gap: 36, maxWidth: 1050 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 96,
                height: 96,
                minWidth: 96,
                borderRadius: 999,
                backgroundColor: ogTokens.brand,
              }}
            >
              <svg width="34" height="40" viewBox="0 0 34 40" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 34,20 0,40" fill={ogTokens.cream} />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 60,
                fontWeight: 800,
                color: ogTokens.ink,
                letterSpacing: -1.5,
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 60,
                fontWeight: 800,
                color: ogTokens.ink,
                letterSpacing: -1.5,
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
            {entry?.kind === "repo" && (
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  fontWeight: 500,
                  color: ogTokens.sub,
                  marginTop: 16,
                  maxWidth: 900,
                }}
              >
                {entry.item.tagline}
              </div>
            )}
          </div>
        )}

        <Byline seriesLabel="Building in Public" avatarSrc={loadAvatarDataUri()} />
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
