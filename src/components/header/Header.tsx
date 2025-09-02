import './header.scss';

const Header = () => {
  return (
    <> 
      <header className='container-header'>
        <div className='container-header-logo' >
          <h4>NODOSTUDIO</h4>
        </div>
        <div className='container-header-nav' >
          <ul>
            <li>Whatsaap</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkeding</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
