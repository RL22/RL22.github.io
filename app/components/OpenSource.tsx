"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import githubData from "../data/github.json";

const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

export default function OpenSource() {
  const { repos } = githubData;
  return (
    <section id="open-source" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-10">
          <span className="section-badge">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Built in the open.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Current side projects, public on GitHub. Read the code, not just the claims.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-14">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
              className="group border-t border-gray-300/70 py-6 flex gap-5 items-baseline"
            >
              <span className="text-brand-dark text-sm font-bold tabular-nums shrink-0" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-1.5">
                  <span className="group-hover:text-brand-dark transition-colors">{r.name}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{r.description}</p>
                <p className="text-sm font-medium text-gray-700">
                  {r.language} <span className="text-brand/50 mx-1" aria-hidden="true">·</span>{" "}
                  Updated {monthYear(r.pushedAt)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        <Reveal className="border-t border-gray-300/70 pt-10 mt-2">
          <a
            href="https://github.com/RL22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Full profile on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
