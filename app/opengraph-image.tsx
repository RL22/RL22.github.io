import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { AltOgCard, DefaultOgCard } from "./og/templates";

export const alt = "Rodney L. Lewis, Senior Web Platform Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = path.join(process.cwd(), "app/og/fonts");

const cards = {
  default: {
    alt: "Rodney L. Lewis, Senior Web Platform Engineer. Build platforms. Scale marketing impact.",
  },
  alt: {
    alt: "Rodney L. Lewis, Senior Web Platform Engineer. Build platforms. Scale marketing impact. (Alternate design)",
  },
} as const;

export function generateImageMetadata() {
  return Object.entries(cards).map(([id, meta]) => ({
    id,
    alt: meta.alt,
    size,
    contentType,
  }));
}

async function loadFonts() {
  const [figtree500, figtree600, figtree700, bricolage800] = await Promise.all([
    readFile(path.join(fontsDir, "Figtree-500.ttf")),
    readFile(path.join(fontsDir, "Figtree-600.ttf")),
    readFile(path.join(fontsDir, "Figtree-700.ttf")),
    readFile(path.join(fontsDir, "BricolageGrotesque-800.ttf")),
  ]);
  return [
    { name: "Figtree", data: figtree500, weight: 500 as const, style: "normal" as const },
    { name: "Figtree", data: figtree600, weight: 600 as const, style: "normal" as const },
    { name: "Figtree", data: figtree700, weight: 700 as const, style: "normal" as const },
    {
      name: "Bricolage Grotesque",
      data: bricolage800,
      weight: 800 as const,
      style: "normal" as const,
    },
  ];
}

// Satori/resvg in this pipeline can't decode WebP (throws mid-render), so the
// portrait is a PNG derivative of public/img/portfolio-hero-chmd-lifestyle-gen.webp
// pre-cropped/resized to 2x the card's 420x630 display box — see
// app/og/portrait.png. Regenerate that file if the source photo changes.
async function loadPortraitDataUri() {
  const buf = await readFile(path.join(process.cwd(), "app/og/portrait.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

export default async function Image({ id }: { id: Promise<keyof typeof cards> }) {
  const [resolvedId, fonts, portraitSrc] = await Promise.all([
    id,
    loadFonts(),
    loadPortraitDataUri(),
  ]);

  return new ImageResponse(
    resolvedId === "alt" ? <AltOgCard /> : <DefaultOgCard portraitSrc={portraitSrc} />,
    { ...size, fonts }
  );
}
