"use client";
import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
            <Code2 className="text-white w-5 h-5" />
          </span>
          Rodney L. Lewis
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-gray-600 hover:text-brand font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex btn-primary text-sm">Contact</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-cream px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-700 font-medium py-2 border-b border-cream-dark">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm text-center mt-2">Contact</a>
        </nav>
      )}
    </header>
  );
}