import React from 'react';
import './AboutPillars.css';

export const AboutPillars = () => {
  const pillars = [
    {
      id: 'business',
      icon: 'fas fa-chart-line',
      title: 'Visión de Negocio',
      badge: 'Lic. Administración UTEL',
      description: 'Comprensión de procesos internos, rentabilidad y metas comerciales.',
    },
    {
      id: 'frontend-ai',
      icon: 'fas fa-laptop-code',
      title: 'Full Stack & IA',
      badge: 'DEV.F x Bécalos',
      description: 'SPAs modernas con React 19, Node.js e integración de modelos IA.',
    },
    {
      id: 'leadership',
      icon: 'fas fa-users-gear',
      title: 'Liderazgo & Labs',
      badge: 'Hackathons Lead',
      description: 'Liderazgo técnico de equipos (+10 pers.) y optimización Linux ARM64.',
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

