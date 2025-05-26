const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 px-6 text-center text-white">
      <h2 className="text-4xl font-extrabold mb-6">¡Reservá tu lugar ahora!</h2>
      <button
        className="bg-white text-purple-700 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition"
        onClick={() => alert("Redirigir a formulario o proceso de inscripción")}
      >
        Inscribirme
      </button>
      <p className="mt-4 italic font-semibold">¡Cupos limitados!</p>
    </section>
  );
};

export default CallToAction;
