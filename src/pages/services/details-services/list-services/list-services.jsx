import { useServices } from "@absolute/hooks";

import styles from  "./list-services.module.css";
import { Container } from "@components";
import {Paths} from "@utils/index";
export default function ListServices() {
  const { services } =Paths()
  
  const { Allservices, Loadservice } = useServices();
  const details = Loadservice["details"][1];
  return (
    <Container className={styles["list-services-container"]} size="full">
      <section className={styles["section-controller"]}>
        {Allservices.slice(0, 3).map((service) => {
          const name = service["name"];
          const isSelectService = Loadservice["name"] === name;
          const pathImage = `${services}/${name}`;
          const active = `${pathImage}/active.webp`
          const item = `${pathImage}/item.webp`
          return (
        
              <a
                className={`${styles[`item-service-option`]} ${styles[`border-${name}`]} ${isSelectService && styles[`selected-${name}`]}`}
                href={`./Service?serviceType=${name}`}
              >
                <img
                  onMouseEnter={(e) => e.currentTarget.src = active}
                  onMouseLeave={(e) => e.currentTarget.src = item}
                  onLoad={(e)=> isSelectService ? e.currentTarget.src = active : undefined }
                  src={item}
                  alt=""
                />
              </a>

          );
        })}
      </section>

      <div className={styles["content-information"]}>
        {details["descriptions"].map((d) => (
          <p className="description">{d}</p>
        ))}
        <p className="description signature">{details["summary"]}</p>
      </div>
    </Container>
  );
}
