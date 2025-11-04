import React from 'react';
import './trabajo-item.scss';
import trabajosData from '../../../../data/trabajos-content.json';

interface TrabajoItemProps {
  id: string;
}

const TrabajoItem: React.FC<TrabajoItemProps> = ({ id }) => {
  const content = trabajosData.trabajos[id];

  if (!content) return null;

  // Aquí puedes construir un layout mucho más complejo para cada trabajo
  return (
    <section id={id} className="section trabajo-item">
      <div className="content-wrapper">
        {content.type && <span className="content-type">{content.type}</span>}
        {content.title && <h2 className="content-title">{content.title}</h2>}
        {content.description && <p className="content-description">{content.description}</p>}
        {/* Por ejemplo, podrías añadir una galería de imágenes aquí */}
      </div>
    </section>
  );
};

export default TrabajoItem;
