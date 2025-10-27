import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useActiveSection } from '../../hooks/useActiveSection';
import navData from '../../data/landing-content.json';

// Importa los componentes de sección principales
import HeroSection from './sections/hero/HeroSection';
import ServiciosSection from './sections/servicios/ServiciosSection';
import TrabajosSection from './sections/trabajos/TrabajosSection';
import ContactoSection from './sections/contacto/ContactoSection';

import './landing.scss';

const Landing: React.FC = () => {
  const activeSection = useActiveSection();
  const { sections } = navData; // Solo necesitamos las secciones para el sidebar

  return (
    <>
      <Header />
      <div className="landing-container">
        <Sidebar sections={sections} activeSection={activeSection} />
        <main className="landing-main">
          {/* Renderiza los componentes de sección principales en orden */}
          <HeroSection />
          <ServiciosSection />
          <TrabajosSection />
          <ContactoSection />
        </main>
      </div>
    </>
  );
};

export default Landing;
