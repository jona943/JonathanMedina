import React, { useState, useRef } from 'react';
import { experienceData } from '../../data/experienceData';
import { ExperienceItem } from './components/ExperienceItem';
import { ExperienceModal } from './components/ExperienceModal';
import './Experience.css';

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const sliderRef = useRef(null);

  const handleOpenModal = (item) => {
    setSelectedExperience(item);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
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
    <section id="experiencia" className="experience-section">
      <div className="experience-header-wrapper">
        <h2 className="section-title">Experiencia y Comunidad</h2>
        <p className="section-subtitle">
          Proyectos de alto impacto en Hackathons y liderazgo en operaciones administrativas.
        </p>
      </div>

      <div className="carousel-container">
        <button 
          className="carousel-btn prev-btn" 
          onClick={scrollLeft} 
          aria-label="Experiencia anterior"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="experience-carousel" ref={sliderRef}>
          {experienceData.map((item) => (
            <div key={item.id} className="carousel-slide">
              <ExperienceItem item={item} onSelect={handleOpenModal} />
            </div>
          ))}
        </div>

        <button 
          className="carousel-btn next-btn" 
          onClick={scrollRight} 
          aria-label="Siguiente experiencia"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {selectedExperience && (
        <ExperienceModal item={selectedExperience} onClose={handleCloseModal} />
      )}
    </section>
  );
};




