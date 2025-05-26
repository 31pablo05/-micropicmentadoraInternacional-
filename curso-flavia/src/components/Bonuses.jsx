const Bonuses = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Beneficios Exclusivos del Curso</h2>
      <ul className="space-y-6">
        <li className="flex items-center justify-center gap-4">
          <span className="text-green-500 text-2xl">🎓</span>
          <span className="text-lg font-semibold">Certificado Internacional Reconocido</span>
        </li>
        <li className="flex items-center justify-center gap-4">
          <span className="text-green-500 text-2xl">📚</span>
          <span className="text-lg font-semibold">Material Didáctico Completo Incluido</span>
        </li>
        <li className="flex items-center justify-center gap-4">
          <span className="text-green-500 text-2xl">🎁</span>
          <span className="text-lg font-semibold">Regalos Especiales para Estudiantes</span>
        </li>
        <li className="flex items-center justify-center gap-4">
          <span className="text-green-500 text-2xl">🖌️</span>
          <span className="text-lg font-semibold">Posibilidad de Prácticas Supervisadas</span>
        </li>
      </ul>

      <p className="mt-10 text-gray-600 italic text-sm max-w-xl mx-auto">
        Todo esto sumado al respaldo de Flavia Fernández y su experiencia como embajadora de la marca Menela.
      </p>
    </section>
  );
};

export default Bonuses;
