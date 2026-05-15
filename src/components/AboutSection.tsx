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
    year: "2024 - 2025",
    title: "MASTER - STIC · Parcours Télécommunications et Réseaux",
    org: "Université d'Antsiranana | École Supérieure Polytechnique d'Antsiranana",
    desc: "Spécialisation en infrastructures réseaux, protocoles télécoms et optimisation mobile. Expertise approfondie en administration systèmes, sécurité et développement logiciel avancé.",
  },
  {
    year: "2022 - 2023",
    title: "LICENCE - GET · Parcours Électronique, Informatique et Technologie",
    org: "Université d'Antsiranana | École Supérieure Polytechnique d'Antsiranana",
    desc: "Formation transversale en électronique analogique/numérique, systèmes embarqués et informatique. Acquisition des bases en administration réseaux et programmation de bas niveau.",
  },
  {
    year: "2018 - 2019",
    title: "BACCALAUREAT - Série C",
    org: "Lycée RANOHAVIMANANA Norbert | Ambatondrazaka",
    desc: "Formation scientifique d'excellence avec une spécialisation en mathématiques et physique, posant les bases du raisonnement logique et de l'ingénierie.",
  },
];

const PILLARS = [
  {
    Icon: Code2,
    label: "Développement Fullstack",
    desc: "Web & Mobile, MERN, Next.js, Java Spring Boot, Django, NestJS, Flutter.",
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
    desc: "Docker & Conteneurisation, Pipelines CI/CD, Déploiement Cloud & Infrastructure.",
    accent: "#10b981",
  },
  {
    Icon: Terminal,
    label: "Administration système",
    desc: "Gestion de serveurs Linux, scripting Bash, Windows Server, Linux.",
    accent: "#a855f7",
  },
  {
    Icon: ShieldCheck,
    label: "Cybersécurité",
    desc: "Audit réseau, durcissement Linux (Kali) et sécurisation des déploiements applicatifs.",
    accent: "#ef4444",
  },
  {
    Icon: Wifi,
    label: "Réseaux et Télécoms",
    desc: "Architecture réseau, protocoles, 3GPP, VLAN, VRF, IPV4, IPV6, Ingénierie & Optimisation Core Network.",
    accent: "#eab308",
  },
  {
    Icon: Palette,
    label: "Création digitale",
    desc: "Graphisme, montage vidéo, Création contenu digital.",
    accent: "#ec4899",
  },
];

const STATS = [
  { value: "9+", label: "Projets livrés" },
  { value: "4+", label: "Domaines" },
  { value: "2025", label: "Diplômé" },
  { value: "∞", label: "Curiosité" },
];

const LANGUAGES = [
  { name: "Malagasy", level: "Natif", percent: 100, accent: "#10b981" },
  { name: "Français", level: "B2", percent: 72, accent: "#6366f1" },
  { name: "Anglais", level: "A2", percent: 28, accent: "#f59e0b" },
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
        style={{
          background:
            "linear-gradient(to bottom, transparent, #6366f1, transparent)",
        }}
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
            style={{
              background: "linear-gradient(90deg, #6366f1, transparent)",
            }}
          />
        </motion.div>

        {/* ── Layout principal : texte + timeline ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Texte + stats + langues */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#94a3b8" }}
            >
              Ingénieur passionné de{" "}
              <strong style={{ color: "#e2e8f0" }}>24 ans</strong>, diplômé de
              l'École Supérieure Polytechnique d'Antsiranana en{" "}
              <strong style={{ color: "#e2e8f0" }}>
                Télécommunications et Réseaux
              </strong>. Mon expertise couvre l'intégralité du cycle
              technique, des infrastructures réseaux critiques au développement
              applicatif.
            </p>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#94a3b8" }}
            >
              Ma force réside dans ma polyvalence : je maîtrise aussi bien le{" "}
              <span style={{ color: "#60a5fa" }}>hardware</span> (systèmes
              embarqués, électronique de puissance, IoT) que le{" "}
              <span style={{ color: "#818cf8" }}>software</span> (Full-Stack,
              Mobile, DevOps). Cette approche globale me permet de
              concevoir des solutions robustes, de la couche physique jusqu'au
              déploiement Cloud.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#94a3b8" }}
            >
              Rigoureux et orienté résultats, je m'engage à fournir{" "}
              <em style={{ color: "#e2e8f0" }}>
                une architecture propre, une expérience utilisateur fluide et
                des systèmes hautement disponibles
              </em>. Je suis actuellement ouvert à des opportunités
              en CDI, freelance ou projets à dimension internationale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-6">
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
                  <p className="text-xs mt-1" style={{ color: "#475569" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Localisation + dispo */}
            <div className="flex flex-wrap gap-3 mb-8">
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

            {/* ── Langues ── */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
                style={{ color: "#475569" }}
              >
                Langues
              </p>
              <div className="space-y-4">
                {LANGUAGES.map(({ name, level, percent, accent }) => (
                  <div key={name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#e2e8f0" }}
                      >
                        {name}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${accent}20`,
                          color: accent,
                          border: `1px solid ${accent}33`,
                        }}
                      >
                        {level}
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline parcours académique */}
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
              Parcours académique
            </p>

            <div className="relative pl-6">
              {/* Ligne verticale */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #6366f1, transparent)",
                }}
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
                    <h4
                      className="font-bold text-sm mb-0.5"
                      style={{ color: "#e2e8f0" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs mb-2" style={{ color: "#6366f1" }}>
                      {item.org}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#64748b" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Piliers de compétences ── */}
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
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = `${accent}44`;
                  el.style.background = `${accent}08`;
                }}
                onMouseLeave={(e) => {
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
                <p
                  className="font-bold text-sm mb-1.5"
                  style={{ color: "#e2e8f0" }}
                >
                  {label}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#64748b" }}
                >
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
