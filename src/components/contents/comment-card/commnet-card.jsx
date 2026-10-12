import styles from "./comment-card.module.css";
import Paths from "@utils/paths";
import { Image } from "@components";
const { clients } = Paths();

export default function CommentCard({
  id ="comment-card-item",
  color = "--segondary-pink",
  type = "Shows Infantiles",
  img = "client16.webp",
  descriptions = ["comentario dummy ----------"],
  autor = "Autor dummy",
}) {
  const path = `${clients}/${img}`;
  return (
    <div id={id} className={`center ${styles["card-comment-content"]}`}>
      <div className={styles["content-card-comment"]}>
        <div className={styles["title-service-comment"]} style={{backgroundColor: `var(${color})`}}>
          <h3>{type}</h3>
        </div>
        
        <div className={`center ${styles["comment-img-content"]}`}>
          <Image className={styles["img-autor-comment"]} src={path} />
          <section className={styles["comments"]}>
            {descriptions.map((comments) => (
              <p className={styles["comment"]}>{comments}</p>
              
            ))}
          </section>
          <section className={styles["autor"]}>
            <p>{autor}</p>
          </section>
        </div>
      </div>
      <div className={styles["footer-comment-card"]}>

      </div>
    </div>
  );
}
