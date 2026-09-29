"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { SHOW_BUILDING_IN_PUBLIC, SHOW_WORK } from "../config";
import Monogram from "./Monogram";

// Absolute "/#..." paths, not bare "#...": SiteHeader renders away from
// the homepage too, where a bare hash would resolve against the current route.
const links = [
  ...(SHOW_WORK ? [{ label: "Work", href: "/work/", section: "work" }] : []),
  ...(SHOW_BUILDING_IN_PUBLIC
    ? [{ label: "Writing", href: "/building/", section: "writing" }]
    : []),
  { label: "Resume", href: "/resume/", section: "resume" },
  { label: "About", href: "/#about", section: "about" },
];

function isCurrent(section: string, pathname: string) {
  if (section === "work") return pathname === "/work" || pathname.startsWith("/work/");
  if (section === "writing") {
    return (
      pathname === "/building" ||
      pathname.startsWith("/building/") ||
      pathname.startsWith("/blog/")
    );
  }
  if (section === "resume") return pathname === "/resume" || pathname.startsWith("/resume/");
  // "About" is an in-page anchor on the homepage, not a page of its own, so it
  // never claims aria-current; the homepage has no nav item.
  return false;
}

export default function SiteHeader({ pathname: pathnameProp }: { pathname?: string }) {
  const routePathname = usePathname();
  const pathname = pathnameProp ?? routePathname;
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <Monogram />
          Rodney L. Lewis
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const current = isCurrent(link.section, pathname);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`min-h-11 inline-flex items-center text-gray-700 hover:text-brand-dark transition-colors ${
                  current ? "font-bold underline underline-offset-8 decoration-2" : "font-medium"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <a href="/#contact" className="hidden md:inline-flex btn-primary text-sm min-h-11 items-center">
          Contact
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden w-11 h-11 inline-flex items-center justify-center"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="md:hidden bg-cream px-6 pb-4 flex flex-col"
        >
          {links.map((link) => {
            const current = isCurrent(link.section, pathname);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`min-h-11 flex items-center border-b border-cream-dark text-gray-700 ${
                  current ? "font-bold underline underline-offset-4 decoration-2" : "font-medium"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm text-center mt-3 min-h-11 inline-flex items-center justify-center"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
