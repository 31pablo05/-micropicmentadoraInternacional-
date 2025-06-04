import { motion } from "framer-motion";

const Hero = () => {
  const melinaWhatsApp = "5492804034308";
  const mensaje = "Hola Melina, quiero reservar mi lugar en el curso.";

  const whatsappUrl = `https://wa.me/${melinaWhatsApp}?text=${encodeURIComponent(mensaje)}`;

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
            src="/images/flavia1.jpeg"
            alt="Flavia Fernández"
            className="w-[90%] h-[90%] object-cover shadow-2xl rounded-xl"
          />
        </motion.div>

        {/* Logo entrando desde la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center relative px-4"
        >
          {/* Título de presentación animado */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center text-xl sm:text-2xl md:text-4xl font-semibold mb-6 text-[#1f1f1f] leading-snug drop-shadow-md px-4 sm:px-6"
          >
            Te damos la bienvenida a una experiencia de excelencia junto a{" "}
            <span className="block text-[#d4af37] font-extrabold text-2xl sm:text-3xl md:text-5xl mt-2">
              Flavia Fernandes
            </span>
            <span className="block text-sm sm:text-base md:text-lg font-medium text-[#555] mt-2">
              presentada por My Beauty Study
            </span>
          </motion.h2>

          {/* Logo animado */}
          <motion.img
            src="/images/LOGO ROSEGOLD.png"
            alt="Logo MyBeautyStudy"
            className="max-w-[60%] md:max-w-[50%] max-h-[80%] object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] shadow-[0_10px_25px_rgba(212,175,55,0.4)]"
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
          Certificación Internacional en Micropigmentación con Flavia Fernándes
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
          onClick={() => window.open(whatsappUrl, "_blank")}
        >
          Reservá tu lugar ahora
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
