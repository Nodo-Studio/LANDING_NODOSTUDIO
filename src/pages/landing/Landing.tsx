import Header from '../../components/header/Header.tsx'
import Home from './home/Home.tsx';
import Sidebar from '../../components/sidebar/Sidebar.tsx'; 
import Servicios from '../landing/servicios/Servicios.tsx';
import {useActiveSection} from '../../hooks/useActiveSection.ts';
import './landing.scss'

const Landing: React.FC = () => {

  const activeSection = useActiveSection()

  return ( 
  <>
    <Header />
    <div className="landing-container">
      <Sidebar activeSection={activeSection} />  
      <main className="landing-container-main"> 
        <Home />
        <Servicios />
      </main>
    </div>
  </>
  )
}

export default Landing
