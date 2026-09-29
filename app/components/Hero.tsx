import { ArrowRight } from "lucide-react";
import { SHOW_WORK } from "../config";

// Server component with no entrance motion: everything in the first viewport
// is in the static HTML and visible before any JS loads. The hero states the
// one claim, then backs it with one fact a stranger can check (PRODUCT.md,
// principle 3) instead of self-reported metric cards.
export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center my-auto w-full">

        {/* Left: copy */}
        <div>
          <span className="inline-block bg-brand/10 text-brand-darker text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Senior Web Developer · Platform Lead
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mb-6">
            I run marketing websites like products.
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-[34rem]">
            Nine years owning the marketing site end to end: the architecture, the component system, and the publishing workflow that lets marketing launch pages without waiting on engineering.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <a href={SHOW_WORK ? "/work/" : "#experience"} className="btn-primary inline-flex items-center gap-2">
              See the work <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-dark text-sm font-semibold underline underline-offset-4 decoration-gray-300 hover:decoration-brand-dark transition-colors">
              Let&apos;s talk
            </a>
          </div>

          {/* One verifiable proof point */}
          <p className="text-sm text-gray-700 leading-relaxed max-w-[34rem] border-t border-cream-dark pt-5">
            <span className="font-semibold text-gray-900">Proof you can check:</span>{" "}
            a Mednition landing page I built early in a five-month contract was still live, unchanged in structure, years later.
            {SHOW_WORK && (
              <>
                {" "}
                <a
                  href="/work/mednition-landing-page-templates/"
                  className="text-brand-dark font-semibold underline underline-offset-4 hover:no-underline whitespace-nowrap"
                >
                  See the before and after
                </a>
              </>
            )}
          </p>
        </div>

        {/* Right: photo on the terracotta block */}
        <div className="relative h-[520px] md:h-[600px] hidden md:block">
          <div className="absolute bottom-0 right-0 w-[84%] h-[90%] bg-brand rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/shared/portfolio-hero-chmd-lifestyle-gen.webp"
              alt="Rodney L. Lewis working at a laptop"
              width={1065}
              height={1600}
              // Lazy on purpose: the photo only shows at md+, and Chrome never
              // fetches a lazy image inside a display:none container, so phones
              // skip these 132 KB entirely.
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 right-0 h-full w-full object-cover object-top select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
