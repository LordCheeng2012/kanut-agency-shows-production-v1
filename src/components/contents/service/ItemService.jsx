import "./ItemService.css";
import { TitleService } from "./TitleService";
import { useContext } from "react";
import { ServiceContext } from "@absolute/context/services";
export default function ItemService({keyService}) {
  const { getServiceByName } = useContext(ServiceContext);
  const { name, styles, summary, comments, details } = getServiceByName(keyService);
  console.log(getServiceByName(keyService))
  return (
    <div className={`component-service`}>
      <TitleService
        serviceTitle={summary}
        classService={name}
        colorTitle={styles["color"]}
      />

      <p className="kanut-description-altern-vid s-description">{details.summary}</p>
      <p className="kanut-description-altern-strong-vid s-description s-d-comments">
        {comments}
      </p>

     
    </div>
  );
}
