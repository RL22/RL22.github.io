"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend & Backend",
    desc: "The web layer I own, from markup to API. Agents write the boilerplate; I own the architecture.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "CMS Platforms",
    desc: "Headless and traditional. The publishing system is a product: templates, components, and editorial workflows that let marketing move without a ticket.",
    tags: ["Sanity", "Headless WordPress", "WordPress", "Webflow", "GraphQL"],
  },
  {
    title: "Mar-Tech & Data",
    desc: "The tools demand gen, lifecycle, and CRM teams live in. I connect the marketing site to the revenue motion.",
    tags: ["HubSpot", "Marketo", "Salesforce", "GA4", "Vercel"],
  },
  {
    title: "Conversion & SEO",
    desc: "Where a marketing site earns its keep. I instrument the page, run the test, and act on what the data says.",
    tags: ["A/B Testing", "Technical SEO", "Core Web Vitals", "Lighthouse", "Reusable Components"],
  },
  {
    title: "Design",
    desc: "Building with designers, not handing off to them. Pixel-accurate production from Figma to browser.",
    tags: ["Figma", "Sketch", "Photoshop", "Illustrator", "Lightroom"],
  },
  {
    title: "AI-Native Stack",
    desc: "How I build now: agents, orchestration, and AI-assisted delivery as defaults, the production workflow at Sprintz.",
    tags: ["Claude Code", "Codex", "Gemini", "MCP", "Agentic Workflows"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Skills</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What I work in.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Everything here comes out of shipped work, not a reading list. Capped at five per group: what I leave off matters as much as what I keep.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-14">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
              className="border-t border-gray-200 py-6 flex gap-5 items-baseline"
            >
              <span className="text-brand text-sm font-bold tabular-nums shrink-0" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-lg mb-1">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{g.desc}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
