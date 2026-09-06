import React from 'react';
import { AboutBio } from './components/AboutBio';
import { AboutPillars } from './components/AboutPillars';
import './About.css';

export const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Estrategia y Código en Sinergia</h2>
        <AboutBio />
        <AboutPillars />
      </div>
    </section>
  );
};
