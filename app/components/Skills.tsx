"use client";
import { Code2, Database, Megaphone, Palette, Gauge, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skillGroups = [
  {
    Icon: Code2,
    title: "Frontend & Backend",
    desc: "The web layer I own, from markup to API. Agents write the boilerplate; I own the architecture.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Next.js", "PHP", "REST APIs"],
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    Icon: Database,
    title: "CMS",
    desc: "Headless and traditional. The publishing system is a product: templates, components, and editorial workflows that let marketing move without a ticket.",
    tags: ["WordPress", "Headless WordPress", "Webflow", "Sanity"],
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    Icon: Megaphone,
    title: "Growth Stack",
    desc: "The tools demand gen, lifecycle, and CRM teams live in. I connect the marketing site to the revenue motion.",
    tags: ["Marketo", "HubSpot", "Instapage", "SFMC", "Mailchimp", "Salesforce", "Mutiny"],
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    Icon: Palette,
    title: "Design",
    desc: "Building with designers, not handing off to them. Pixel-accurate production from Figma to browser.",
    tags: ["Figma", "Sketch", "Photoshop", "Illustrator", "Lightroom", "Claude Design"],
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    Icon: Gauge,
    title: "Conversion",
    desc: "The practice that turns a marketing site into a compounding asset. Every page ships with a metric.",
    tags: ["A/B Testing", "Technical SEO", "Conversion Optimization", "Core Web Vitals", "Lighthouse", "Reusable Components", "CMS & Mar-Tech Migrations"],
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    Icon: Sparkles,
    title: "AI-Native Stack",
    desc: "The production stack at Sprintz, and how I think about I think about building for a world where velocity is a given.",
    tags: ["Next.js 16", "TypeScript", "Sanity", "Supabase", "Claude Code", "Codex", "Antigravity", "PaperClip", "BMAD", "Vercel", "Netlify", "GraphQL"],
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-badge">Skills</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What I work in.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Six categories, drawn straight from the work, not aspirational. Tools are table stakes; the principles behind them are what compound.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <motion.div
                className="card h-full"
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`w-12 h-12 rounded-xl ${g.bg} flex items-center justify-center mb-4`}>
                  <g.Icon className={`w-6 h-6 ${g.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{g.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{g.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
