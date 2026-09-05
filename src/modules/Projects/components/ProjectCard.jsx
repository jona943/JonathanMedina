import React from 'react';
import './ProjectCard.css';

export const ProjectCard = ({ project, onSelect }) => {
  const mainImage = project.slides && project.slides.length > 0 ? project.slides[0].src : null;

  return (
    <div 
      className="project-card-item"
      onClick={() => onSelect && onSelect(project)}
      role="button"
      tabIndex={0}
    >
      {/* Encabezado: Título + Badge de Categoría/Fecha */}
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-tag">{project.date}</span>
      </div>

      {/* Imagen Principal enmarcada */}
      <div className="project-card-media">
        {mainImage ? (
          <img src={mainImage} alt={project.title} className="project-card-img" />
        ) : (
          <div className="project-card-placeholder">
            <i className="fas fa-folder-open"></i>
          </div>
        )}
      </div>

      {/* Pie de Tarjeta */}
      <div className="project-card-footer">
        <span className="project-card-link">
          Ver proyecto y galería <i className="fas fa-arrow-right cta-icon"></i>
        </span>
      </div>
    </div>
  );
};

