import { useEffect, useState } from "react";
import { DrowItem } from "./drop-down-item/drop-down-item.jsx";
import kanut from "@imgs/kanut.png";
import styles from "./header.module.css";
import { ButtonCircle, Separator } from "@components";
import ArrowDropIcon from "@components/icons/arrow-drop-icon.jsx";

function Header() {
  const [desplegableItem, setDesplegableItem] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches,
  );

  const mobile = (
    <div className={`${styles["mobile-content"]}`}>
      <Separator space="md" />
      <Separator space="md" />
      <Separator space="md" />
    </div>
  );
  const desktop = (
    <nav className={`${styles["item-header"]} kanut-subtitle-light`}>
      <ButtonCircle
        size="medium"
        classname={`mb-hidden ${styles["close-menu-bar"]}`}
        onClick={(e) => {
         e.stopPropagation();
          setIsMobile(true);
        }}
      >
        X
      </ButtonCircle>
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
        onMouseEnter={() => setDesplegableItem(true)}
        onMouseLeave={() => setDesplegableItem(false)}
      >
        <p>
          Servicios
          <ArrowDropIcon className="mb-hidden"/>
        </p>
        <div className={styles["disabled"]} />
        {desplegableItem && <DrowItem />}
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

  useEffect(() => {
    const queryMedia = window.matchMedia("(max-width: 768px)");
    const updateView = (e) => setIsMobile(e.matches);
    queryMedia.addEventListener("change", updateView);
    return () => queryMedia.removeEventListener("change", updateView);
  }, []);

  return (
    <header>
      <div className={styles["item-header"]}>
        <a href="./">
          <img src={kanut} alt="kanut logo principal" className={styles.icon} />
        </a>
      </div>
      <div
        className={styles["hamburger"]}
        onClick={(e) =>setIsMobile(false)}
      >
        {isMobile ? mobile : desktop}
      </div>
    </header>
  );
}

export default Header;
