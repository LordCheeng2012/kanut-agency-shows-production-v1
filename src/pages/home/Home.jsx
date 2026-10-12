import styles from  "./home.module.css";
import { History, Carousel, Button } from "@components";
import { PortfolioContent } from "./portfolio/portfolio-content.jsx";
import { SectionComments } from "./comments/section-comments.jsx";
import AboutSection from "./about/about-section";

export default function HomePage() {
  const items = [ 
      <div className="background-template background-boda">
        <div className={styles["item-carousel-content"]}>
          <Button size="medium" classname="free-content" type="blue">
          Informes
        </Button>
        </div>
      </div>
   ,
   
      <div className="background-template background-party">
       <div className={styles["item-carousel-content"]}>
         <Button size="medium" classname="free-content" type="sky">
          Informes
        </Button>
       </div>
      </div>
   ,
    
      <div className="background-template background-shows">
         <div className={styles["item-carousel-content"]}>
        <Button size="medium" classname="free-content" type="primary">
          Informes
        </Button>
          
        </div>
      </div>
   ,
  ];
  return (
      <div className = "center">
      <Carousel items={items} size="inline-lg"/>
      <History />
      <AboutSection />
      <PortfolioContent />
      <SectionComments />
      </div>
  
  );
}
