import React, { useState } from 'react';
import './LabGallery.css';

export const LabGallery = ({ images, onImageClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="lab-gallery-container">
      <div className="lab-gallery-preview" onClick={() => onImageClick && onImageClick(images[activeIdx])}>
        <img src={images[activeIdx].src} alt={images[activeIdx].alt} />
        <div className="lab-gallery-overlay">
          <i className="fas fa-expand"></i>
          <span>Ampliar Captura</span>
        </div>
      </div>
      <div className="lab-gallery-thumbnails">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={`lab-thumb-btn ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            <img src={img.src} alt={img.alt} />
            <span className="thumb-caption">{img.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
