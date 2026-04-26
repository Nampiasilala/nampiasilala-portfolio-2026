// src/components/ProjectsSection.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import { useViewMode } from "../context/ViewModeContext";
import type { ViewMode } from "../types/viewMode";

interface Project {
  titre: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  role?: string;
  year?: string;
  image: string;
  github: string;
  demo: string;
  modes: ViewMode[];
  accent?: string; // couleur accent par projet
}

const projets: Project[] = [
  {
    titre: "App Mobile Timer",
    description:
      "Application de gestion du temps avec minuteries avancées et deux modes distincts (chronomètre et mode course).",
    longDescription:
      "Application mobile React Native pensée pour les athlètes et les professionnels soucieux de leur productivité. L'interface épurée permet de basculer instantanément entre un chronomètre classique et un mode compétition avec intervalles personnalisables. Développée avec Expo pour un déploiement multiplateforme rapide.",
    technologies: ["JavaScript", "React Native", "Expo"],
    features: [
      "Minuteurs entièrement personnalisables",
      "Mode chronomètre & mode course avec intervalles",
      "Interface intuitive et design moderne",
      "Déploiement iOS & Android via Expo",
    ],
    role: "Mobile Developer",
    year: "2024",
    image: "/images/1.png",
    github: "https://github.com/Nampiasilala/app-mobile-timer.git",
    demo: "#",
    modes: ["dev"],
    accent: "#3b82f6",
  },
  {
    titre: "Site de Naissance",
    description:
      "Générateur de pages web personnalisées pour célébrer la naissance d'un enfant — galerie, partage en ligne.",
    longDescription:
      "Plateforme permettant aux parents de créer en quelques minutes une page mémorielle dédiée à leur nouveau-né. Saisie des informations (date, lieu, prénom, message), upload de photos et génération automatique d'une page partageable. Projet centré sur l'expérience utilisateur et la simplicité.",
    technologies: ["JavaScript", "CSS", "HTML"],
    features: [
      "Création de fiches naissance personnalisées",
      "Galerie photo interactive",
      "Génération d'une page partageable en ligne",
      "Design chaleureux et accessible",
    ],
    role: "Frontend Developer",
    year: "2024",
    image: "/images/2.png",
    github: "https://github.com/Nampiasilala/site-de-naissance",
    demo: "#",
    modes: ["dev"],
    accent: "#ec4899",
  },
  {
    titre: "Suivi Flux Financier",
    description:
      "Application fullstack de gestion des finances personnelles avec catégorisation et visualisation graphique.",
    longDescription:
      "Outil de finances personnelles complet : enregistrement des revenus et dépenses, catégorisation automatique, tableau de bord avec graphiques dynamiques. Architecture fullstack (React + PHP + MySQL) garantissant fiabilité des données et persistance. Idéal comme base pour une solution SaaS de comptabilité légère.",
    technologies: ["React", "JavaScript", "PHP", "MySQL"],
    features: [
      "Suivi des dépenses et revenus",
      "Catégorisation des transactions",
      "Dashboard avec graphiques financiers interactifs",
      "API REST PHP + base MySQL",
    ],
    role: "Fullstack Developer",
    year: "2024",
    image: "/images/3.png",
    github: "https://github.com/Nampiasilala/flux_financier_back.git",
    demo: "#",
    modes: ["dev"],
    accent: "#10b981",
  },
  {
    titre: "Projet Blackjack",
    description:
      "Jeu Blackjack en ligne avec logique métier complète, API Spring Boot et interface React dynamique.",
    longDescription:
      "Implémentation complète du Blackjack : gestion des règles officielles, logique du dealer, calcul des scores, sessions multi-joueurs. Backend Spring Boot exposant une API REST robuste, frontend React réactif. Projet démontrant la maîtrise du découplage frontend/backend et de la logique algorithmique.",
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "MySQL"],
    features: [
      "Logique complète du Blackjack (règles officielles)",
      "API REST Spring Boot",
      "Gestion des sessions et scores",
      "Interface de jeu interactive et animée",
    ],
    role: "Backend & Logic Developer",
    year: "2023",
    image: "/images/4.png",
    github: "https://github.com/Nampiasilala/projet_blackjack.git",
    demo: "#",
    modes: ["dev"],
    accent: "#f59e0b",
  },
  {
    titre: "Outils Photovoltaïques",
    description:
      "Simulateur d'installation solaire avec calcul de production, proposition d'équipements et cartographie géographique.",
    longDescription:
      "Application web avancée permettant de simuler la rentabilité d'une installation photovoltaïque selon la localisation géographique. Intégration OpenStreetMap pour la géolocalisation, calcul dynamique de la production d'énergie et recommandation d'équipements adaptés. Stack moderne Next.js + Django + PostgreSQL déployé avec Docker.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL", "Docker", "OpenStreetMap"],
    features: [
      "Simulation de production d'énergie solaire",
      "Carte interactive OpenStreetMap",
      "Calcul des besoins énergétiques et ROI",
      "Proposition automatique d'équipements solaires",
      "Déploiement Docker conteneurisé",
    ],
    role: "Fullstack Developer",
    year: "2024",
    image: "/images/5.png",
    github: "https://github.com/Nampiasilala/Outils-Photovoltaiques.git",
    demo: "#",
    modes: ["dev", "electronique"],
    accent: "#f59e0b",
  },
  {
    titre: "Outils PV Mobile",
    description:
      "Application Flutter compagnon de l'outil photovoltaïque web — architecture propre, performance native.",
    longDescription:
      "Application mobile Flutter conçue en architecture propre (Clean Architecture) et connectée à l'API de l'outil web photovoltaïque. Consultation des simulations, suivi de production et accès aux recommandations directement depuis son smartphone. Démontre la capacité à décliner un produit web sur mobile avec cohérence.",
    technologies: ["Flutter", "Dart"],
    features: [
      "Architecture Flutter Clean Architecture",
      "Synchronisation avec l'API web PV",
      "Performance native iOS & Android",
      "Navigation fluide et UX optimisée",
    ],
    role: "Mobile Developer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    github: "https://github.com/Nampiasilala/App_mobile_flutter.git",
    demo: "#",
    modes: ["dev"],
    accent: "#06b6d4",
  },
  {
    titre: "Alumni Géolocalisation",
    description:
      "Plateforme de mise en réseau des anciens étudiants avec carte interactive, recherche avancée et géolocalisation en temps réel.",
    longDescription:
      "Application web complète développée pour une institution académique. Les anciens étudiants s'inscrivent, renseignent leur localisation et apparaissent sur une carte Leaflet interactive. Filtres avancés par promotion, domaine, pays. Architecture microservices avec NestJS, PostGIS pour les requêtes spatiales et WebSockets pour les mises à jour en temps réel.",
    technologies: ["Next.js", "Leaflet", "NestJS", "TypeScript", "PostgreSQL + PostGIS", "Docker", "WebSockets"],
    features: [
      "Carte Leaflet interactive avec clustering",
      "Géolocalisation GPS / WiFi en temps réel",
      "Recherche et filtres avancés",
      "Architecture microservices + WebSockets",
      "Déploiement Docker multi-conteneurs",
    ],
    role: "Fullstack Developer",
    year: "2025",
    image: "/images/figma-localisation-geographique.png",
    github: "https://github.com/Nampiasilala/alumni-geolocalisation",
    demo: "#",
    modes: ["dev", "devops"],
    accent: "#8b5cf6",
  },
];

const TECH_COLORS: Record<string, string> = {
  "React": "#61dafb22",
  "Next.js": "#ffffff15",
  "TypeScript": "#3178c620",
  "Flutter": "#54c5f820",
  "Docker": "#2496ed20",
  "Python": "#3776ab20",
  "Java": "#ed8b0020",
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { viewMode } = useViewMode();

  const visible = projets.filter(
    (p) => viewMode === "all" || p.modes.includes(viewMode)
  );

  return (
    <section
      id="projets"
      className="py-24"
      style={{ background: "#080c14" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em] mb-3"
            style={{ color: "#475569" }}
          >
            Réalisations
          </p>
          <h2
            className="text-2xl sm:text-3xl font-black leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              color: "#f1f5f9",
            }}
          >
            Mes Projets
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((projet, index) => (
              <motion.div
                key={projet.titre}
                onClick={() => setSelectedProject(projet)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                className="cursor-pointer rounded-2xl overflow-hidden group flex flex-col"
                style={{
                  background: "#0d1420",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${projet.accent}44`;
                  el.style.boxShadow = `0 8px 40px ${projet.accent}15`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="overflow-hidden h-44 relative">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: "brightness(0.85)" }}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, #0d1420 0%, transparent 60%)",
                    }}
                  />
                  {/* Accent dot */}
                  <div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full"
                    style={{ background: projet.accent, boxShadow: `0 0 8px ${projet.accent}` }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="text-sm font-bold leading-tight" style={{ color: "#e2e8f0" }}>
                      {projet.titre}
                    </h3>
                    {projet.year && (
                      <span
                        className="flex items-center gap-1 text-xs shrink-0"
                        style={{ color: "#475569" }}
                      >
                        <Calendar size={10} />
                        {projet.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "#64748b" }}>
                    {projet.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {projet.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: TECH_COLORS[tech] ?? "rgba(255,255,255,0.05)",
                          color: "#94a3b8",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <Tag size={9} />
                        {tech}
                      </span>
                    ))}
                    {projet.technologies.length > 3 && (
                      <span className="text-xs px-1.5 py-0.5" style={{ color: "#475569" }}>
                        +{projet.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center mt-12 text-sm" style={{ color: "#334155" }}>
            Aucun projet pour cette catégorie pour l'instant.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div
            className="overflow-hidden rounded-xl mb-5 -mx-5 sm:mx-0 -mt-1"
            style={{ border: `1px solid ${selectedProject.accent}33` }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.titre}
              className="w-full h-52 sm:h-60 object-cover"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: selectedProject.accent }}
              />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#475569" }}>
                {selectedProject.role}
              </span>
              <span style={{ color: "#334155" }}>·</span>
              <span className="text-xs" style={{ color: "#475569" }}>{selectedProject.year}</span>
            </div>
            <h2
              className="text-xl sm:text-2xl font-black"
              style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}
            >
              {selectedProject.titre}
            </h2>
          </div>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
            {selectedProject.longDescription}
          </p>

          {selectedProject.features && selectedProject.features.length > 0 && (
            <ul className="space-y-2 mb-5">
              {selectedProject.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#cbd5e1" }}>
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{ background: `${selectedProject.accent}22`, color: selectedProject.accent }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#94a3b8",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <Github size={15} />
              Code source
            </a>
            {selectedProject.demo !== "#" && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: `${selectedProject.accent}22`,
                  border: `1px solid ${selectedProject.accent}44`,
                  color: selectedProject.accent,
                }}
              >
                <ExternalLink size={15} />
                Démo live
              </a>
            )}
          </div>
        </Modal>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}