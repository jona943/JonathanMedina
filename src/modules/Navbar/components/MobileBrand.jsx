import React from 'react';
import { StatusBadge } from './StatusBadge';
import './MobileBrand.css';

export const MobileBrand = ({ onClick }) => {
  return (
    <div className="mobile-brand-card">
      <a href="#inicio" className="mobile-brand-header" onClick={onClick}>
        <div className="mobile-brand-avatar-wrapper">
          <img
            src="assets/img/profile/jonathan1.jpg"
            alt="Jonathan Medina"
            className="mobile-brand-avatar"
          />
        </div>
        <div className="mobile-brand-info">
          <h3 className="mobile-brand-title">Jonathan Medina</h3>
          <p className="mobile-brand-role">Full Stack & IA Developer</p>
        </div>
      </a>
      <StatusBadge text="Disponible para roles / proyectos" />
    </div>
  );
};
