import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-bg-primary min-h-screen text-text-primary selection:bg-accent selection:text-bg-primary overflow-x-hidden">
      <NoiseOverlay />
      <CustomCursor />
      <Preloader />
      <ScrollProgress />
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
