import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'certificaciones', label: 'Reconocimientos' },
    { id: 'tech-setup', label: 'Tech Setup' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, header');
      let current = 'inicio';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || 'inicio';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-nav">
      <div className="container nav-container">
        <div className="sidebar-pic">
          <img src="assets/img/profile/jonathan1.jpg" alt="Foto de perfil de Jonathan Medina" />
        </div>
        <button
          className="hamburger-menu"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
