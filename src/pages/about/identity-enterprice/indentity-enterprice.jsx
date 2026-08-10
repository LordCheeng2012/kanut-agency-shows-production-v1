import styles from "./identity-enterprice.module.css"
import  Valores  from '@components/contents/valores';
import ball from "@imgs/icons/air-balloon.png"
import cupcakge from "@imgs/icons/cupcakge.png"
 function IdentityEnterprice() {
  return (
    <>
      <section className={styles['content-identity-enterprice']}>
        <div className={styles["mision-vision"]}>

          {/* ================= MISIÓN ================= */}
          <section className={styles["item"]}>

            <div className={'details'}>
              <h1 className={`${styles['mision-title']} kanut-title`}>Misión</h1>
              <p className={styles['kanut-description-altern']}>
                Llevamos emociones y diversión a cada celebración a 
                través de experiencias auténticas que 
                transforman momentos en recuerdos inolvidables, 
                mientras impulsamos el desarrollo artístico y 
                creativo de nuestros colaboradores, potenciando sus 
                talentos ocultos para convertirlos en futuros artistas y 
                líderes del espectáculo.
              </p>
            </div>

            <div className={styles['logo']}>
              <img src={cupcakge}  alt="" />
            </div>

          </section>

          {/* ================= VISIÓN ================= */}
          <section className={styles["item"]}>

            <div className={styles['logo']}>
              <img src={ball}  alt="" />
            </div>

            <div className={'details'}>
              <h1 className={`${styles['vision-title']} kanut-title`}>Visión</h1>

              <p className={styles['kanut-description-altern']}>
                Soñamos con ser la agencia de espectáculos líder a nivel nacional, 
                reconocida por transformar celebraciones en experiencias auténticas,
                 emotivas y memorables. 
                <br /><br />
                En <strong>Kanut Espectáculos</strong>, aspiramos a contribuir al desarrollo de un país
                 donde el arte inspire, transforme y genere oportunidades reales en el
                  ámbito artístico, formando a nuevos talentos con pasión, profesionalismo y 
                  espíritu emprendedor.
              </p>
            </div>

          </section>

        </div>
      </section>

      <Valores />
    </>
  )
}
export default IdentityEnterprice;