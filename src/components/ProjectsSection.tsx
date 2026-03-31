import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

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
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projets: Project[] = [
    {
      titre: "App Mobile Timer",
      description:
        "Application mobile de gestion de temps avec minuteries personnalisées.",
      longDescription:
        "Application mobile complète permettant de gérer son temps avec des minuteries personnalisées.",
      technologies: ["JavaScript", "React Native", "Expo"],
      features: [
        "Minuteurs personnalisés",
        "Deux modes de minuterie (chronomètre simple et chronomètre mode course)",
        "Design moderne et intuitif",
      ],
      role: "Mobile Developer",
      year: "2024",
      image: "/images/1.png",
      github: "https://github.com/Nampiasilala/app-mobile-timer.git",
      demo: "#",
    },
    {
      titre: "Site de Naissance",
      description:
        "Plateforme web permettant de générer automatiquement des pages de naissance.",
      longDescription:
        "Application web permettant aux utilisateurs de créer des pages personnalisées pour des nouveaux-nés avec des différentes informations avec un design moderne.",
      technologies: ["JavaScript", "CSS", "HTML"],
      features: [
        "Création des informations de naissance",
        "Galerie d'images",
        "Partage en ligne",
      ],
      role: "Frontend Developer",
      year: "2024",
      image: "/images/2.png",
      github: "https://github.com/Nampiasilala/site-de-naissance",
      demo: "#",
    },
    {
      titre: "Suivi Flux Financier",
      description:
        "Outil de suivi des finances personnelles avec graphiques.",
      longDescription:
        "Application permettant de suivre les dépenses, catégoriser les transactions et visualiser les finances via des graphiques.",
      technologies: ["React", "JavaScript", "PHP", "MySQL"],
      features: [
        "Gestion des dépenses",
        "Gestion des revenus",
        "Catégorisation",
        "Graphiques financiers",
        "Analyse des flux",
      ],
      role: "Fullstack Developer",
      year: "2024",
      image: "/images/3.png",
      github: "https://github.com/Nampiasilala/flux_financier_back.git",
      demo: "#",
    },
    {
      titre: "Projet Blackjack",
      description:
        "Jeu de Blackjack interactif avec logique complète.",
      longDescription:
        "Implémentation complète du jeu Blackjack avec gestion des scores, logique de jeu et interface interactive.",
      technologies: ["React", "JavaScript", "Java", "Spring Boot", "MySQL"],
      features: [
        "Logique complète du jeu",
        "Gestion des scores",
        "Interface interactive",
      ],
      role: "Backend & Logic Developer",
      year: "2023",
      image: "/images/4.png",
      github: "https://github.com/Nampiasilala/projet_blackjack.git",
      demo: "#",
    },
    {
      titre: "Outils Photovoltaïque",
      description:
        "Application pour simuler la production d'énergie solaire.",
      longDescription:
        "Application permettant de calculer et simuler la production d'énergie solaire en fonction des paramètres environnementaux.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Django",
        "PostgreSQL",
        "Docker",
        "OpenStreetMap",
      ],
      features: [
        "Simulation énergétique",
        "Calculs dynamiques",
        "Intégration de données géographiques",
        "Calcul des besoins énergétiques",
        "Proposition des équipements adaptés",
      ],
      role: "Developer",
      year: "2024",
      image: "/images/5.png",
      github: "https://github.com/Nampiasilala/Outils-Photovoltaiques.git",
      demo: "#",
    },
    {
      titre: "Outils PV Mobile",
      description:
        "Application Flutter avec architecture propre.",
      longDescription:
        "Application mobile Flutter démontrant une architecture propre et une gestion d'état avancée.",
      technologies: ["Flutter", "Dart"],
      features: [
        "Architecture propre lié à l'application web photovoltaïque",
        "Performance optimisée",
      ],
      role: "Mobile Developer",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      github: "https://github.com/Nampiasilala/App_mobile_flutter.git",
      demo: "#",
    },
    {
      titre: "Alumni Géolocalisation",
      description:
        "Plateforme pour localiser les anciens étudiants via une carte interactive.",
      longDescription:
        "Application web complète avec carte interactive permettant de localiser et filtrer les anciens étudiants avec une interface moderne.",
      technologies: [
        "Next.js",
        "Leaflet",
        "NestJS",
        "TypeScript",
        "PostgreSQL + PostGIS",
        "Docker",
        "WebSockets",
      ],
      features: [
        "Carte interactive",
        "Recherche avancée",
        "Géolocalisation GPS/WiFi",
      ],
      role: "Fullstack Developer",
      year: "2025",
      image: "/images/figma-localisation-geographique.png",
      github: "https://github.com/Nampiasilala/alumni-geolocalisation",
      demo: "#",
    },
  ];

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Une sélection de mes réalisations web et mobile
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              onClick={() => setSelectedProject(projet)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden h-44">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                {/* Badge année */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-900 leading-tight">
                    {projet.titre}
                  </h3>
                  {projet.year && (
                    <span className="text-xs text-gray-400 ml-2 shrink-0">
                      {projet.year}
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1">
                  {projet.description}
                </p>

                {/* Technologies — max 3 affichées */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {projet.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {projet.technologies.length > 3 && (
                    <span className="text-xs text-gray-400 px-1 py-0.5">
                      +{projet.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-5 -mx-5 sm:mx-0 -mt-1">
            <img
              src={selectedProject.image}
              alt={selectedProject.titre}
              className="w-full h-52 sm:h-60 object-cover"
            />
          </div>

          {/* En-tête */}
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {selectedProject.titre}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {selectedProject.role} · {selectedProject.year}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {selectedProject.longDescription}
          </p>

          {/* Features */}
          {selectedProject.features && selectedProject.features.length > 0 && (
            <ul className="space-y-1.5 mb-5">
              {selectedProject.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-green-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Liens */}
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
            >
              <Github size={15} />
              Code
            </a>
            {selectedProject.demo !== "#" && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
              >
                <ExternalLink size={15} />
                Démo
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}