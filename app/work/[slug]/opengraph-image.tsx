import { ImageResponse } from "next/og";
import { loadOgFonts, loadAvatarDataUri } from "../../lib/og-assets";
import { OG_SIZE, ogTokens, TopRow, Byline } from "../../lib/og-theme";
import { caseStudies, getAllSlugs } from "../content";

export const alt = "Rodney L. Lewis";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((c) => c.slug === slug);
  const fonts = loadOgFonts();

  const title = item?.title ?? "Rodney L. Lewis";
  const kicker = item?.company.toUpperCase() ?? "CASE STUDY";

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

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
          {item && (
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 600,
                color: ogTokens.brandDark,
                marginBottom: 12,
              }}
            >
              {item.role} · {item.period}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 58,
              fontWeight: 800,
              color: ogTokens.ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
        </div>

        <Byline seriesLabel="Case Study" avatarSrc={loadAvatarDataUri()} />
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
