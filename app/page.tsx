import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import BuildingInPublic from "./components/BuildingInPublic";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SHOW_BUILDING_IN_PUBLIC } from "./config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        {SHOW_BUILDING_IN_PUBLIC && <BuildingInPublic />}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}