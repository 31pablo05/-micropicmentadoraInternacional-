const Curriculum = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Curriculum del Curso</h2>

      {/* Módulo 1 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Módulo 1: Introducción a la Micropigmentación</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Historia y fundamentos de la micropigmentación</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Herramientas y materiales básicos</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Protocolos de higiene y seguridad</span>
          </li>
        </ul>
      </div>

      {/* Módulo 2 */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Módulo 2: Técnicas Avanzadas</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Diseño y mapeo de cejas</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Técnicas de sombreado y degradado</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Uso de henna Menela para resultados naturales</span>
          </li>
        </ul>
      </div>

      {/* Módulo 3 */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Módulo 3: Certificación y Cierre</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Evaluación práctica final</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Entrega de certificado internacional</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <span>Consejos para iniciar tu negocio</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Curriculum;
