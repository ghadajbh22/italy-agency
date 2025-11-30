import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-container">
          <div className="logo-icon" aria-hidden="true">
            <span className="flag-italy" />
          </div>
          <span className="logo-text">ItalyVisa</span>
          <span className="visually-hidden">Logo ItalyVisa</span>
        </div>

        <nav className="navigation" aria-label="Navigation principale">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#apropos">À Propos</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cta-button">Consultation Gratuite</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
