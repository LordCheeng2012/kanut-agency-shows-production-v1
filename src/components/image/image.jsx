import styles from "./image.module.css";
import Paths from "@utils/paths";
const {galery} = Paths();
function Image({
src,
  alt = "no se encontro imagen :(",
  display = "containt",
  className = null,
}) {
  return (
    <img
      className={`${styles["image"]} ${display} ${className || styles["detault"]}`}
      src={src || `${galery}/fallback-image.webp`}
      alt={alt}
    />
  );
}
export default Image;
