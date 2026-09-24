import styles from "./container.module.css";
function Container({ children, className = undefined, size = "sm" ,Addstyles=null}) {
  const buildClass = className || styles["container"];

  return <div className={`${buildClass} ${styles[size]}`} style={ {...Addstyles}||{}}>{children}</div>;
}
export default Container;
