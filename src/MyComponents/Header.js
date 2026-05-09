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
    <nav className="navbar navbar-expand-lg app-navbar">
      <div className="container">
        <Link className="navbar-brand brand-mark" to="/">
          <span className="brand-icon">✓</span>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form
            className="d-flex"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
