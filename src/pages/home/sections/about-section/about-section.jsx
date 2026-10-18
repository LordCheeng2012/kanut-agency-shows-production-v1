import { Paths } from "@utils/index";
import { Button, Container, Image } from "@components";
import styles from "./about-section.module.css";
export default function AboutSection() {
  const { teams } = Paths();
  return (
    <section className={styles["about-section"]}>
      <section className={styles["about"]}>
        <Container
          size="auto"
          cssMerge={false}
          className={`${styles["container-team"]} ${styles["up"]}`}
        >
          <Image src={`${teams}/elian.webp`} display="cover" />

          <h3>Elian Santa Cruz Solis</h3>
          <p>(Gerente General)</p>
        </Container>
        <div className={`description ${styles["description-about"]}`}>
          <p>
            <strong>Kanut</strong> nació como un acto de fe en el arte y en las
            personas. Es la unión de caminos como el teatro, la danza y la
            música con un propósito claro: transformar emociones en experiencias
            que dejen huella. Más que un nombre, es una declaración de
            identidad, creación y movimiento.
          </p>
          <p>
            Surgimos con la convicción de que el arte no solo se interpreta, se
            vive. De formar artistas que comprendan que su talento puede ser un
            proyecto de vida auténtico, y de llevar esa pasión a cada espacio
            donde la alegría merece ser celebrada.
          </p>
          <p>
            Con el tiempo entendimos que los momentos más valiosos no se
            repiten: la risa de un niño, la emoción compartida, la energía que
            une a las personas en una celebración. Allí es donde Kanut cobra
            sentido, creando experiencias vibrantes que despiertan ilusión y
            construyen recuerdos que permanecen.
          </p>
          <p>
            porque creemos que cada instante importante merece vivirse con
            intensidad y corazón. No buscamos solo organizar eventos, sino
            convertir emociones en memorias que acompañen toda la vida.
          </p>
          <Button size="medium">Saber Mas</Button>
        </div>
        <Container
          cssMerge={false}
          size="auto"
          className={styles["container-team"]}
        >
          <Image src={`${teams}/daniela.webp`}  display="cover" />

          <h3>Daniela Coronel Cahuaza</h3>
          <p>(Gerente Administrativa)</p>
        </Container>
      </section>
    </section>
  );
}
