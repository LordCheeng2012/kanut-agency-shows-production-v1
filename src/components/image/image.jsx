import styles from "./image.module.css";
function Image({
src,
  alt = "no se encontro imagen :(",
  display = "containt",
  className = null,
}) {
  return (
    <img
      className={`${styles["image"]} ${display} ${className || styles["detault"]}`}
      src={src}
      alt={alt}
    />
  );
}
export default Image;
