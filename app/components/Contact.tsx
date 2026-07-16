"use client";
import { useState } from "react";
import { Mail, MapPin, Globe, Github, Linkedin, Send, Download } from "lucide-react";
import Reveal from "./Reveal";

// TODO: replace with real Formspree form ID before deploy
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormState = { name: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = (values: FormState): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      // No real endpoint configured yet: fall back to an honest mailto submission.
      const body = encodeURIComponent(`${form.message}\n\n- ${form.name}\n${form.email}`);
      const subject = encodeURIComponent("Portfolio inquiry");
      window.location.href = `mailto:lewis.rodneyl@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const usingMailtoFallback = FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Currently open to senior roles owning marketing web platforms, Bay Area or remote. I reply within one business day.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h3 className="text-xl font-bold mb-6">Where to find me</h3>
            <ul className="space-y-5 mb-8">
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
            <div className="flex flex-wrap gap-3">
              <a href="mailto:lewis.rodneyl@gmail.com" className="btn-primary inline-flex items-center gap-2">
                Email me <Mail className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" download className="btn-outline inline-flex items-center gap-2">
                Download resume <Download className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="text-xl font-bold mb-6">Send a note</h3>

            {status === "success" ? (
              <div role="status" className="card bg-cream border border-brand/20">
                <p className="text-gray-800 font-medium">
                  Thanks, your message is on its way. I reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your name"
                    value={form.name} onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="you@company.com"
                    value={form.email} onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    placeholder="What's the role, project, or problem?"
                    value={form.message} onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 bg-cream resize-none"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-600 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p role="alert" className="text-red-600 text-sm">
                    Something went wrong sending that. Your message wasn&apos;t lost, please email me directly at{" "}
                    <a href="mailto:lewis.rodneyl@gmail.com" className="text-brand-dark underline">lewis.rodneyl@gmail.com</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : (
                    <>
                      {usingMailtoFallback ? "Send via email" : "Send message"} <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                {usingMailtoFallback && (
                  <p className="text-gray-600 text-xs text-center">
                    This opens your email client with your message pre-filled.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
