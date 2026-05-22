import { Code2, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </span>
            Rodney L. Lewis
          </a>

          {/* Nav links */}
          <nav className="flex gap-6 flex-wrap justify-center">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-gray-500 hover:text-brand text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-brand hover:border-brand transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-dark text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-brand font-semibold">Rodney L. Lewis</span>. Oakland, CA.
          </p>
        </div>
      </div>
    </footer>
  );
}