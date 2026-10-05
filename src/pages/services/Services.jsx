import { useServices } from "@absolute/hooks";
import css from "./services.module.css";
import { Galery, VideoPlayer } from "@components";
import {ListServices,Promotions} from "./details-services"

export default function Services(){
  const { styles } = useServices().Loadservice;
  return (
    <section className={`${css["content-services-page"]} ${styles["primary-class"]}`}>
      <VideoPlayer size="full" />
      <ListServices />
      <Galery />
      <Promotions />
    </section>
  );
};
