import type { Metadata } from "next";
import { ogTokens, TopRow, Byline } from "../lib/og-theme";

export const metadata: Metadata = {
  title: "OG Preview | Rodney L. Lewis",
  robots: { index: false },
};

// Live reference for every OG card the site actually generates, plus the two
// sitewide defaults that don't have a per-page generator.
//
// Cards 3–6 import the exact TopRow/Byline components used by the real
// Satori generators (app/blog/[slug]/opengraph-image.tsx,
// app/work/[slug]/opengraph-image.tsx, shared via app/lib/og-theme.tsx) —
// so this page can't silently drift from what actually ships the way a
// hand-duplicated copy would. Only the avatar source differs: the real
// generators load a base64 data URI via app/lib/og-assets.ts (Satori can't
// fetch a relative browser path at build time), this page uses the plain
// "/img/..." site path since it's rendered live in a browser.
//
// Cards 1–2 (sitewide default/alt) have no per-page generator — the site
// still uses a static /public/og-default.png for the homepage, /resume, and
// the /blog and /work index pages — so they stay hand-coded illustrations,
// not tied to any real route.
const avatarSrc = "/img/rod-transparent.png";

const brand = ogTokens.brand;
const brandDark = ogTokens.brandDark;
const cream = ogTokens.cream;
const ink = ogTokens.ink;
const sub = ogTokens.sub;
const creamTint = "#F5EFE6";
const creamTintDim = "#EAD9CF";

export default function OgPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-4 py-10 px-4 overflow-x-auto">
      <p className="text-sm text-gray-600 font-medium">
        OG image reference · every card is 1200 × 630
      </p>

      {/* ===================================================================
          1. Default sitewide (no generator — static /public/og-default.png)
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-4">
        1 · Default sitewide (static, used for homepage / resume / index pages)
        · <code>#og-card-default</code>
      </h2>
      <div
        id="og-card-default"
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          backgroundColor: cream,
          fontFamily: "Figtree",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,
            width: 420,
            height: 630,
            backgroundColor: brand,
            overflow: "hidden",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt=""
            style={{
              display: "flex",
              width: 620,
              height: 620,
              maxWidth: "none",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 780,
            height: 630,
            paddingTop: 64,
            paddingBottom: 64,
            paddingLeft: 72,
            paddingRight: 48,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                backgroundColor: brand,
                borderRadius: 14,
                color: "#FFFFFF",
                fontFamily: "Bricolage Grotesque",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              RL
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: ink }}>
              Rodney L. Lewis
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 57,
                fontWeight: 800,
                color: ink,
                letterSpacing: -2,
                lineHeight: 1.08,
              }}
            >
              Build platforms.
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 57,
                fontWeight: 800,
                color: brandDark,
                letterSpacing: -2,
                lineHeight: 1.08,
              }}
            >
              Scale marketing impact.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: `3px solid ${brand}`,
              paddingTop: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: ink }}>
                Senior Web Platform Engineer
              </div>
              <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: sub }}>
                ·
              </div>
              <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: sub }}>
                rl22.github.io
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. Sitewide alt (illustrative only — not currently wired up)
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        2 · Sitewide alt (terracotta-drenched, illustrative — not in use)
        · <code>#og-card-alt</code>
      </h2>
      <div
        id="og-card-alt"
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: brand,
          padding: 72,
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                backgroundColor: cream,
                borderRadius: 14,
                color: brand,
                fontFamily: "Bricolage Grotesque",
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              RL
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: cream }}>
              Rodney L. Lewis
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 68,
              fontWeight: 800,
              color: creamTint,
              letterSpacing: -1.5,
              lineHeight: 1.1,
            }}
          >
            Build platforms.
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 68,
              fontWeight: 800,
              color: creamTintDim,
              letterSpacing: -1.5,
              lineHeight: 1.1,
            }}
          >
            Scale marketing impact.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px solid ${cream}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: cream }}>
              Senior Web Platform Engineer
            </div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: creamTintDim }}>
              ·
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: creamTintDim }}>
              rl22.github.io
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          3. Blog: article — kicker is the post's category (real logic from
          app/blog/[slug]/opengraph-image.tsx), not a generic "ARTICLE" label
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        3 · Blog article · kicker = <code>post.category</code>
        · <code>/blog/agnostic-ai-stack/opengraph-image</code>
      </h2>
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: cream,
          padding: 72,
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        <TopRow kicker="THOUGHTS" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 60,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            The case for an agnostic AI stack
          </div>
        </div>
        <Byline seriesLabel="Building in Public" avatarSrc={avatarSrc} />
      </div>

      {/* ===================================================================
          4. Blog: video — same category-based kicker, play affordance,
          seriesLabel stays "Building in Public"
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        4 · Blog video · kicker = <code>post.category</code>
        · <code>/blog/on-brand-stock-photos/opengraph-image</code>
      </h2>
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: cream,
          padding: 72,
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        <TopRow kicker="AI" />
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
              backgroundColor: brand,
            }}
          >
            <svg width="34" height="40" viewBox="0 0 34 40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 34,20 0,40" fill={cream} />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 60,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            Augment Your On-Brand Stock Photos
          </div>
        </div>
        <Byline seriesLabel="Building in Public" avatarSrc={avatarSrc} />
      </div>

      {/* ===================================================================
          5. Case studies — kicker = company name, role · period subline,
          seriesLabel = "Case Study". Real logic from
          app/work/[slug]/opengraph-image.tsx.
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        5 · Case study · kicker = <code>item.company</code>, subline ={" "}
        <code>role · period</code> · <code>/work/pendo-core-web-platform/opengraph-image</code>
      </h2>
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: cream,
          padding: 72,
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        <TopRow kicker="PENDO.IO" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              color: brandDark,
              marginBottom: 12,
            }}
          >
            Sr. Marketing Engineer · Oct 2022 – Jun 2023
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 58,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            A URL architecture the product suite could grow into
          </div>
        </div>
        <Byline seriesLabel="Case Study" avatarSrc={avatarSrc} />
      </div>

      {/* ===================================================================
          6. Repo page — kicker is hardcoded "OPEN SOURCE" (not category-
          driven, unlike articles/videos), name first then tagline as a
          subtitle beneath it. Real logic from
          app/blog/[slug]/opengraph-image.tsx's repo branch.
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        6 · Repo page · kicker = fixed "OPEN SOURCE", tagline below the name
        · <code>/blog/readworthy/opengraph-image</code>
      </h2>
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: cream,
          padding: 72,
          fontFamily: "Figtree",
          position: "relative",
        }}
      >
        <TopRow kicker="OPEN SOURCE" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 60,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            readworthy
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              color: sub,
              marginTop: 16,
              maxWidth: 900,
            }}
          >
            AI-native docs optimized for readability, structure, and context efficiency.
          </div>
        </div>
        <Byline seriesLabel="Building in Public" avatarSrc={avatarSrc} />
      </div>

      <p className="text-xs text-gray-500 max-w-xl text-center mt-4 mb-10">
        Cards 3–6 render from the same components the real generators use
        (<code>app/lib/og-theme.tsx</code>) — this page can&apos;t silently
        drift from production the way a hand-duplicated copy could. Cards 1–2
        are hand-coded illustrations with no generator behind them.
      </p>
    </div>
  );
}
