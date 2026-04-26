// src/components/SkillsSection.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Server, Cpu, Palette, GitBranch } from "lucide-react";
import { useViewMode } from "../context/ViewModeContext";
import type { ViewMode } from "../context/ViewModeContext";

interface Tech {
  name: string;
  level: number; // 1–5
}

interface Skill {
  categorie: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  technologies: Tech[];
  modes: ViewMode[];
}

const competences: Skill[] = [
  {
    categorie: "Frontend",
    icon: <Code size={18} />,
    accent: "#3b82f6",
    description: "Interfaces modernes, réactives et accessibles.",
    technologies: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "Backend",
    icon: <Server size={18} />,
    accent: "#8b5cf6",
    description: "APIs robustes, architectures scalables, bases de données.",
    technologies: [
      { name: "Node.js / Express", level: 4 },
      { name: "NestJS", level: 4 },
      { name: "Java / Spring Boot", level: 4 },
      { name: "Python / Django", level: 3 },
      { name: "PHP / Laravel", level: 3 },
      { name: "PostgreSQL / MySQL", level: 4 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "Mobile",
    icon: <Smartphone size={18} />,
    accent: "#06b6d4",
    description: "Applications natives et cross-platform performantes.",
    technologies: [
      { name: "Flutter / Dart", level: 4 },
      { name: "React Native", level: 4 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "DevOps & Outils",
    icon: <GitBranch size={18} />,
    accent: "#10b981",
    description: "Conteneurisation, CI/CD, versioning, déploiement.",
    technologies: [
      { name: "Docker / Compose", level: 4 },
      { name: "Git / GitHub", level: 5 },
      { name: "Postman", level: 4 },
      { name: "Linux / Debian", level: 3 },
    ],
    modes: ["devops", "dev"],
  },
  {
    categorie: "Électronique",
    icon: <Cpu size={18} />,
    accent: "#f59e0b",
    description: "Systèmes embarqués, conception PCB, prototypage matériel.",
    technologies: [
      { name: "Arduino", level: 5 },
      { name: "Raspberry Pi", level: 4 },
      { name: "KiCad", level: 3 },
      { name: "Altium Designer", level: 3 },
    ],
    modes: ["electronique"],
  },
  {
    categorie: "Création digitale",
    icon: <Palette size={18} />,
    accent: "#ec4899",
    description: "Graphisme, motion design, montage vidéo, identité visuelle.",
    technologies: [
      { name: "Figma", level: 5 },
      { name: "Adobe Photoshop", level: 4 },
      { name: "Adobe Illustrator", level: 4 },
      { name: "Premiere Pro", level: 4 },
      { name: "After Effects", level: 3 },
      { name: "DaVinci Resolve", level: 4 },
    ],
    modes: ["digital"],
  },
];

function LevelDots({ level, accent }: { level: number; accent: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
          style={{
            background: i < level ? accent : "rgba(255,255,255,0.08)",
            boxShadow: i < level ? `0 0 6px ${accent}80` : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const { viewMode } = useViewMode();

  const visible = competences.filter(
    (c) => viewMode === "all" || c.modes.includes(viewMode)
  );

  return (
    <section
      id="competences"
      className="py-24"
      style={{ background: "#080c14" }}
    >
      <div className="max-w-6xl mx-auto px-6">

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
            Stack technique
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}
          >
            Compétences
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((comp, index) => (
              <motion.div
                key={comp.categorie}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-200"
                style={{
                  background: "#0d1420",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${comp.accent}44`;
                  el.style.boxShadow = `0 8px 40px ${comp.accent}10`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* En-tête catégorie */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${comp.accent}18` }}
                  >
                    <span style={{ color: comp.accent }}>{comp.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: "#e2e8f0" }}>
                      {comp.categorie}
                    </h3>
                    <p className="text-xs" style={{ color: "#475569" }}>
                      {comp.description}
                    </p>
                  </div>
                </div>

                {/* Séparateur */}
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                />

                {/* Liste des technos avec niveau */}
                <div className="flex flex-col gap-3">
                  {comp.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium" style={{ color: "#94a3b8" }}>
                        {tech.name}
                      </span>
                      <LevelDots level={tech.level} accent={comp.accent} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center mt-8 text-sm" style={{ color: "#334155" }}>
            Aucune compétence pour cette catégorie pour l'instant.
          </p>
        )}

        {/* Légende niveaux */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          {[
            { dots: 1, label: "Notions" },
            { dots: 3, label: "Intermédiaire" },
            { dots: 5, label: "Maîtrisé" },
          ].map(({ dots, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: i < dots ? "#6366f1" : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: "#475569" }}>{label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}