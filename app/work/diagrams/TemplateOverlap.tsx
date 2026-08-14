// CS3 — Carrot: CMS Architecture & Operations.
//
// Three panels drawn left to right, each overlapping the last, so a schema
// record becomes a page by passing through the tokens in the middle — the
// overlap itself is the argument, not just a layout choice. Replaces an
// earlier vertical cross-section concept (kept the same underlying claim —
// tokens as a constraint every page is assembled against, not a checklist —
// but this reads more like a pipeline and less like an exploded diagram).
//
// Colours are the site's real tokens, not a generic spec: #A5523D (brand-dark)
// for the tokens panel and its border, #6b7280/#374151/#9ca3af for structure,
// cream-dark (#EDE4D8) as the schema panel's tint. No dark mode — the schema
// panel reads as code by way of monospace type and a light tint, not a black
// editor surface, which the site's brand doc rules out.
//
// Panel order in the DOM is draw order: schema first (bottom), tokens second,
// page last — later panels sit visually on top at the overlap, which is what
// makes the seam between them read as "passing through" rather than "sitting
// next to."

const EYEBROW = "fill-[#4b5563] text-[11px] font-semibold";
const MONO = "font-mono text-[10px]";

export default function TemplateOverlap() {
  return (
    <svg
      viewBox="0 0 460 220"
      className="w-full h-auto"
      role="img"
      aria-labelledby="templateoverlap-title templateoverlap-desc"
    >
      <title id="templateoverlap-title">
        A schema record becoming a page, shown as three overlapping panels
      </title>
      <desc id="templateoverlap-desc">
        Three panels drawn left to right, each overlapping the one before it. The first,
        labelled Schema, shows a JSON record with title, hero image and body fields. It is
        overlapped by the second, labelled Tokens, shown with a terracotta tint and a faint
        vertical grid, listing design token variables for colour, spacing and type. The second
        is overlapped by the third, labelled Page, a simplified page wireframe whose header bar
        and image block align to two guide lines carried through from the tokens panel's grid.
      </desc>

      <defs>
        <pattern id="tokens-grid" width="14" height="14" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="14" stroke="#A5523D" strokeOpacity="0.18" strokeWidth="1" />
        </pattern>
      </defs>

      {/* guide lines carried from the tokens grid into the page panel, tying
          the wireframe's layout to the same grid the tokens panel establishes */}
      <line x1="322" y1="30" x2="322" y2="190" stroke="#A5523D" strokeOpacity="0.2" strokeDasharray="2 3" />
      <line x1="404" y1="30" x2="404" y2="190" stroke="#A5523D" strokeOpacity="0.2" strokeDasharray="2 3" />

      {/* ---------- Panel 1: Schema ---------- */}
      <g>
        <rect x="0" y="30" width="200" height="160" rx="10" className="fill-[#EDE4D8] stroke-[#9ca3af]" />
        <text x="16" y="20" className={EYEBROW}>
          Schema
        </text>
        {[
          "{",
          '  "title": "string",',
          '  "hero_image": "url",',
          '  "body": "richtext"',
          "}",
        ].map((line, i) => (
          <text key={i} x="16" y={58 + i * 17} className={`${MONO} fill-[#374151]`}>
            {line}
          </text>
        ))}
      </g>

      {/* ---------- Panel 2: Tokens (overlaps panel 1's right edge) ---------- */}
      <g>
        <rect x="160" y="30" width="180" height="160" rx="10" fill="url(#tokens-grid)" />
        <rect x="160" y="30" width="180" height="160" rx="10" fill="#A5523D" fillOpacity="0.08" stroke="#A5523D" strokeWidth="1.5" />
        <text x="176" y="20" className="fill-[#A5523D] text-[11px] font-semibold">
          Tokens
        </text>
        {["$color-primary", "$spacing-unit", "$font-family-body"].map((line, i) => (
          <text key={line} x="176" y={62 + i * 20} className={`${MONO} fill-[#8A4433] font-semibold`}>
            {line}
          </text>
        ))}
      </g>

      {/* ---------- Panel 3: Page (overlaps panel 2's right edge) ---------- */}
      <g>
        <rect x="300" y="30" width="160" height="160" rx="10" className="fill-white stroke-[#9ca3af]" />
        <text x="316" y="20" className={EYEBROW}>
          Page
        </text>
        {/* header bar, left edge on the first guide line */}
        <rect x="316" y="52" width="128" height="14" rx="3" className="fill-[#d1d5db]" />
        {/* image block, right edge on the second guide line */}
        <rect x="316" y="76" width="88" height="60" rx="4" className="fill-[#EDE4D8]" />
        {/* body copy lines */}
        <line x1="316" y1="150" x2="440" y2="150" stroke="#d1d5db" strokeWidth="4" />
        <line x1="316" y1="162" x2="410" y2="162" stroke="#d1d5db" strokeWidth="4" />
        <line x1="316" y1="174" x2="428" y2="174" stroke="#d1d5db" strokeWidth="4" />
      </g>
    </svg>
  );
}
