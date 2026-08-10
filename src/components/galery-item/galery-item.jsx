import styles from "./galery-item.module.css";
import Modal from "@components/modal/modal";
function GaleryItem({ size="sm", path, alt }) {

  return (
   <Modal>
     <img
      className={`${styles["galery-item"]} ${styles[`${size}`]}`}
      src={path}
      alt={alt}
    />
   </Modal>
  );
}

export default GaleryItem;
