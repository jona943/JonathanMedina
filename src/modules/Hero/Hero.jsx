import React from 'react';
import { HeroAvatar } from './components/HeroAvatar';
import { HeroContent } from './components/HeroContent';
import { HeroActions } from './components/HeroActions';
import { ScrollIndicator } from './components/ScrollIndicator';
import './Hero.css';

export const Hero = () => {
  return (
    <header className="hero-header" id="inicio">
      <div className="container hero-container">
        <HeroAvatar imageSrc="assets/img/profile/Jonathan-hp.png" altText="Jonathan Medina Avatar Animado" />
        <HeroContent />
        <HeroActions />
      </div>
      <ScrollIndicator targetId="sobre-mi" />
    </header>
  );
};
