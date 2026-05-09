import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav className="topbar">
      <div className="topbar-left">
        <Link className="brand-link" to="/">
          <span className="brand-cube">✓</span>
          {props.title}
        </Link>
        <span className="topbar-divider" aria-hidden="true"></span>
        <span className="topbar-status">Synced locally</span>
      </div>
      <div className="topbar-actions">
        <NavLink
          className={({ isActive }) => `topbar-link${isActive ? ' active' : ''}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `topbar-link${isActive ? ' active' : ''}`}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
