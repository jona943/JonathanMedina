import React from 'react';
import './StatusBadge.css';

export const StatusBadge = ({ text = "Disponible para proyectos" }) => {
  return (
    <div className="status-badge" title={text}>
      <span className="status-dot"></span>
      <span className="status-text">{text}</span>
    </div>
  );
};
