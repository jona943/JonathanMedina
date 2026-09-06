import React from 'react';
import './MobileBrand.css';

export const MobileBrand = ({ onClick }) => {
  return (
    <a href="#inicio" className="mobile-brand" onClick={onClick}>
      <img
        src="assets/img/profile/Jona-ani.png"
        alt="Jonathan Medina"
        className="mobile-brand-avatar"
      />
      <span className="mobile-brand-title">Jonathan Medina</span>
    </a>
  );
};
