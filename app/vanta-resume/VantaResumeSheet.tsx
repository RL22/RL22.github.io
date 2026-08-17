import { ArrowLeft } from "lucide-react";
import PrintButton from "../resume/PrintButton";
import { contactLine, education, experience, headline, skills, summary } from "./content";
import "../resume/resume.css";

export default function VantaResumeSheet() {
  return (
    <div className="resume-page">
      <div className="resume-actions">
        <a
          href="/"
          className="text-gray-600 hover:text-brand-dark text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to site
        </a>
        <PrintButton />
      </div>

      <main id="main" className="resume-sheet">
        <header>
          <h1>Rodney L. Lewis</h1>
          <div className="resume-title">{headline}</div>
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
          <p className="resume-summary">{summary}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((e) => (
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
          <h2>Technical Skills</h2>
          {skills.map((s) => (
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
