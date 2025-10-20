import React from 'react';
import './sidebar.scss';

// 1. Define las props que el componente recibirá
interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
const sections = ['Inicio', 'Servicios', 'Trabajos', 'Contacto'];

  return (
   <aside className="sidebar-container">
     <nav className="sidebar-container-nav">
       <ul>
         {sections.map((section) => {
           const sectionId = section.toLowerCase();
            // 2. Comprueba si esta es la sección activa
           const isActive = activeSection === sectionId;
             return (
               <li key={section}>
               {/* 3. Aplica la clase 'active' dinámicamente */}
                <a
                  href={`#${sectionId}`}
                  className={isActive ? 'active' : ''}
                >
                 {section}
                </a>
              </li>
           );
         })}
        </ul>
     </nav>
    </aside>
 );
};

export default Sidebar;
