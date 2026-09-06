import paths from "@absolute/config";
import { Galery } from "@components";
import stylesSheet from "./portfolio.module.css";
import appData from "@absolute/data/data";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../not-found";
export default function Portfolio() {
  const { projectId } = useParams();
  const { history } = paths();

  const project = appData.historys.find((p) => {
    return p["id"] == projectId;
  });
  const backgroundPath = `${history}/${project["from-service"]}/${project["gallery"]["name"]}`;
  const hydrateGalleryAndList = ()=>{
    const ListImages = [];
    const gallery = [];
    for (let index = 1; index <= project["gallery"]["total-items"]; index++) {
      const element = {
        url:`${backgroundPath}/image_${index}.png`,
        alt:"imagen referencia"
      };
      ListImages.push(element);
      
    }
    gallery.push({
      "model-name":"default",
      items:ListImages
    });
    return {ListImages,gallery}
  }

  if (!project) return <NotFoundPage />;

  return (
    <section className={stylesSheet["content-service"]}>
      <div className={stylesSheet["content-image-service"]}>
        <img src={`${backgroundPath}/background.png`} alt="imagen del servicio" />
      </div>
      <div className={stylesSheet["project-container"]}>
        <section className={stylesSheet["description-service-content"]}>
          {project["details"].map((d) => (
            <p>{d}</p>
          ))}
        </section>

        <section className={stylesSheet["galery-container"]}>
          <Galery {...hydrateGalleryAndList()}/>
        </section>
      </div>
    </section>
  );
}
