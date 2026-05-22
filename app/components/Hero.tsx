import { ArrowRight } from "lucide-react";
import StackIcon, { type IconName } from "tech-stack-icons";
import Reveal from "./Reveal";

const techIcons: { name: IconName; alt: string }[] = [
  { name: "html5", alt: "HTML5" },
  { name: "css3", alt: "CSS3" },
  { name: "js", alt: "JavaScript" },
  { name: "react", alt: "React" },
  { name: "php", alt: "PHP" },
  { name: "wordpress", alt: "WordPress" },
  { name: "nextjs", alt: "Next.js" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center my-auto w-full">
        <Reveal>
          <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Senior Web Platform Lead
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Web platforms built like <span className="text-brand">product</span>,<br />
            run for growth.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            Eight years owning marketing-site lifecycles at Pendo, Carrot Fertility, Kiddom, Andersen, and Revel Systems. Architecture, performance, reusable components, and the publishing workflows that let marketing ship without an engineering ticket.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Book a 20-min intro <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="text-gray-600 hover:text-brand text-sm font-semibold">
              See the work →
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <span className="font-semibold text-gray-700">8 yrs</span>
            <span>·</span>
            <span className="font-semibold text-gray-700">5 senior roles</span>
            <span>·</span>
            <span className="font-semibold text-brand">30%</span>
            <span>fewer marketing dev tickets at Carrot</span>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative flex flex-col items-center gap-6">
          <div className="card w-64">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-gray-600 font-medium">Years</p>
            <p className="text-gray-400 text-sm font-normal mt-1">Owning marketing-site lifecycles</p>
          </div>
          <div className="card w-64">
            <p className="text-gray-500 text-sm font-semibold mb-1">Senior Roles</p>
            <span className="tag mb-2">Marketing &amp; Growth</span>
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-400 text-sm font-normal">Pendo · Carrot · Kiddom · Andersen · Revel</p>
          </div>
          <div className="card w-64">
            <p className="text-3xl font-bold text-brand">30%</p>
            <p className="text-gray-600 font-medium">Fewer Dev Tickets</p>
            <p className="text-gray-400 text-sm font-normal mt-1">Marketing self-serve at Carrot Fertility</p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.3} className="bg-cream-dark py-6">
        <p className="text-center text-gray-500 text-sm font-medium mb-4">Stack I work in</p>
        <div className="flex justify-center items-center gap-8 flex-wrap px-6">
          {techIcons.map(t => (
            <span
              key={t.alt}
              role="img"
              aria-label={t.alt}
              title={t.alt}
              className="w-10 h-10 grayscale hover:grayscale-0 transition-[filter] duration-200"
            >
              <StackIcon name={t.name} />
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
