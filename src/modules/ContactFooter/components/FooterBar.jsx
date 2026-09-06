import React from 'react';
import './FooterBar.css';

export const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bar">
      <div className="footer-copyright">
        <p>© {currentYear} <span>Jonathan Medina</span>. Todos los derechos reservados.</p>
      </div>

      <div className="footer-social-min">
        <a
          href="https://github.com/jona943"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathanmedinag0/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/jhonathan270802/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};
