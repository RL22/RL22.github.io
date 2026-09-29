import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function BlogPage() {
  return (
    <main id="main" className="min-h-screen bg-cream px-6 py-24">
      <meta httpEquiv="refresh" content="0; url=/building/" />
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-700">
          Writing has moved to{" "}
          <a href="/building/" className="font-semibold underline">
            All writing
          </a>
          .
        </p>
      </div>
    </main>
  );
}
