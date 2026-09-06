import React from 'react';
import { contactChannelsData } from '../../data/contactData';
import { ContactCard } from './components/ContactCard';
import { FooterBar } from './components/FooterBar';
import './ContactFooter.css';

export const ContactFooter = () => {
  return (
    <footer className="main-footer" id="contacto">
      <div className="container footer-container">
        <div className="section-header">
          <div className="title-with-badge">
            <h2>Hablemos & Conectemos</h2>
            <span className="badge status-badge-pulse">
              <span className="pulse-dot"></span> Disponible para Proyectos
            </span>
          </div>
          <p className="section-description">
            ¿Tienes una idea, una consulta sobre desarrollo web o proyectos en Linux Embedded? Envíame un mensaje directo por el canal que prefieras.
          </p>
        </div>

        <div className="contact-cards-grid">
          {contactChannelsData.map((channel) => (
            <ContactCard
              key={channel.id}
              title={channel.title}
              value={channel.value}
              link={channel.link}
              icon={channel.icon}
              badge={channel.badge}
              actionText={channel.actionText}
              copyable={channel.copyable}
            />
          ))}
        </div>

        <FooterBar />
      </div>
    </footer>
  );
};
