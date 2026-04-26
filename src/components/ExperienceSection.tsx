// src/components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // Maintenant utilisé

const EXPERIENCES = [
  {
    year: "Nov 2025 - Présent",
    title: "Apprenti Ingénierie & Optimisation Core Network IN/VAS",
    org: "Yas Madagascar",
    desc: "Traitement de clients (APN Statique), support projet en tant que testeur, gestion des bases de données internes et suivi des capacités réseau[cite: 29, 31, 32, 33].",
  },
  {
    year: "Sept 2024 - Déc 2024",
    title: "Stagiaire en Dev Full-Stack",
    org: "SENDBAZAR Diego-Suarez",
    desc: "Participation active au développement de services en ligne et collaboration avec l'équipe technique pour la mise en œuvre de nouvelles fonctionnalités[cite: 34, 35, 37, 38].",
  },
  {
    year: "Nov 2023 - Jan 2024",
    title: "Stagiaire en Informatique",
    org: "DRCC Alaotra-Mangoro",
    desc: "Support informatique, gestion de données internes, administration de réseau local et assistance technique au centre TVM/RNM[cite: 39, 40, 41, 43, 44].",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="pb-20 relative overflow-hidden min-h-screen" style={{ background: "#0a0e1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête avec l'icône Briefcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: "#475569" }}>
            <Briefcase size={16} />
            Parcours professionnel
          </p>
          <h2 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}>
            Expériences
          </h2>
          <div className="mt-4 h-px w-16" style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }} />

          {EXPERIENCES.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full" style={{ background: "#6366f1", boxShadow: "0 0 10px rgba(99,102,241,0.6)" }} />

              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>
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
      </div>
    </section>
  );
}