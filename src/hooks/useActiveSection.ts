import { useState, useEffect } from 'react';

/**
 * Un custom hook que detecta qué sección de la página está actualmente
 * visible en el centro de la pantalla.
 * @returns El ID de la sección activa.
 */

export const useActiveSection = (): string => {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('.section[id]');
      const sectionsArray = Array.from(sections);

      if (sectionsArray.length === 0) return;

      // Si la página llegó al fondo, activa la última sección
      const isAtBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection(sectionsArray[sectionsArray.length - 1].id);
        return;
      }

      let current = '';
      sectionsArray.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};
