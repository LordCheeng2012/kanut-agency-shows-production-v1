
import styles from "./drop-down-item.module.css"
export const DrowItem = ()=>{
    return(
    <nav className={styles["nav-content"]}>
        <a href="./Service?serviceType=kanut-shows">Eventos Infantiles</a>
        <a href="./Service?serviceType=kanut-party">Eventos Juveniles</a>
        <a href="./Service?serviceType=kanut-boda">Eventos Ceremoniales</a>
        <a href="./Service?serviceType=kanut-boda">Catering</a>
        <a href="./Service?serviceType=kanut-boda">Catering y Decoración</a>
   </nav>
    );
}