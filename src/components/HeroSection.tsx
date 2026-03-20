import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  ChevronDown,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl">
              
              {/* ✅ Remplacement ici */}
              <img
                src="/images/1.jpg"
                alt="Photo de profil Nampiasilala"
                className="object-cover w-full h-full"
              />

            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            ANDRIATANKAFATRA{" "}
            <span className="gradient-text">Nampiasilala</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Développeur Full Stack passionné par la création d&apos;expérience
            web modernes
          </p>

          <div className="flex items-center justify-center gap-4 mb-8 text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Antananarivo, Madagascar</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee size={16} />
              <span>Disponible pour projets</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Me contacter
            </motion.a>

            <motion.a
              href="#projets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all shadow-lg"
            >
              Voir mes projets
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/nampiasilala"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nampiasilala"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nampiasilala@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}