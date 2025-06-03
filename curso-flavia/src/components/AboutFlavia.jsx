import { motion } from "framer-motion";

const AboutFlavia = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-7xl mx-auto text-[#1f1f1f]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Video animado en lugar de imagen */}
      <motion.video
        src="/videos/soyflavia2.mp4"  // Cambia la ruta al archivo correcto
      className="w-[280px] md:w-[320px] h-[420px] rounded-xl object-cover shadow-xl hover:shadow-[0_0_20px_#d4af37] transition-all duration-500"
  autoPlay
  loop
  muted
  playsInline
  whileHover={{ scale: 1.03 }}
  transition={{ type: "spring", stiffness: 200 }}
/>

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="hover:scale-[1.01] transition-transform duration-300"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 underline decoration-[#d4af37] underline-offset-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Conocé a Flavia Fernández
        </motion.h2>

        <motion.p
          className="mb-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Flavia Fernández es una reconocida profesional de la belleza con certificaciones internacionales en Brasil, Estados Unidos y Argentina.
        </motion.p>

        <motion.p
          className="mb-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Embajadora oficial de <strong>Menela Brasil</strong>, marca líder en henna para cejas, y participante destacada en eventos nacionales e internacionales del rubro.
        </motion.p>

        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          Su pasión, compromiso con la excelencia y enfoque en la salud de sus clientas la posicionan como referente en Latinoamérica.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutFlavia;
