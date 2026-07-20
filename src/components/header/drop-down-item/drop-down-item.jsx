
import styles from "./drop-down-item.module.css"
export const deploy = ({ e, seteableState }) => {
  e.preventDefault();
  seteableState(<DrowItem/>);
  return ;
};
export const close = ({ e, seteableState }) => {
    e.preventDefault();
    seteableState(null)
    return;
};

export const DrowItem = ()=>{
    return(
    <nav className={styles["nav-content"]}>
        <li>Eventos Infantiles</li>
        <li>Eventos Juveniles</li>
        <li>Eventos Ceremoniales</li>
        <li>Catering</li>
        <li>Catering y Decoración</li>
   </nav>
    );
}