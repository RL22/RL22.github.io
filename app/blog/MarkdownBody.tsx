import ReactMarkdown from "react-markdown";

/** Renders a piece's Markdown body: H2s, paragraphs, and links get the site's prose styling. */
export default function MarkdownBody({ body }: { body: string }) {
  return (
    <div className="max-w-[70ch] space-y-5 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-2 [&_a]:text-brand-dark [&_a]:underline [&_a]:underline-offset-2 [&_p]:mb-0">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
}
