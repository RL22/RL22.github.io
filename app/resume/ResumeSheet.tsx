import { ArrowLeft } from "lucide-react";
import PrintButton from "./PrintButton";
import { contactLine, education, variants, type ResumeVariant } from "./content";
import { SHOW_RESUME_VARIANTS } from "../config";
import "./resume.css";

export default function ResumeSheet({ variant }: { variant: ResumeVariant }) {
  const c = variants[variant];
  return (
    <div className="resume-page">
      <div className="resume-actions">
        <a
          href="/"
          className="text-gray-600 hover:text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to site
        </a>
        {SHOW_RESUME_VARIANTS && (
          <nav aria-label="Resume versions" className="flex items-center gap-1 text-sm font-semibold">
            {Object.values(variants).map((v) => (
              <a
                key={v.variant}
                href={v.path}
                aria-current={v.variant === variant ? "page" : undefined}
                className={
                  v.variant === variant
                    ? "px-3 py-1.5 rounded-full bg-brand text-white"
                    : "px-3 py-1.5 rounded-full text-gray-600 hover:text-brand-dark transition-colors"
                }
              >
                {v.label}
              </a>
            ))}
          </nav>
        )}
        <PrintButton />
      </div>

      <main id="main" className="resume-sheet">
        <header>
          <h1>Rodney L. Lewis</h1>
          <div className="resume-title">{c.headline}</div>
          <div className="resume-contact">
            {contactLine.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className="resume-sep">|</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </header>

        <section>
          <h2>Summary</h2>
          <p className="resume-summary">{c.summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {c.experience.map((e) => (
            <div className="resume-entry" key={e.org}>
              <div className="resume-entry-head">
                <h3>
                  {e.org} <span className="resume-entry-role">| {e.role}</span>
                </h3>
                <span className="resume-entry-dates">{e.dates}</span>
              </div>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          {c.skills.map((s) => (
            <div className="resume-skills-line" key={s.group}>
              <span className="resume-skills-group">{s.group}: </span>
              <span className="resume-skills-tags">{s.tags}</span>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((ed) => (
            <div className="resume-edu" key={ed.school}>
              <div className="resume-edu-head">
                <h3>{ed.school}</h3>
                <span className="resume-entry-dates">{ed.year}</span>
              </div>
              <div className="resume-edu-credential">
                {ed.credential} &middot; {ed.location}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
