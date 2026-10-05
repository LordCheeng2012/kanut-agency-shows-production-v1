import {Paths} from "@utils/index"
import { GenerateGrid, TitleService } from "@components";
import "./Service.css";
import { useServices } from "@absolute/hooks";
export const Service = () => {
  const { transitions } =Paths();
  const {Loadservice} = useServices();
  const { name, styles } = Loadservice;

  return (
    <section className="content-service">
      <div className="content-image-service">
        <img
          style={{ borderBottom: `3px solid var(${styles["border"]})` }}
          src={`${transitions}/${styles["logo"]}`}
          alt="imagen del servicio"
        />
      </div>
      <div className="content-grid-galery-service">
        <section className="title-service-content">
          <TitleService
            serviceTitle={name}
            classService={styles["class-name"]}
            addClass="title-service"
          ></TitleService>
          <p className="kanut-description-altern">
            {/*description*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel
            delectus voluptate placeat, blanditiis dignissimos, harum,
            repellendus non tempora odio facere impedit corporis cumque.
            Consequuntur assumenda accusamus eos ipsa et! Eligendi saepe quam
            iure sed similique, cum voluptatum voluptas, hic aliquid ipsa
            repellat cupiditate vitae ratione! Eaque laboriosam inventore, earum
            officia voluptatibus nihil et eos neque iure qui, quasi rem. A ullam
            incidunt in amet maxime doloribus, maiores voluptate doloremque qui
            totam accusantium expedita, nam id fuga. Veniam quibusdam inventore
            esse, aliquam sequi quod voluptate numquam expedita, voluptatem
            delectus iure?
          </p>
        </section>

        <section className="galery-container">
          {/* definir un contexto galery para que la grilla carge las imagenes */}
         <GenerateGrid/>
        </section>
      </div>
    </section>
  );
};
