import { BottomCta } from "./BlogChrome";
import MarkdownBody from "./MarkdownBody";
import { getBody, getRepoMeta, monthYear, type BuildingItem } from "./content";

export default function AnnouncementLayout({ item }: { item: BuildingItem }) {
  const meta = item.repo ? getRepoMeta(item.repo) : undefined;

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 flex items-center gap-2 flex-wrap">
          Product
          {item.category.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{item.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">{item.blurb}</p>
        {meta && (
          <p className="text-gray-600 text-sm font-medium mb-10">
            {meta.language}
            {" · Updated "}
            {monthYear(meta.pushedAt)}
          </p>
        )}

        <div className="flex flex-wrap gap-4 mb-12">
          {meta && (
            <a href={meta.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View on GitHub
            </a>
          )}
        </div>

        <MarkdownBody body={getBody(item)} />
      </div>

      <BottomCta />
    </article>
  );
}
