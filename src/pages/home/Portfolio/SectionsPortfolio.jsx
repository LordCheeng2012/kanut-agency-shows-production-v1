import { CardItem } from '../../../components/contents/cards/Card.jsx';
import './SectionPortfolio.css';
import data from "../../../data/portafolio.json"
import { utils } from '../../../utils/utils.js';
import paths from '@absolute/config';

export const SectionsPortfolio = () => {
  const {banners} = paths();
  const {redirect} = utils();
  return (
    <section className="portfolio-content">
      <div className="p-c-item p-c-title-portfolio">
        <h1 className="kanut-title">Portafolio</h1>
      </div>

      <div className="p-c-item portfolio-list">
        {data
        .map((cv, index) => (
            <CardItem
              key={index}
              image={`${banners}/${cv.image}`}
              title={cv.title}
              service={cv.service}
              color={cv.color}
              onClick={() =>redirect(`/${cv.page}`)}
            />
          ))}
      </div>
    </section>
  );
};