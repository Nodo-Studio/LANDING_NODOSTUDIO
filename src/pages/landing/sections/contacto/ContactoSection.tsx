import React from 'react';
import './contacto.scss';
import data from '../../../../data/landing-content.json';

const ContactoSection: React.FC = () => {
  const content = data.content_blocks['contacto'];

  if (!content) return null;

  return (
    <section id="contacto" className="section contacto-section">
      <div className="contacto-wrapper">
        {content.title && <h2 className="section-title">{content.title}</h2>}
        {content.description && <p className="contacto-description">{content.description}</p>}
      </div>
    </section>
  );
};

export default ContactoSection;
