import styles from "./container.module.css";
function Container({ children, className = undefined, size = "sm" ,cssMerge=false}) {
  const buildClass = 
  cssMerge ?
   `${styles["container"]} ${className && className}`
  : className || styles["container"];

  return <div className={`${buildClass} ${styles[size]}`}>{children}</div>;
}
export default Container;
