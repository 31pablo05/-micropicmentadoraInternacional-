import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="curso" className="relative w-full overflow-hidden">
      
      {/* Imagen de fondo ocupando la pantalla completa */}
      <div className="relative h-screen w-full">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/soyflavia.jpg"
          alt="Flavia Fernández"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Contenido separado debajo de la imagen */}
      <div className="w-full bg-white py-16 text-center flex flex-col items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[#d4af37]"
        >
          Certificación Internacional en Micropigmentación con Flavia Fernández
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-8 font-semibold text-[#222]"
        >
          Embajadora oficial de Menela Brasil 🇧🇷 | Avalado por 🇧🇷🇺🇸🇦🇷
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 px-10 py-3 text-lg font-semibold rounded-full border-2 border-[#d4af37] bg-transparent text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition duration-300 ease-in-out shadow-md"
        >
          Reservá tu lugar ahora
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
