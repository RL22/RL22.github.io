import { BottomCta } from "./BlogChrome";
import PlaceholderChip from "../components/building/PlaceholderChip";
import MarkdownBody from "./MarkdownBody";
import { formatDate, getBody, readingTime, type BuildingItem } from "./content";

export default function RepoReviewLayout({ item }: { item: BuildingItem }) {
  const body = getBody(item);

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 flex items-center gap-2 flex-wrap">
          Repo Review
          {item.category.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-prose">{item.title}</h1>
        <p className="text-gray-600 text-sm font-medium mb-8">
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
          {" · "}
          {readingTime(body)}
        </p>

        <div
          className="w-full aspect-[2/1] rounded-2xl bg-brand/10 flex items-center justify-center mb-10"
          role="img"
          aria-label="Repo review hero image placeholder"
        >
          <PlaceholderChip />
        </div>

        <MarkdownBody body={body} />

        {item.url && (
          <div className="mt-10">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
              {item.ctaLabel ?? "View the repo"}
            </a>
          </div>
        )}
      </div>

      <BottomCta />
    </article>
  );
}
