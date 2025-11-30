import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: '🎓',
    title: 'Visa Étudiant',
    description: 'Accompagnement complet pour étudier dans les meilleures universités italiennes.'
  },
  {
    icon: '💼',
    title: 'Permis de Travail',
    description: 'Solutions professionnelles pour votre carrière en Italie.'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Regroupement Familial',
    description: 'Réunissez votre famille en Italie en toute simplicité.'
  }
];

function Services() {
  return (
    <section className="services-section">
      <h2>Nos Services</h2>
      <p className="section-subtitle">Des solutions complètes pour votre projet d'immigration en Italie</p>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;