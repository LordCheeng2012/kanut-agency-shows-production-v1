import GaleryItem from "@components/galery-item";
import styles from "./galery.module.css";
import GetModelGalery from "@absolute/services";
import GridContainer from "@components/grid-container";

function Galery({ serviceName }) {
  const ListGalery = GetModelGalery(serviceName);
  console.log(ListGalery);
  return (
    <div className={styles["gallery-container"]}>
      {ListGalery.map((model) => {
        const items = model["items"];
        const nameModel = model["model-name"];
        return (
          <GridContainer modelName={nameModel}>
            {items.map((item) => {
              if (Array.isArray(item))
                return (
                  <GridContainer modelName="apilate">
                    {item.map(({ url, alt }) => (
                      <GaleryItem path={url} alt={alt} />
                    ))}

                  </GridContainer>
                );
              const {url,alt} = item;  
              return <GaleryItem path={url} alt={alt} />;
            })}
          </GridContainer>
        );
      })}
    </div>
  );
}

export default Galery;
