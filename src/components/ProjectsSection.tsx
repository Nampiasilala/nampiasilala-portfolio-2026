import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  titre: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

export default function ProjectsSection() {
  const projets: Project[] = [
    {
      titre: "App Mobile Timer",
      description:
        "Application mobile de gestion de temps avec minuteries personnalisées, notifications intelligentes et suivi de productivité.",
      technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop",
      github: "https://github.com/username/app-mobile-timer",
      demo: "https://expo.dev/@username/timer-app",
    },
    {
      titre: "Figma Timer UI",
      description:
        "Prototype UI/UX d'une application de minuterie moderne conçu sur Figma avec design system complet.",
      technologies: ["Figma", "Design System", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&h=400&fit=crop",
      github: "https://github.com/username/figma-timer",
      demo: "https://figma.com/file/timer-ui",
    },
    {
      titre: "Site de Naissance",
      description:
        "Plateforme web permettant de générer automatiquement des pages de naissance personnalisées avec galerie et partage.",
      technologies: ["Next.js", "TailwindCSS", "MongoDB", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop",
      github: "https://github.com/username/site-de-naissance",
      demo: "https://naissance-app.vercel.app",
    },
    {
      titre: "Gestion Facturation",
      description:
        "Application SaaS de gestion de factures avec génération PDF, suivi des paiements et dashboard financier.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      github: "https://github.com/username/gestion-facturation",
      demo: "https://facturation-app.vercel.app",
    },
    {
      titre: "App Météo",
      description:
        "Application météo avec prévisions sur 7 jours, géolocalisation et affichage dynamique.",
      technologies: ["React Native", "Expo", "OpenWeather API"],
      image:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=600&h=400&fit=crop",
      github: "https://github.com/username/app-meteo",
      demo: "https://expo.dev/@username/meteo-app",
    },
    {
      titre: "Suivi Flux Financier",
      description:
        "Outil de suivi des finances personnelles avec graphiques, catégorisation et analyse.",
      technologies: ["Vue.js", "Chart.js", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop",
      github: "https://github.com/username/flux-financier",
      demo: "https://finance-tracker.vercel.app",
    },
    {
      titre: "Projet Blackjack",
      description:
        "Jeu de Blackjack interactif avec gestion des scores et logique complète du jeu.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop",
      github: "https://github.com/username/projet-blackjack",
      demo: "https://blackjack-game.vercel.app",
    },
    {
      titre: "Dépôt Debian Privé",
      description:
        "Infrastructure pour héberger et gérer des paquets Debian privés avec CI/CD.",
      technologies: ["Linux", "Docker", "Bash", "GitHub Actions"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      github: "https://github.com/username/depot-debian",
      demo: "https://debian-repo-docs.vercel.app",
    },
    {
      titre: "App Photovoltaïque",
      description:
        "Application mobile pour calculer et simuler la production d’énergie solaire.",
      technologies: ["Flutter", "Firebase", "REST API"],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      github: "https://github.com/username/app-photovoltaique",
      demo: "https://expo.dev/@username/solar-app",
    },
    {
      titre: "Flutter Multi-App",
      description:
        "Application démonstration Flutter avec architecture propre et gestion d’état avancée.",
      technologies: ["Flutter", "Dart", "Bloc"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      github: "https://github.com/username/flutter-app",
      demo: "https://expo.dev/@username/flutter-demo",
    },
    {
      titre: "Outils Photovoltaïques",
      description:
        "Suite d’outils web pour dimensionnement et calcul de systèmes solaires.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1497436072909-f5e4be6c9d70?w=600&h=400&fit=crop",
      github: "https://github.com/username/outils-pv",
      demo: "https://pv-tools.vercel.app",
    },
    {
      titre: "Alumni Géolocalisation",
      description:
        "Plateforme pour localiser les anciens étudiants avec carte interactive.",
      technologies: ["React", "Leaflet", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?w=600&h=400&fit=crop",
      github: "https://github.com/username/alumni-geolocalisation",
      demo: "https://alumni-map.vercel.app",
    },
  ];

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600">
            Une sélection de mes réalisations web et mobile
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <motion.div
              key={projet.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {projet.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-blue-600"
                  >
                    <Github size={16} className="mr-1" /> Code
                  </a>

                  <a
                    href={projet.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm hover:text-blue-600"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}