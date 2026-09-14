import "./home.css";
import { History, Carousel, Button } from "@components";
import { SectionsAbout } from "./about/SectionsAbout.jsx";
import { PortfolioContent } from "./portfolio/portfolio-content.jsx";
import { SectionComments } from "./comments/section-comments.jsx";

export const Home = () => {
  const items = [
    <>
      <li className="background-template background-boda center">
        <Button size="small" classname="free-content" type="blue">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-template background-party center">
        <Button size="small" classname="free-content" type="sky">
          Informes
        </Button>
      </li>
    </>,
    <>
      <li className="background-template background-shows center">
        <Button size="small" classname="free-content" type="primary">
          Informes
        </Button>
      </li>
    </>,
  ];
  return (
    <>
      <div className="carousel-history">
        <Carousel items={items} size="inline-lg" />
        <History />
      </div>    
        <SectionsAbout />
      <div className="portfolio-section">
        <PortfolioContent />
      </div>
      <div className="comments-section">
        <SectionComments />
      </div>
    </>
  );
};
