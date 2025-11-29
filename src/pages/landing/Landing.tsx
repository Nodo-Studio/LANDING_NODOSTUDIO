import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useActiveSection } from '../../hooks/useActiveSection';
import navData from '../../data/landing-content.json';

// Importa los componentes de sección y los nuevos items individuales
import HeroSection from './sections/hero/HeroSection';
import ContactoSection from './sections/contacto/ContactoSection';
import ServicioItem from './sections/servicios/ServicioItem';
import TrabajoItem from './sections/trabajos/TrabajoItem';

import './landing.scss';
import SliderHero from './sections/hero/components/SliderHero';

const Landing: React.FC = () => {
  const activeSection = useActiveSection();
  const { sections } = navData; // Solo necesitamos las secciones para el sidebar y para mapear

  return (
    <>
      <Header />
      <SliderHero />
      <main className="landing-main">
        <Sidebar sections={sections} activeSection={activeSection} />
        <div className="section-wrapper">
          <section id="inicio" className="section">
            <HeroSection />
          </section>

          <section id="servicios" className="section">
            {/* Mapea y renderiza un componente por cada SERVICIO */}
            {sections
              .find((sec) => sec.id === 'servicios')
              ?.subItems?.map((subItem) => (
                <ServicioItem key={subItem.id} id={subItem.id} />
              ))}
          </section>
          <section id="trabajos" className="section">
            {/* Mapea y renderiza un componente por cada TRABAJO */}
            {sections
              .find((sec) => sec.id === 'trabajos')
              ?.subItems?.map((subItem) => (
                <TrabajoItem key={subItem.id} id={subItem.id} />
              ))}
          </section>
          <ContactoSection />
        </div>
      </main>
    </>
  );
};

export default Landing;
