import React from 'react';
import './CertificateFilter.css';

export const CertificateFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="cert-filter-container">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`cert-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onSelectCategory(cat.id)}
        >
          <i className={`${cat.icon} filter-icon`}></i>
          <span>{cat.label}</span>
          <span className="filter-count">{cat.count}</span>
        </button>
      ))}
    </div>
  );
};
