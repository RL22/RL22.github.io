import Footer from "./components/Footer";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[60vh] bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-brand-dark font-semibold mb-3">404</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
              That page moved. The work didn&apos;t.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The address may have changed, but the work is still here. Pick up with a case study,
              the resume, or a conversation.
            </p>
            <nav aria-label="Page recovery" className="flex flex-wrap gap-4">
              <a href="/work/" className="btn-primary">Case studies</a>
              <a href="/resume/" className="btn-outline">Resume</a>
              <a href="/#contact" className="btn-outline">Contact</a>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
