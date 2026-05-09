import React from "react";
import { Link } from "react-router-dom";

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
        <Link className="topbar-link active" aria-current="page" to="/">
          Home
        </Link>
        <Link className="topbar-link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
