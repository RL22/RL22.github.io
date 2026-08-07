import { WorkBottomCta } from "./WorkChrome";
import { getDiagram } from "./diagrams";
import type { CaseStudy } from "./content";

// The brief is a labelled definition list rather than three equal cards:
// PRODUCT.md rules out the icon-heading-text grid, and challenge/solution/
// outcome are genuinely term-and-definition pairs.
function Brief({ item }: { item: CaseStudy }) {
  const rows: [string, string][] = [
    ["Challenge", item.challenge],
    ["Solution", item.solution],
    ["Outcome", item.outcome],
  ];

  return (
    <dl className="border-l-2 border-brand/30 pl-6 space-y-8 my-12">
      {rows.map(([term, definition]) => (
        <div key={term}>
          <dt className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-2">
            {term}
          </dt>
          <dd className="text-gray-700 leading-relaxed">{definition}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function WorkLayout({ item }: { item: CaseStudy }) {
  const [lead, ...rest] = item.body;
  const diagram = getDiagram(item.slug);

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">
          {item.company}
          {/* gray-400 on white is 2.54:1 and fails AA; gray-500 is 4.83:1. */}
          <span className="text-gray-500 font-medium normal-case tracking-normal">
            {" · "}
            {item.role}
            {" · "}
            {item.period}
          </span>
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-prose">{item.title}</h1>

        <ul className="flex flex-wrap gap-2 mb-10">
          {item.pillars.map((p) => (
            <li key={p} className="tag">
              {p}
            </li>
          ))}
        </ul>

        <div className="max-w-[70ch]">
          {lead && <p className="text-lg text-gray-600 leading-relaxed">{lead}</p>}
        </div>

        <Brief item={item} />

        {diagram && (
          <figure className="my-14">
            <diagram.Component />
            <figcaption className="text-gray-600 text-sm mt-4 max-w-[70ch]">
              {diagram.caption}
            </figcaption>
          </figure>
        )}

        <div className="max-w-[70ch] space-y-5 text-gray-700 leading-relaxed">
          {rest.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {item.images.length > 0 && (
          <div className="mt-14 space-y-10">
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
                    loading="lazy"
                    className="w-full rounded-2xl border border-cream-dark"
                  />
                </picture>
                {img.caption && (
                  <figcaption className="text-gray-600 text-sm mt-3 max-w-[70ch]">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <div className="mt-14 pt-8 border-t border-gray-200">
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
      </div>

      <WorkBottomCta />
    </article>
  );
}
