import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Votre Projet d'Immigration en Italie</h1>
        <p className="hero-subtitle">Accompagnement complet pour vos démarches et visas. Nous vous guidons étape par étape.</p>
      </div>
    </section>
  );
}

export default Hero;