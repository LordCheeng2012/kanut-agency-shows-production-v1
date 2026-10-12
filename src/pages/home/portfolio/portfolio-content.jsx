import styles from "./portfolio-content.module.css";
import { appData as data } from "@absolute/data/data.js";
import { utils, Paths } from "@utils/index";
import { Container, Image } from "@components";

export const PortfolioContent = () => {
  const { banners } = Paths();
  const { redirect } = utils();

  return (
    <section className={`center ${styles["portfolio-content"]}`}>
      <h1 className={`${styles["title"]} kanut-title`}>Portafolio</h1>
      <div className={`${styles["portfolio-list"]}`}>
        {data.portfolio.map((cv, index) => (
          <Container
            className={styles["container-image-project-service"]}
            size="inline-sm"
            key={index}
            onClick={() => redirect(`Portfolio/${cv.id}`)}
          >
            <Image src={ cv.image && `${banners}/${cv.image}`} />
            <section className={`center ${styles["portfolio-subtitle-of-service"]}`}>
              <h1>{cv.title}</h1>
              <h2 className="signature" style={{color:`var(${cv.color})`}}>{cv.service}</h2>
            </section>
          </Container>
        ))}
      </div>
    </section>
  );
};
