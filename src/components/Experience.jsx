import React from 'react';
import { experienceData } from '../data/experienceData';

export const Experience = () => {
  return (
    <section id="experiencia">
      <h2>Experiencia y Comunidad</h2>
      <div className="experience-list">
        {experienceData.map((item) => (
          <div key={item.id} className="puesto_de_trabajo">
            <div className="work-header">
              <h4>{item.title}</h4>
              <p><strong>{item.role}</strong></p>
            </div>
            <div className="work-body">
              <ul>
                {item.highlights.map((highlight, index) => (
                  <li key={index}>
                    {highlight.includes(':') ? (
                      <>
                        <strong>{highlight.split(':')[0]}:</strong>
                        {highlight.substring(highlight.indexOf(':') + 1)}
                      </>
                    ) : (
                      highlight
                    )}
                  </li>
                ))}
              </ul>
              {item.image && (
                <div className="work-evidence">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="evidence-thumb"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
