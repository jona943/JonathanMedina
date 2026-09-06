import React, { useState, useEffect, useRef } from 'react';
import { NavItem } from './components/NavItem';
import { SidebarProfile } from './components/SidebarProfile';
import { MobileBrand } from './components/MobileBrand';
import './Navbar.css';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'fas fa-home' },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: 'fas fa-user' },
    { id: 'experiencia', label: 'Experiencia', icon: 'fas fa-briefcase' },
    { id: 'portafolio', label: 'Portafolio', icon: 'fas fa-layer-group' },
    { id: 'certificaciones', label: 'Reconocimientos', icon: 'fas fa-award' },
    { id: 'linux-lab', label: 'Linux Lab', icon: 'fas fa-terminal' },
    { id: 'habilidades', label: 'Habilidades', icon: 'fas fa-code' },
    { id: 'contacto', label: 'Contacto', icon: 'fas fa-paper-plane' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Mobile auto-hide topbar on scroll down
      if (currentScrollY > 80 && currentScrollY > lastScrollY.current && !isMenuOpen) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Active section calculation
      const sections = document.querySelectorAll('section, header');
      let current = 'inicio';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (currentScrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'inicio';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`main-nav ${isNavHidden ? 'nav-hidden' : ''} ${
        isScrolled ? 'scrolled' : ''
      } ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="container nav-container">
        <SidebarProfile />

        <button
          className="hamburger-menu"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="mobile-drawer-brand-wrapper">
            <MobileBrand onClick={closeMenu} />
          </li>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={closeMenu}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};
