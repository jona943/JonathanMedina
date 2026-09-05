import React, { useState, useRef } from 'react';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import './Projects.css';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="portafolio" className="projects-section">
      <div className="projects-header-wrapper">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">
          Soluciones de software, herramientas de optimización e integraciones de IA.
        </p>
      </div>

      <div className="proj-carousel-container">
        <button
          className="proj-carousel-btn proj-prev-btn"
          aria-label="Anterior proyecto"
          onClick={scrollLeft}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="projects-carousel" ref={sliderRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="proj-carousel-slide">
              <ProjectCard project={project} onSelect={handleOpenModal} />
            </div>
          ))}
        </div>

        <button
          className="proj-carousel-btn proj-next-btn"
          aria-label="Siguiente proyecto"
          onClick={scrollRight}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

