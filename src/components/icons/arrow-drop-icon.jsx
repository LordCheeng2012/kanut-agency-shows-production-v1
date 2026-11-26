import dropArrowIcon from "@assets/icons/arrow-drop-item.svg";
import styles from "./arrow-drop-icon.module.css";
export default function ArrowDropIcon({
  size = "sm",
  className = null,
  active = false,
}) {
  return (
    <img
      src={dropArrowIcon}
      alt="drop-altern"
      className={`${styles["circle"]} ${styles[size]} ${className && className} ${active && styles["active"]}`}
    />
  );
}
