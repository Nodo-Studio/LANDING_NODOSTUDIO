import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import ContentSection from './sections/ContentSection'; // 1. Importa el componente genérico
import { useActiveSection } from '../../hooks/useActiveSection';

import data from '../../data/landing-content.json';

import './landing.scss';

const Landing: React.FC = () => {
  // Llama al hook para saber qué sección está activa
  const activeSection = useActiveSection();

  const { sections, content_blocks } = data;

  return (
    <>
      <Header />
      <div className="landing-container">
        <Sidebar sections={sections} activeSection={activeSection} />
        <main className="landing-main">
          {/* Mapea dinámicamente las secciones para renderizarlas */}
          {sections.map((section) => {
            // Si la sección NO tiene sub-items (como 'Inicio' o 'Contacto')...
            if (!section.subItems) {
              const content = content_blocks[section.id];
              return <ContentSection key={section.id} id={section.id} content={content} />;
            }
            // Si la sección SÍ tiene sub-items (como 'Servicios' o 'Trabajos')...
            else {
              // ...mapea también los sub-items para renderizar una sección por cada uno.
              return section.subItems.map((subItem) => {
                const content = content_blocks[subItem.id];
                return <ContentSection key={subItem.id} id={subItem.id} content={content} />;
             });
            }
          })}
        </main>
      </div>
    </>
  );
};

export default Landing;
