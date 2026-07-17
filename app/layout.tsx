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

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Senior Web Platform Engineer",
  description: "Eight years owning marketing-site lifecycles for Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <PageLoader />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
