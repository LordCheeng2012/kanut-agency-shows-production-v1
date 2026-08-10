import CardAnimate from "@components/contents/animate-cart-item";
import styles from "./our-brands.module.css";
import { paths } from "@absolute/config/config";
import { useState,useContext } from "react";
import {ServiceContext} from "@absolute/context/services";
import Galery from "@components/galery";


function OurBrands() {
    
  const { services: path } = paths();
  const {service,getPrimaryServices} = useContext(ServiceContext);

  const listServices = getPrimaryServices().map((s) => {
    return { path: `${path}/${s}.webp`, name: `${s}` };
  });

  const [imageList, setImageList] = useState(listServices);

  const onChangeImage = (e) => {
    const { alt } = e.target;
    const currentIndex = imageList.findIndex((i) => alt === i.name);
    if (currentIndex >= 0) {
      imageList[currentIndex].path = `${path}/hover/${alt}-hover.webp`;
      setImageList([...imageList]);
    }
  };

  const onChangeImageRestart = (e) => {
    const { alt } = e.target;
    const currentIndex = imageList.findIndex((i) => alt === i.name);
    if (currentIndex >= 0) {
      imageList[currentIndex].path = `${path}/${alt}.webp`;
      setImageList([...imageList]);
    }
  };

  return (
    <section className={styles["content-our-brands"]}>
      <section className={styles["brands-content"]}>
        <ul className={`${styles["our-brands-list"]}`}>
          {imageList.map((b) => (
            <CardAnimate
              ref={`./About?serviceType=${b.name}`}
              onMouseEnter={onChangeImage}
              onMouseLeave={onChangeImageRestart}
            >
              <img src={b.path} alt={b.name} />
            </CardAnimate>
          ))}
        </ul>
        <div className={`${styles["description___brand"]} details kanut-description-altern-strong`}>
          {service["details"]["descriptions"]}
        </div>
      </section>   
      <Galery serviceName={service.name}/>
    </section>
  );
}
export default OurBrands;
