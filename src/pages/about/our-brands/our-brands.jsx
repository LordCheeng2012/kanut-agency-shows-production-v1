import CardAnimate from "@components/contents/animate-cart-item";
import styles from "./our-brands.module.css";
import paths from '@absolute/config';
import { useState } from "react";
import Galery from "@components/galery";
import { useServices } from "@absolute/hooks";


function OurBrands() {
  const { services: path } = paths();
  const {Loadservice,Allservices} = useServices();

  const listServices = Allservices.slice(0,3).map((s) => {
    return { path: `${path}/${s["name"]}.webp`, name: `${s["name"]}` };
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
        <div className={`${styles["description___brand"]} description kanut-description-altern-strong`}>
          {Loadservice["details"][0]["descriptions"].map((description)=><p>{description}</p>)}
        </div>
      </section>   
      <Galery/>
    </section>
  );
}
export default OurBrands;
