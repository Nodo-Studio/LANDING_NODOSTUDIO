import React from 'react';
import './content-section.scss';

// Definimos la forma que tendrán los datos de contenido que recibirá el componente
interface Content {
  title: string;
  description?: string;
  type?: string;
  banner_image?: string;
  images?: string[];
}

// Definimos las props del componente: un 'id' para el scroll y el objeto 'content'
interface ContentSectionProps {
  id: string;
  content: Content;
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, content }) => {
  return (
    // La 'section' principal con su ID para la navegación y la clase para el observer
    <section id={id} className="section content-section">
      {content.banner_image && (
        <div className="content-banner" style={{ backgroundImage: `url(${content.banner_image})` }}></div>
      )}
      <div className="content-wrapper">
        {content.type && <span className="content-type">{content.type}</span>}
        {content.title && <h2 className="content-title">{content.title}</h2>}
        {content.description && <p className="content-description">{content.description}</p>}
      </div>

    </section>
  );
};

export default ContentSection;
