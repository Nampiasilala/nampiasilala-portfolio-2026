// src/components/AboutSection.tsx
import { motion } from "framer-motion";
import {
  GraduationCap,
  Cpu,
  Globe,
  Zap,
  Code2,
  Palette,
  Server,
  Terminal,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const TIMELINE = [
  {
    year: "2025",
    title: "Master — STIC · Parcours Télécoms & Réseaux",
    org: "École Supérieure Polytechnique d'Antsiranana",
    desc: "Spécialisation en télécommunications, réseaux, systèmes embarqués et développement logiciel avancé.",
  },
  {
    year: "2023",
    title: "Licence — Électronique, Informatique & Technologie",
    org: "École Supérieure Polytechnique d'Antsiranana",
    desc: "Fondations solides en électronique analogique/numérique, programmation embarquée et systèmes.",
  },

  {
    year: "2019",
    title: "Baccalauréat — Série C",
    org: "Lycée RANOHAVIMANANA Norbert",
    desc: "Base scientifique solide, introduction à la physique, mathématiques et informatique.",
  },
];

const PILLARS = [
  {
    Icon: Code2,
    label: "Développement Fullstack",
    desc: "Web & Mobile, MERN, Next.js, Spring Boot.",
    accent: "#3b82f6",
  },
  {
    Icon: Cpu,
    label: "Électronique",
    desc: "Systèmes embarqués, Arduino, conception PCB.",
    accent: "#f59e0b",
  },
  {
    Icon: Server,
    label: "DevOps",
    desc: "Docker, pipelines CI/CD, déploiement Cloud.",
    accent: "#10b981",
  },
  {
    Icon: Terminal,
    label: "Administration système",
    desc: "Gestion de serveurs Linux, scripting Bash.",
    accent: "#a855f7",
  },
  {
    Icon: ShieldCheck,
    label: "Cybersécurité",
    desc: "Audit de sécurité, hardening, réseaux.",
    accent: "#ef4444",
  },
  {
    Icon: Wifi,
    label: "Réseaux et Télécoms",
    desc: "Architecture réseau, protocoles, fibre optique.",
    accent: "#eab308",
  },
  {
    Icon: Palette,
    label: "Création digitale",
    desc: "Graphisme, montage vidéo, Motion Design.",
    accent: "#ec4899",
  },
];

const STATS = [
  { value: "7+", label: "Projets livrés" },
  { value: "4", label: "Domaines" },
  { value: "2025", label: "Diplômé" },
  { value: "∞", label: "Curiosité" },
];

export default function AboutSection() {
  return (
    <section
      id="apropos"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Ligne déco verticale gauche */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── En-tête ── */}
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
            Qui suis-je
          </p>
          <h2
            className="text-2xl sm:text-3xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}
          >
            À propos de moi
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* ── Layout principal : texte + timeline ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              Jeune ingénieur de <strong style={{ color: "#e2e8f0" }}>24 ans</strong>, diplômé de
              l'École Supérieure Polytechnique d'Antsiranana en{" "}
              <strong style={{ color: "#e2e8f0" }}>Sciences et Technologies de l'Information
              et de la Communication</strong>, parcours Télécommunications & Réseaux.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              Ma particularité : je suis à l'aise aussi bien côté{" "}
              <span style={{ color: "#60a5fa" }}>hardware</span> (électronique, systèmes embarqués,
              conception PCB) que côté{" "}
              <span style={{ color: "#818cf8" }}>software</span> (web, mobile, DevOps).
              Cette double compétence me permet de concevoir des solutions techniques complètes,
              de la carte électronique jusqu'au tableau de bord web.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Curieux, autonome et orienté résultats, je m'engage dans chaque projet avec
              la même exigence : <em style={{ color: "#e2e8f0" }}>du code propre, une UX soignée
              et une livraison fiable</em>. Je suis actuellement ouvert à des opportunités
              en CDI, freelance ou collaboration internationale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#475569" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Localisation + dispo */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  color: "#a5b4fc",
                }}
              >
                <Globe size={12} />
                Antananarivo, Madagascar
              </span>
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  color: "#6ee7b7",
                }}
              >
                <Zap size={12} />
                Disponible : CDI / Freelance / Remote
              </span>
            </div>
          </motion.div>

          {/* Timeline parcours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <p
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ color: "#475569" }}
            >
              <GraduationCap size={14} />
              Parcours
            </p>

            <div className="relative pl-6">
              {/* Ligne verticale */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Point sur la ligne */}
                  <div
                    className="absolute -left-[25px] top-1 w-3 h-3 rounded-full"
                    style={{
                      background: "#6366f1",
                      boxShadow: "0 0 10px rgba(99,102,241,0.6)",
                    }}
                  />

                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        color: "#818cf8",
                      }}
                    >
                      {item.year}
                    </span>
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: "#e2e8f0" }}>
                      {item.title}
                    </h4>
                    <p className="text-xs mb-2" style={{ color: "#6366f1" }}>
                      {item.org}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 4 piliers de compétences ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6 text-center"
            style={{ color: "#475569" }}
          >
            Mes expertises techniques
          </p>
          {/* Ajustement du grid pour accueillir 7 éléments de façon fluide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PILLARS.map(({ Icon, label, desc, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-5 group transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${accent}44`;
                  el.style.background = `${accent}08`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${accent}18` }}
                >
                  <Icon size={17} style={{ color: accent }} />
                </div>
                <p className="font-bold text-sm mb-1.5" style={{ color: "#e2e8f0" }}>
                  {label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}