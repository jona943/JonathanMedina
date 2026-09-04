import React from 'react';
import './HeroAvatar.css';

export const HeroAvatar = ({ imageSrc = "assets/img/profile/Jonathan-hp.png", altText = "Jonathan Medina Animado" }) => {
  return (
    <div className="hero-avatar-wrapper">
      <div className="floating-profile-container">
        <img src={imageSrc} alt={altText} className="floating-profile-pic" />
        <div className="avatar-glow-ring"></div>
      </div>
    </div>
  );
};
