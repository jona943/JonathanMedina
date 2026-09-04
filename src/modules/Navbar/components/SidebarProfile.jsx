import React from 'react';
import { StatusBadge } from './StatusBadge';
import './SidebarProfile.css';

export const SidebarProfile = () => {
  return (
    <div className="sidebar-profile-wrapper">
      <div className="sidebar-pic">
        <img src="assets/img/profile/jonathan1.jpg" alt="Foto de perfil de Jonathan Medina" />
      </div>
      <h3 className="sidebar-name">Jonathan Medina</h3>
      <p className="sidebar-role">Full Stack & IA Developer</p>
      <StatusBadge text="Disponible para roles / proyectos" />

      <div className="sidebar-socials">
        <a
          href="https://www.linkedin.com/in/jonathanmedinag0/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/jona943"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="mailto:jonathan603015@gmail.com"
          aria-label="Email"
          title="Enviar Correo"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};
