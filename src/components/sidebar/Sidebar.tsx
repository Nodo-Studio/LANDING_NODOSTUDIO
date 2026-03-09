import React from 'react';
import './sidebar.scss';

// Define la estructura de los datos que el componente espera recibir
interface Section {
  id: string;
  title: string;
  subItems?: { id: string; title: string }[];
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection }) => {
  // Función para determinar si una sección principal está "activa"
  // (ya sea ella misma o uno de sus hijos)
  const isParentActive = (section: Section): boolean => {
    if (activeSection === section.id) return true;
    return section.subItems?.some((sub) => activeSection === sub.id) || false;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'inicio') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar-container">
      <nav className="sidebar-container-nav">
        <div>
          <ul>
            {/* Mapea la estructura de navegación desde el JSON */}
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={isParentActive(section) ? 'active parent' : ''}
                  onClick={(e) => handleClick(e, section.id)}
                >
                  {section.title}
                </a>

                {/* Si la sección tiene sub-items Y está activa, muestra la sub-lista */}
                {isParentActive(section) && section.subItems && (
                  <ul className="sub-nav">
                    {section.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <a
                          href={`#${subItem.id}`}
                          className={activeSection === subItem.id ? 'active' : ''}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="button-contact">
          <button
            className={activeSection === 'contacto' ? 'active' : ''}
            onClick={() =>
              document.getElementById('contacto')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            CONTACTO
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
