// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ViewModeProvider } from "./context/ViewModeContext";

function App() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Navbar shadow au scroll ──
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Détection section active ──
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        // Parmi toutes les sections qui entrent dans la zone,
        // on prend celle dont le bord supérieur est le plus proche du haut de l'écran
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Zone de détection : on considère une section active dès qu'elle
        // occupe la bande centrale de l'écran (entre -30% et -60% du bas)
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ViewModeProvider>
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </ViewModeProvider>
  );
}

export default App;