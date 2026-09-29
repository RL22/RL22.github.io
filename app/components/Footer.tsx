import { Github, Linkedin, Mail } from "lucide-react";
import { SHOW_BUILDING_IN_PUBLIC, SHOW_WORK } from "../config";
import Monogram from "./Monogram";

// Absolute "/#..." paths, not bare "#...": Footer renders away from the
// homepage too, where a bare hash would resolve against the current route.
const navLinks = [
  ...(SHOW_WORK ? [{ label: "Work", href: "/work/" }] : []),
  ...(SHOW_BUILDING_IN_PUBLIC ? [{ label: "Writing", href: "/building/" }] : []),
  { label: "Resume", href: "/resume/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/RL22", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/rodney-lewis-abb11b73", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:lewis.rodneyl@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-cream-dark py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <Monogram />
            Rodney L. Lewis
          </a>

          <nav aria-label="Footer" className="flex gap-x-6 gap-y-2 flex-wrap justify-center">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-600 hover:text-brand-dark text-sm transition-colors min-h-11 inline-flex items-center"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-dark hover:border-brand transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-dark text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-brand-dark font-semibold">Rodney L. Lewis</span>. Oakland, CA.
          </p>
        </div>
      </div>
    </footer>
  );
}
