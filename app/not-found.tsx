import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <p className="text-brand font-semibold mb-2">404</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Back to home
        </Link>
      </div>
    </main>
  );
}
