import React from 'react';
import './ProjectModal.css';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose} aria-label="Cerrar modal">
          <i className="fas fa-times"></i>
        </button>

        <div className="project-modal-body">
          <span className="project-modal-badge">{project.date}</span>
          <h2 className="project-modal-title">{project.title}</h2>
          
          <p className="project-modal-description">{project.description}</p>

          {project.slides && project.slides.length > 0 && (
            <div className="project-modal-gallery">
              <h5 className="gallery-subtitle">Galeria del Proyecto ({project.slides.length}):</h5>
              <div className="gallery-grid">
                {project.slides.map((slide, index) => (
                  <div key={index} className="gallery-item">
                    <img src={slide.src} alt={slide.alt || project.title} className="gallery-img" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-links">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-btn"
              >
                <i className={link.icon}></i> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
