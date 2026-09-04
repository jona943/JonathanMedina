import React from 'react';

export const NavItem = ({ id, label, icon, isActive, onClick }) => {
  return (
    <li>
      <a
        href={`#${id}`}
        className={`nav-item-link ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {icon && <i className={`${icon} nav-item-icon`}></i>}
        <span>{label}</span>
      </a>
    </li>
  );
};
