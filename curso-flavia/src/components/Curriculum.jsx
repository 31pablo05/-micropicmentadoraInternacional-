import { useEffect, useState } from 'react';

const Curriculum = () => {
  // Para animar módulos al entrar en viewport (muy simple)
  const [visibleModule, setVisibleModule] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const modules = document.querySelectorAll('.module');
      modules.forEach((mod, i) => {
        const rect = mod.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleModule(i);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section 
      className="relative py-12 px-7 max-w-7xl mx-auto text-white"
      style={{
        backgroundImage: 'url(/cejas2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <h2 className="relative text-3xl font-bold mb-12 text-center drop-shadow-lg">
        Curriculum del Curso
      </h2>

      {/* Módulo 1 */}
      <div className={`module relative mb-10 p-6 rounded-lg border border-[#d4af37] transition-opacity duration-700 ${visibleModule >= 0 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-semibold mb-4 drop-shadow-md">Módulo 1: Introducción a la Micropigmentación</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Historia y fundamentos de la micropigmentación</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Herramientas y materiales básicos</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Protocolos de higiene y seguridad</span>
          </li>
        </ul>
      </div>

      {/* Separador */}
      <div className="mx-auto w-20 border-t-2 border-[#d4af37] mb-10"></div>

      {/* Módulo 2 */}
      <div className={`module relative mb-10 p-6 rounded-lg border border-[#d4af37] transition-opacity duration-700 ${visibleModule >= 1 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-semibold mb-4 drop-shadow-md">Módulo 2: Técnicas Avanzadas</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Diseño y mapeo de cejas</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Técnicas de sombreado y degradado</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Uso de henna Menela para resultados naturales</span>
          </li>
        </ul>
      </div>

      {/* Separador */}
      <div className="mx-auto w-20 border-t-2 border-[#d4af37] mb-10"></div>

      {/* Módulo 3 */}
      <div className={`module relative p-6 rounded-lg border border-[#d4af37] transition-opacity duration-700 ${visibleModule >= 2 ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-semibold mb-4 drop-shadow-md">Módulo 3: Certificación y Cierre</h3>
        <ul className="space-y-2 list-none">
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Evaluación práctica final</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Entrega de certificado internacional</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#d4af37] animate-pulse">✔</span>
            <span>Consejos para iniciar tu negocio</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Curriculum;
