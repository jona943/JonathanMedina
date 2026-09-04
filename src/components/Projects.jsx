import React, { useRef } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      const card = gridRef.current.querySelector('.project-card');
      const cardWidth = card ? card.offsetWidth + 20 : 350;
      gridRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const card = gridRef.current.querySelector('.project-card');
      const cardWidth = card ? card.offsetWidth + 20 : 350;
      gridRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="portafolio">
      <h2>Proyectos Destacados</h2>
      <div className="portfolio-wrapper">
        <button
          className="scroll-arrow arrow-left"
          aria-label="Anterior proyecto"
          onClick={scrollLeft}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div ref={gridRef} className="portfolio-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button
          className="scroll-arrow arrow-right"
          aria-label="Siguiente proyecto"
          onClick={scrollRight}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};
