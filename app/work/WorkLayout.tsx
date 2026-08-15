import { ArrowLeft, ArrowRight } from "lucide-react";
import { getDiagram } from "./diagrams";
import { getAdjacentCaseStudies, preventWidow, type CaseStudy } from "./content";

// The brief is a labelled definition list rather than three equal cards:
// PRODUCT.md rules out the icon-heading-text grid, and challenge/solution/
// outcome are genuinely term-and-definition pairs. IDs on each row are the
// jump targets for the rail nav below.
function Brief({ item }: { item: CaseStudy }) {
  const rows: [string, string][] = [
    ["Challenge", item.challenge],
    ["Solution", item.solution],
    ["Outcome", item.outcome],
  ];

  return (
    <div className="border-l-2 border-brand/30 pl-6 space-y-8 my-12 max-w-[62ch]">
      {rows.map(([term, definition]) => (
        <div key={term} id={term.toLowerCase()} className="scroll-mt-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2">
            {term}
          </h2>
          <p className="text-gray-700 leading-relaxed">{definition}</p>
        </div>
      ))}
    </div>
  );
}

// Company, role, tags and a jump nav — pulled out of the reading column into
// a rail so wide viewports get an asymmetric two-column read instead of one
// centred text column drowning in gutter space. Below lg it just sits above
// the title in normal flow, unchanged from the previous single-column layout.
function Rail({ item, hasDiagram }: { item: CaseStudy; hasDiagram: boolean }) {
  const sections = [
    ["Challenge", "#challenge"],
    ["Solution", "#solution"],
    ["Outcome", "#outcome"],
    ...(hasDiagram ? [["Diagram", "#diagram"]] : []),
    ["The build", "#the-build"],
    ["Built with", "#built-with"],
  ] as const;

  return (
    <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">
        {item.company}
      </p>
      {/* gray-400 on white is 2.54:1 and fails AA; gray-500 is 4.83:1. */}
      <p className="text-gray-500 text-sm mb-6">
        {item.role}
        <br />
        {item.period}
      </p>

      <ul className="flex flex-wrap gap-2 mb-8 lg:flex-col lg:items-start lg:gap-1.5">
        {item.pillars.map((p) => (
          <li key={p} className="tag">
            {p}
          </li>
        ))}
      </ul>

      <nav aria-label="Case study sections" className="hidden lg:block text-sm space-y-2.5 pt-6 border-t border-gray-200">
        {sections.map(([label, href]) => (
          <a key={href} href={href} className="block text-gray-600 hover:text-brand-dark transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default function WorkLayout({ item }: { item: CaseStudy }) {
  const [lead, ...rest] = item.body;
  const diagram = getDiagram(item.slug);
  const { prev, next } = getAdjacentCaseStudies(item.slug);

  return (
    <article className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
        <Rail item={item} hasDiagram={!!diagram} />

        <div className="min-w-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-prose">
            {preventWidow(item.title)}
          </h1>

          <div className="max-w-[62ch]">
            {lead && <p className="text-lg text-gray-600 leading-relaxed">{lead}</p>}
          </div>

          <Brief item={item} />

          {diagram && (
            <figure id="diagram" className="my-14 scroll-mt-24">
              <diagram.Component />
              <figcaption className="text-gray-600 text-sm mt-4 max-w-[62ch]">
                {diagram.caption}
              </figcaption>
            </figure>
          )}

          {rest.length > 0 && (
            <div id="the-build" className="scroll-mt-24">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                The build
              </h2>
              <div className="max-w-[62ch] space-y-5 text-gray-700 leading-relaxed">
                {rest.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {item.images.length > 0 && (
            <div className="mt-14 space-y-10 max-w-[62ch]">
              {item.images.map((img) => (
                <figure key={img.src}>
                  {/* next/image is unusable here: images.unoptimized is set for
                      the static export, so the repo uses raw <img> throughout. */}
                  <picture>
                    {img.webp && <source srcSet={img.webp} type="image/webp" />}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading="lazy"
                      className="w-full h-auto rounded-2xl border border-cream-dark"
                    />
                  </picture>
                  {img.caption && (
                    <figcaption className="text-gray-600 text-sm mt-3">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          <div id="built-with" className="mt-14 pt-8 border-t border-gray-200 scroll-mt-24">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Built with
            </h2>
            <ul className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {(prev || next) && (
            <nav
              aria-label="Case study pagination"
              className="mt-10 pt-8 border-t border-gray-200 grid sm:grid-cols-2 gap-6"
            >
              {prev ? (
                <a href={`/work/${prev.slug}/`} className="group block">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5 flex items-center gap-1.5">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Previous
                  </p>
                  <p className="font-semibold group-hover:text-brand-dark transition-colors">
                    {prev.title}
                  </p>
                </a>
              ) : (
                <div />
              )}
              {next ? (
                <a href={`/work/${next.slug}/`} className="group block sm:text-right">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5 flex items-center gap-1.5 sm:justify-end">
                    Next <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </p>
                  <p className="font-semibold group-hover:text-brand-dark transition-colors">
                    {next.title}
                  </p>
                </a>
              ) : (
                <div />
              )}
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
