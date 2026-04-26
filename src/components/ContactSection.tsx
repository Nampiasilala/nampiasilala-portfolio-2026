// src/components/ContactSection.tsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Zap, Clock } from "lucide-react";
import { useState } from "react";

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/nampiasilala",
    href: "https://github.com/nampiasilala",
    Icon: Github,
    accent: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nampiasilala",
    href: "https://linkedin.com/in/nampiasilala",
    Icon: Linkedin,
    accent: "#60a5fa",
  },
  {
    label: "Email",
    value: "nampiasilala@gmail.com",
    href: "mailto:nampiasilala@gmail.com",
    Icon: Mail,
    accent: "#818cf8",
  },
];

const AVAILABILITIES = [
  { Icon: Zap,   text: "Disponible immédiatement" },
  { Icon: Clock, text: "Réponse sous 24h" },
  { Icon: MapPin, text: "Remote · Madagascar" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Ouvre le client mail avec les données pré-remplies
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Bonjour Nampiasilala,\n\n${form.message}\n\n---\n${form.name}\n${form.email}`
    );
    window.open(`mailto:nampiasilala@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "13px",
    color: "#e2e8f0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Halo décoratif */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

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
            Collaboration
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black"
            style={{ fontFamily: "'Syne', sans-serif", color: "#f1f5f9" }}
          >
            Travaillons ensemble
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
          />
        </motion.div>

        {/* Layout 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Colonne gauche : infos ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#94a3b8" }}>
                Vous avez un projet web, mobile, électronique ou une idée à concrétiser ?
                Je suis disponible pour des missions en{" "}
                <span style={{ color: "#a5b4fc" }}>CDI, freelance ou collaboration
                internationale</span>.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                Que ce soit pour développer une application de zéro, intégrer un système
                embarqué ou refondre votre identité visuelle — discutons-en.
              </p>
            </div>

            {/* Disponibilités */}
            <div className="flex flex-col gap-3">
              {AVAILABILITIES.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                  >
                    <Icon size={14} style={{ color: "#818cf8" }} />
                  </div>
                  <span className="text-sm" style={{ color: "#94a3b8" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Liens sociaux */}
            <div className="flex flex-col gap-3">
              {LINKS.map(({ label, value, href, Icon, accent }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = `${accent}44`;
                    el.style.background = `${accent}08`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.background = "rgba(255,255,255,0.025)";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon size={16} style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#475569" }}>
                      {label}
                    </p>
                    <p className="text-sm" style={{ color: "#94a3b8" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Colonne droite : formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#0d1420",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3
                className="text-lg font-bold mb-6"
                style={{ color: "#f1f5f9" }}
              >
                Envoyer un message
              </h3>

              <div className="flex flex-col gap-4">
                {/* Nom */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: "#475569" }}>
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: "#475569" }}>
                    Votre email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jean@example.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-widest" style={{ color: "#475569" }}>
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                {/* Bouton */}
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    background: sent
                      ? "rgba(16,185,129,0.15)"
                      : "linear-gradient(135deg, #3b82f6, #6366f1)",
                    color: sent ? "#6ee7b7" : "#fff",
                    border: sent ? "1px solid rgba(16,185,129,0.3)" : "none",
                    boxShadow: sent ? "none" : "0 4px 24px rgba(99,102,241,0.3)",
                  }}
                >
                  {sent ? (
                    "✓ Message prêt à envoyer !"
                  ) : (
                    <>
                      <Send size={14} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center" style={{ color: "#334155" }}>
                  Ouvre votre client mail avec le message pré-rempli.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
        input::placeholder, textarea::placeholder {
          color: #334155;
        }
      `}</style>
    </section>
  );
}