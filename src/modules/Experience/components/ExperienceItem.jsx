import React from 'react';
import './ExperienceItem.css';

export const ExperienceItem = ({ item, onSelect }) => {
  const isHackathon = item.id.includes('smartfit') || item.id.includes('tiendanube') || item.id.includes('googlecloud');

  return (
    <div 
      className={`experience-card-item ${isHackathon ? 'card-type-hackathon' : 'card-type-work'}`}
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
    >
      {/* Encabezado Centrado: Título arriba, Rol/Fecha + Tag abajo */}
      <div className="card-header-top">
        <h3 className="card-main-title">{item.title}</h3>
        <div className="card-meta-row">
          <p className="card-sub-role">{item.role}</p>
          <span className="card-type-tag">
            <i className={isHackathon ? 'fas fa-trophy' : 'fas fa-building'}></i>
            {isHackathon ? 'Hackathon' : 'Empresa'}
          </span>
        </div>
      </div>

      {/* Imagen de Credencial Responsiva y Proporcional */}
      <div className={`card-media-wrapper ${isHackathon ? 'media-hackathon' : 'media-work'}`}>
        {item.image ? (
          <img src={item.image} alt={item.alt || item.title} className="card-credential-img" />
        ) : (
          <div className="card-credential-placeholder">
            <i className={isHackathon ? 'fas fa-trophy' : 'fas fa-briefcase'}></i>
          </div>
        )}
      </div>

      {/* Pie de tarjeta con Ver detalles centrado */}
      <div className="card-cta-footer">
        <span className="cta-link">
          Ver detalles <i className="fas fa-arrow-right cta-icon"></i>
        </span>
      </div>
    </div>
  );
};




