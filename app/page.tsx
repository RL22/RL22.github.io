import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import BuildingInPublic from "./components/BuildingInPublic";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <OpenSource />
        <BuildingInPublic />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}