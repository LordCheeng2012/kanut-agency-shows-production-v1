import { TitleService } from '@components/contents/service/TitleService.jsx';
import { services } from '../../../data/services.json'
import { paths } from '../../../config/loadEnviroment.js'
import { GenerateGrid } from '@components/sections/grid-galery/GenerateGrid.jsx';
import './Service.css'
const {transitions} = paths();
export const Service = ({keyService = 'boda'}) => {
  console.log(`contexto de service key como :`,keyService);
  const {title,description,imgService,borderColor} = services[keyService] || services.boda;
  return (
    <section className='content-service'>
      <div className='content-image-service'>
        <img style={{borderBottom:`${borderColor}`}} src={`${transitions}/${imgService}`} alt="imagen del servicio" />
      </div>
      <div className='content-grid-galery-service'>
        <section className='title-service-content'>
        <TitleService serviceTitle={title} classService ={keyService} addClass= 'title-service'></TitleService>
        <p className='kanut-description-altern'>
        {/*description*/}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel delectus voluptate placeat, blanditiis dignissimos, harum, repellendus non tempora odio facere impedit corporis cumque. Consequuntur assumenda accusamus eos ipsa et!
        Eligendi saepe quam iure sed similique, cum voluptatum voluptas, hic aliquid ipsa repellat cupiditate vitae ratione! Eaque laboriosam inventore, earum officia voluptatibus nihil et eos neque iure qui, quasi rem.
        A ullam incidunt in amet maxime doloribus, maiores voluptate doloremque qui totam accusantium expedita, nam id fuga. Veniam quibusdam inventore esse, aliquam sequi quod voluptate numquam expedita, voluptatem delectus iure?
        </p>
        </section>

        <section className='galery-container'>
          {/* definir un contexto galery para que la grilla carge las imagenes */}
        <GenerateGrid></GenerateGrid>
        </section>
      </div>
    </section>
  )
}
