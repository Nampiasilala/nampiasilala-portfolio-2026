// src/components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { Briefcase, Users, Award } from "lucide-react";

const EXPERIENCES = [
  {
    year: "Nov 2025 - Présent",
    title: "Apprenti Ingénierie & Optimisation Core Network IN/VAS",
    org: "Yas Madagascar | Antananarivo",
    desc: "Supervision et optimisation des performances du cœur de réseau (Core Network). Gestion des configurations clients (APN, IPBX, DI), diagnostic d'incidents data et suivi des capacités d'infrastructure. Support technique aux phases de validation et mise à jour des bases de données internes.",
  },
  {
    year: "Sept 2024 - Déc 2024",
    title: "Stagiaire en Dev Full-Stack",
    org: "SENDBAZAR Diego-Suarez | Antsiranana",
    desc: "Développement et maintenance d'applications web modernes. Mise en œuvre de nouvelles fonctionnalités en collaboration étroite avec l'équipe technique et participation aux phases de test et validation. Utilisation de Git pour le versioning et l'organisation du workflow de développement.",
  },
  {
    year: "Nov 2023 - Jan 2024",
    title: "Stagiaire en Informatique",
    org: "DRCC Alaotra-Mangoro | Ambatondrazaka",
    desc: "Assistance technique et support informatique aux utilisateurs. Initiation à l'administration de réseaux locaux et appui opérationnel aux techniciens du centre technique TVM/RNM.",
  },
];

const ENGAGEMENTS = [
  {
    year: "2022 – 2023",
    role: "Président de l'Association GAONA",
    org: "Université d'Antsiranana | Groupement des Étudiants d'Alaotra-Mangoro",
    location: "Antsiranana",
    bullets: [
      "Direction des activités de l’association, avec développement des compétences en communication, leadership et prise de décision.",
      "Représentation des étudiants auprès des instances universitaires et participation à la défense de leurs intérêts.",
    ],
    accent: "#8b5cf6",
  },
];

const TRAININGS = [
  {
    title: "Diplôme d'Études en Langue Française - DELF B2",
    org: "Alliance Française d'Antsiranana",
    dates: "2025",
    accent: "#6366f1",
  },
  {
    title: "Diplôme d'Études en Langue Française - DELF B1",
    org: "Alliance Française d'Antsiranana",
    dates: "2022",
    accent: "#6366f1",
  },
  {
    title: "Leadership & Développement Personnel",
    org: "Jeunes Parlementaires Diana",
    dates: "2022",
    detail: "Formation certifiante sur l'intelligence émotionnelle et le leadership de groupe.",
    accent: "#ec4899",
  },
  {
    title: "Certification Bureautique",
    org: "Conseil Communal de la Jeunesse Antsiranana I",
    dates: "2021",
    detail: "Maîtrise avancée des outils de productivité et de communication.",
    accent: "#10b981",
  },
];

// ─── Sous-composant : en-tête de bloc ────────────────────────────────────────
function BlockHeader({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <span
        className="flex items-center justify-center w-7 h-7 rounded-lg"
        style={{ background: "rgba(99,102,241,0.12)", color: "#6366f1" }}
      >
        {icon}
      </span>
      <p
        className="text-xs font-semibold uppercase tracking-[0.25em]"
        style={{ color: "#475569" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="pb-24 pt-4 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── En-tête principal ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] mb-3"
            style={{ color: "#475569" }}
          >
            <Briefcase size={16} />
            Parcours professionnel
          </p>
          <h2
            className="text-2xl sm:text-3xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}
          >
            Expériences
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* ── Timeline expériences pro ── */}
        <div className="relative pl-6 mb-24">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #6366f1, transparent)" }}
          />
          {EXPERIENCES.map((item, i) => (
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
                style={{ background: "#6366f1", boxShadow: "0 0 10px rgba(99,102,241,0.6)" }}
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
                  style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}
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

        {/* ── Séparateur ── */}
        <div
          className="h-px mb-24"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }}
        />

        {/* ── Engagement + Formations : 2 colonnes ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Colonne gauche : Engagement associatif */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BlockHeader icon={<Users size={14} />} label="Engagement associatif" />

            {/* Même structure timeline que les expériences pro */}
            <div className="relative pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #8b5cf6, transparent)" }}
              />
              {ENGAGEMENTS.map((e, i) => (
                <motion.div
                  key={e.org}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Point sur la ligne — couleur accent */}
                  <div
                    className="absolute -left-[25px] top-1 w-3 h-3 rounded-full"
                    style={{ background: e.accent, boxShadow: `0 0 10px ${e.accent}99` }}
                  />
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Badge année sur sa propre ligne */}
                    <div className="mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${e.accent}20`, color: e.accent }}
                      >
                        {e.year}
                      </span>
                    </div>
                    {/* Rôle = h4 blanc, comme item.title dans les expériences */}
                    <h4 className="font-bold text-sm mb-0.5" style={{ color: "#e2e8f0" }}>
                      {e.role}
                    </h4>
                    {/* Organisation en accent, comme item.org */}
                    <p className="text-xs mb-0.5" style={{ color: e.accent }}>
                      {e.org}
                    </p>
                    {/* Lieu en gris, comme item.desc */}
                    {e.location && (
                      <p className="text-xs mb-3" style={{ color: "#475569" }}>
                        {e.location}
                      </p>
                    )}
                    {/* Bullets */}
                    <ul className="space-y-1.5 mt-1">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs leading-relaxed"
                          style={{ color: "#64748b" }}
                        >
                          <span className="mt-0.5 shrink-0" style={{ color: e.accent }}>▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite : Formations associatives */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <BlockHeader icon={<Award size={14} />} label="Formations associatives" />

            <div className="relative pl-5">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #6366f133, transparent)" }}
              />
              {TRAININGS.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-6 last:pb-0"
                >
                  <div
                    className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: t.accent, boxShadow: `0 0 8px ${t.accent}88` }}
                  />
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-sm font-semibold leading-snug mb-1" style={{ color: "#e2e8f0" }}>
                      {t.title}
                    </p>
                    <p className="text-xs font-medium" style={{ color: t.accent }}>
                      {t.org}
                    </p>
                    {t.dates && (
                      <p className="text-xs mt-1.5" style={{ color: "#334155" }}>
                        {t.dates}
                      </p>
                    )}
                    {t.detail && (
                      <p className="text-xs mt-1.5 italic leading-relaxed" style={{ color: "#475569" }}>
                        {t.detail}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}