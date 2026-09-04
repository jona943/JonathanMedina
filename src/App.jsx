import React, { useState, useEffect } from 'react';
import { Navbar } from './modules/Navbar/Navbar';
import { Hero } from './modules/Hero/Hero';
import { About } from './modules/About/About';
import { Experience } from './modules/Experience/Experience';
import { Projects } from './modules/Projects/Projects';
import { Certifications } from './modules/Certifications/Certifications';
import { TechSetup } from './modules/TechSetup/TechSetup';
import { Skills } from './modules/Skills/Skills';
import { ContactFooter } from './modules/ContactFooter/ContactFooter';
import { LightboxModal } from './modules/LightboxModal/LightboxModal';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    imageSrc: '',
    caption: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (window.scrollY / windowHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (imageSrc, caption) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <Navbar />
      <Hero />

      <main>
        <div className="container">
          <About />
          <Experience />
          <Projects />
          <Certifications onSelectImage={openLightbox} />
          <TechSetup />
          <Skills />
        </div>
      </main>

      <ContactFooter />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />
    </>
  );
}

export default App;
