import styles from "./separator.module.css";
function Separator({ type = "linear" }) {
  return type == "interrumped" ? (
     <div className={styles["interrumped"]}>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
      <h2>--</h2>
    </div>
  ) : (
   <div className={styles["separator"]}></div>
  );
}
export default Separator;
