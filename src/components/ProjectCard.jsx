import React, { useState, useEffect, useRef } from 'react';

export const ProjectCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const autoPlayRef = useRef(null);

  const totalSlides = project.slides ? project.slides.length : 0;

  useEffect(() => {
    if (totalSlides <= 1) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000 + Math.random() * 2000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [totalSlides]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const resumeAutoPlay = () => {
    if (totalSlides <= 1) return;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div className="project-content">
        <p className="project-date">{project.date}</p>
        <h3>{project.title}</h3>

        {totalSlides > 0 && (
          <div
            className="project-carousel"
            onMouseDown={stopAutoPlay}
            onMouseUp={resumeAutoPlay}
            onMouseLeave={resumeAutoPlay}
            onTouchStart={stopAutoPlay}
            onTouchEnd={resumeAutoPlay}
          >
            <div
              className="project-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {project.slides.map((slide, index) => (
                <div key={index} className="project-slide">
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
            {totalSlides > 1 && (
              <div className="project-nav">
                {project.slides.map((_, index) => (
                  <span
                    key={index}
                    className={`p-dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></span>
                ))}
              </div>
            )}
          </div>
        )}

        <p>{project.description}</p>

        <div className="project-links">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              <i className={link.icon}></i> {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
