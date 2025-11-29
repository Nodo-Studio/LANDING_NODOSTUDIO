import React from 'react';
import './hero.scss';
import data from '../../../../data/landing-content.json';

const HeroSection: React.FC = () => {
  const content = data.content_blocks['inicio'];

  if (!content) return null;

  return (
    <section id="inicio" className="section hero-section">
      {content.banner_image && <div className="hero-banner"></div>}
      <div className="hero-wrapper">
        {content.title && <h1 className="hero-title">{content.title}</h1>}
      </div>
    </section>
  );
};

export default HeroSection;
