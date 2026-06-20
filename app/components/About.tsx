"use client";
import { Layers, Database, Boxes, Gauge, FlaskConical, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ownership = [
  {
    icon: Layers,
    title: "Platform lifecycle ownership",
    desc: "Marketing-site lifecycles at Carrot and Pendo ran as multi-quarter platform work: components, publishing workflows, architecture, and performance sequenced by impact.",
  },
  {
    icon: Database,
    title: "Headless CMS in production",
    desc: "Headless WordPress at Pendo. WordPress to headless migration at Revel Systems. Sanity at Sprintz today.",
  },
  {
    icon: Boxes,
    title: "Reusable component systems",
    desc: "Modular templates at Carrot Fertility reduced marketing dev requests by 30%. Component systems at Pendo wired in for personalization and analytics.",
  },
  {
    icon: Gauge,
    title: "Performance & technical SEO",
    desc: "Core Web Vitals work at Carrot. Lighthouse-driven refactors at Kiddom. SEO-optimized components and structured A/B plans across Pendo, Kiddom, and Andersen.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation & partnership",
    desc: "A/B testing with demand gen at Pendo. Iteration loops at Carrot grounded in performance insights. Partnered with design, UX, data, and content teams across every senior role.",
  },
  {
    icon: ArrowRightLeft,
    title: "Site + mar-tech migrations",
    desc: "Rancher IO (Marketo to HubSpot) and Revel Systems (standard WordPress to headless WordPress, Marketo to HubSpot), both delivered at Andersen.",
  },
];

const process = [
  { num: "01", title: "Discover", desc: "I partner with demand gen, design, and data to map the funnel, finding the pages, components, and flows where small wins compound into real revenue." },
  { num: "02", title: "Build", desc: "I ship reusable modules and templates (WordPress, Webflow, React) so marketing can launch campaigns without an engineering ticket. At Carrot this cut dev requests by 30%." },
  { num: "03", title: "Measure", desc: "A/B tests, technical SEO, and Lighthouse-driven refactors. Every page ships with a hypothesis and a metric. The next iteration is grounded in what the data said." },
];

const principles = [
  {
    axiom: "Platforms compound or decay.",
    detail: "Every architecture decision either adds to the foundation or chips away at it. I build systems that grow in value over time.",
  },
  {
    axiom: "Marketing self-serve is the measure.",
    detail: "The goal is not a successful launch. It is how long the team operates without filing a ticket. At Carrot that hit 30%.",
  },
  {
    axiom: "Every page is a hypothesis.",
    detail: "Ship with a metric attached. Instrument it, run the test, iterate. Good platforms have experimentation baked in at the component level.",
  },
  {
    axiom: "AI amplifies good architecture.",
    detail: "Agents write boilerplate fast, which means sloppy systems break faster too. The architecture underneath is the differentiator.",
  },
];

const traits = ["Reusable Components", "Conversion Optimization", "Technical SEO", "Cross-functional Partnership"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-badge">About</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">I treat marketing sites like product.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Most marketing websites get refactored from the inside every time the brand pivots. The platform underneath erodes. I&apos;ve spent eight years owning marketing-site lifecycles: architecture, performance, components, and the publishing workflows underneath, so the platform compounds instead of decays.
          </p>
        </Reveal>

        {/* Areas of Ownership */}
        <Reveal className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Areas of Ownership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ownership.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="card flex gap-4"
              >
                <span className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <o.icon className="w-6 h-6 text-brand" />
                </span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{o.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I&apos;m Rodney L. Lewis, a senior web platform lead based in Oakland, CA. The last eight years have been the same job at different logos: take an inherited marketing site, treat it like product, and make the team faster.
            </p>
            <p className="text-gray-600 mb-4">
              At Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems that meant reusable component systems, modular templates, Core Web Vitals work, A/B testing, technical SEO, and the publishing workflows that let marketing ship without an engineering ticket. At <strong>Carrot, that work cut marketing dev requests by 30%</strong>.
            </p>
            <p className="text-gray-600 mb-8">
              I work across the stack marketing actually touches: HTML, CSS, JavaScript, PHP, REST APIs, React, WordPress and Webflow on the CMS side, Marketo, HubSpot, Mutiny, Salesforce, and Mailchimp on the mar-tech side. Beyond the day job I run <a href="https://sprintz.agency" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Sprintz</a>, a hybrid practice that pairs high-converting websites with AI-native delivery systems.
            </p>
            <h3 className="text-2xl font-bold mb-6">How I Work</h3>
            <ol className="relative border-l border-brand/30 space-y-8 pl-8">
              {process.map((t, i) => (
                <motion.li
                  key={t.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.85rem] w-9 h-9 rounded-full bg-brand/10 border-2 border-brand text-brand text-xs font-bold flex items-center justify-center">
                    {t.num}
                  </span>
                  <h4 className="font-semibold text-lg">{t.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{t.desc}</p>
                </motion.li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="text-2xl font-bold mb-6">How I Think</h3>
            <ol className="space-y-5 mb-10">
              {principles.map((p, i) => (
                <motion.li
                  key={p.axiom}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
                  className="flex gap-3 items-start"
                >
                  <span className="mt-1 w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{p.axiom}</p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{p.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
            <h3 className="text-xl font-bold mb-4">What Drives Me</h3>
            <p className="text-gray-600 mb-4">
              The moment a page goes live, the experiment turns green, and the marketing team realizes they can ship the next one without me in the loop. The best web platforms make the people around them faster. That&apos;s the work.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {traits.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <blockquote className="bg-cream rounded-2xl p-6 border-l-4 border-brand">
              <p className="italic text-gray-700 mb-2">
                &ldquo;Success is the sum of small efforts repeated day-in &amp; day-out.&rdquo;
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                &ndash; A principle I work by
              </cite>
            </blockquote>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-2">Let&apos;s Connect</h3>
              <p className="text-gray-500 mb-4">
                Hiring a platform owner, or want to talk shop? Either works.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="mailto:lewis.rodneyl@gmail.com" className="btn-primary text-sm">Email Me</a>
                <a href="https://github.com/RL22" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">GitHub</a>
                <a href="https://www.linkedin.com/in/rodney-lewis-abb11b73" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">LinkedIn</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
