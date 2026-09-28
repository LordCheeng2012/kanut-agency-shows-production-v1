import { useServices } from "@absolute/hooks";
import "./ItemService.css";
import { TitleService } from "./TitleService";
export default function ItemService({keyService}) {
  const { getServiceByName } = useServices();
  const { name, styles, summary, comments, details } = getServiceByName(keyService);
  const detail = details[0];
  return (
    <div className={`component-service`}>
      <TitleService
        serviceTitle={summary}
        classService={name}
        colorTitle={styles["color"]}
      />

      <p className="kanut-description-altern-vid s-description">{detail.summary}</p>
      <p className="kanut-description-altern-strong-vid s-description s-d-comments">
        {comments}
      </p>

     
    </div>
  );
}
