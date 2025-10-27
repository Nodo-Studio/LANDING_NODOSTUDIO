import React from 'react';
import './servicios.scss';
import servicesData from '../../../../data/servicios-content.json'; // Importa el JSON de servicios
import navData from '../../../../data/landing-content.json'; // Importa el JSON principal para la navegación

const ServiciosSection: React.FC = () => {
  // Usamos el JSON principal solo para saber qué IDs de servicios mostrar y en qué orden
  const serviciosIds = navData.sections.find((sec) => sec.id === 'servicios')?.subItems?.map((sub) => sub.id);

  if (!serviciosIds) return null;

  return (
    <section id="servicios" className="section servicios-section">
      <div className="servicios-wrapper">
        <h2 className="section-title">Servicios</h2>
        <div className="servicios-list">
          {serviciosIds.map((id) => {
            // El contenido se busca en el nuevo JSON de servicios
            const content = servicesData.servicios[id];
            if (!content) return null;

            return (
              <article key={id} id={id} className="servicio-item">
                {content.type && <span className="servicio-type">{content.type}</span>}
                {content.title && <h3 className="servicio-title">{content.title}</h3>}
                {content.description && <p className="servicio-description">{content.description}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
