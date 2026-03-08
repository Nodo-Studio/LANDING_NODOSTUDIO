import React from 'react';
import './hero.scss';
import data from '../../../../data/landing-content.json';
import { PiUserSwitchFill, PiShieldCheckBold, PiGitForkDuotone } from 'react-icons/pi';

const HeroSection: React.FC = () => {
  const content = data.content_blocks['inicio'];

  if (!content) return null;

  return (
    <section id="inicio" className="hero-section containerSection">
      {content.banner_image && <div className="hero-banner"></div>}
      <div className="hero-wrapper">
        <section className="hero-wrapper-title">
          {content.title && <h1 className="hero-title">{content.title}</h1>}
          <h3 className="hero-subtitle">{content.subtitle}</h3>
        </section>
        <section className="hero-wrapper-cards">
          <div className="hero-wrapper-cards-content">
            <div>
              <span>
                <PiUserSwitchFill />
              </span>
              <h3>Metodología en Espiral</h3>
            </div>
            <p>
              Gestión proactiva de riesgos desde la conceptualización. Entregas cada 2 semanas con
              progreso verificable.
            </p>
          </div>
          <div className="hero-wrapper-cards-content">
            <span>
              <PiShieldCheckBold />
            </span>

            <h3>Transparencia Total</h3>
            <p>
              Participas activamente en cada decisión. Visibilidad completa del proceso, costos y
              timeline real.
            </p>
          </div>
          <div className="hero-wrapper-cards-content">
            <span>
              <PiGitForkDuotone />
            </span>
            <h3>Escalabilidad Inteligente</h3>
            <p>
              Arquitecturas que crecen contigo. Tecnologías modernas que permiten evolución sin
              reconstrucción.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
