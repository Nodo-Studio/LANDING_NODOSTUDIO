import React from 'react';
import './trabajos.scss';
import trabajosData from '../../../../data/trabajos-content.json'; // Importa el JSON de trabajos
import navData from '../../../../data/landing-content.json'; // Importa el JSON principal para la navegación

const TrabajosSection: React.FC = () => {
  // Usamos el JSON principal solo para saber qué IDs de trabajos mostrar y en qué orden
  const trabajosIds = navData.sections.find((sec) => sec.id === 'trabajos')?.subItems?.map((sub) => sub.id);

  if (!trabajosIds) return null;

  return (
    <section id="trabajos" className="section trabajos-section">
      <div className="trabajos-wrapper">
        <h2 className="section-title">Trabajos</h2>
        <div className="trabajos-list">
          {trabajosIds.map((id) => {
            // El contenido se busca en el nuevo JSON de trabajos
            const content = trabajosData.trabajos[id];
            if (!content) return null;

            return (
              <article key={id} id={id} className="trabajo-item">
                {content.type && <span className="trabajo-type">{content.type}</span>}
                {content.title && <h3 className="trabajo-title">{content.title}</h3>}
                {content.description && <p className="trabajo-description">{content.description}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrabajosSection;
