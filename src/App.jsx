import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    const heroMenuBtn = document.querySelector('.hero-menu-btn');
    if (heroMenuBtn) {
      heroMenuBtn.click();
    }
  };

  useEffect(() => {
    // Refresh ScrollTrigger after everything loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar onMenuClick={handleMenuClick} />
      <Hero menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;