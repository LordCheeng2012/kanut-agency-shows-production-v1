import styles from "./container.module.css"
function Container({children,size = "sm"}) {
    return <div className={`${styles["container"]} ${styles[size]}`}>{children}</div>
}
export default Container;