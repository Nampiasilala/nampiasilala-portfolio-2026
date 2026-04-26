// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection"; // Assure-toi qu'il est bien importé
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
  // src/App.tsx

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
// DEBUG : Combien de sections sont trouvées ?
    console.log("Nombre de sections trouvées par l'observer :", sections.length);
    sections.forEach(s => console.log("Section détectée :", s.id));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // --- LOG DE DÉBUG ---
        if (entry.isIntersecting) {
          console.log("✅ Section visible détectée par l'Observer :", entry.target.id);
        }
      });

      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        console.log("🎯 Nouvelle section active choisie :", visible[0].target.id);
        setActiveSection(visible[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}, []);

// --- LOG DU STATE ---
// Ajoutez ceci juste avant le return de la fonction App()
console.log("État actuel de activeSection :", activeSection);

  return (
    <ViewModeProvider>
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </ViewModeProvider>
  );
}

export default App;