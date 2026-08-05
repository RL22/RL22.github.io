import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./providers/LenisProvider";
import { PageLoader } from "./components/PageLoader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const ogImage = "/og-default.png";
const siteTitle = "Rodney L. Lewis | Senior Web Platform Engineer";
const siteDescription = "Nine years owning marketing-site lifecycles for Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rl22.github.io"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    siteName: "Rodney L. Lewis",
    type: "website",
    locale: "en_US",
    url: "https://rl22.github.io",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Rodney L. Lewis, Senior Web Platform Engineer. Build platforms. Scale marketing impact.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rodney L. Lewis",
  jobTitle: "Senior Web Platform Engineer",
  url: "https://rl22.github.io",
  sameAs: [
    "https://github.com/RL22",
    "https://www.linkedin.com/in/rodney-lewis-abb11b73",
    "https://sprintz.agency",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <PageLoader />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
