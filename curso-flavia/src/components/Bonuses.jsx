const Bonuses = () => {
  return (
    <section className="bg-transparent py-8 px-6 max-w-5xl mx-auto text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#d4af37] drop-shadow-lg">
        Beneficios Exclusivos del Curso
      </h2>
      <ul className="space-y-5">
        {[
          { emoji: '🎓', text: 'Certificado Internacional Reconocido' },
          { emoji: '📚', text: 'Material Didáctico Completo Incluido' },
          { emoji: '🎁', text: 'Regalos Especiales para Estudiantes' },
          { emoji: '🖌️', text: 'Posibilidad de Prácticas Supervisadas' },
        ].map(({ emoji, text }, i) => (
          <li
            key={i}
            className="flex items-center justify-center gap-3 md:gap-4 text-lg font-semibold"
          >
            <span className="text-[#d4af37] text-3xl md:text-4xl">{emoji}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-white/80 italic text-sm max-w-xl mx-auto">
        Todo esto sumado al respaldo de Flavia Fernández y su experiencia como embajadora de la marca Menela.
      </p>
    </section>
  );
};

export default Bonuses;
