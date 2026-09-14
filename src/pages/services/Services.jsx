import { InterfaceService } from "./interface-service/interface-service.jsx";
import { GaleryDetails } from "./service-details/GaleryDetails.jsx";
import { InformationService,Promotions}  from "./service-details";
import { useServices } from "@absolute/hooks";
import "./services.css";

export const Services = () => {
  const { service } = useServices();
  const { styles } = service;
  return (
    <section className={`p-content-service ${styles["class-name"]}`}>
      <div className="c-s-interface-service">
        <InterfaceService />
      </div>
      <div className="c-s-details-service">
        <section className="d-s-information-service">
        <InformationService/>
        </section>
        <section className="d-s-galery-service">
          <div className="d-s-content-galery-service">
            <GaleryDetails />
          </div>
        </section>
        <section className="d-s-promotions-service">
          <Promotions />
        </section>
      </div>
    </section>
  );
};
