import { useState } from "react";
import "./Header.css";
import { deploy, close } from "./drop-down-item/drop-down-item.jsx";
export const Header = () => {
  const [desplegableItem, setDesplegableItem] = useState(null);
  return (
    <header>
      <div className="icon item-header">
        <div className="icon-img"></div>
      </div>
      <nav className="navbar item-header">
        <li className="list-options kanut-subtitle-light">
          <a href="/Home" className="item-list">
            <p>Inicio</p>
            <div className="line-link" />
          </a>
          <a 
           href="/about"
           className="item-list">
            <p>Nosotros</p>
            <div className="line-link" />
          </a>
          <a
            href="/Service"
            className="item-list"
            data-drop-down-menu
            onClick={(e)=>e.preventDefault()}
            onMouseEnter={(e) =>deploy({e,seteableState: setDesplegableItem})}
            onMouseLeave={(e)=>close({e,seteableState:setDesplegableItem})}
          >
            <p>Servicios</p>
            <div className="disabled" />
            {desplegableItem}
          </a>
          <a href="/Contact" className="item-list">
            <p>Contactenos</p>
            <div className="line-link" />
          </a>
          <a href="/bolsa" className="item-list">
            <p>Bolsa de trabajo</p>
            <div className="line-link" />
          </a>
          <a href="" className="item-list btn-whatsap">
            <i className="fa fa-whatsapp"></i>
            <p className="i-l-wsp kanut-subtitle"> whatsap</p>
          </a>
        </li>
      </nav>
    </header>
  );
};
