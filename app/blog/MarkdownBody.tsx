import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a piece's Markdown body: H2s, paragraphs, links, tables, code, and
 * images get the site's prose styling. Images are lazy-loaded by default
 * (`loading="lazy"`) since a long-form post can carry several inline diagrams
 * below the fold.
 */
export default function MarkdownBody({ body }: { body: string }) {
  return (
    <div
      className="max-w-[70ch] space-y-5 text-gray-700 leading-relaxed
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-2
        [&_a]:text-brand-dark [&_a]:underline [&_a]:underline-offset-2 [&_p]:mb-0
        [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-cream [&_code]:text-brand-dark [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
        [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0
        [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:whitespace-nowrap [&_table]:border-collapse [&_table]:text-sm [&_table]:my-6 [&_table]:-mx-1 [&_table]:px-1
        [&_th]:text-left [&_th]:font-mono [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wide [&_th]:text-gray-500 [&_th]:border-b [&_th]:border-gray-300 [&_th]:px-3 [&_th]:py-2 [&_th]:first:pl-0
        [&_td]:px-3 [&_td]:py-2 [&_td]:border-b [&_td]:border-gray-100 [&_td]:align-top [&_td]:first:pl-0"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <img
              src={typeof src === "string" ? src : undefined}
              alt={alt ?? ""}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl my-6"
            />
          ),
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
