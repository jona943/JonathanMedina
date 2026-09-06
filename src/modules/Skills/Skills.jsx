import React from 'react';
import { skillsCategoriesData } from '../../data/skillsData';
import { SkillGroup } from './components/SkillGroup';
import './Skills.css';

export const Skills = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="section-header">
        <h2>Tecnologías & Herramientas</h2>
        <p className="section-description">
          Stack técnico, lenguajes de programación, frameworks y herramientas que utilizo para desarrollar proyectos robustos e infraestructura Linux.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillsCategoriesData.map((category) => (
          <SkillGroup
            key={category.id}
            categoryName={category.categoryName}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};
