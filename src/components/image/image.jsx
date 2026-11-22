import styles from "./image.module.css";
import Paths from "@utils/paths";
const { galery } = Paths();
function Image({
  src,
  mobileSrc,
  alt = "no se encontro imagen :(",
  display = "contain",
  className = null,
}) {
  return (
    <picture>
      <source media="(max-width: 600px)" srcset={mobileSrc} />
      <img
        className={`${styles["img-component"]} ${styles[display]} ${className || styles["detault"]}`}
        src={src || `${galery}/fallback-image.webp`}
        alt={alt}
      />
    </picture>
  );
}
export default Image;
