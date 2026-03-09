import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p className="footer-copy">
          © {new Date().getFullYear()} NodoStudio. Todos los derechos reservados.
        </p>

        <ul className="footer-social">
          <li>
            <a
              href="https://wa.me/573013945378"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/nodostudio"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/nodostudio"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/nodostudio"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
