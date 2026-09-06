import React from 'react';
import './LabHighlights.css';

export const LabHighlights = () => {
  const highlights = [
    {
      icon: 'fas fa-microchip',
      title: 'Auditoría de Hardware Real',
      description: 'Decodificación de especificaciones adulteradas de fábrica (firmware engañoso) y pruebas de estrés para validar los límites reales de RAM (1GB) y almacenamiento eMMC (8GB).'
    },
    {
      icon: 'fas fa-wifi',
      title: 'Compilación Cruzada de Drivers SDIO',
      description: 'Compilación sin conexión del módulo del kernel para el chip inalámbrico AICSemi AIC8800 mediante GCC toolchain en PC Host y parches para interfaz sin puerto Ethernet físico.'
    },
    {
      icon: 'fas fa-hard-drive',
      title: 'Prevención de Kernel Panics & Flasheo eMMC',
      description: 'Escritura directa de almacenamiento bloqueando el Page Cache con flags de E/S síncronas (oflag=direct, os.fdatasync) para garantizar flasheo estable en chips eMMC de baja calidad.'
    }
  ];

  return (
    <div className="lab-highlights-container">
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon-wrapper">
              <i className={item.icon}></i>
            </div>
            <div className="highlight-content">
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
