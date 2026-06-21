import './Header.css';

export const Header = () => {
  return (
    <header className="header">

      {/* Logo */}
      <a href="/Home" className="icon item-header">
        <div className="icon-img"></div>
      </a>

      {/* Navegación */}
      <nav className="navbar item-header">
        <ul className="list-options kanut-subtitle-light">

          <li>
            <a href="/Home" className="item-list">
              INICIO
            </a>
          </li>

          <li>
            <a href="/about" className="item-list">
              NOSOTROS
            </a>
          </li>

          <li>
            <a href="/Service" className="item-list">
              SERVICIOS
            </a>
          </li>

          <li>
            <a href="/Contact" className="item-list">
              CONTÁCTENOS
            </a>
          </li>

          <li>
            <a href="/bolsa" className="item-list">
              BOLSA DE TRABAJO
            </a>
          </li>

        </ul>
      </nav>

      {/* WhatsApp */}
      <a
        href="#"
        className="btn-whatsap item-list"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

    </header>
  );
};