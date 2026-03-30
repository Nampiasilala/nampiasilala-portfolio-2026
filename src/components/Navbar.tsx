import { motion } from "framer-motion";

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

export default function Navbar({ activeSection, isScrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl text-gray-900"
          >
            Portfolio DEV
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["accueil", "apropos", "competences", "projets", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item === "apropos"
                    ? "À propos"
                    : item === "competences"
                    ? "Compétences"
                    : item}
                </a>
              )
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}