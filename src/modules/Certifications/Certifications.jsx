import React, { useState } from 'react';
import { certificatesData } from '../../data/certificatesData';
import { CertificateFilter } from './components/CertificateFilter';
import { CertificateCard } from './components/CertificateCard';
import './Certifications.css';

export const Certifications = ({ onSelectImage }) => {
  const [activeCategory, setActiveCategory] = useState('hackathons');

  const categories = [
    { id: 'hackathons', label: 'Hackathons', count: certificatesData.filter(c => c.category === 'hackathons').length, icon: 'fas fa-trophy' },
    { id: 'dev', label: 'Desarrollo Web', count: certificatesData.filter(c => c.category === 'dev').length, icon: 'fas fa-code' },
    { id: 'ai', label: 'IA & Ciencia Datos', count: certificatesData.filter(c => c.category === 'ai').length, icon: 'fas fa-brain' },
    { id: 'security', label: 'Seguridad & Forense', count: certificatesData.filter(c => c.category === 'security').length, icon: 'fas fa-shield-halved' }
  ];

  const filteredCertificates = certificatesData.filter(c => c.category === activeCategory);


  return (
    <section id="certificaciones" className="certifications-section">
      <div className="certifications-header">
        <h2 className="section-title">Certificaciones y Reconocimientos</h2>
        <p className="section-subtitle">
          Credenciales oficiales que respaldan mi solvencia técnica y formación continua.
        </p>
      </div>

      <CertificateFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <div className="certificates-grid">
        {filteredCertificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onZoom={onSelectImage}
          />
        ))}
      </div>
    </section>
  );
};


