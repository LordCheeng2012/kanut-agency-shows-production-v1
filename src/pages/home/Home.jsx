import styles from "./home.module.css";
import {
  PortfolioSection,
  AboutSection,
  SectionComments,
  HistorySection,
} from "./sections";
import { Carousel, Button, Image } from "@components";
import Paths from "@utils/paths";
const { transitions } = Paths();
export default function HomePage() {
  const items = [
    <div className={styles["item-carousel-content"]}>
      <Image
        src={`${transitions}/image_1.webp`}
        mobileSrc={`${transitions}/mobile/image_1.webp`}
      />
      <Button size="medium" classname="free-content" type="blue">
        Informes
      </Button>
    </div>,

    <div className={styles["item-carousel-content"]}>
      <Image
        src={`${transitions}/image_2.webp`}
        mobileSrc={`${transitions}/mobile/image_2.webp`}
      />
      <Button size="medium" classname="free-content" type="sky">
        Informes
      </Button>
    </div>,

    <div className={styles["item-carousel-content"]}>
       <Image
        src={`${transitions}/image_3.webp`}
        mobileSrc={`${transitions}/mobile/image_3.webp`}
      />
      <Button size="medium" classname="free-content" type="primary">
        Informes
      </Button>
    </div>,
  ];
  return (
    <div className={`center ${styles["home-page"]}`}>
      <Carousel items={items} automatic= {false}/>
      <HistorySection />
      <AboutSection />
      <PortfolioSection />
      <SectionComments />
    </div>
  );
}
