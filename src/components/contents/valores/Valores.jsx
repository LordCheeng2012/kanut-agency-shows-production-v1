import styles from "./valores.module.css"
import { paths } from '../../../config/config.js'
const {icons} = paths();

 function Valores(){
  return (
     <section className={styles['content-valores']}>
      <h1 className={`${styles['title-content']} kanut-title`}>Valores</h1>
      <ul className={styles['list-valores']}>
        <li><div className={styles['item-list-v']}><img src={`${icons}/kanut-especial.png`} alt="icono kanut especial" className="img-valor" /><h3>Creatividad</h3> </div></li>
        <li><div className={styles['item-list-v']}><img src={`${icons}/fire.webp`} alt="fire" className="img-valor" /><h3>Pasión</h3></div></li>
        <li><div className={styles['item-list-v']}><img src={`${icons}/champions.webp`} alt="champion" className="img-valor" /><h3>Profesionalismo</h3></div></li>
        <li><div className={styles['item-list-v']}><img src={`${icons}/trus.webp`} alt="bussiness" className="img-valor" /><h3>Confianza</h3></div></li>
        <li><div className={styles['item-list-v']}><img src={`${icons}/certificate.webp`} alt="verify" className="img-valor" /><h3>Autenticidad</h3></div></li>
        <li><div className={styles['item-list-v']}><img src={`${icons}/team.webp`} alt="team" className="img-valor" /><h3>Compromiso</h3></div></li>
      </ul>
    </section>
  )
}
export default Valores;