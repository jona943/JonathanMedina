import React from 'react';

export const NavItem = ({ id, label, icon, isActive, onClick }) => {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`nav-item-link ${isActive ? 'active' : ''}`}
        onClick={onClick}
        title={label}
      >
        {icon && <i className={`${icon} nav-item-icon`}></i>}
        <span className="nav-item-text">{label}</span>
      </a>
    </li>
  );
};
