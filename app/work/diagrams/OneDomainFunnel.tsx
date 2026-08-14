// CS4 — Carrot: Integrated Marketing Systems.
//
// Two panels at identical width so the only structural difference between them
// is the domain boundary in the upper one. Everything here is text plus
// geometry: no raster, no external library, and every label is a real <text>
// node so it reaches the accessibility tree and the page's own font.
//
// Prose deliberately lives OUTSIDE this SVG, in the figcaption. Text baked
// into a viewBox scales down with the drawing — at 375px the sentences that
// used to sit here rendered around 7px. Only short node labels stay.
//
// Colours are the existing tokens: #A5523D (brand-dark, 5.42:1 on white),
// #374151 (gray-700), #4b5563 (gray-600). Box strokes are decorative — the
// label inside each box carries the meaning.

const BOX = "fill-none stroke-[#9ca3af]";
const NODE_TEXT = "fill-[#374151] text-[13px]";
const PANEL_LABEL = "fill-[#4b5563] text-[12px] font-semibold";

export default function OneDomainFunnel() {
  return (
    <svg
      viewBox="0 0 480 224"
      className="w-full h-auto"
      role="img"
      aria-labelledby="onedomain-title onedomain-desc"
    >
      <title id="onedomain-title">
        The conventional split funnel compared with the one-domain funnel that replaced it
      </title>
      <desc id="onedomain-desc">
        Two diagrams of equal width. The upper one, labelled &ldquo;Conventional — two
        domains&rdquo;, runs from a Marketing site box across a dashed line marked &ldquo;domain
        boundary&rdquo; to a Landing page subdomain box and on to Marketo; the tracking line
        beneath it is severed at the boundary. The lower one, labelled &ldquo;Built — one
        domain&rdquo;, has no boundary: a single Marketing site box contains an embedded Marketo
        form and connects directly to Marketo, and the tracking line beneath it runs unbroken
        across the full width.
      </desc>

      <defs>
        <marker id="onedomain-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#9ca3af" />
        </marker>
      </defs>

      {/* ---------- Panel A: conventional split funnel ---------- */}
      <text x="8" y="12" className={PANEL_LABEL}>
        Conventional — two domains
      </text>

      <text x="160" y="26" textAnchor="middle" className="fill-[#A5523D] text-[9px] font-semibold">
        domain boundary
      </text>
      <line x1="160" y1="30" x2="160" y2="86" stroke="#A5523D" strokeWidth="1.5" strokeDasharray="4 3" />

      <rect x="8" y="34" width="136" height="44" rx="8" className={BOX} />
      <text x="76" y="61" textAnchor="middle" className={NODE_TEXT}>
        Marketing site
      </text>

      <line x1="144" y1="56" x2="170" y2="56" stroke="#9ca3af" markerEnd="url(#onedomain-arrow)" />

      <rect x="176" y="34" width="164" height="44" rx="8" className={BOX} />
      <text x="258" y="61" textAnchor="middle" className={NODE_TEXT}>
        Landing page subdomain
      </text>

      <line x1="340" y1="56" x2="366" y2="56" stroke="#9ca3af" markerEnd="url(#onedomain-arrow)" />

      <rect x="372" y="34" width="100" height="44" rx="8" className={BOX} />
      <text x="422" y="61" textAnchor="middle" className={NODE_TEXT}>
        Marketo
      </text>

      {/* tracking, severed at the boundary */}
      <line x1="8" y1="90" x2="151" y2="90" stroke="#6b7280" strokeWidth="3" />
      <line x1="169" y1="90" x2="472" y2="90" stroke="#6b7280" strokeWidth="3" />
      <line x1="152" y1="96" x2="158" y2="84" stroke="#A5523D" strokeWidth="1.5" />
      <line x1="162" y1="96" x2="168" y2="84" stroke="#A5523D" strokeWidth="1.5" />

      {/* ---------- Panel B: one domain ---------- */}
      <text x="8" y="134" className={PANEL_LABEL}>
        Built — one domain
      </text>

      <rect x="8" y="156" width="332" height="44" rx="8" className={BOX} />
      <text x="22" y="183" className={NODE_TEXT}>
        Marketing site
      </text>
      <rect x="200" y="166" width="130" height="24" rx="12" fill="#A5523D" />
      <text x="265" y="182" textAnchor="middle" className="fill-white text-[10px] font-semibold">
        Marketo form
      </text>

      <line x1="340" y1="178" x2="366" y2="178" stroke="#9ca3af" markerEnd="url(#onedomain-arrow)" />

      <rect x="372" y="156" width="100" height="44" rx="8" className={BOX} />
      <text x="422" y="183" textAnchor="middle" className={NODE_TEXT}>
        Marketo
      </text>

      {/* tracking, unbroken */}
      <line x1="8" y1="212" x2="472" y2="212" stroke="#A5523D" strokeWidth="3" />
    </svg>
  );
}
