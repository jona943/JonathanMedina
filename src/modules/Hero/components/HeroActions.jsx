import React from 'react';
import './HeroActions.css';

export const HeroActions = () => {
  return (
    <div className="hero-actions-wrapper">
      <a href="#portafolio" className="hero-btn hero-btn-primary">
        <i className="fas fa-layer-group"></i> Explorar Proyectos
      </a>
      <a href="#experiencia" className="hero-btn hero-btn-secondary">
        <i className="fas fa-briefcase"></i> Ver Trayectoria
      </a>
      <a href="#contacto" className="hero-btn hero-btn-outline">
        <i className="fas fa-paper-plane"></i> Contactar
      </a>
    </div>
  );
};
