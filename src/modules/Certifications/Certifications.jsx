import React, { useState, useEffect, useRef } from 'react';
import { certificatesData } from '../../data/certificatesData';
import './Certifications.css';

export const Certifications = ({ onSelectImage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const totalSlides = certificatesData.length;

  useEffect(() => {
    if (totalSlides <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [totalSlides]);

  return (
    <section id="certificaciones">
      <h2>Certificaciones y Reconocimientos</h2>
      <div className="cert-carousel-container">
        <div
          className="cert-carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {certificatesData.map((cert, index) => (
            <div key={index} className="cert-carousel-slide">
              <img
                src={cert.src}
                alt={cert.alt}
                onClick={() => onSelectImage && onSelectImage(cert.src, cert.caption)}
              />
              <p className="cert-carousel-caption">{cert.caption}</p>
            </div>
          ))}
        </div>
        <div className="cert-carousel-dots">
          {certificatesData.map((_, index) => (
            <span
              key={index}
              className={`cert-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

