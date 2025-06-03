const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-[#d4af37] via-[#b5902f] to-[#8c751e] py-16 px-6 text-center text-white drop-shadow-md">
      <h2 className="text-4xl font-extrabold mb-6 drop-shadow-lg">¡Reservá tu lugar ahora!</h2>
      <button
        className="border-2 border-[#d4af37] text-[#d4af37] font-bold px-10 py-4 rounded-full text-lg bg-transparent 
          hover:bg-[#d4af37] hover:text-white transition transform hover:scale-105 hover:animate-pulse"
        onClick={() => alert("Redirigir a formulario o proceso de inscripción")}
      >
        Inscribirme
      </button>
      <p className="mt-4 italic font-semibold text-white/90 drop-shadow">
        ¡Cupos limitados!
      </p>
    </section>
  );
};

export default CallToAction;
