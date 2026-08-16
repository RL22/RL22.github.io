import { readFileSync } from "node:fs";
import { join } from "node:path";

// Static font weights fetched from Google Fonts' CSS2 API (upstream ships
// these families as variable-weight files with no static cut). Satori needs
// real font buffers, not next/font's CSS-based @font-face loading.
const FONT_DIR = join(process.cwd(), "app/og-fonts");

export function loadOgFonts() {
  return [
    {
      name: "Bricolage Grotesque",
      data: readFileSync(join(FONT_DIR, "BricolageGrotesque-800.ttf")),
      weight: 800 as const,
      style: "normal" as const,
    },
    {
      name: "Bricolage Grotesque",
      data: readFileSync(join(FONT_DIR, "BricolageGrotesque-700.ttf")),
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "Figtree",
      data: readFileSync(join(FONT_DIR, "Figtree-600.ttf")),
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Figtree",
      data: readFileSync(join(FONT_DIR, "Figtree-500.ttf")),
      weight: 500 as const,
      style: "normal" as const,
    },
  ];
}

// Resized to 240x240 (from the source 1024x1024) so Satori isn't decoding a
// full-resolution portrait to render a small avatar circle.
export function loadAvatarDataUri(): string {
  const buffer = readFileSync(join(FONT_DIR, "rod-avatar-240.png"));
  return `data:image/png;base64,${buffer.toString("base64")}`;
}
