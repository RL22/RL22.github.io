"use client";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import BookACallButton from "./BookACallButton";
import ContactForm from "./ContactForm";

// Sprintz references belong in About and Experience only, not here.
const info = [
  { Icon: MapPin, label: "Location", value: "Oakland, CA (Bay Area)", href: null as string | null },
  { Icon: Mail, label: "Email", value: "lewis.rodneyl@gmail.com", href: "mailto:lewis.rodneyl@gmail.com" },
  { Icon: Github, label: "GitHub", value: "github.com/RL22", href: "https://github.com/RL22" },
  { Icon: Linkedin, label: "LinkedIn", value: "in/rodney-lewis-abb11b73", href: "https://www.linkedin.com/in/rodney-lewis-abb11b73" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-16">
          <span className="section-badge">Contact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            If you&apos;re hiring a platform owner, let&apos;s talk.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Currently open to senior roles owning marketing web platforms, Bay Area or remote. I reply within one business day.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[minmax(0,26rem)_280px] gap-12 lg:gap-16">
          <Reveal>
            <h3 className="text-xl font-bold mb-6">Reach out</h3>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-xl font-bold mb-6">Other ways to connect</h3>
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
            <div className="mt-8">
              <BookACallButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
