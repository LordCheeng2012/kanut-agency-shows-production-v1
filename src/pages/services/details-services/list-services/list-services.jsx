import { useServices } from "@absolute/hooks";
import paths from "@absolute/config";
import "./list-services.css";
import { Container } from "@components";
export default function ListServices() {
  const { services } = paths();
  const { Allservices, Loadservice } = useServices();
  const details = Loadservice["details"][1];
  return (
    <Container className="list-services-container" size="full">
      <section className="section-controller">
        {Allservices.slice(0, 3).map((service) => {
          const name = service["name"];
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
     
        <div className="content-information">
          {details["descriptions"].map((d) => (
            <p className="description">{d}</p>
          ))}
          <p className="description signature">{details["summary"]}</p>
      </div>
    </Container>
  );
}
