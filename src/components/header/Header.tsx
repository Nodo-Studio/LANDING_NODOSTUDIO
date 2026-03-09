import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.scss';
import { useState, useEffect } from 'react';
import navData from '../../data/landing-content.json';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { sections } = navData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <header className={`container-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container-header-logo">
          <h4>NODOSTUDIO</h4>
        </div>
        <div className="container-header-nav">
          <ul>
            <li>
              <a href="https://wa.me/573013945378" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/nodostudio" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/nodostudio" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/nodostudio" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <button className="container-header-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu-nav">
          {sections.map((section) => (
            <a key={section.id} onClick={() => handleNavClick(section.id)}>
              {section.title}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-social">
          <a href="https://wa.me/573013945378" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com/nodostudio" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/nodostudio" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/nodostudio" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
