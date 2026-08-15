"use client";
import { Mail, MapPin, Globe, Github, Linkedin, FileText } from "lucide-react";
import Reveal from "./Reveal";
import BookACallButton from "./BookACallButton";

const info = [
  { Icon: MapPin, label: "Location", value: "Oakland, CA (Bay Area)", href: null as string | null },
  { Icon: Mail, label: "Email", value: "lewis.rodneyl@gmail.com", href: "mailto:lewis.rodneyl@gmail.com" },
  { Icon: Globe, label: "Studio", value: "sprintz.agency", href: "https://sprintz.agency" },
  { Icon: Github, label: "GitHub", value: "github.com/RL22", href: "https://github.com/RL22" },
  { Icon: Linkedin, label: "LinkedIn", value: "in/rodney-lewis-abb11b73", href: "https://www.linkedin.com/in/rodney-lewis-abb11b73" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-badge">Contact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            If you&apos;re hiring a platform owner, let&apos;s talk.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Currently open to senior roles owning marketing web platforms, Bay Area or remote. I reply within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:lewis.rodneyl@gmail.com" className="tag hover:bg-brand/20 transition-colors">
              Hiring for a senior IC role
            </a>
            <a
              href="https://sprintz.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="tag hover:bg-brand/20 transition-colors"
            >
              Need Sprintz help
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h3 className="text-xl font-bold mb-6">Where to find me</h3>
            <ul className="space-y-5">
              {info.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-dark" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-gray-700">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-brand-dark text-sm hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-xl font-bold mb-6">Reach out</h3>
            <p className="text-gray-600 mb-8">
              No forms. Email me directly, grab time on my calendar, or take the resume with you.
            </p>
            <div className="flex flex-col gap-3 max-w-sm">
              <a href="mailto:lewis.rodneyl@gmail.com" className="btn-primary flex items-center justify-center gap-2">
                Email me <Mail className="w-4 h-4" />
              </a>
              <BookACallButton />
              <a href="/resume" className="btn-outline flex items-center justify-center gap-2">
                View resume <FileText className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
