import { BottomCta } from "./BlogChrome";
import { monthYear, type RepoMeta, type RepoPage } from "./content";

export default function RepoLayout({ page, meta }: { page: RepoPage; meta?: RepoMeta }) {
  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">Open Source</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{page.repo}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">{page.tagline}</p>
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
          {meta && (
            <a
              href={`${meta.url}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Report an issue
            </a>
          )}
        </div>

        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Highlights</h2>
        <ul>
          {page.highlights.map((h, i) => (
            <li key={i} className="border-t border-gray-200 py-5 flex gap-5 items-baseline">
              <span className="text-brand-dark text-sm font-bold tabular-nums w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-700 leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-5 max-w-[70ch] text-gray-700 leading-relaxed">
          {page.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <BottomCta />
    </article>
  );
}
