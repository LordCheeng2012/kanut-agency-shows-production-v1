import styles from "./separator.module.css";
function Separator({ type = "linear",className=null,classItems="default-color" }) {
  return type == "interrumped" ? (
     <div className={`${className && className} ${styles["interrumped"]}`}>
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
        <div className={classItems} />
    </div>
  ) : (
   <div className={ `${className && className} ${styles["separator"]} ${classItems}`}></div>
  );
}
export default Separator;
