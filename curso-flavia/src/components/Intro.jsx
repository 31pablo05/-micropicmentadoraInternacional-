import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center px-4 py-24 md:px-8 bg-no-repeat bg-cover bg-top"
      style={{ backgroundImage: "url('/images/meli.jpeg')" }}
    >
      {/* Capa oscura con blur para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl space-y-6 text-left md:text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Bienvenidos a <span className="text-[#d4af37]">MyBeautyStudy</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          ¡Hola! Soy <strong className="text-[#d4af37]">Melina Yancan</strong>, y te doy la bienvenida a <strong className="text-[#d4af37]">MyBeautyStudy</strong>, un espacio creado con amor para formar, inspirar y elevar la estética a su máximo nivel.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Hoy tengo el honor de presentarles a una profesional increíble: <strong className="text-[#d4af37]">Flavia Fernándes</strong>, referente internacional en micropigmentación y embajadora oficial de Menela Brasil. 
          Te invito a conocerla y a vivir una experiencia única de formación junto a nosotras.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
