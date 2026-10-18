import styles from "./history-section.module.css";
import { Paths } from "@utils/index";
import { Image, VideoPlayer } from "@components";
import { useServices } from "@absolute/hooks";
export default function HistorySection() {
  const { getServiceByName } = useServices();
  const kanutBoda = getServiceByName("kanut-boda");
  console.log(kanutBoda);
  const kanutShows = getServiceByName("kanut-party");
  const kanutParty = getServiceByName("kanut-shows");
  const { fonts } = Paths();
  return (
    <div className={`${styles["history-section"]}`}>
      <Image src={`${fonts}/font_1.png`} />
      <section className={styles["history-section__service__list"]}>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
          <div className={styles["service__list_event__information__container"]}>
             <h1 className="kanut-boda-color-text-2">Kanut</h1>
             <p className={`${styles["service__list__item__event_type"]} kanut-boda-border-1 kanut-boda-color-text-2`}>Eventos - Bodas</p>
              <p className={styles["service__list__item__description"]}>
                {kanutBoda.details[0].descriptions}
              </p>
              <p className="signature">
                {kanutBoda.comments}
              </p>
          </div>
        </div>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
           <div className={styles["service__list_event__information__container"]}>
             <h1 className="kanut-party-color-text-2">Kanut</h1>
             <p className={`${styles["service__list__item__event_type"]} kanut-party-border-3 kanut-party-color-text-5`}>Eventos - Party</p>
              <p className={styles["service__list__item__description"]}>
              {kanutParty.details[0].descriptions}
              </p>
              <p className="signature">
                {kanutParty.comments}
              </p>
          </div>
        </div>
        <div className={styles["service__list__item"]}>
          <VideoPlayer size="block-sm" />
           <div className={styles["service__list_event__information__container"]}>
             <h1 className="kanut-shows-color-text-2">Kanut</h1>
             <p className={`${styles["service__list__item__event_type"]} kanut-shows-border-4 kanut-shows-color-text-1`}>Eventos - Shows</p>
             <p className={styles["service__list__item__description"]}>
               {kanutShows.details[0].descriptions}
              </p>
              <p className="signature">
                {kanutShows.comments}
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
