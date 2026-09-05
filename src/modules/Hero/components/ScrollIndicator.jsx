import React from 'react';
import './ScrollIndicator.css';

export const ScrollIndicator = ({ targetId = "sobre-mi" }) => {
  return (
    <a href={`#${targetId}`} className="scroll-indicator" aria-label="Desplazar hacia abajo">
      <span className="scroll-indicator-text">Descubrir</span>
      <i className="fas fa-chevron-down scroll-indicator-icon"></i>
    </a>
  );
};
