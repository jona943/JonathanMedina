import React, { useState } from 'react';
import './LinuxLab.css';
import { LabHardwareSpecs } from './components/LabHardwareSpecs';
import { LabHighlights } from './components/LabHighlights';
import { LabGallery } from './components/LabGallery';
import { LightboxModal } from '../LightboxModal/LightboxModal';

export const LinuxLab = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: 'assets/img/EntornoDeDesarrollo/armbian-tvbox.png',
      alt: 'TV-Box Linux Armbian CLI Terminal',
      label: 'Terminal Armbian CLI'
    },
    {
      src: 'assets/img/EntornoDeDesarrollo/htop-tvbox.png',
      alt: 'TV-Box Linux htop Monitoring System',
      label: 'Monitoreo Htop System'
    }
  ];

  return (
    <section id="linux-lab" className="linux-lab-section">
      <div className="section-header-compact">
        <div className="header-text">
          <div className="title-with-badge">
            <h2>Linux Lab: Reutilización ARM64 Embedded</h2>
            <span className="badge tech-badge">Low-Level & Kernel Tuning</span>
          </div>
          <p className="section-description">
            Transformación de hardware Android TV-Box de bajo costo con especificidades adulteradas de fábrica en un micro-servidor Linux altamente optimizado sin GUI.
          </p>
        </div>

        <a
          href="https://github.com/jona943/tvBoxLinux"
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn-header"
        >
          <i className="fab fa-github repo-icon"></i>
          <div className="repo-text">
            <span className="repo-title">Repositorio en GitHub</span>
            <span className="repo-sub">Auditorías, parches y scripts</span>
          </div>
          <i className="fas fa-external-link-alt ext-icon"></i>
        </a>
      </div>

      <div className="lab-dashboard-layout">
        {/* Barra horizontal de Especificaciones de Hardware */}
        <LabHardwareSpecs />

        {/* Subtítulo Centrado Horizontalmente */}
        <h3 className="highlights-section-title-centered">Solución Técnica & Hitos de Ingeniería:</h3>

        <div className="lab-content-grid">
          {/* Columna Izquierda: Galería Visual */}
          <div className="lab-gallery-wrapper">
            <LabGallery images={galleryImages} onImageClick={(src) => setSelectedImage(src)} />
          </div>

          {/* Columna Derecha: Hitos de Ingeniería */}
          <div className="lab-highlights-wrapper">
            <LabHighlights />
          </div>
        </div>
      </div>

      <LightboxModal
        isOpen={Boolean(selectedImage)}
        imageSrc={selectedImage?.src || ''}
        caption={selectedImage?.label || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
