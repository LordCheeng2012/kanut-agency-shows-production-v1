import { CardItem } from '../../../components/contents/cards/Card.jsx';
import styles from './portfolio-content.module.css';
import {appData as data}  from '@absolute/data/data.js';
import { utils } from '../../../utils/utils.js';
import paths from '@absolute/config';

export const PortfolioContent = () => {
  const {banners} = paths();
  const {redirect} = utils();

  return (
    <section className={styles["portfolio-content"]}>
      <div className={`${styles["p-c-item"]} ${styles["p-c-title-portfolio"]}`}>
        <h1 className="kanut-title">Portafolio</h1>
      </div>

      <div className={`${styles["p-c-item"]} ${styles["portfolio-list"]}`}>
        {data.portfolio
        .map((cv, index) => (
            <CardItem
              key={index}
              image={`${banners}/${cv.image}`}
              title={cv.title}
              service={cv.service}
              color={cv.color}
              onClick={() =>redirect(`Portfolio/${cv["id"]}`)}
            />
          ))}
      </div>
    </section>
  );
};