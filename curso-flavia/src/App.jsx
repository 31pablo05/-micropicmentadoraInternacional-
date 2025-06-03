import Hero from './components/Hero';
import AboutFlavia from './components/AboutFlavia';
import Curriculum from './components/Curriculum';
import Bonuses from './components/Bonuses';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fceae8] via-[#f9c5d1] to-[#d4af37]">
      {/* Fondo degradado rose gold suave → rosa pastel → dorado elegante */}
      <Hero />
      <AboutFlavia />
      <Curriculum />
      <Bonuses />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
