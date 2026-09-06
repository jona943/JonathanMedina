import React, { useState } from 'react';
import './ContactCard.css';

export const ContactCard = ({ title, value, link, icon, badge, actionText, copyable }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <div className="contact-icon-wrapper">
          <i className={icon}></i>
        </div>
        {badge && <span className="contact-badge">{badge}</span>}
      </div>

      <div className="contact-card-body">
        <h4 className="contact-card-title">{title}</h4>
        <p className="contact-card-value">{value}</p>
      </div>

      <div className="contact-card-actions">
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="contact-action-btn"
        >
          <span>{actionText}</span>
          <i className={link.startsWith('http') ? 'fas fa-external-link-alt' : 'fas fa-paper-plane'}></i>
        </a>

        {copyable && (
          <button
            onClick={handleCopy}
            className={`contact-copy-btn ${copied ? 'copied' : ''}`}
            title="Copiar al portapapeles"
          >
            <i className={copied ? 'fas fa-check' : 'fas fa-copy'}></i>
          </button>
        )}
      </div>
    </div>
  );
};
