
import styles from "./about.module.css"
import IdentityEnterprice from "./identity-enterprice"
import OurBrands from './our-brands'
import { Questions } from './questions/Questions.jsx'

export const About = () => {
  return (
   <>
    <div className={styles['about-content-etic']}>
      <IdentityEnterprice/>
    </div>
    <div className={styles['frequents-questions-content']}>
    <Questions/>
    </div>
    <section className={styles['content-about-marcas']}>
     <OurBrands/>
    </section>
   </>
  )
}
