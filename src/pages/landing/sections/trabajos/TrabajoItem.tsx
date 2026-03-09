import React from 'react';
import './trabajo-item.scss';
import trabajosData from '../../../../data/trabajos-content.json';
import { useScrollReveal } from '../../../../hooks/useScrollReveal';

interface TrabajoContent {
  index: string;
  type: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  roles: string[];
  images: string[];
  palette: string[];
  quote: string;
  clientName: string;
  clientImage: string;
}

interface TrabajoItemProps {
  id: string;
}

const TrabajoItem: React.FC<TrabajoItemProps> = ({ id }) => {
  const content = trabajosData.trabajos[id as keyof typeof trabajosData.trabajos] as TrabajoContent;
  const topRef = useScrollReveal();
  const headerRef = useScrollReveal();
  const metaRef = useScrollReveal();
  const imagesRef = useScrollReveal();
  const quoteRef = useScrollReveal();

  if (!content) return null;

  return (
    <section id={id} className="section trabajo-item">
      <div ref={topRef as React.RefObject<HTMLDivElement>} className="trabajo-top anim-scroll">
        <div className="trabajo-top-nav">
          <span className="trabajo-index">({content.index})</span>
          <button className="trabajo-explorar">Explorar</button>
        </div>
      </div>

      <div ref={headerRef as React.RefObject<HTMLDivElement>} className="trabajo-header anim-scroll">
        <div className="trabajo-header-left">
          <h2 className="trabajo-title">{content.title}</h2>
        </div>
        <div className="trabajo-header-right">
          <p className="trabajo-description">{content.description}</p>
        </div>
      </div>

      <div ref={metaRef as React.RefObject<HTMLDivElement>} className="trabajo-meta anim-scroll">
        <span className="trabajo-year">{content.year}</span>
        <span className="trabajo-separator">·</span>
        <span className="trabajo-type">{content.type}</span>
        <span className="trabajo-separator">·</span>
        <div className="trabajo-roles">
          {content.roles.map((role, i) => (
            <span key={i} className="trabajo-role">
              {role}
            </span>
          ))}
        </div>
      </div>

      <div ref={imagesRef as React.RefObject<HTMLDivElement>} className="trabajo-images anim-scroll">
        {content.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`trabajo-img
  trabajo-img--${i}`}
          />
        ))}
      </div>

      <div className="trabajo-tags">
        {content.tags.map((tag, i) => (
          <span key={i} className="trabajo-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="trabajo-palette">
        {content.palette.map((color, i) => (
          <div
            key={i}
            className="trabajo-palette-swatch"
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>

      <blockquote ref={quoteRef as React.RefObject<HTMLQuoteElement>} className="trabajo-quote anim-scroll">
        <img src={content.clientImage} alt={content.clientName} className="trabajo-quote-avatar" />
        <div className="trabajo-quote-body">
          <p className="trabajo-quote-text">"{content.quote}"</p>
          <span className="trabajo-quote-name">{content.clientName}</span>
        </div>
      </blockquote>
    </section>
  );
};

export default TrabajoItem;
