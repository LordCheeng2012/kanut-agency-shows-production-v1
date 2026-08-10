import "./interface-service.css";
import { ServiceContext } from "@absolute/context/services";
import { useContext } from "react";
import { paths } from "@absolute/config/config";
export const InterfaceService = () => {
  const { services } = paths();
  const { getPrimaryServices } = useContext(ServiceContext);

  return (
    <section className="section-controller">
      {getPrimaryServices().map((service) => {
        return (
          <div className={`item-service-option border-${service}`}>
            <a
              className="i-s-o-option"
              href={`./Service?serviceType=${service}`}
            >
              <img src={`${services}/${service}.png`} alt="" />
            </a>
          </div>
        );
      })}
    </section>
  );
};
