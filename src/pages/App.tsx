import React from 'react';
import { useDocumentHead } from '../hooks/useDocumentHead';
import Landing from '../pages/landing/Landing.tsx';

import './app.scss';

const App: React.FC = () => {
  // SEO base para toda la aplicación
  useDocumentHead({
    title: 'Inicio - Desarrollo de Software que Crece con tu Negocio',
    description:
      'Metodología en espiral que prioriza la gestión de riesgos y escalabilidad. Fragmentamos proyectos por funcionalidades entregables cada 2 semanas.',
    keywords:
      'NodoStudio, Nodo Studio, Nodo Estudio, desarrollo web Bogotá, páginas web Bogotá, software Colombia, desarrollo software Colombia, aplicaciones web Colombia, diseño web empresas,agencia digital Bogotá, software PYMEs, software PYMEs Colombia, desarrollo de software Bogotá, empresa de software Bogotá, agencia de desarrollo web Colombia, programadores Bogotá, desarrolladores web Bogotá, creación de páginas web Bogotá, diseño y desarrollo web Colombia, sistemas de información Bogotá, aplicaciones web a medida, software a medida Colombia, desarrollo de aplicaciones empresariales, software empresarial Colombia, soluciones digitales Colombia, transformación digital PYMEs, páginas web profesionales Colombia, desarrollo frontend Bogotá, desarrollo backend Bogotá, React Colombia, aplicaciones web escalables, software escalable Colombia, agencia tecnológica Bogotá, startup tecnológica Colombia, consultoría tecnológica Bogotá, metodología ágil Colombia, desarrollo ágil Bogotá',
    ogTitle: 'NodoStudio - Software que Crece con tu Negocio',
    ogDescription: 'Transformamos la incertidumbre en confianza con nuestra metodología.',
    ogImage: 'https://nodostudio.com.co/images/og-image-home.jpg',
    ogType: 'website',
    canonical: 'https://nodostudio.com.co',
  });

  return (
    <>
      <div className="container-app">
        <Landing />
      </div>
    </>
  );
};

export default App;
