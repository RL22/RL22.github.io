import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend & UI Architecture",
    desc: "The web layer I own, from semantic markup to API integration. Fast, accessible, and structured for long-term maintainability.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Component Systems"],
  },
  {
    title: "Content Management Systems",
    desc: "Headless and modular architectures. I treat authoring as a product: custom schemas, live previews, and guardrails that let teams ship without dev tickets.",
    tags: ["Sanity Studio", "Headless WordPress", "Webflow", "Structured Content", "GraphQL"],
  },
  {
    title: "Marketing Technology & Revenue Ops",
    desc: "Connecting the marketing site directly to pipeline and CRM workflows. Consent-aware measurement, attribution, and automated lead routing.",
    tags: ["HubSpot", "Marketo", "Salesforce Sales Cloud", "Segment", "OneTrust CMP"],
  },
  {
    title: "Conversion & Performance",
    desc: "Where marketing sites earn their keep. Pre-wired analytics, rigorous A/B test slots, technical SEO, and Core Web Vitals budgets.",
    tags: ["A/B Testing", "Technical SEO", "Core Web Vitals", "Lighthouse Profiling", "GA4"],
  },
  {
    title: "Design Systems & UX",
    desc: "Bridging UX design and front-end execution. Translating design tokens, components, and interaction patterns from Figma into pixel-accurate code.",
    tags: ["Figma", "Design Tokens", "Information Architecture", "WCAG"],
  },
  {
    title: "AI-Native Orchestration",
    desc: "Modern delivery velocity: using multi-model agent workflows and scripted automation bounded by strict human planning and QA release gates.",
    tags: ["Claude Code", "Gemini", "Model Context Protocol (MCP)", "n8n Automation", "Playwright QA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What I build with.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every tool here reflects production delivery, not tutorial exploration. Capped at five per group: what stays off matters as much as what goes in.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-14">
          {skillGroups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 2) * 0.08}
              className="border-t border-gray-200 py-6 flex gap-5 items-baseline"
            >
              <span className="text-brand-dark text-sm font-bold tabular-nums shrink-0" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-lg mb-1">{g.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{g.desc}</p>
                <p className="text-sm font-medium text-gray-700">
                  {g.tags.map((t, ti) => (
                    <span key={t}>
                      {ti > 0 && (
                        <>
                          {" "}
                          <span className="text-brand/50 mx-1" aria-hidden="true">·</span>{" "}
                        </>
                      )}
                      {t}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
