// CS2 — Pendo: Demand Gen & CRO Systems.
//
// The original sketch was a six-node cycle. A ring needs width in both axes
// and collapses at 375px, so the loop is reduced to one return arrow and the
// argument is carried by the before/after comparison instead — the same
// grammar as OneDomainFunnel, deliberately.
//
// Both panels share x-coordinates for their four slots so the panels read as a
// diff: the second slot changes, and the chain that used to run through
// Engineering no longer does.
//
// The bottleneck node is a solid gray fill, not terracotta — terracotta is
// reserved for the built path (the tracking bar, the return arrow), so the
// colour means one thing throughout instead of doing double duty as both
// "look here" and "this is good." Prose stays in the figcaption, never inside
// the viewBox.

const BOX = "fill-none stroke-[#9ca3af]";
const NODE_TEXT = "fill-[#374151] text-[13px]";
const PANEL_LABEL = "fill-[#4b5563] text-[12px] font-semibold";
// gray-600 fill with white text: 7.56:1, well past AA.
const BOTTLENECK_FILL = "#4b5563";

// Shared slot geometry.
const SLOTS = [
  { x: 8, w: 104 },
  { x: 136, w: 96 },
  { x: 256, w: 104 },
  { x: 384, w: 88 },
];

function Chain({
  y,
  labels,
  emphasisIndex,
}: {
  y: number;
  labels: string[];
  emphasisIndex?: number;
}) {
  const mid = y + 26;
  return (
    <>
      {SLOTS.map((s, i) => {
        const emphasised = i === emphasisIndex;
        return (
          <g key={s.x}>
            <rect
              x={s.x}
              y={y}
              width={s.w}
              height={40}
              rx="8"
              // The Tailwind `fill-none`/`stroke-*` utilities compile to CSS
              // rules, which beat the `fill` presentation attribute — setting
              // both on the same element silences the fill. Style wins clean.
              className={emphasised ? undefined : BOX}
              style={emphasised ? { fill: BOTTLENECK_FILL } : undefined}
            />
            <text
              x={s.x + s.w / 2}
              y={mid}
              textAnchor="middle"
              className={emphasised ? "fill-white text-[13px] font-semibold" : NODE_TEXT}
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
      {SLOTS.slice(0, -1).map((s, i) => (
        <line
          key={`a${s.x}`}
          x1={s.x + s.w}
          y1={y + 20}
          x2={SLOTS[i + 1].x - 6}
          y2={y + 20}
          stroke="#9ca3af"
          markerEnd="url(#campaign-arrow)"
        />
      ))}
    </>
  );
}

export default function CampaignLoop() {
  return (
    <svg
      viewBox="0 0 480 220"
      className="w-full h-auto"
      role="img"
      aria-labelledby="campaign-title campaign-desc"
    >
      <title id="campaign-title">
        The campaign path before and after the template system, and where engineering sat in it
      </title>
      <desc id="campaign-desc">
        Two chains of four boxes, drawn at the same positions so they can be compared. The upper
        chain, labelled &ldquo;Before: engineering gated&rdquo;, runs Marketing ops, Engineering,
        Landing page, Marketo, with Engineering shown as a solid grey box marking it as the
        bottleneck. The lower chain, labelled &ldquo;Built: no ticket required&rdquo;, runs
        Marketing ops, Modules, Landing page, Marketo. Engineering is absent from the chain, with
        an unbroken tracking bar beneath it and a single return arrow labelled &ldquo;test, read,
        iterate&rdquo; running from Marketo back to Marketing ops.
      </desc>

      <defs>
        <marker id="campaign-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#9ca3af" />
        </marker>
        <marker
          id="campaign-arrow-brand"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 z" fill="#A5523D" />
        </marker>
      </defs>

      {/* ---------- Panel A: engineering in the chain ---------- */}
      <text x="8" y="12" className={PANEL_LABEL}>
        Before: engineering gated
      </text>

      <Chain y={26} labels={["Marketing ops", "Engineering", "Landing page", "Marketo"]} emphasisIndex={1} />

      {/* ---------- Panel B: engineering out of the chain ---------- */}
      <text x="8" y="106" className={PANEL_LABEL}>
        Built: no ticket required
      </text>

      <Chain y={120} labels={["Marketing ops", "Modules", "Landing page", "Marketo"]} />

      {/* instrumentation, carried by the template */}
      <line x1="8" y1="174" x2="472" y2="174" stroke="#A5523D" strokeWidth="3" />

      {/* the loop, reduced to one return arrow */}
      <path
        d="M428 180 L428 198 L66 198"
        fill="none"
        stroke="#A5523D"
        strokeWidth="1.5"
        markerEnd="url(#campaign-arrow-brand)"
      />
      <text x="244" y="212" textAnchor="middle" className="fill-[#A5523D] text-[10px] font-semibold">
        test, read, iterate
      </text>
    </svg>
  );
}
