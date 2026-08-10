import { useState } from "react";
import "./Header.css";
import { deploy, close } from "./drop-down-item/drop-down-item.jsx";
import kanut from "@imgs/kanut.png"
export const Header = () => {
  const [desplegableItem, setDesplegableItem] = useState(null);
  return (
    <header>
      <div className="icon item-header">
       <a href="./">
        <img src= {kanut}alt="kanut logo principal" />
       </a>
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
          <div
            className="item-list"
            data-drop-down-menu
            onMouseEnter={(e) =>deploy({e,seteableState: setDesplegableItem})}
            onMouseLeave={(e)=>close({e,seteableState:setDesplegableItem})}
            >
            <p>Servicios</p>
            <div className="disabled" />
            {desplegableItem}
          </div>
          <a href="/Contact" className="item-list">
            <p>Contactenos</p>
            <div className="line-link" />
          </a>
          <a href="/bolsa" className="item-list">
            <p>Bolsa de trabajo</p>
            <div className="line-link" />
          </a>
          <a href="https://walink.co/x856dy" className="item-list btn-whatsap">
            <i className="fa fa-whatsapp"></i>
            <p className="i-l-wsp kanut-subtitle"> WhatsApp</p>
          </a>
        </li>
      </nav>
    </header>
  );
};
