import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Contacto</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 text-lg text-gray-700">
        
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-green-600 transition"
        >
          <FaWhatsapp size={28} />
          WhatsApp
        </a>

        <a
          href="https://instagram.com/mybeautystudy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-pink-500 transition"
        >
          <FaInstagram size={28} />
          Instagram
        </a>

        <a
          href="mailto:info@mybeautystudy.com"
          className="flex items-center gap-3 hover:text-blue-600 transition"
        >
          <FaEnvelope size={28} />
          info@mybeautystudy.com
        </a>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt size={28} />
          <p>Av. Estética 123, Ciudad, País</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
