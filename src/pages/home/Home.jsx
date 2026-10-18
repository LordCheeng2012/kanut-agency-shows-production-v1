import styles from "./home.module.css";
import {
  PortfolioSection,
  AboutSection,
  SectionComments,
  HistorySection,
} from "./sections";
import { Carousel,Button } from "@components";
export default function HomePage() {
  const items = [
    <div className="background-template background-boda">
      <div className={styles["item-carousel-content"]}>
        <Button size="medium" classname="free-content" type="blue">
          Informes
        </Button>
      </div>
    </div>,

    <div className="background-template background-party">
      <div className={styles["item-carousel-content"]}>
        <Button size="medium" classname="free-content" type="sky">
          Informes
        </Button>
      </div>
    </div>,

    <div className="background-template background-shows">
      <div className={styles["item-carousel-content"]}>
        <Button size="medium" classname="free-content" type="primary">
          Informes
        </Button>
      </div>
    </div>,
  ];
  return (
    <div className={`center ${styles["home-page"]}`}>
      <Carousel items={items} size="inline-lg" />
      <HistorySection />
      <AboutSection />
      <PortfolioSection />
      <SectionComments />
    </div>
  );
}
