import './Header.css'
export const Header = () => {
  return (
   <header>
    <div className='icon item-header'>
    <div className = 'icon-img'>
    </div>
    </div>  
     <nav className='navbar item-header'>
     <li className='list-options kanut-subtitle-light'>
     <a href="/Home" className="item-list">Inicio</a>
     <a href="/about" className="item-list">Nosotros</a>
     <a href="/Service" className="item-list">Servicios</a>
     <a href="/Contact" className="item-list">Contactenos</a>
     <a href="" className="item-list">Bolsa de trabajo</a>
     <a href="" className=' item-list btn-whatsap'> 
        <i className = "fa fa-whatsapp"></i>
        <p className='i-l-wsp kanut-subtitle'> whatsap</p>
      </a>
     </li>
    </nav>    
   </header>
  )
}
