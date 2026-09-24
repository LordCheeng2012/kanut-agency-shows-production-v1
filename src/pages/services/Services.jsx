import { InterfaceService } from "./interface-service/interface-service.jsx";
import { InformationService,Promotions}  from "./service-details";
import { useServices } from "@absolute/hooks";
import "./services.css";
import { Galery } from "@components";

export const Services = () => {
  const { styles } = useServices().Loadservice;
  return (
    <section className={`p-content-service ${styles["primary-class"]}`}>
      <div className="c-s-interface-service">
        <InformationService/>
      </div>
      <div className="c-s-details-service">
        <section className="d-s-information-service">
        <InterfaceService />
        </section>
        <section className="d-s-galery-service">
           <Galery/>
        </section>
        <section className="d-s-promotions-service">
          <Promotions />
        </section>
      </div>
    </section>
  );
};
