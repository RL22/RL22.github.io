// Shared between the real Satori generators (app/blog/[slug]/opengraph-image.tsx,
// app/work/[slug]/opengraph-image.tsx) and the browser-viewable reference at
// /og-preview. Importing the same atoms in both places is what keeps the
// preview from silently drifting out of sync with what actually ships.
export const ogTokens = {
  brand: "#C0614A",
  brandDark: "#A5423D",
  cream: "#F5EFE6",
  ink: "#1C1B1A",
  sub: "#4A4744",
};

export const OG_SIZE = { width: 1200, height: 630 };

// Satori: flex-only, inline styles only, no CSS variables (see og-image
// skill's vercel-og-implementation.md).
export function Monogram() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        backgroundColor: ogTokens.brand,
        borderRadius: 14,
        color: "#FFFFFF",
        fontFamily: "Bricolage Grotesque",
        fontSize: 26,
        fontWeight: 800,
      }}
    >
      RL
    </div>
  );
}

export function TopRow({ kicker }: { kicker: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Monogram />
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: ogTokens.ink }}>
          Rodney L. Lewis
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 22,
          fontWeight: 700,
          color: ogTokens.brandDark,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {kicker}
      </div>
    </div>
  );
}

export function Byline({ seriesLabel, avatarSrc }: { seriesLabel: string; avatarSrc: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: `3px solid ${ogTokens.brand}`,
        paddingTop: 28,
      }}
    >
      <div style={{ display: "flex", fontSize: 26, fontWeight: 500, color: ogTokens.sub }}>
        {seriesLabel} · rl22.github.io
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 72,
            height: 72,
            borderRadius: 999,
            backgroundColor: ogTokens.brand,
            overflow: "hidden",
          }}
        >
          {/* Oversized + offset within the circular mask to frame the face. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt=""
            style={{
              display: "flex",
              position: "absolute",
              left: -50,
              top: -7,
              width: 172,
              height: 172,
              maxWidth: 172,
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: ogTokens.ink }}>
          Rodney L. Lewis
        </div>
      </div>
    </div>
  );
}
