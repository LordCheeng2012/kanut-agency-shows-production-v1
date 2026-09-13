import styles from "./container.module.css"
function Container({children,className=undefined,size = "sm",}) {
    const buildClass =  className ||  styles["container"];
    return <div className={`${buildClass} ${styles[size]}`}>{children}</div>
}
export default Container;