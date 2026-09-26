"use client";

import Reveal from "../../components/Reveal";
import { preventWidow } from "../content";

export interface ProofFact {
  metric: string;
  label: string;
  detail: string;
}

export const PROOF_FACTS: ProofFact[] = [
  {
    metric: "7",
    label: "Case Studies",
    detail: "Platform builds across 5 organizations",
  },
  {
    metric: "4",
    label: "Architecture Diagrams",
    detail: "Original system flows & topologies",
  },
  {
    metric: "3",
    label: "Verified Business Metrics",
    detail: "Carrot 30%, Pendo 72h→24h, 40+ paths",
  },
  {
    metric: "~5 Years",
    label: "Production Durability",
    detail: "Unchanged production runtime",
  },
];

export interface WorkHeroProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  sublead?: string;
  facts?: ProofFact[];
  className?: string;
}

export function WorkHero({
  eyebrow = "Work · Platform Case Studies",
  title = "Seven builds, from the platform side.",
  lead = "Case studies from nine years owning marketing-site lifecycles. Each one starts the same way: an inherited site, a team blocked behind engineering, and a platform that had to be rebuilt while it stayed live. What follows is the architecture underneath, and what marketing could do afterward.",
  sublead,
  className = "",
}: WorkHeroProps) {
  return (
    <section
      aria-labelledby="work-hero-heading"
      className={`relative pt-12 pb-10 md:pt-16 md:pb-14 ${className}`}
    >
      <Reveal className="max-w-4xl">
        {/* Eyebrow badge */}
        <span className="inline-block bg-brand/10 text-brand-darker border border-brand/20 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          {eyebrow}
        </span>

        {/* H1 with widow prevention */}
        <h1
          id="work-hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 font-display"
        >
          {preventWidow(title)}
        </h1>

        {/* Lead paragraph */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
          {lead}
        </p>

        {/* Secondary context */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mt-4">
          {sublead || (
            <>
              Not the full work history. That&apos;s the{" "}
              <a
                href="/#experience"
                className="text-brand-dark font-medium underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark rounded"
              >
                Experience
              </a>{" "}
              section. These are the write-ups for the roles worth walking through in detail.
            </>
          )}
        </p>
      </Reveal>
    </section>
  );
}

export default WorkHero;
