import React from 'react';
import { SkillCard } from './SkillCard';
import './SkillGroup.css';

export const SkillGroup = ({ categoryName, icon, skills }) => {
  return (
    <div className="skill-group-container">
      <div className="skill-group-header">
        <i className={icon}></i>
        <h3>{categoryName}</h3>
      </div>
      <div className="skill-group-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            customImg={skill.customImg}
          />
        ))}
      </div>
    </div>
  );
};
