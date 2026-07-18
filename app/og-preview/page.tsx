import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OG Preview | Rodney L. Lewis",
  robots: { index: false },
};

// Default sitewide OG image, authored as HTML for Satori conversion.
//
// Satori portability rules followed here:
// - inline styles only (no Tailwind classes inside the card)
// - flexbox only (every element with children declares display: flex)
// - solid colors, no CSS variables, no grid, no filters
// - fonts referenced by family name; supply Bricolage Grotesque + Figtree
//   font buffers to satori() at render time
//
// Capture target: the element with id="og-card" (exactly 1200x630).

const brand = "#C0614A";
const brandDark = "#A5423D";
const cream = "#F5EFE6";
const ink = "#1C1B1A";
const sub = "#4A4744";

export default function OgPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-4 py-10 px-4 overflow-x-auto">
      <p className="text-sm text-gray-600 font-medium">
        Default sitewide OG image · capture <code>#og-card</code> at 1200 × 630
      </p>

      <div
        id="og-card"
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
        {/* Top row: monogram + site */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 76,
                height: 76,
                backgroundColor: brand,
                borderRadius: 18,
                color: "#FFFFFF",
                fontFamily: "Bricolage Grotesque",
                fontSize: 34,
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
          <div style={{ display: "flex", fontSize: 24, fontWeight: 500, color: sub }}>
            rl22.github.io
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 80,
              fontWeight: 800,
              color: ink,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Build platforms.
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage Grotesque",
              fontSize: 80,
              fontWeight: 800,
              color: brandDark,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Scale marketing impact.
          </div>
        </div>

        {/* Bottom row: title + location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `3px solid ${brand}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: ink }}>
            Senior Web Platform Engineer
          </div>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: sub }}>
            Oakland, CA
          </div>
        </div>

        {/* Corner accent: terracotta edge bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,
            width: 18,
            height: 630,
            backgroundColor: brand,
          }}
        />
      </div>

      <p className="text-xs text-gray-500 max-w-xl text-center">
        Styles are Satori-compatible: inline flexbox only, solid colors, no CSS variables.
        Provide Bricolage Grotesque (600/800) and Figtree (500/700) font buffers to satori().
        Output as public/og.png, then reference it from the root layout metadata.
      </p>
    </div>
  );
}
