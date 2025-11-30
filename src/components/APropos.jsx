import React from 'react';
import './APropos.css';

const APropos = () => {
  return (
    <section className="a-propos" id="apropos">
      <div className="a-propos-container">
        
        {/* En-tête */}
        <div className="a-propos-header">
          <h1>À Propos de Nous</h1>
          <p className="a-propos-subtitle">
            Votre partenaire de confiance pour réussir votre immigration en Italie
          </p>
        </div>

        {/* Notre Histoire */}
        <div className="a-propos-section">
          <div className="a-propos-content">
            <h2>Notre Histoire</h2>
            <div className="a-propos-text">
              <p>
                Fondée en 2014, ItalyVisa est née de la passion de faciliter les rêves 
                d'immigration vers l'Italie. Nos fondateurs, ayant eux-mêmes vécu l'expérience 
                de l'immigration, comprennent parfaitement les défis et les opportunités 
                qui attendent nos clients.
              </p>
              <p>
                Au fil des années, nous avons aidé plus de 500 personnes à réaliser leur 
                rêve italien, que ce soit pour étudier dans des universités prestigieuses, 
                développer leur carrière professionnelle, ou rejoindre leurs familles.
              </p>
              <p>
                Notre équipe multilingue et multiculturelle apporte une compréhension 
                unique des besoins spécifiques de chaque client, garantissant un service 
                personnalisé et efficace.
              </p>
            </div>
          </div>
        </div>

        {/* Notre Impact */}
        <div className="impact-section">
          <h2>Notre Impact</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Accompagnés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Taux de Réussite</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Années d'Expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Experts Diplômés</div>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Expertise</h3>
              <p>Une connaissance approfondie des lois sur l'immigration italienne</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Transparence</h3>
              <p>Des honoraires clairs et aucune surprise</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Accompagnement</h3>
              <p>Suivi personnalisé à chaque étape de votre projet</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Réussite</h3>
              <p>Un taux de succès exceptionnel pour nos clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default APropos;