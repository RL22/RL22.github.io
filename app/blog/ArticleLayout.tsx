import { BottomCta } from "./BlogChrome";
import PlaceholderChip from "../components/building/PlaceholderChip";
import { formatDate, readingTime, type ArticleItem } from "./content";

export default function ArticleLayout({ item }: { item: ArticleItem }) {
  const [lead, ...rest] = item.body;

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 flex items-center gap-2">
          Article
          <span className="tag">{item.category}</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-prose">{item.title}</h1>
        <p className="text-gray-600 text-sm font-medium mb-8">
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
          {" · "}
          {readingTime(item.body)}
        </p>

        {/* Hero image (brand-tinted placeholder panel until a real image lands) */}
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            className="w-full aspect-[2/1] object-cover rounded-2xl mb-10"
          />
        ) : (
          <div
            className="w-full aspect-[2/1] rounded-2xl bg-brand/10 flex items-center justify-center mb-10"
            role="img"
            aria-label="Article hero image placeholder"
          >
            <PlaceholderChip />
          </div>
        )}

        <div className="max-w-[70ch] space-y-6">
          {lead && <p className="text-lg text-gray-600 leading-relaxed">{lead}</p>}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            {rest.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {item.url && (
          <div className="mt-10">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
              {item.ctaLabel ?? "Read the original piece"}
            </a>
          </div>
        )}
      </div>

      <BottomCta />
    </article>
  );
}
