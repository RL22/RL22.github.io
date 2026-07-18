import { BottomCta } from "./BlogChrome";
import { formatDate, readingTime, type ArticleItem } from "./content";

export default function ArticleLayout({ item }: { item: ArticleItem }) {
  const [lead, ...rest] = item.body;

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">Article</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-prose">{item.title}</h1>
        <p className="text-gray-600 text-sm font-medium mb-10">
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
          {" · "}
          {readingTime(item.body)}
        </p>

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
              Read the original piece
            </a>
          </div>
        )}
      </div>

      <BottomCta />
    </article>
  );
}
