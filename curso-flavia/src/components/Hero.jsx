import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="curso" className="relative w-full overflow-hidden">
      <div className="relative h-screen w-full flex flex-col md:flex-row">

        {/* Imagen de Flavia entrando desde la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center"
        >
          <img
            src="/images/soyflavia.jpg"
            alt="Flavia Fernández"
            className="w-[90%] h-[90%] object-cover shadow-2xl rounded-xl"
          />
        </motion.div>

        {/* Logo entrando desde la derecha */}
        <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
  className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center"
>
<motion.img
  src="/images/LOGO ROSEGOLD.png"
  alt="Logo MyBeautyStudy"
  className="max-w-[80%] max-h-[80%] object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] shadow-[0_10px_25px_rgba(212,175,55,0.4)]"

  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
/>

</motion.div>

      </div>

      {/* Texto y botón debajo */}
      <div className="w-full bg-white py-16 text-center flex flex-col items-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[#d4af37]"
        >
          Certificación Internacional en Micropigmentación con Flavia Fernández
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
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
