import "./home.css";
import { History } from "@components/contents/history/History.jsx";
import { SectionsAbout } from "./about/SectionsAbout.jsx";
import { SectionsPortfolio } from "./portfolio/SectionsPortfolio.jsx";
import { SectionComments } from "./comments/SectionComments.jsx";
import { Carousel } from "../../components/contents/carousel/Carousel.jsx";
import { Button } from "../../components/buttons/Button.jsx";

export const Home = () => {
  const items = [
    <>
      <li className="background-boda center">
        <Button size="small" classname="free-content center" type="primary">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-party center">
        <Button size="small" classname="free-content center" type="primary">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-shows center">
        <Button size="small" classname="free-content center" type="gold">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-boda center">
        <Button size="small" classname="free-content" type="gold">
          Informes
        </Button>
      </li>
    </>,
  ];
  return (
    <>
      <div className="carousel-history">
        <Carousel items={items} />
        <History />
      </div>
      <div className="about-section">
        <SectionsAbout/>
      </div>
      <div className="portfolio-section">
        <SectionsPortfolio/>
      </div>
      <div className="comments-section">
        <SectionComments/>
      </div>
    </>
  );
};
