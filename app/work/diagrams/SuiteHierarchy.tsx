// CS1 — Pendo: Core Web Platform.
//
// Two panels comparing routing and assembly before and after the architecture
// rebuild. Both panels align to four shared column slots so they read as a diff:
// the routing slot shifts from flat ad-hoc paths to a structured family hierarchy,
// the engineering bottleneck disappears in favor of shared React modules, and
// the 72-hour bespoke build reduces to a 24-hour content-driven launch.
//
// An unbroken terracotta bar beneath the lower panel represents the headless
// ACF and Gutenberg content foundation that decoupled editors from render code.

const BOX = "fill-none stroke-[#9ca3af]";
const NODE_TEXT = "fill-[#374151] text-[13px]";
const PANEL_LABEL = "fill-[#4b5563] text-[12px] font-semibold";
// gray-600 fill with white text: 7.56:1 contrast, well past AA.
const BOTTLENECK_FILL = "#4b5563";

export default function SuiteHierarchy() {
  return (
    <svg
      viewBox="0 0 480 220"
      className="w-full h-auto"
      role="img"
      aria-labelledby="suite-title suite-desc"
    >
      <title id="suite-title">
        The product suite routing before and after the family URL hierarchy
      </title>
      <desc id="suite-desc">
        Two workflows comparing page routing and build steps before and after the architecture
        overhaul. The upper workflow, labelled &ldquo;Before: flat ad-hoc routing&rdquo;, shows
        pendo.io splitting into disconnected routes like /feedback and /mobile-guides, each running
        into an engineering queue bottleneck that took 72 hours for a bespoke build. The lower
        workflow, labelled &ldquo;Built: family URL hierarchy&rdquo;, shows pendo.io routing into a
        structured /&#123;family&#125;/&#123;use-case&#125;/ hierarchy assembled from shared React modules into a
        24-hour launch, supported by a headless ACF and Gutenberg content foundation.
      </desc>

      <defs>
        <marker
          id="suite-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 z" fill="#9ca3af" />
        </marker>
        <marker
          id="suite-arrow-brand"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 z" fill="#A5523D" />
        </marker>
      </defs>

      {/* ---------- Panel A: flat ad-hoc routing ---------- */}
      <text x="8" y="14" className={PANEL_LABEL}>
        Before: flat ad-hoc routing
      </text>

      {/* Slot 1: Domain root */}
      <rect x="8" y="32" width="84" height="50" rx="8" className={BOX} />
      <text x="50" y="61" textAnchor="middle" className={NODE_TEXT}>
        pendo.io
      </text>

      {/* Connectors from root to flat routes */}
      <line x1="92" y1="50" x2="114" y2="40" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />
      <line x1="92" y1="64" x2="114" y2="74" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />

      {/* Slot 2: Disconnected routes */}
      <rect x="120" y="27" width="116" height="26" rx="6" className={BOX} />
      <text x="178" y="44" textAnchor="middle" className="fill-[#374151] text-[11px] font-mono">
        /feedback
      </text>

      <rect x="120" y="61" width="116" height="26" rx="6" className={BOX} />
      <text x="178" y="78" textAnchor="middle" className="fill-[#374151] text-[11px] font-mono">
        /mobile-guides
      </text>

      {/* Connectors from routes to bottleneck */}
      <line x1="236" y1="40" x2="254" y2="50" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />
      <line x1="236" y1="74" x2="254" y2="64" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />

      {/* Slot 3: Bottleneck */}
      <rect
        x="260"
        y="32"
        width="110"
        height="50"
        rx="8"
        style={{ fill: BOTTLENECK_FILL }}
      />
      <text
        x="315"
        y="61"
        textAnchor="middle"
        className="fill-white text-[13px] font-semibold"
      >
        Engineering queue
      </text>

      {/* Connector from bottleneck to outcome */}
      <line x1="370" y1="57" x2="386" y2="57" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />

      {/* Slot 4: 72h bespoke build */}
      <rect x="392" y="32" width="80" height="50" rx="8" className={BOX} />
      <text x="432" y="61" textAnchor="middle" className={NODE_TEXT}>
        72h bespoke build
      </text>

      {/* ---------- Panel B: family URL hierarchy ---------- */}
      <text x="8" y="118" className={PANEL_LABEL}>
        Built: family URL hierarchy
      </text>

      {/* Slot 1: Domain root */}
      <rect x="8" y="134" width="84" height="50" rx="8" className={BOX} />
      <text x="50" y="163" textAnchor="middle" className={NODE_TEXT}>
        pendo.io
      </text>

      {/* Connector from root to family hierarchy */}
      <line x1="92" y1="159" x2="114" y2="159" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />

      {/* Slot 2: Family URL pattern */}
      <rect x="120" y="134" width="116" height="50" rx="8" className={BOX} />
      <text x="178" y="153" textAnchor="middle" className="fill-[#374151] text-[11px] font-mono">
        /&#123;family&#125;/
      </text>
      <text x="178" y="171" textAnchor="middle" className="fill-[#6b7280] text-[11px] font-mono">
        &#123;use-case&#125;/
      </text>

      {/* Connector from family to React modules */}
      <line x1="236" y1="159" x2="254" y2="159" stroke="#9ca3af" markerEnd="url(#suite-arrow)" />

      {/* Slot 3: Shared React modules */}
      <rect x="260" y="134" width="110" height="50" rx="8" className={BOX} />
      <text x="315" y="163" textAnchor="middle" className={NODE_TEXT}>
        Shared React modules
      </text>

      {/* Connector from modules to 24h launch */}
      <line
        x1="370"
        y1="159"
        x2="386"
        y2="159"
        stroke="#A5523D"
        markerEnd="url(#suite-arrow-brand)"
      />

      {/* Slot 4: 24h content-driven launch */}
      <rect
        x="392"
        y="134"
        width="80"
        height="50"
        rx="8"
        className="fill-none stroke-[#A5523D] stroke-[1.5]"
      />
      <text
        x="432"
        y="163"
        textAnchor="middle"
        className="fill-[#A5523D] text-[12px] font-semibold"
      >
        24h launch
      </text>

      {/* Headless CMS foundation bar */}
      <line x1="8" y1="198" x2="472" y2="198" stroke="#A5523D" strokeWidth="2.5" />
      <text
        x="240"
        y="212"
        textAnchor="middle"
        className="fill-[#A5523D] text-[10px] font-semibold"
      >
        Headless ACF &amp; Gutenberg
      </text>
    </svg>
  );
}
