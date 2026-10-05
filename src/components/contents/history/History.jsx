
import ItemService from "@components/contents/service/ItemService.jsx";
import styles from  "./history.module.css";
import {Paths} from "@utils/index";
import VideoPlayer from "@components/video-player";


export const History = () => {
  const { fonts } = Paths();
  return (
    <div className={`${styles["history"]} ${styles["history-point"]}`}>
      <div className={styles["item-title-history"]}>
        <img src={`${fonts}/font_1.png`} alt="" />
      </div>
      <div className={styles["item-content-video-player"]}>
        <div className={styles["item-service-details"]}>
          <VideoPlayer size="block-sm"/>
          <section className={styles["service-details"]}>
            <ItemService keyService={"kanut-boda"}/>
          </section>
        </div>
        <div className={styles["item-service-details"]}>
         <VideoPlayer size="block-sm"/>
          <section className={styles["service-details"]}>
            <ItemService keyService="kanut-party"></ItemService>
          </section>
        </div>
        <div className={styles["item-service-details"]}>
           <VideoPlayer size="block-sm"/>
          <section className={styles["service-details"]}>
            <ItemService keyService="kanut-shows"></ItemService>
          </section>
        </div>
      </div>
    </div>
  );
};
