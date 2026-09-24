import { useServices } from "@absolute/hooks";
import paths from "@absolute/config";
import "./interface-service.css";
export const InterfaceService = () => {
  const { services } = paths();
  const { Allservices } = useServices();

  return (
    <section className="section-controller">
      {Allservices.slice(0,3).map((service) => {
        const name = service["name"]
        return (
          <div className={`item-service-option border-${name}`}>
            <a
              className="i-s-o-option"
              href={`./Service?serviceType=${name}`}
            >
              <img src={`${services}/${name}.png`} alt="" />
            </a>
          </div>
        );
      })}
    </section>
  );
};
