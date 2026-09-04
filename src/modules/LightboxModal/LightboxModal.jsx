import React from 'react';
import './LightboxModal.css';

export const LightboxModal = ({ isOpen, imageSrc, caption, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`lightbox-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-content">
        <button className="lightbox-close" aria-label="Cerrar" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt={caption || 'Vista ampliada'} className="lightbox-image" />
        {caption && <p className="lightbox-caption">{caption}</p>}
      </div>
    </div>
  );
};
