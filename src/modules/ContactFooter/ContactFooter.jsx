import React from 'react';
import './ContactFooter.css';

export const ContactFooter = () => {
  return (
    <footer className="main-footer" id="contacto">
      <div className="container">
        <h2>Hablemos</h2>
        <div className="contact-info">
          <p>Correo: <span>jonathan603015@gmail.com</span></p>
          <p>Teléfono: <span>+52 668 225 3386</span></p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jonathanmedinag0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/jona943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
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
    </footer>
  );
};
