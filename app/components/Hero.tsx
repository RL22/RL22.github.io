"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import StackIcon, { type IconName } from "tech-stack-icons";
import Reveal from "./Reveal";

const techIcons: { name: IconName; alt: string }[] = [
  { name: "html5", alt: "HTML5" },
  { name: "css3", alt: "CSS3" },
  { name: "js", alt: "JavaScript" },
  { name: "react", alt: "React" },
  { name: "php", alt: "PHP" },
  { name: "wordpress", alt: "WordPress" },
  { name: "nextjs", alt: "Next.js" },
];

const cardVariant = (delay: number) => ({
  initial: { opacity: 0, y: 28, scale: 0.94 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay,
    },
  },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center my-auto w-full">

        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Senior Web Platform Lead
            </span>
          </Reveal>

          {/* Heading — line-by-line clip reveal */}
          <div className="mb-6">
            {[
              { text: "Web platforms built", delay: 0.05 },
              { text: <>like <span className="text-brand">product</span>,</>, delay: 0.15 },
              { text: "run for growth.", delay: 0.25 },
            ].map((line, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: line.delay,
                  }}
                  className="text-5xl md:text-6xl font-extrabold leading-tight"
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          <Reveal delay={0.35}>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Eight years owning marketing-site lifecycles at Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Book a 20-min intro <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#projects" className="text-gray-600 hover:text-brand text-sm font-semibold transition-colors">
                See the work →
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <span className="font-semibold text-gray-700">8 yrs</span>
              <span>·</span>
              <span className="font-semibold text-gray-700">5 senior roles</span>
              <span>·</span>
              <span className="font-semibold text-brand">30%</span>
              <span>fewer marketing dev tickets at Carrot</span>
            </div>
          </Reveal>
        </div>

        {/* Right: photo + floating stat cards */}
        <div className="relative h-[520px] md:h-[600px] hidden md:block">
          {/* Warm background block */}
          <div className="absolute bottom-0 right-0 w-[84%] h-[90%] bg-cream-dark rounded-3xl" />

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/portfolio-hero-chmd-lifestyle-gen.webp"
            alt="Rodney L. Lewis"
            className="absolute bottom-0 inset-x-0 h-full w-full object-contain object-bottom z-10 select-none pointer-events-none"
            draggable={false}
          />

          {/* Card 1 — top left — Years */}
          <motion.div
            {...cardVariant(0.55)}
            className="absolute top-6 -left-4 z-20 card shadow-lg w-52"
          >
            <div className="float-card">
              <p className="text-3xl font-bold">8+</p>
              <p className="text-gray-600 font-medium">Years</p>
              <p className="text-gray-400 text-sm font-normal mt-1">Owning marketing-site lifecycles</p>
            </div>
          </motion.div>

          {/* Card 2 — top right — Senior Roles */}
          <motion.div
            {...cardVariant(0.7)}
            className="absolute top-4 -right-4 z-20 card shadow-lg w-56"
          >
            <div className="float-card float-card--delay-1">
              <p className="text-gray-500 text-sm font-semibold mb-1">Senior Roles</p>
              <span className="tag mb-2 inline-block">Marketing &amp; Growth</span>
              <p className="text-3xl font-bold">5</p>
              <p className="text-gray-400 text-sm font-normal">Pendo · Carrot · Kiddom</p>
            </div>
          </motion.div>

          {/* Card 3 — bottom left — 30% */}
          <motion.div
            {...cardVariant(0.85)}
            className="absolute bottom-8 -left-4 z-20 card shadow-lg w-52"
          >
            <div className="float-card float-card--delay-2">
              <p className="text-3xl font-bold text-brand">30%</p>
              <p className="text-gray-600 font-medium">Fewer Dev Tickets</p>
              <p className="text-gray-400 text-sm font-normal mt-1">Marketing self-serve at Carrot</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile stat cards (stacked, no photo) */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="card">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-gray-600 font-medium">Years</p>
            <p className="text-gray-400 text-sm mt-1">Owning marketing-site lifecycles</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-600 font-medium">Senior Roles</p>
            <p className="text-gray-400 text-sm mt-1">Pendo · Carrot · Kiddom · Andersen · Revel</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-brand">30%</p>
            <p className="text-gray-600 font-medium">Fewer Dev Tickets</p>
            <p className="text-gray-400 text-sm mt-1">Marketing self-serve at Carrot Fertility</p>
          </div>
        </div>
      </div>

      {/* Tech ticker — anchored to bottom */}
      <Reveal delay={0.4} className="bg-cream-dark py-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-4">Stack I work in</p>
        <div className="flex justify-center items-center gap-8 flex-wrap px-6">
          {techIcons.map(t => (
            <motion.span
              key={t.alt}
              role="img"
              aria-label={t.alt}
              title={t.alt}
              className="w-10 h-10 grayscale hover:grayscale-0 transition-[filter] duration-200 cursor-default"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <StackIcon name={t.name} />
            </motion.span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
