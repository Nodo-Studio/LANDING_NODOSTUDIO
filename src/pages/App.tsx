import React from 'react'
import { useDocumentHead } from '../hooks/useDocumentHead'
import Construccion from './construccion/Construction'
import Header from '../components/header/Header'

import './app.scss'

const App: React.FC = () => {
  // SEO base para toda la aplicación
  useDocumentHead({
    title: 'Inicio - Desarrollo de Software que Crece con tu Negocio',
    description: 'Metodología en espiral que prioriza la gestión de riesgos y escalabilidad. Fragmentamos proyectos por funcionalidades entregables cada 2 semanas.',
    keywords: 'desarrollo software escalable, metodología espiral, aplicaciones web PYMEs, sistemas información Bogotá',
    ogTitle: 'NodoStudio - Software que Crece con tu Negocio',
    ogDescription: 'Transformamos la incertidumbre en confianza con nuestra metodología única.',
    ogImage: 'https://nodostudio.com.co/images/og-image-home.jpg', // ← Imagen específica para Home
    ogType: 'website',
    canonical: 'https://nodostudio.com.co'
  })

  return (
    <>
      <div className='container-app'>
        <Header />
        <Construccion />
      </div>
    </>
  )
}

export default App
