import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Server } from "lucide-react";

interface Skill {
  categorie: string;
  icon: React.ReactNode;
  technologies: string[];
}

export default function SkillsSection() {
  const competences: Skill[] = [
    {
      categorie: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      categorie: "Backend",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "NestJS", "Java", "Spring Boot", "PHP", "Laravel", "Django"],
    },
    {
      categorie: "Mobile & Cloud",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Flutter", "Dart"],
    },
    {
      categorie: "DevOps & Outils",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Docker", "Docker Compose", "Docker Hub", "Git", "GitHub", "Postman", "Visual Studio Code", "Debian"],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que j&apos;utilise pour créer des expériences
            exceptionnelles
          </p>
        </motion.div>

        {/* 👇 Grille adaptée pour 4 catégories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competences.map((comp, index) => (
            <motion.div
              key={comp.categorie}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{comp.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {comp.categorie}
              </h3>
              <div className="flex flex-wrap gap-2">
                {comp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
