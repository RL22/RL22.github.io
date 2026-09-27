// CS3 — Carrot: CMS Architecture & Operations.
//
// Three-stage architectural pipeline illustrating Webflow CMS collection schema binding:
// 1. Structured CMS collections (eBooks & Guides, Careers / Open Roles) defining typed fields.
// 2. Modular template engine enforcing design system tokens (#A5523D), embedded Marketo
//    form symbols, and Greenhouse ATS API endpoints.
// 3. Automated production outputs (/ebooks-guides/*, /open-roles) achieving a ~30% developer
//    dependency reduction without manual builds.

const EYEBROW = "fill-[#4b5563] text-[11px] font-semibold";
const MONO = "font-mono text-[9px]";

export default function WebflowCmsSchema() {
  return (
    <svg
      viewBox="0 0 480 220"
      className="w-full h-auto"
      role="img"
      aria-labelledby="webflow-schema-title webflow-schema-desc"
    >
      <title id="webflow-schema-title">
        Webflow CMS collection schema and modular template architecture
      </title>
      <desc id="webflow-schema-desc">
        Three-stage pipeline showing how Webflow CMS collection schemas bind structured content
        records to modular templates. The first stage, CMS Collections, defines typed schema
        fields for eBooks and Careers. The second stage, Modular Engine, enforces design system
        tokens, native Marketo form symbols, and Greenhouse ATS API hooks. The third stage,
        Production Output, publishes /ebooks-guides and /open-roles automatically with a thirty
        percent dev dependency reduction.
      </desc>

      <defs>
        <marker
          id="webflow-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 z" fill="#A5523D" />
        </marker>
      </defs>

      {/* Connector lines between panels */}
      <line
        x1="155"
        y1="110"
        x2="175"
        y2="110"
        stroke="#A5523D"
        strokeWidth="1.5"
        markerEnd="url(#webflow-arrow)"
      />
      <line
        x1="315"
        y1="110"
        x2="335"
        y2="110"
        stroke="#A5523D"
        strokeWidth="1.5"
        markerEnd="url(#webflow-arrow)"
      />

      {/* ---------- Panel 1: CMS Schemas ---------- */}
      <g>
        <rect
          x="10"
          y="24"
          width="145"
          height="182"
          rx="8"
          className="fill-[#FAF7F2] stroke-[#9ca3af]"
        />
        <text x="20" y="16" className={EYEBROW}>
          CMS Collections
        </text>

        {/* eBooks schema card */}
        <rect
          x="18"
          y="34"
          width="129"
          height="74"
          rx="6"
          className="fill-white stroke-[#e5e7eb]"
        />
        <text x="26" y="48" className="fill-[#A5523D] text-[10px] font-bold">
          eBooks &amp; Guides
        </text>
        <text x="26" y="63" className={`${MONO} fill-[#374151]`}>
          • title: PlainText
        </text>
        <text x="26" y="77" className={`${MONO} fill-[#374151]`}>
          • asset: PDF file
        </text>
        <text x="26" y="91" className={`${MONO} fill-[#374151]`}>
          • form: Marketo Ref
        </text>

        {/* Careers schema card */}
        <rect
          x="18"
          y="118"
          width="129"
          height="76"
          rx="6"
          className="fill-white stroke-[#e5e7eb]"
        />
        <text x="26" y="132" className="fill-[#A5523D] text-[10px] font-bold">
          Careers / ATS
        </text>
        <text x="26" y="147" className={`${MONO} fill-[#374151]`}>
          • role: PlainText
        </text>
        <text x="26" y="161" className={`${MONO} fill-[#374151]`}>
          • dept: Reference
        </text>
        <text x="26" y="175" className={`${MONO} fill-[#374151]`}>
          • job_id: ATS API
        </text>
      </g>

      {/* ---------- Panel 2: Modular Engine & Tokens ---------- */}
      <g>
        <rect
          x="175"
          y="24"
          width="140"
          height="182"
          rx="8"
          className="fill-[#FAF7F2] stroke-[#A5523D]"
          strokeWidth="1.5"
        />
        <text x="185" y="16" className="fill-[#A5523D] text-[11px] font-semibold">
          Modular Engine
        </text>

        {/* Design tokens block */}
        <rect
          x="183"
          y="34"
          width="124"
          height="46"
          rx="6"
          className="fill-white stroke-[#e5e7eb]"
        />
        <text x="191" y="50" className="fill-[#374151] text-[10px] font-semibold">
          Design Tokens
        </text>
        <text x="191" y="66" className="fill-[#6b7280] text-[9px]">
          Enforced type &amp; grid
        </text>

        {/* Embedded Marketo symbol */}
        <rect
          x="183"
          y="88"
          width="124"
          height="46"
          rx="6"
          className="fill-white stroke-[#e5e7eb]"
        />
        <text x="191" y="104" className="fill-[#374151] text-[10px] font-semibold">
          Marketo Symbol
        </text>
        <text x="191" y="120" className={`${MONO} fill-[#6b7280]`}>
          Embedded #mktoForm
        </text>

        {/* Greenhouse ATS sync */}
        <rect
          x="183"
          y="142"
          width="124"
          height="46"
          rx="6"
          className="fill-white stroke-[#e5e7eb]"
        />
        <text x="191" y="158" className="fill-[#374151] text-[10px] font-semibold">
          Greenhouse Sync
        </text>
        <text x="191" y="174" className={`${MONO} fill-[#6b7280]`}>
          ATS API hook
        </text>
      </g>

      {/* ---------- Panel 3: Production Output ---------- */}
      <g>
        <rect
          x="335"
          y="24"
          width="135"
          height="182"
          rx="8"
          className="fill-white stroke-[#9ca3af]"
        />
        <text x="345" y="16" className={EYEBROW}>
          Production Output
        </text>

        {/* Route 1 */}
        <rect
          x="343"
          y="34"
          width="119"
          height="46"
          rx="6"
          className="fill-[#FAF7F2] stroke-[#e5e7eb]"
        />
        <text x="351" y="50" className={`${MONO} fill-[#374151] font-semibold`}>
          /ebooks-guides/*
        </text>
        <text x="351" y="66" className="fill-[#059669] text-[9px] font-semibold">
          Zero dev ticket
        </text>

        {/* Route 2 */}
        <rect
          x="343"
          y="88"
          width="119"
          height="46"
          rx="6"
          className="fill-[#FAF7F2] stroke-[#e5e7eb]"
        />
        <text x="351" y="104" className={`${MONO} fill-[#374151] font-semibold`}>
          /open-roles
        </text>
        <text x="351" y="120" className="fill-[#059669] text-[9px] font-semibold">
          Real-time ATS sync
        </text>

        {/* Metric outcome pill */}
        <rect
          x="343"
          y="142"
          width="119"
          height="46"
          rx="6"
          fill="#A5523D"
          fillOpacity="0.1"
          stroke="#A5523D"
          strokeWidth="1"
        />
        <text x="351" y="169" className="fill-[#8A4433] text-[10px] font-bold">
          ~30% dev reduction
        </text>
      </g>
    </svg>
  );
}
