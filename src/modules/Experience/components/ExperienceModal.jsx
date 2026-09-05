import React from 'react';
import './ExperienceModal.css';

export const ExperienceModal = ({ item, onClose }) => {
  if (!item) return null;

  const isHackathon = item.id.includes('smartfit') || item.id.includes('tiendanube') || item.id.includes('googlecloud');

  const getHighlightIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('liderazgo') || lower.includes('gestión de equipos') || lower.includes('gestión estratégica')) return 'fas fa-users-gear';
    if (lower.includes('arquitectura') || lower.includes('desarrollo mvp') || lower.includes('asistente ia')) return 'fas fa-cubes-stacked';
    if (lower.includes('integración') || lower.includes('seguridad') || lower.includes('optimización')) return 'fas fa-shield-halved';
    if (lower.includes('documentación') || lower.includes('presentación') || lower.includes('comunicación')) return 'fas fa-file-lines';
    if (lower.includes('supervisión') || lower.includes('inventarios') || lower.includes('control')) return 'fas fa-chart-line';
    return 'fas fa-check-circle';
  };

  return (
    <div className="experience-modal-overlay" onClick={onClose}>
      <div className="experience-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <i className="fas fa-times"></i>
        </button>

        {item.image && (
          <div className="modal-image-header">
            <img src={item.image} alt={item.alt || item.title} className="modal-full-img" />
            <span className={`modal-badge ${isHackathon ? 'hackathon' : 'work'}`}>
              <i className={isHackathon ? 'fas fa-trophy' : 'fas fa-briefcase'}></i>
              {isHackathon ? 'Hackathon' : 'Experiencia Laboral'}
            </span>
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title">{item.title}</h2>
          <h4 className="modal-role">{item.role}</h4>

          <div className="modal-divider"></div>

          <h5 className="modal-section-subtitle">Logros y Contribuciones Clave:</h5>
          <ul className="modal-highlights-list">
            {item.highlights.map((highlight, index) => {
              const hasColon = highlight.includes(':');
              const iconClass = getHighlightIcon(highlight);

              return (
                <li key={index} className="modal-highlight-item">
                  <i className={`${iconClass} item-icon`}></i>
                  <div className="item-text-wrapper">
                    {hasColon ? (
                      <>
                        <strong className="modal-highlight-tag">{highlight.split(':')[0]}:</strong>
                        <span>{highlight.substring(highlight.indexOf(':') + 1)}</span>
                      </>
                    ) : (
                      <span>{highlight}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

