const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
      <p>
        &copy; {year} MYBeautyStudy. Todos los derechos reservados. <br />
        Desarrollado por <span className="font-semibold">Pablo Proboste</span>.
      </p>
    </footer>
  );
};

export default Footer;
