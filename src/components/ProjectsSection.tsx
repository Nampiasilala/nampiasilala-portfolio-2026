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
        "Application mobile complète permettant de gérer son temps avec des minuteries personnalisées, notifications intelligentes et suivi de productivité.",
      technologies: ["JavaScript", "React Native", "Expo"],
      features: [
        "Minuteurs personnalisés",
        "Notifications intelligentes",
        "Statistiques de productivité",
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
        "Application web permettant aux utilisateurs de créer des pages personnalisées pour des naissances avec galerie, partage et design moderne.",
      technologies: ["JavaScript", "CSS", "HTML"],
      features: [
        "Création automatique de pages",
        "Galerie d’images",
        "Partage en ligne",
      ],
      role: "Frontend Developer",
      year: "2024",
      image: "/images/2.png",
      github: "https://github.com/Nampiasilala/site-de-naissance",
      demo: "#",
    },

    {
      titre: "Suivi et Gestion du Flux Financier",
      description:
        "Outil de suivi des finances personnelles avec graphiques.",
      longDescription:
        "Application permettant de suivre les dépenses, catégoriser les transactions et visualiser les finances via des graphiques.",
      technologies: ["React", "JavaScript", "PHP", "MySQL"],
      features: [
        "Gestion des dépenses",
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
        "Application pour simuler la production d’énergie solaire.",
      longDescription:
        "Application permettant de calculer et simuler la production d’énergie solaire en fonction des paramètres environnementaux.",
      technologies: ["Next.js","TypeScript", "Tailwindcss", "Django", "PostgreSQL", "ngrok", "Postman", "OpenStreetMap", "Docker", "DockerHub", "Git", "GitHub"],
      features: [
        "Simulation énergétique",
        "Calculs dynamiques",
        "Interface utilisateur",
      ],
      role: "Developer",
      year: "2024",
      image: "/images/5.png",
      github: "https://github.com/Nampiasilala/Outils-Photovoltaiques.git",
      demo: "#",
    },

    {
      titre: "Outils Photovoltaïques Mobile",
      description:
        "Application Flutter avec architecture propre.",
      longDescription:
        "Application mobile Flutter démontrant une architecture propre et une gestion d’état avancée.",
      technologies: ["Flutter", "Dart"],
      features: [
        "Architecture propre",
        "Gestion d’état",
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
        "Plateforme pour localiser les anciens étudiants.",
      longDescription:
        "Application web complète avec carte interactive permettant de localiser et filtrer les anciens étudiants avec une interface moderne.",
      technologies: [
        "Next.js + Leaflet + OpenStreetMap + WebSockets",
        "Socket.IO + Node.js + NestJS",
        "Typescript",
        "PostgreSQL 16 + PostGIS",
        "Docker + Docker Compose",
        "Position WiFi/IP - GPS - recherche par ville",
      ],
      features: [
        "Carte interactive",
        "Recherche avancée",
        "API REST",
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
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-gray-600">
            Une sélection de mes réalisations web et mobile
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              onClick={() => setSelectedProject(projet)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <img
                src={projet.image}
                className="w-full h-48 object-cover group-hover:scale-110 transition"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {projet.titre}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {projet.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <img
            src={selectedProject.image}
            className="w-full h-60 object-cover rounded mb-4"
          />

          <h2 className="text-2xl font-bold">
            {selectedProject.titre}
          </h2>

          <p className="text-gray-500 mb-2">
            {selectedProject.role} • {selectedProject.year}
          </p>

          <p className="text-gray-600 mb-4">
            {selectedProject.longDescription}
          </p>

          <ul className="list-disc list-inside mb-4 text-gray-600">
            {selectedProject.features?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href={selectedProject.github} target="_blank">
              <Github /> Code
            </a>
            <a href={selectedProject.demo} target="_blank">
              <ExternalLink /> Demo
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}