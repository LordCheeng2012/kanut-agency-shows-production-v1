import { useServices } from "@absolute/hooks";
import paths from "@absolute/config";
import "./interface-service.css";
export const InterfaceService = () => {
  const { services } = paths();
  const { getPrimaryServices } = useServices();

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
