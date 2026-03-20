import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour
            en discuter !
          </p>

          <motion.a
            href="mailto:nampiasilala@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg text-lg"
          >
            <Mail className="mr-3" size={20} />
            Me contacter
          </motion.a>

          <div className="flex justify-center space-x-8 mt-12">
            <a
              href="https://github.com/nampiasilala"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/nampiasilala"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
