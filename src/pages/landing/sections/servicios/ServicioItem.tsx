import React from 'react';
import './servicio-item.scss';
import servicesData from '../../../../data/servicios-content.json';

interface ServicioItemProps {
  id: string;
}

const ServicioItem: React.FC<ServicioItemProps> = ({ id }) => {
  const content = servicesData.servicios[id];

  if (!content) return null;

  return (
    <section id={id} className="section servicio-item">
      <div className="content-wrapper">
        {content.type && <span className="content-type">{content.type}</span>}
        {content.title && <h2 className="content-title">{content.title}</h2>}
        {content.description && <p className="content-description">{content.description}</p>}
      </div>
    </section>
  );
};

export default ServicioItem;
