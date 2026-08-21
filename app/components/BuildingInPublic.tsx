import Reveal from "./Reveal";
import FeaturedHero from "./building/FeaturedHero";

export default function BuildingInPublic() {
  return (
    <section id="building" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-14">
          <span className="section-badge">Building in Public</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Watch the work happen.</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Repos, writing, and video, in the open as it ships. Proof of work beats claims of it.
          </p>
        </Reveal>

        <FeaturedHero />

        <Reveal>
          <a href="/building" className="btn-outline">
            See everything
          </a>
        </Reveal>
      </div>
    </section>
  );
}
