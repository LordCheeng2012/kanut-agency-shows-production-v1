
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
        <li>Bodas</li>
        <li>Party</li>
        <li>Shows</li>
        <li>Catering</li>
        <li>Regalos Corporativos</li>
   </nav>
    );
}