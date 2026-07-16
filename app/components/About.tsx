"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ownership = [
  {
    title: "Platform lifecycle ownership",
    desc: "Multi-quarter platform work at Carrot and Pendo: components, publishing workflows, architecture, and performance sequenced by impact.",
  },
  {
    title: "Headless CMS in production",
    desc: "Headless WordPress at Pendo. WordPress-to-headless migration at Revel Systems. Sanity at Sprintz today.",
  },
  {
    title: "Reusable component systems",
    desc: "Modular templates at Carrot and data-integrated components at Pendo, wired for personalization and analytics.",
  },
  {
    title: "Performance & technical SEO",
    desc: "Core Web Vitals at Carrot. Lighthouse-driven refactors at Kiddom. SEO-optimized components across every senior role.",
  },
  {
    title: "Experimentation & partnership",
    desc: "A/B testing with demand gen at Pendo. Iteration loops grounded in performance data, alongside design, UX, and content.",
  },
  {
    title: "Site + mar-tech migrations",
    desc: "Marketo-to-HubSpot for Rancher. Standard WordPress to headless WordPress at Revel Systems.",
  },
];

const principles = [
  {
    axiom: "Platforms compound or decay.",
    detail: "Every architecture decision either adds to the foundation or chips away at it. I build systems that grow in value over time.",
  },
  {
    axiom: "Marketing self-serve is the measure.",
    detail: "Not the launch: how long the team operates without filing a ticket.",
  },
  {
    axiom: "Every page is a hypothesis.",
    detail: "Ship with a metric attached. Instrument it, run the test, iterate. Experimentation is baked in at the component level.",
  },
  {
    axiom: "AI amplifies good architecture.",
    detail: "Agents write boilerplate fast, which means sloppy systems break faster too. The architecture underneath is the differentiator.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 1 — Claim */}
        <Reveal className="max-w-3xl mb-20">
          <span className="section-badge">About</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            I treat marketing sites like product.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Most marketing websites get refactored from the inside every time the brand
            pivots, and the platform underneath erodes. For eight years at Pendo, Carrot
            Fertility, Kiddom, Andersen, and Revel Systems, my job has been the same at
            every logo: take an inherited marketing site, treat it like product, and make
            the team faster. At <strong>Carrot, that work cut marketing dev requests by 30%</strong>.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            I&apos;m based in Oakland, CA. Today I build at{" "}
            <a
              href="https://sprintz.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Sprintz
            </a>
            : Next.js, Sanity, and an AI-native delivery workflow.
          </p>
        </Reveal>

        {/* 2 — Proof */}
        <div className="mb-24">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
              Where I&apos;ve owned it
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-14">
            {ownership.map((o, i) => (
              <motion.div
                key={o.title}
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
                  <h4 className="font-semibold text-lg mb-1">{o.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 — Beliefs */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand mb-10">
              How I think
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {principles.map((p, i) => (
              <motion.div
                key={p.axiom}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
                className="flex gap-5"
              >
                <span
                  className="text-5xl font-extrabold text-brand/20 leading-none select-none shrink-0"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-xl mb-2">{p.axiom}</p>
                  <p className="text-gray-500 leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <Reveal className="border-t border-gray-200 pt-12">
          <p className="text-2xl md:text-3xl font-bold max-w-3xl leading-snug">
            The best web platforms make the people around them faster.{" "}
            <span className="text-brand">That&apos;s the work.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
