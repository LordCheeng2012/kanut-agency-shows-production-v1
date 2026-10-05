import { Button, Container, Separator,Image } from "@components";
import styles from "./promotion-item.module.css";
import PriceParse from "@utils/price-parse";
import {Paths} from "@utils/index";
const {promotions} =Paths();
function PromotionItem({
  promotion = null,
  color_buttom = "",
  service = null,
}) {
  if (!promotion || !service)
    return console.error(
      "no existe la promocion o no se tiene la data nesesaria",
    );
  const { id, path, summary, includes, price } = promotion;

  let cont = "";
  const numberPromotion = () => {
    for (let index = 0; index < id; index++) {
      cont += "/";
    }
    return cont;
  };
  return (
    <div className={styles["promotion_item__content"]}>
      <Container className={styles["section__title_promotion"]} size="block-md-lg">
        <h2
          className={`${styles["title__promotion"]} 
          ${service.name}-background-2
          ${service.name}-background-2-b-a
          ${service.name}-color-text-2
          ${service.name}-color-text-2-t-a`}
        >{`Promoción ${numberPromotion()}`}</h2>
        <Container size="block-md" >
          <Image className={styles["img-content-type"]} src={`${promotions}/${service.name}/${path}`} />
          <p className={`${styles["summary__promotion"]} details-altern center-text`}>{summary}</p>
        </Container>
      </Container>

      <div
        className={`${styles["description-promotion"]} ${service.name}-background-2`}
      >
        <h2
          className={`details-altern
            ${service.name}-style-text
            ${styles["include-title"]} 
            ${service.name}-subtitle 
            ${service.name}-background-3
            ${service.name}-color-text-4
            ${service.name}-border-2`}
        >
        Incluye:
        </h2>
        {includes.map((include) => {
          const { type, items } = include;
          return (
            <Container className={styles["includes-content"]} size="block-sm">
              <h2
                className={`${styles["type-category-section"]} ${service.name}-color-text-1`}
              >
                {type.toUpperCase()}
              </h2>
              <ul>
                {items.map((i) => {
                  const classItem = service.name + "-color-text-2";
                  return i["item-name"] ? (
                    <li className={classItem}>
                      {i["item-name"]}
                      <ul className={styles["sub-items-item"]}>
                        {i["sub-items"].map((si) => (
                          <li>{si}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className={classItem}>{i}</li>
                  );
                })}
              </ul>
              <Separator
                type="interrumped"
                classItems={service.name + "-background-1"}
              />
            </Container>
          );
        })}
        <Container className={`${styles["price-container"]}`} size="inline-sm">
          <h2
            className={` 
          ${service.name}-background-3
          ${service.name}-b-3-a
          ${service.name}-color-text-4
          `}
          >
            Inversión
          </h2>
          <h1
            className={`${service.name}-color-text-3`}
          >{`s/${PriceParse(price)}`}</h1>
        </Container>
      </div>
      <Button
        classname={`${styles["buttom-buy"]} transition  ${service.name}-color-text-3-h ${service.name}-background-5-h`}
        type={`${color_buttom}`}
      >
        <p>Comprar</p>
      </Button>
    </div>
  );
}

export default PromotionItem;
