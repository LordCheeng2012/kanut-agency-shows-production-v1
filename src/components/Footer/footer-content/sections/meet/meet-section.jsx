import styles from "./meet-section.module.css";
import meet from "@imgs/icons/reserva.png" 
import facebook from "@imgs/icons/fb.png"
import ig from "@imgs/icons/instagram.png"
import tiktok from "@imgs/icons/TikTok.png"
import lnk from "@imgs/icons/linkedin.png"

function MeetSection({className=""}) {
    return (
    <div className={`${className} ${styles["meet-section"]}`}>
        <h1 className="title-section">AGENDA TU REUNIÓN</h1>
        <div className={`${styles["section-reserved"]} `}>
            <a href="https://walink.co/x856dy">
                <img src={meet} alt="reserva referencia" />
            </a>
        </div>
        <ul className={`${styles["social-points-list"]}`}>
            <li>
                <a href=""><img src={facebook} alt = "" /></a>
            </li>
           <li>
                <a href=""><img src={ig} alt = "" /></a>
            </li>
            <li>
                <a href=""><img src={tiktok} alt = "" /></a>
            </li>
            <li>
                <a href=""><img src={lnk} alt = "" /></a>
            </li>
        </ul>
      </div>
      )
}
export default MeetSection;