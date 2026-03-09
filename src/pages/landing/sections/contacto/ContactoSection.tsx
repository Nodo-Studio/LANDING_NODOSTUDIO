import React from 'react';
import './contacto.scss';
import data from '../../../../data/landing-content.json';
import { useScrollReveal } from '../../../../hooks/useScrollReveal';

const ContactoSection: React.FC = () => {
  const content = data.content_blocks['contacto'];
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  if (!content) return null;

  return (
    <section id="contacto" className="section contacto-section">
      <div className="contacto-wrapper">
        <div ref={leftRef as React.RefObject<HTMLDivElement>} className="contacto-left anim-scroll">
          <h2 className="contacto-title">{content.title}</h2>
          <div className="contacto-info">
            <a href={`mailto:${content.email}`} className="contacto-link">
              {content.email}
            </a>
            <a href={`tel:${content.phone}`} className="contacto-link">
              {content.phone}
            </a>
            <div className="contacto-location">
              <span>{content.location}</span>
              <span className="contacto-availability">{content.availability}</span>
            </div>
          </div>
        </div>

        <div ref={rightRef as React.RefObject<HTMLDivElement>} className="contacto-right anim-scroll">
          <form className="contacto-form">
            <div className="contacto-form-row">
              <div className="contacto-field">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Tu nombre completo" />
              </div>
              <div className="contacto-field">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" placeholder="tu@correo.com" />
              </div>
            </div>
            <div className="contacto-field">
              <label htmlFor="telefono">Teléfono (opcional)</label>
              <input id="telefono" type="tel" placeholder="+57 300 000 0000" />
            </div>
            <div className="contacto-field">
              <label htmlFor="mensaje">¿En qué podemos ayudarte?</label>
              <textarea id="mensaje" rows={5} placeholder="Cuéntanos sobre tu proyecto..." />
            </div>
            <button type="submit" className="contacto-cta">
              {content.cta}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
