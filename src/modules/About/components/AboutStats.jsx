import React from 'react';
import './AboutStats.css';

export const AboutStats = () => {
  const stats = [
    { number: '+10', label: 'Integrantes Liderados en Hackathons', icon: 'fas fa-users' },
    { number: '3+', label: 'Soluciones MVP Creadas', icon: 'fas fa-rocket' },
    { number: 'React 19', label: 'Desarrollo Frontend & IA', icon: 'fab fa-react' },
    { number: 'ARM64', label: 'Performance Lab Linux', icon: 'fas fa-terminal' },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <i className={`${stat.icon} stat-icon`}></i>
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
