import React, { useState } from 'react';
import './SkillCard.css';

export const SkillCard = ({ name, icon, customImg }) => {
  const [imgError, setImgError] = useState(false);

  const imgSrc = customImg || `https://skillicons.dev/icons?i=${icon}`;

  return (
    <div className="skill-card-icon-only" title={name} aria-label={name}>
      {!imgError ? (
        <img
          src={imgSrc}
          alt={name}
          className="skill-icon-pure"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="skill-icon-fallback-pure">
          <i className="fas fa-code"></i>
        </div>
      )}
      <span className="skill-tooltip">{name}</span>
    </div>
  );
};
