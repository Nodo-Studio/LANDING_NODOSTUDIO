import React from 'react';
import './servicio-item.scss';
import servicesData from '../../../../data/servicios-content.json';
import { useScrollReveal } from '../../../../hooks/useScrollReveal';

interface ServicioItemProps {
  id: string;
}

const ServicioItem: React.FC<ServicioItemProps> = ({ id }) => {
  const content = servicesData.servicios[id as keyof typeof servicesData.servicios];
  const headerRef = useScrollReveal();
  const imagesRef = useScrollReveal();
  const featuresRef = useScrollReveal();

  if (!content) return null;

  return (
    <section id={id} className="section servicio-item">
      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="servicio-header anim-scroll">
        {content.type && <span className="servicio-type">{content.type}</span>}
        {content.title && <h2 className="servicio-title">{content.title}</h2>}
        {content.description && <p className="servicio-description">{content.description}</p>}
      </div>

      {content.images && content.images.length > 0 && (
        <div ref={imagesRef as React.RefObject<HTMLDivElement>} className="servicio-images anim-scroll">
          {content.images.map((img, i) => (
            <img key={i} src={img} alt="" className="servicio-img" />
          ))}
        </div>
      )}

      {'features' in content && content.features && (
        <div ref={featuresRef as React.RefObject<HTMLDivElement>} className="servicio-features anim-scroll">
          {content.features.map((feature, i) => (
            <div key={i} className="servicio-feature-card">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicioItem;
