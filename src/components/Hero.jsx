import React from 'react';

export const Hero = () => {
  return (
    <header className="hero-header" id="inicio">
      <div className="container">
        <div className="floating-profile-container">
          <img
            src="assets/img/new/jonathanAnimado.jpeg"
            alt="Jonathan Medina Animado"
            className="floating-profile-pic"
          />
        </div>
        <h1>Jonathan Medina</h1>
        <p className="subtitle">Estratega de Negocios | Full Stack Developer & IA (DEV.F x Bécalos)</p>
        <p className="intro-text">
          Licenciado en Administración por UTEL y estudiante del Master en Frontend Asistido con IA (DEV.F x Bécalos). Especializado en la gestión administrativa a través de la tecnología, aplicaciones web en React 19, optimización de sistemas Linux e integración de Inteligencia Artificial.
        </p>
        <a href="#sobre-mi" className="cta-button">Conoce mi historia</a>
      </div>
    </header>
  );
};
