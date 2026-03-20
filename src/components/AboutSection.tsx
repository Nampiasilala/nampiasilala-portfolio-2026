import { motion } from "framer-motion";
import { Calendar, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Développeur passionné basé à Antananarivo, Madagascar, avec une
              expertise dans le développement web moderne. Je me spécialise dans
              la création d&apos;applications React/Next.js performantes et
              d&apos;APIs robustes qui résolvent des problèmes réels.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mon approche combine innovation technologique et compréhension des
              besoins locaux, créant des solutions digitales qui ont un impact
              positif sur la communauté malgache.
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>3+ ans d&apos;expérience</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} />
                <span>15+ projets réalisés</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Les autres composants continuent...
