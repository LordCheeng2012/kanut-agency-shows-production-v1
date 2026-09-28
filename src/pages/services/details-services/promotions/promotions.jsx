import { useServices } from "@absolute/hooks";
import styles from "./promotions.module.css";
import PromotionItem from "./promotion-item";
import { Container } from "@components";

export default function Promotions() {
  const { Loadservice, promotions } = useServices();
  const colorButton = Loadservice["styles"]["buttoms"]["altern"];

  return (
    <Container className={styles["promotion-content-service"]} size="inline-lg">
      <h1 className={`kanut-title ${styles["promotions-title"]}`}>Promociones</h1>
      <section className={styles["types-promotions-service-content"]}>
        {promotions.map((p) => (
          <PromotionItem
            key={p.id}
            promotion={p}
            colorButton={colorButton}
            service={Loadservice}
          />
        ))}
      </section>
    </Container>
  );
}
