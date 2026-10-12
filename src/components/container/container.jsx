import styles from "./container.module.css";
function Container({
  children,
  className = undefined,
  size = "sm",
  cssMerge = false,
  ref = null,
  id = "container-id",
  onClick = ()=>null
}) {
  const buildClass = cssMerge
    ? `${styles["container"]} ${className && className}`
    : className || styles["container"];

  return (
    <div onClick={onClick} ref={ref} id={id} className={`${buildClass} ${styles[size]}`}>
      {children}
    </div>
  );
}
export default Container;
