// src/components/SkillsSection.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Server, 
  Cpu, 
  Palette, 
  GitBranch,
  Terminal,
  ShieldCheck,
  Wifi
} from "lucide-react";
import { useViewMode } from "../context/ViewModeContext";

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
  modes: string[]; // Utilisation de string pour correspondre au type ViewMode
}

const competences: Skill[] = [
  {
    categorie: "Frontend",
    icon: <Code size={18} />,
    accent: "#3b82f6",
    description: "Interfaces modernes, réactives et accessibles.",
    technologies: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "Backend",
    icon: <Server size={18} />,
    accent: "#8b5cf6",
    description: "APIs robustes, architectures scalables.",
    technologies: [
      { name: "Node.js / NestJS", level: 4 },
      { name: "Java / Spring Boot", level: 4 },
      { name: "Python / Django", level: 3 },
      { name: "PostgreSQL", level: 4 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "Mobile",
    icon: <Smartphone size={18} />,
    accent: "#06b6d4",
    description: "Applications natives et cross-platform.",
    technologies: [
      { name: "Flutter / Dart", level: 4 },
      { name: "React Native", level: 4 },
    ],
    modes: ["dev"],
  },
  {
    categorie: "DevOps",
    icon: <GitBranch size={18} />,
    accent: "#10b981",
    description: "Conteneurisation, CI/CD, déploiement.",
    technologies: [
      { name: "Docker / Kubernetes", level: 4 },
      { name: "Git / GitHub Actions", level: 5 },
      { name: "Postman", level: 4 },
    ],
    modes: ["devops"],
  },
  {
    categorie: "Administration système",
    icon: <Terminal size={18} />,
    accent: "#a855f7",
    description: "Gestion serveurs, scripting et automatisation.",
    technologies: [
      { name: "Linux (Debian/Ubuntu)", level: 5 },
      { name: "Bash Scripting", level: 4 },
      { name: "Nginx / Apache", level: 4 },
      { name: "SSH & Hardening", level: 4 },
    ],
    modes: ["admin"],
  },
  {
    categorie: "Cybersécurité",
    icon: <ShieldCheck size={18} />,
    accent: "#ef4444",
    description: "Audit, sécurité applicative et réseau.",
    technologies: [
      { name: "OWASP Top 10", level: 4 },
      { name: "Wireshark / Nmap", level: 3 },
      { name: "Cryptographie", level: 3 },
    ],
    modes: ["cyber"],
  },
  {
    categorie: "Réseaux et Télécoms",
    icon: <Wifi size={18} />,
    accent: "#eab308",
    description: "Architecture, protocoles et infrastructures.",
    technologies: [
      { name: "TCP/IP & OSPF/BGP", level: 4 },
      { name: "SIP / IMS (VoIP)", level: 4 },
      { name: "Fibre Optique", level: 3 },
      { name: "Cisco Packet Tracer", level: 4 },
    ],
    modes: ["reseaux"],
  },
  {
    categorie: "Électronique",
    icon: <Cpu size={18} />,
    accent: "#f59e0b",
    description: "Systèmes embarqués, conception PCB.",
    technologies: [
      { name: "Arduino / ESP32", level: 5 },
      { name: "Raspberry Pi", level: 4 },
      { name: "KiCad / Altium", level: 3 },
    ],
    modes: ["electronique"],
  },
  {
    categorie: "Création digitale",
    icon: <Palette size={18} />,
    accent: "#ec4899",
    description: "Graphisme, UI/UX, montage vidéo.",
    technologies: [
      { name: "Figma", level: 5 },
      { name: "Adobe Suite", level: 4 },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#475569" }}>
            Stack technique
          </p>
          <h2 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}>
            Compétences
          </h2>
          <div className="mt-4 h-px w-16" style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }} />
        </motion.div>

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
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${comp.accent}18` }}>
                    <span style={{ color: comp.accent }}>{comp.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: "#e2e8f0" }}>{comp.categorie}</h3>
                    <p className="text-xs" style={{ color: "#475569" }}>{comp.description}</p>
                  </div>
                </div>
                <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                <div className="flex flex-col gap-3">
                  {comp.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium" style={{ color: "#94a3b8" }}>{tech.name}</span>
                      <LevelDots level={tech.level} accent={comp.accent} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center mt-8 text-sm" style={{ color: "#334155" }}>Aucune compétence pour cette catégorie.</p>
        )}
      </div>
    </section>
  );
}