import styles from "./galery-item.module.css";
function GaleryItem({ 
   size = "sm",
   path,
   alt,
   onClick = undefined ,
   display=false}) {

  return (
      <img
        onClick={onClick}
        className={`${styles["galery-item"]} ${styles[`${size}`]} ${ display && styles[display]}`}
        src={path}
        alt={alt}
      />
  );
}

export default GaleryItem;
