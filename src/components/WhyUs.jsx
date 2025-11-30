import React from 'react';
import './WhyUs.css';

function WhyUs() {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="why-us-left">
          <h2>Pourquoi Nous Choisir ?</h2>
          <ul>
            <li><span className="check-icon">✅</span> Plus de 500 visas approuvés avec succès</li>
            <li><span className="check-icon">✅</span> Équipe d'experts certifiés en immigration</li>
            <li><span className="check-icon">✅</span> Accompagnement personnalisé de A à Z</li>
            <li><span className="check-icon">✅</span> Taux de réussite de 98%</li>
            <li><span className="check-icon">✅</span> Support multilingue disponible</li>
          </ul>
          <button className="learn-more-btn">En Savoir Plus</button>
        </div>
        <div className="why-us-right">
          <h3>Votre Succès, Notre Mission</h3>
          <p>Avec plus de 10 ans d'expérience, nous sommes votre partenaire de confiance pour réussir votre projet d'immigration en Italie.</p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clients Satisfaits</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Taux de Réussite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;