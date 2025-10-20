import { useState, useEffect } from 'react';

/**
 * Un custom hook que detecta qué sección de la página está actualmente
 * visible en el centro de la pantalla.
 * @returns El ID de la sección activa.
*/
export const useActiveSection = (): string => {
   const [activeSection, setActiveSection] = useState<string>('inicio');

   useEffect(() => {
     const sections = document.querySelectorAll('.section');

     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
          if (entry.isIntersecting) {
             setActiveSection(entry.target.id);
           }
         });
       },
       {
         rootMargin: '-50% 0px -50% 0px',
         threshold: 0, // Se activa en cuanto un píxel es visible dentro del rootMargin.
       }
     );
    sections.forEach((section) => {
       observer.observe(section);
     });

     return () => {
       sections.forEach((section) => {
         observer.unobserve(section);
       });
     };
   }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez.

   return activeSection;
};
