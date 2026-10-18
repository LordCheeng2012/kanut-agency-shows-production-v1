import styles from "./our-services.module.css";
import stylesParent from "../../../footer.module.css"
import { useServices } from "@absolute/hooks";


function OurServices({className=""}) {
  const {Allservices} = useServices();

  return (
    <div
      className={`${className} ${styles["our-services-section"]}`}
    >
      <h2>NUESTROS SERVICIOS</h2>
      <section>
        <div className={styles["service-list"]}>
          {Allservices.map((s) => (
            <p className={stylesParent["option"]}>{s["name"]}</p>
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