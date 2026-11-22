import { useState } from "react";
import { deploy, close, DrowItem } from "./drop-down-item/drop-down-item.jsx";
import kanut from "@imgs/kanut.png";
import styles from "./header.module.css";
import { Separator } from "@components";

function Header() {
  const [desplegableItem, setDesplegableItem] = useState(DrowItem);
  const mobile = (
    <>
      <Separator />
      <Separator />
      <Separator />
    </>
  );
  const desktop = (
    <nav className={`${styles["item-header"]} kanut-subtitle-light`}>
      <a href="/Home" className={styles["item-list"]}>
        <p>Inicio</p>
        <div className={styles["line-link"]} />
      </a>

      <a href="/about" className={styles["item-list"]}>
        <p>Nosotros</p>
        <div className={styles["line-link"]} />
      </a>

      <div
        className={styles["item-list"]}
        data-drop-down-menu
        onMouseEnter={(e) => deploy({ e, seteableState: setDesplegableItem })}
        onMouseLeave={(e) => close({ e, seteableState: setDesplegableItem })}
      >
        <p>Servicios</p>
        <div className={styles["disabled"]} />
        {desplegableItem}
      </div>

      <a href="/Contact" className={styles["item-list"]}>
        <p>Contactenos</p>
        <div className={styles["line-link"]} />
      </a>

      <a href="/bolsa" className={styles["item-list"]}>
        <p>Bolsa de trabajo</p>
        <div className={styles["line-link"]} />
      </a>

      <a
        href="https://walink.co/x856dy"
        className={`${styles["item-list"]} ${styles["btn-whatsap"]}`}
      >
        <i className="fa fa-whatsapp"></i>
        <p className="i-l-wsp kanut-subtitle">WhatsApp</p>
      </a>
    </nav>
  );
 
   const [Nav, setNav] = useState(desktop);
  return (
    <header>
      <div className={styles["item-header"]}>
        <a href="./">
          <img src={kanut} alt="kanut logo principal" className={styles.icon} />
        </a>
      </div>
      <a className={styles["hamburger"]} onClick={() => setNav(desktop)}>
        {Nav}
      </a>
    </header>
  );
}

export default Header;
