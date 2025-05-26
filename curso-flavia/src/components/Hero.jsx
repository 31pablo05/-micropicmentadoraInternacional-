import React from 'react';

const Hero = () => {
  return (
    <section
      id="curso"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-[#379299] to-[#a2d5d0] text-white px-4"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Workshop Internacional de Micropigmentación
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Aprendé junto a <strong>Flavia Fernández</strong>, embajadora de Menela Brasil 🇧🇷, y obtené tu
          <strong> certificado internacional 🇧🇷🇺🇸🇦🇷</strong>. 
        </p>

        <a
          href="#contacto"
          className="inline-block bg-white text-[#379299] px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#f0f0f0] transition"
        >
          Reservá tu lugar
        </a>
      </div>
    </section>
  );
};

export default Hero;
