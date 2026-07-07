import { CardItem } from '../../../components/contents/cards/Card.jsx';
import './SectionPortfolio.css';
import data from "./portofolio-items.json"
import bannerBoda1 from '../../../assets/imgs/banner/bannerBoda1.png';
import bannerQuince from '../../../assets/imgs/banner/bannerQuince.png';
import { utils } from '../../../utils/utils.js';

export const SectionsPortfolio = () => {

  const {redirect} = utils();
  const images = [
    bannerBoda1,
    bannerQuince,
  ];

  return (
    <section className="portfolio-content">
      <div className="p-c-item p-c-title-portfolio">
        <h1 className="kanut-title">Portafolio</h1>
      </div>

      <div className="p-c-item portfolio-list">
        {data
          .slice(0, 4)
          .map((cv, index) => (
            <CardItem
              key={index}
              image={images[index % images.length]}
              title={cv.title}
              subtitle={cv.subtitle}
              onClick={() =>redirect(`/${cv.page}`)}
            />
          ))}
      </div>
    </section>
  );
};