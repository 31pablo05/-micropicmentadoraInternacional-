const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm border-t-2 border-[#d4af37]">
      <p className="font-medium">
        &copy; {year} <span className="text-[#d4af37] font-semibold">MYBeautyStudy</span>. Todos los derechos reservados.
        <br />
        Desarrollado por <span className="text-[#d4af37] font-semibold">Pablo Proboste</span>.
      </p>
    </footer>
  );
};

export default Footer;
