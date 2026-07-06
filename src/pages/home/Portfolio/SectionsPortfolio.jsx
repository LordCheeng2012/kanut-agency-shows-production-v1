import { CardItem } from '../../../components/contents/cards/Card.jsx';
import './SectionPortfolio.css';
import { ListPortfolioItems } from './SectionPortfolio.js';
import { Button } from '@components/buttons/Button.jsx';
import bannerBoda1 from '../../../assets/imgs/banner/bannerBoda1.png';
import bannerQuince from '../../../assets/imgs/banner/bannerQuince.png';
import { useNavigate } from "react-router-dom";

export const SectionsPortfolio = () => {

  const navigate = useNavigate();

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
        {ListPortfolioItems()
          .slice(0, 4)
          .map((cv, index) => (
            <CardItem
              key={index}
              image={images[index % images.length]}
              title={cv.title}
              subtitle={cv.subtitle}
              onClick={() => {
                 if (index === 0) {
                   navigate("/historia1");
                 } else if (index === 1) {
                   navigate("/historia2");
                 } else if (index === 2) {
                   navigate("/historia3");
                 } else if (index === 3) {
                   navigate("/historia4");
                 }
              }}
            />
          ))}
      </div>

      <div className="p-c-item f-portfolio">
      </div>
    </section>
  );
};