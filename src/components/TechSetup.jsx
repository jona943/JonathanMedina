import React, { useState, useEffect, useRef } from 'react';

export const TechSetup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: 'assets/img/EntornoDeDesarrollo/armbian-tvbox.png', alt: 'TV-Box Linux Armbian CLI' },
    { src: 'assets/img/EntornoDeDesarrollo/htop-tvbox.png', alt: 'TV-Box Linux htop Monitoring' }
  ];

  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [slides.length]);

  return (
    <section id="tech-setup">
      <h2>Performance Lab: TV-Box Linux ARM64</h2>
      <div className="tech-setup-container">
        <div className="setup-image-wrapper">
          <div className="project-carousel">
            <div
              className="project-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="project-slide">
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
            <div className="project-nav">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`p-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="specs-content">
          <div className="specs-grid">
            <div className="spec-item">
              <p className="spec-label">Dispositivo</p>
              <p className="spec-value">TV Box Mortal T1</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">SoC / CPU</p>
              <p className="spec-value">Allwinner H313 (4 Cores)</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">RAM Real</p>
              <p className="spec-value">1 GB (119 MB uso constante)</p>
            </div>
            <div className="spec-item">
              <p className="spec-label">OS Kernel</p>
              <p className="spec-value">Armbian Minimal (Kernel 6.12)</p>
            </div>
          </div>
          <div className="optimization-note">
            <p>
              <strong>Optimización de Kernel:</strong> Conversión de hardware comercial adulterado en servidor Linux. Compilación cruzada en PC Host del driver SDIO AIC8800, prevención de Kernel Panics mediante streaming directo por red con <code>oflag=direct</code> y flasheo síncrono a la eMMC interna desactivando el Page Cache.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
