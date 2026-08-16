// Satori-safe JSX for the sitewide OG image cards, rendered through
// `next/og`'s ImageResponse in ../opengraph-image.tsx.
//
// Ported from app/og-preview/page.tsx cards #og-card-default and
// #og-card-alt. Kept in lockstep with that page manually — og-preview is
// the browser-viewable design reference; this file is the Satori-rendered
// production source. If you change one, update the other.
//
// Satori portability rules followed here: inline styles only, flexbox-only
// layout (every element with children declares display: flex), solid
// colors, no CSS variables, no grid. See
// ~/.agents/skills/sv-og-image/references/vercel-og-implementation.md.

const brand = "#C0614A";
const brandDark = "#A5423D";
const cream = "#F5EFE6";
const ink = "#1C1B1A";
const sub = "#4A4744";
const creamTint = "#F5EFE6";
const creamTintDim = "#EAD9CF";

export function DefaultOgCard({ portraitSrc }: { portraitSrc: string }) {
  return (
    <div
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
        }}
      >
        <img
          src={portraitSrc}
          alt=""
          style={{
            display: "flex",
            width: 420,
            height: 630,
            objectFit: "cover",
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
            <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: sub }}>·</div>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: sub }}>
              rl22.github.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AltOgCard() {
  return (
    <div
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
  );
}
