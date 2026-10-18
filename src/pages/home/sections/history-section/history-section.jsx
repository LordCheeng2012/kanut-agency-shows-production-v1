import styles from "./history-section.module.css";
import { Paths } from "@utils/index";
import { Image, VideoPlayer } from "@components";

export default function HistorySection() {
  const { fonts } = Paths();
  return (
    <div className={`${styles["history-section"]}`}>
      <Image src={`${fonts}/font_1.png`} />
      <section className={styles["history-section__service__list"]}>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
          <div>
             <h1>kanut</h1>
             <p>Eventos - Bodas</p>
          </div>
        </div>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
           <div>
             <h1>kanut</h1>
             <p>Eventos - Party</p>
          </div>
        </div>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
           <div>
             <h1>kanut</h1>
             <p>Eventos - Shows</p>
          </div>
        </div>
      </section>
    </div>
  );
}
