import { Github, Linkedin, Mail } from "lucide-react";
import { SHOW_WORK } from "../config";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  ...(SHOW_WORK ? [{ label: "Work", href: "/work/" }] : []),
  { label: "Building in Public", href: "/#building" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/RL22", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/rodney-lewis-abb11b73", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:lewis.rodneyl@gmail.com", label: "Email" },
];

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 bg-brand-dark rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-tight">
            RL
          </span>
          Rodney L. Lewis
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#building" className="text-gray-600 hover:text-brand-dark font-medium transition-colors">
            Back to Building in Public
          </a>
        </nav>
        <a href="/#contact" className="btn-primary text-sm">
          Contact
        </a>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="bg-cream border-t border-cream-dark py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 bg-brand-dark rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-tight">
              RL
            </span>
            Rodney L. Lewis
          </a>

          <nav className="flex gap-6 flex-wrap justify-center">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-600 hover:text-brand-dark text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-brand-dark hover:border-brand transition-colors"
              >
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

export function BottomCta() {
  return (
    <div className="border-t border-gray-200 pt-10 mt-16 max-w-3xl mx-auto px-6 flex flex-wrap gap-4">
      <a href="/#building" className="btn-outline">
        More building in public
      </a>
      <a href="/#contact" className="btn-primary">
        Get in touch
      </a>
    </div>
  );
}
