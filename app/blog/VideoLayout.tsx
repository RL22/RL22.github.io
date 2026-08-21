import { Play } from "lucide-react";
import LiteYouTube from "../components/LiteYouTube";
import { BottomCta } from "./BlogChrome";
import MarkdownBody from "./MarkdownBody";
import { formatDate, getBody, type BuildingItem } from "./content";

export default function VideoLayout({ item }: { item: BuildingItem }) {
  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4 flex items-center gap-2 flex-wrap">
          Video
          {item.category.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{item.title}</h1>
        <p className="text-gray-600 text-sm font-medium mb-10">
          <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
          {" · "}
          {item.meta}
        </p>

        {item.videoId ? (
          <LiteYouTube videoId={item.videoId} title={item.title} />
        ) : (
          <div className="relative aspect-video rounded-xl bg-brand/10 flex flex-col items-center justify-center overflow-hidden gap-4">
            <span className="w-16 h-16 rounded-full bg-brand flex items-center justify-center">
              <Play className="w-7 h-7 text-white translate-x-0.5" aria-hidden="true" />
            </span>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-gray-400 rounded px-1.5 py-0.5">
              Placeholder
            </span>
          </div>
        )}

        <div className="mt-10">
          <MarkdownBody body={getBody(item)} />
        </div>

        {item.url && (
          <div className="mt-10">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Watch on YouTube
            </a>
          </div>
        )}
      </div>

      <BottomCta />
    </article>
  );
}
