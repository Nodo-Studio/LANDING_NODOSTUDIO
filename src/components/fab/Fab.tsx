import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './fab.scss';

const Fab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fab-container">
      <a
        className="fab-btn fab-btn--whatsapp"
        href="https://wa.me/573123250664"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <button
        className={`fab-btn fab-btn--top${visible ? ' fab-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver al inicio"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Fab;
