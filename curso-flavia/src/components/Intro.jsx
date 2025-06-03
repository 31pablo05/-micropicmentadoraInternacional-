import { useEffect, useState } from "react";

const Intro = () => {
  // Para animar texto letra por letra (opcional)
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-pink-100 py-20 px-6 max-w-4xl mx-auto rounded-xl shadow-2xl relative overflow-hidden">
      {/* Logo MyBeautyStudy */}
      <img
        src="/images/LOGO ROSEGOLD.png"
        alt="MyBeautyStudy Logo"
        className="mx-auto mb-8 w-40 animate-bounce"
      />

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-pink-600 drop-shadow-[0_2px_10px_rgba(212,175,55,0.8)] animate-fadeInUp">
        Bienvenidos a <span className="text-[#d4af37]">MyBeautyStudy</span>
      </h2>

      <p
        className={`text-lg md:text-xl mb-8 text-pink-700 max-w-xl mx-auto leading-relaxed ${
          showText ? "animate-typewriter" : "opacity-0"
        }`}
        style={{ animationFillMode: "forwards" }}
      >
        MyBeautyStudy es un espacio de formación y estética de la mano de{" "}
        <strong className="text-[#d4af37]">Melina Yancan</strong>, fundadora y profesional dedicada a traer a los mejores expertos para tu crecimiento.
      </p>

      <p className="text-lg md:text-xl text-pink-800 max-w-xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: "1s" }}>
        En esta oportunidad, tenemos el honor de presentar a{" "}
        <strong className="text-[#d4af37]">Flavia Fernández</strong>, micropigmentadora internacional certificada que forma parte de nuestra familia profesional.
      </p>
    </section>
  );
};

export default Intro;
