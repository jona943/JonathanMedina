import React from 'react';
import './LabHardwareSpecs.css';

export const LabHardwareSpecs = () => {
  const specs = [
    { icon: 'fas fa-tv', label: 'Dispositivo', value: 'Mortal T1 (X96Q)', note: 'Auditoría Hardware' },
    { icon: 'fas fa-microchip', label: 'SoC / CPU', value: 'Allwinner H313', note: 'ARM64 Cortex-A53' },
    { icon: 'fas fa-memory', label: 'RAM Real', value: '1 GB (vs 2 GB Falso)', note: '~119 MB en Reposo' },
    { icon: 'fas fa-database', label: 'eMMC Interna', value: '8 GB (vs 16 GB Falso)', note: 'E/S Directa síncrona' },
    { icon: 'fas fa-wifi', label: 'Wi-Fi SDIO', value: 'AIC8800 Module', note: 'Driver Cross-Compiled' },
    { icon: 'fas fa-terminal', label: 'Sistema OS', value: 'Armbian Minimal', note: 'Kernel 6.12 ARM64' }
  ];

  return (
    <div className="lab-specs-bar">
      {specs.map((item, index) => (
        <div key={index} className="lab-spec-pill">
          <div className="spec-pill-icon">
            <i className={item.icon}></i>
          </div>
          <div className="spec-pill-content">
            <span className="spec-pill-label">{item.label}</span>
            <span className="spec-pill-value">{item.value}</span>
            <span className="spec-pill-note">{item.note}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
