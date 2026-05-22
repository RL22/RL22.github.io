import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodney L. Lewis | Senior Web Platform Lead",
  description: "Eight years owning marketing-site lifecycles for Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}