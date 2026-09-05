import React from 'react';
import './CertificateCard.css';

export const CertificateCard = ({ cert, onZoom }) => {
  return (
    <div className="certificate-card" onClick={() => onZoom(cert.src, cert.caption)}>
      <div className="cert-media-container">
        <img src={cert.src} alt={cert.alt || cert.caption} className="cert-img" />
        <div className="cert-overlay">
          <span className="cert-zoom-btn">
            <i className="fas fa-search-plus"></i> Ampliar Credencial
          </span>
        </div>
      </div>
      
      <div className="cert-body">
        <div className="cert-badge-row">
          <i className={`${cert.icon} cert-icon`}></i>
          <span className="cert-category-tag">{cert.category.toUpperCase()}</span>
        </div>
        <h4 className="cert-caption">{cert.caption}</h4>
      </div>
    </div>
  );
};
