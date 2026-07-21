import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OG Preview | Rodney L. Lewis",
  robots: { index: false },
};

// OG image previews, authored as HTML for Satori conversion.
//
// Satori portability rules followed here:
// - inline styles only (no Tailwind classes inside the cards)
// - flexbox only (every element with children declares display: flex)
// - solid colors, no CSS variables, no grid, no filters
// - fonts referenced by family name; supply Bricolage Grotesque + Figtree
//   font buffers to satori() at render time
// - images use site-relative "/img/..." src for this browser preview; at
//   render time satori requires absolute URLs or data URIs for images
//
// Capture targets (each exactly 1200x630):
//   #og-card-default  - default sitewide OG image
//   #og-card-alt      - alternate sitewide OG image (terracotta-drenched)
//   #og-card-article  - blog article template (dynamic title)
//   #og-card-video    - blog video template (dynamic title)

const brand = "#C0614A";
const brandDark = "#A5423D";
const cream = "#F5EFE6";
const ink = "#1C1B1A";
const sub = "#4A4744";
const creamTint = "#F5EFE6";
const creamTintDim = "#EAD9CF";

export default function OgPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-4 py-10 px-4 overflow-x-auto">
      <p className="text-sm text-gray-600 font-medium">
        OG image previews · capture each card element at 1200 × 630
      </p>

      {/* ===================================================================
          1. Default sitewide
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-4">
        1 · Default sitewide · <code>#og-card-default</code>
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
        {/* Full-bleed terracotta field on the right. The portrait's
            transparent upper area lets the silhouette read directly against
            the color with no visible box edge; the desk bleeds off the
            bottom. Image is 1024x1024 with the head centered at x=512, so a
            centered crop keeps him centered in the field. */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,
            width: 480,
            height: 630,
            backgroundColor: brand,
            overflow: "hidden",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/rod-transparent.png"
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

        {/* Type column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            height: 630,
            paddingTop: 64,
            paddingBottom: 64,
            paddingLeft: 72,
            paddingRight: 48,
          }}
        >
          {/* Identity */}
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

          {/* Headline: three lines, set large now that the split defines the
              column instead of the type dodging a floating photo block. */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 68,
                fontWeight: 800,
                color: ink,
                letterSpacing: -2,
                lineHeight: 1.06,
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
                color: brandDark,
                letterSpacing: -2,
                lineHeight: 1.06,
              }}
            >
              Scale marketing
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Bricolage Grotesque",
                fontSize: 68,
                fontWeight: 800,
                color: brandDark,
                letterSpacing: -2,
                lineHeight: 1.06,
              }}
            >
              impact.
            </div>
          </div>

          {/* Footer: rule spans the type column only, so its terminus aligns
              with the color field's edge. */}
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
          2. Sitewide alt
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        2 · Sitewide alt · <code>#og-card-alt</code>
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
        {/* Top row: inverted monogram + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: cream,
              }}
            >
              Rodney L. Lewis
            </div>
          </div>
        </div>

        {/* Headline in cream tones */}
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

        {/* Bottom row: title · url, in cream */}
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
          3. Blog: article template
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        3 · Blog: article template · <code>#og-card-article</code>
      </h2>
      <div
        id="og-card-article"
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
        {/* Top row: monogram + name ... kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: ink,
              }}
            >
              Rodney L. Lewis
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: brandDark,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            ARTICLE
          </div>
        </div>

        {/* Article title slot (dynamic per post at render time) */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1050 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 64,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            Placeholder: article title goes here, swapped per post at render time
          </div>
        </div>

        {/* Bottom row: series · url ... headshot + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px solid ${brand}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: sub }}>
            Building in Public · rl22.github.io
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: 999,
                backgroundColor: brand,
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/rod-transparent.png"
                alt=""
                style={{
                  display: "flex",
                  position: "absolute",
                  left: -50,
                  top: -7,
                  width: 172,
                  height: 172,
                  maxWidth: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: ink }}>
              Rodney L. Lewis
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          4. Blog: video template
      =================================================================== */}
      <h2 className="text-base font-semibold text-gray-800 mt-8">
        4 · Blog: video template · <code>#og-card-video</code>
      </h2>
      <div
        id="og-card-video"
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
        {/* Top row: monogram + name ... kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: ink,
              }}
            >
              Rodney L. Lewis
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: brandDark,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            VIDEO
          </div>
        </div>

        {/* Play affordance + video title slot (dynamic per episode at render time) */}
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
              fontSize: 64,
              fontWeight: 800,
              color: ink,
              letterSpacing: -1.5,
              lineHeight: 1.15,
            }}
          >
            Placeholder: video title goes here, swapped per episode at render time
          </div>
        </div>

        {/* Bottom row: series · url ... headshot + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px solid ${brand}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: sub }}>
            Building in Public · rl22.github.io
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: 999,
                backgroundColor: brand,
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/rod-transparent.png"
                alt=""
                style={{
                  display: "flex",
                  position: "absolute",
                  left: -50,
                  top: -7,
                  width: 172,
                  height: 172,
                  maxWidth: "none",
                }}
              />
            </div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: ink }}>
              Rodney L. Lewis
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 max-w-xl text-center mt-4">
        Styles are Satori-compatible: inline flexbox only, solid colors, no CSS variables.
        Provide Bricolage Grotesque (600/800) and Figtree (500/700) font buffers to satori().
        Image <code>src</code> values here are site-relative ("/img/...") for this browser
        preview only — at render time Satori requires absolute URLs or data URIs for images.
        Four capture targets: <code>#og-card-default</code>, <code>#og-card-alt</code>,{" "}
        <code>#og-card-article</code>, <code>#og-card-video</code>. The article and video
        templates take a dynamic title string swapped in per post/episode at render time.
      </p>
    </div>
  );
}
