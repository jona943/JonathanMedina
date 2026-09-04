import React from 'react';
import './MobileBrand.css';

export const MobileBrand = () => {
  return (
    <a href="#inicio" className="mobile-brand">
      <img
        src="assets/img/profile/Jona-ani.png"
        alt="Jonathan Medina"
        className="mobile-brand-avatar"
      />
      <span className="mobile-brand-title">Jonathan Medina</span>
    </a>
  );
};
