import "./home.css";
import { History, Carousel, Button } from "@components";
import { SectionsAbout } from "./about/SectionsAbout.jsx";
import { PortfolioContent } from "./portfolio/portfolio-content.jsx";
import { SectionComments } from "./comments/section-comments.jsx";

export const Home = () => {
  const items = [
    <>
      <li className="background-boda center">
        <Button size="small" classname="free-content" type="blue">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-party center">
        <Button size="small" classname="free-content" type="sky">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-shows center">
        <Button size="small" classname="free-content" type="primary">
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
        <SectionsAbout />
      </div>
      <div className="portfolio-section">
        <PortfolioContent />
      </div>
      <div className="comments-section">
        <SectionComments />
      </div>
    </>
  );
};
