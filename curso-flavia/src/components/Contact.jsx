import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#d4af37] drop-shadow-md">Contacto</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12 text-lg text-gray-800">
        
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-105 cursor-pointer"
        >
          <FaWhatsapp size={28} className="text-[#25D366]" />
          WhatsApp
        </a>

        <a
          href="https://instagram.com/mybeautystudy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-105 cursor-pointer"
        >
          <FaInstagram size={28} className="text-pink-500" />
          Instagram
        </a>

        <a
          href="mailto:info@mybeautystudy.com"
          className="flex items-center gap-3 text-gray-700 hover:text-[#d4af37] transition-colors duration-300 transform hover:scale-105 cursor-pointer"
        >
          <FaEnvelope size={28} className="text-blue-600" />
          info@mybeautystudy.com
        </a>

        <div className="flex items-center gap-3 text-gray-700">
          <FaMapMarkerAlt size={28} className="text-[#d4af37]" />
          <p>Av. Estética 123, Ciudad, País</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
