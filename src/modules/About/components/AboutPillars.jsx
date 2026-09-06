import React from 'react';
import './AboutPillars.css';

export const AboutPillars = () => {
  const pillars = [
    {
      id: 'business',
      icon: 'fas fa-chart-line',
      title: 'Estrategia & Procesos',
      badge: 'Administración',
      description: 'Análisis de flujos de trabajo, optimización de recursos y diseño de soluciones alineadas a objetivos de negocio.',
    },
    {
      id: 'frontend-ai',
      icon: 'fas fa-laptop-code',
      title: 'Desarrollo Web & IA',
      badge: 'Frontend Lead',
      description: 'Construcción de interfaces interactivas en React, consumo de APIs REST y automatización inteligente con modelos de IA.',
    },
    {
      id: 'systems',
      icon: 'fas fa-terminal',
      title: 'Sistemas & Servidores',
      badge: 'Linux Labs',
      description: 'Configuración, auditoría de hardware y despliegue de entornos Linux eficientes sin consumo excesivo de recursos.',
    },
  ];

  return (
    <div className="pillars-grid">
      {pillars.map((pillar) => (
        <div key={pillar.id} className="pillar-card">
          <div className="pillar-header">
            <div className="pillar-icon-box">
              <i className={pillar.icon}></i>
            </div>
            <span className="pillar-badge">{pillar.badge}</span>
          </div>
          <h3 className="pillar-title">{pillar.title}</h3>
          <p className="pillar-description">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};
