import React from 'react';
import './HeroContent.css';

export const HeroContent = () => {
  return (
    <div className="hero-content-wrapper">
      <div className="hero-tag">
        <i className="fas fa-microchip"></i> Frontend Lead &amp; IA Strategist
      </div>
      <h1 className="hero-title">
        Jonathan <span className="text-highlight">Medina</span>
      </h1>
      <p className="hero-subtitle">
        Estratega de Negocios <span className="subtitle-divider">|</span> Full Stack Developer &amp; IA <span className="hero-badge-small">DEV.F x Bécalos</span>
      </p>
      <p className="hero-intro-text">
        Licenciado en Administración por <strong>UTEL</strong> y estudiante del Master en Frontend Asistido con IA (<strong>DEV.F x Bécalos</strong>). Especializado en la gestión administrativa a través de la tecnología, aplicaciones web responsivas en React 19, optimización de sistemas Linux e integración de Inteligencia Artificial.
      </p>
    </div>
  );
};
