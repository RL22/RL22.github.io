"use client";
import { useState } from "react";
import { Mail, MapPin, Globe, Github, Linkedin, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name}\n${form.email}`);
    const subject = encodeURIComponent("Portfolio inquiry");
    window.location.href = `mailto:lewis.rodneyl@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const info = [
    { Icon: MapPin, label: "Location", value: "Oakland, CA (Bay Area)", href: null as string | null },
    { Icon: Mail, label: "Email", value: "lewis.rodneyl@gmail.com", href: "mailto:lewis.rodneyl@gmail.com" },
    { Icon: Globe, label: "Studio", value: "sprintz.agency", href: "https://sprintz.agency" },
    { Icon: Github, label: "GitHub", value: "github.com/RL22", href: "https://github.com/RL22" },
    { Icon: Linkedin, label: "LinkedIn", value: "in/rodney-lewis-abb11b73", href: "https://www.linkedin.com/in/rodney-lewis-abb11b73" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-badge">Hire / Collaborate</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            If you&apos;re hiring a platform owner, let&apos;s talk.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Currently open to senior and principal roles owning marketing web platforms, Bay Area or remote, and select{" "}
            <a href="https://sprintz.agency" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Sprintz</a>{" "}
            studio engagements. I reply within one business day.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h3 className="text-xl font-bold mb-6">Where to find me</h3>
            <ul className="space-y-5 mb-8">
              {info.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-gray-700">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-brand text-sm hover:underline">
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
            <h3 className="text-xl font-bold mb-6">Send a note</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="you@company.com"
                  value={form.email} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  placeholder="What's the role, project, or problem?"
                  value={form.message} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                {submitted ? "Thanks, opening your email client…" : (
                  <>
                    Send message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-gray-400 text-xs text-center">
                I reply within one business day.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
