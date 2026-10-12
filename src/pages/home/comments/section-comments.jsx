import { Carousel, CommentCard } from "@components";
import { prepareItems } from "./section-comments.js";
import { Paths } from "@utils/index";
import styles from "./section-comments.module.css";

export const SectionComments = () => {
  const { fonts } = Paths();
  const items = prepareItems().result.map((items, index) => {
    return (
     <>
        {items.map((i) => {
          return <CommentCard id="comment-card-item" {...i} />;
        })}
     </>
    
    );
  });
  return (
    <section className={styles["content-comments"]}>
      
       <img
        src={`${fonts}/font_2.png`}
        alt="Kanulovers"
        className={styles["title-coments"]}
      />

      <Carousel
        classname ={styles["comment-carousel"]}
        size="auto"
        items={items}
        automatic={false}
      /> 
      
    </section>
  );
};
