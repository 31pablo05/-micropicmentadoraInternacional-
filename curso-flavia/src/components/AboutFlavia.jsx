const AboutFlavia = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Foto */}
        <img
          src="/images/flavia-portrait.jpg" 
          alt="Flavia Fernández - Micropigmentadora"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Conoce a Flavia Fernández</h2>
          <p className="mb-3 text-gray-700">
            Flavia Fernández es una micropigmentadora certificada internacionalmente en Brasil, Estados Unidos y Argentina.  
          </p>
          <p className="mb-3 text-gray-700">
            Además, es embajadora oficial de la reconocida marca Menela, líder en henna para cejas desde Brasil.
          </p>
          <p className="text-gray-700">
            Su experiencia y dedicación la posicionan como referente en técnicas avanzadas para el diseño de cejas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFlavia;
