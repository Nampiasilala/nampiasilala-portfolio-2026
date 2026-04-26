// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDownRight, Sparkles } from "lucide-react";

const TAGS = [
  "Développement Fullstack",
  "Électronique",
  "Systèmes embarqués",
  "DevOps",
  "Administration système",
  "Cybersécurité",
  "Réseaux et Télécoms",
  "Création digitale",
];

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f1623 50%, #0a0e1a 100%)" }}
    >
      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Halo lumineux — limité à 100vw pour éviter le scroll horizontal */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        style={{
          width: "min(600px, 100vw)",
          height: "min(600px, 100vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Conteneur — padding top élevé pour laisser place à la navbar fixe */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* ══════════════════════════════════════════
              PHOTO — en premier sur mobile (order-first),
              à droite sur desktop (order-last)
          ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4 shrink-0 order-first lg:order-last"
          >
            {/* Photo — taille fluide entre 140px (petit Android) et 224px (desktop) */}
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{
                  width:  "clamp(140px, 38vw, 224px)",
                  height: "clamp(140px, 38vw, 224px)",
                  borderRadius: "20px",
                  border: "2px solid rgba(99,102,241,0.3)",
                  boxShadow: "0 0 50px rgba(99,102,241,0.15), 0 16px 32px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src="/images/1.jpg"
                  alt="Nampiasilala Andriatankafatra"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Badge école — centré sous la photo sur mobile, en bas-droite sur desktop */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-3 whitespace-nowrap px-2.5 py-1.5 rounded-xl font-bold"
                style={{
                  fontSize: "clamp(9px, 2.2vw, 11px)",
                  background: "linear-gradient(135deg, #1e3a5f, #1e2d4f)",
                  border: "1px solid rgba(99,162,246,0.3)",
                  color: "#93c5fd",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                }}
              >
                Ing. STIC · ESP Antsiranana
              </div>
            </div>

            {/* Stats — 4 colonnes sur mobile pour tenir dans la largeur */}
            <div
              className="grid grid-cols-4 lg:grid-cols-2 gap-2 mt-6"
              style={{ width: "clamp(300px, 80vw, 224px)" }}
            >
              {[
                { value: "7+",   label: "Projets" },
                { value: "4",    label: "Domaines" },
                { value: "2025", label: "Diplômé" },
                { value: "∞",    label: "Curiosité" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-2 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="font-black leading-tight"
                    style={{
                      fontSize: "clamp(13px, 3.8vw, 20px)",
                      background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(9px, 2vw, 11px)",
                      color: "#64748b",
                      marginTop: "2px",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════
              TEXTE — centré sur mobile, aligné gauche desktop
          ══════════════════════════════════════════ */}
          <div className="flex-1 text-center lg:text-left w-full min-w-0">

            {/* Badge disponibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border font-medium"
              style={{
                fontSize: "clamp(10px, 2.8vw, 13px)",
                borderColor: "rgba(59,130,246,0.4)",
                background: "rgba(59,130,246,0.08)",
                color: "#93c5fd",
                maxWidth: "100%",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-green-400 shrink-0"
                style={{ boxShadow: "0 0 8px #4ade80" }}
              />
              <Sparkles size={12} className="shrink-0" />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                Disponible pour de nouvelles opportunités
              </span>
            </motion.div>

            {/* Nom — taille fluide, word-break pour éviter le débordement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p
                className="font-semibold uppercase mb-2"
                style={{
                  fontSize: "clamp(9px, 2.5vw, 13px)",
                  letterSpacing: "0.2em",
                  color: "#64748b",
                }}
              >
                Ingénieur · 24 ans · Madagascar
              </p>

              <h1
                className="font-black leading-[1] mb-1 tracking-tighter"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  // 14px min (pour les tout petits écrans), 4.5vw (croissance très lente), 36px max (pour ne pas dominer)
                  fontSize: "clamp(14px, 4.5vw, 36px)", 
                  letterSpacing: "-0.02em", // Réduit l'espace entre les lettres
                  color: "#f1f5f9",
                  wordBreak: "break-word", // Force le passage à la ligne si vraiment nécessaire
                }}
              >
                ANDRIATANKAFATRA
              </h1>
              <h2
                className="font-black leading-[1] mb-6 tracking-tighter"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(14px, 4.5vw, 36px)",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  wordBreak: "break-word",
                }}
              >
                Nampiasilala
              </h2>
            </motion.div>

            {/* Accroche */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="leading-relaxed mb-6 mx-auto lg:mx-0 max-w-xl"
              style={{
                fontSize: "clamp(12px, 3.5vw, 17px)",
                color: "#94a3b8",
              }}
            >
              Ingénieur polyvalent formé à l’ESP Antsiranana, je crée des solutions techniques complètes, de l’électronique embarquée aux applications web modernes, en passant par le DevOps et la création digitale.
              Je transforme des idées complexes en produits simples, fiables et efficaces.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-7 justify-center lg:justify-start"
            >
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    fontSize: "clamp(9px, 2.5vw, 12px)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#cbd5e1",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA — boutons taille fluide, jamais plus larges que l'écran */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full font-semibold"
                style={{
                  padding: "clamp(10px, 2.5vw, 14px) clamp(18px, 5vw, 28px)",
                  fontSize: "clamp(12px, 3vw, 14px)",
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}
              >
                Me contacter
                <ArrowDownRight size={14} />
              </motion.a>
              <motion.a
                href="#projets"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full font-semibold"
                style={{
                  padding: "clamp(10px, 2.5vw, 14px) clamp(18px, 5vw, 28px)",
                  fontSize: "clamp(12px, 3vw, 14px)",
                  border: "1.5px solid rgba(99,102,241,0.5)",
                  color: "#a5b4fc",
                  background: "rgba(99,102,241,0.07)",
                }}
              >
                Voir mes projets
              </motion.a>
            </motion.div>

            {/* Réseaux + localisation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 justify-center lg:justify-start flex-wrap"
            >
              {[
                { href: "https://github.com/nampiasilala",      Icon: Github,   label: "GitHub" },
                { href: "https://linkedin.com/in/nampiasilala", Icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:nampiasilala@gmail.com",        Icon: Mail,     label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#94a3b8",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(99,102,241,0.6)";
                    el.style.color = "#a5b4fc";
                    el.style.background = "rgba(99,102,241,0.12)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "#94a3b8";
                    el.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}

              <span
                className="flex items-center gap-1.5"
                style={{
                  fontSize: "clamp(10px, 2.5vw, 12px)",
                  color: "#475569",
                }}
              >
                <MapPin size={11} />
                Antananarivo, Madagascar
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "#334155" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "10px" }}>
          Scroll
        </span>
        <ArrowDownRight size={14} />
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
    </section>
  );
}