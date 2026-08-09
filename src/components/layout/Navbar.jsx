import { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items for sidebar
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button 
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            MENU
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

      {/* Menu Panel */}
      <div className={`menu-panel ${menuOpen ? 'open' : ''}`}>
        <button className="menu-panel-close" onClick={() => setMenuOpen(false)}>
          Close ✕
        </button>
        
        <nav className="menu-panel-nav">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="menu-panel-social">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;