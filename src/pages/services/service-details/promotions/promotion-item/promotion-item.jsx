import { Button, Container, Separator } from "@components";
import styles from "./promotion-item.module.css";
import PriceParse from "@utils/price-parse";

function PromotionItem({ promotion = {}, color_buttom = "" }) {
  if (!promotion) return console.error("no existe la promocion");
  const { id, path, summary, includes, price } = promotion;
  let cont = "";
  const numberPromotion = () => {
    for (let index = 0; index < id; index++) {
      cont += "/";
    }
    return cont;
  };
  return (
    <div className={styles["content-type"]}>
      <Container className={styles["title-promotion"]} size="block-md">
          <h2 className={styles["n-promotion"]} >{`Promoción ${numberPromotion()}`}</h2>
        <Container size="block-md">
          <img className={styles["img-content-type"]} src={path} alt="" />
          <p className={`details-altern center-text`}>{summary}</p>
        </Container>
      </Container>

      <div className={styles["description-promotion"]}>
        <h2 className={`details-altern ${styles["include-title"]}`}>incluye:</h2>
        {includes.map((include) => {
          const { type, items } = include;
          return (
            <Container className={styles["includes-content"]} size="block-sm">
              <h2 className={styles["type-category-section"]}>{type}</h2>
              <ul>
                {items.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
              <Separator type="interrumped" />
            </Container>
          );
        })}
        <Container className={styles["price-container"]} size="inline-sm">
              <h2>Inversión</h2>
          <h1>{`s/${PriceParse(price)}`}</h1>
          
        </Container>
      </div>
      <Button type={`${color_buttom}`}>SABER MÁS</Button>
    </div>
  );
}

export default PromotionItem;
