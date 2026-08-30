import styles from "./our-services.module.css";
import stylesParent from "../../../footer.module.css"
import { useServices } from "@absolute/hooks";


function OurServices({className=""}) {
  const {getServices} = useServices();

  return (
    <div
      className={`${className} ${styles["our-services-section"]}`}
    >
      <h1 className="title-section">NUESTROS SERVICIOS</h1>
      <section>
        <div className={styles["service-list"]}>
          {getServices().map((s) => (
            <p className={stylesParent["option"]}>{s}</p>
          ))}
        </div>
      </section>
      <section>
        <a href="" className={stylesParent["option"]}>
          Explora el Portafolio
        </a>
        <a href="" className={stylesParent["option"]}>
          Organizamos tu evento
        </a>
        <a href="" className={stylesParent["option"]}>
          Trabaja con nostros
        </a>
      </section>
    </div>
  );
}
export default OurServices;