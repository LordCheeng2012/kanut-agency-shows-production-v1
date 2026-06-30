import { Button } from "../../../../components/buttons/Button";
import './PromotionService.css'
import { useContext } from 'react';
import { serviceContext } from '../../../../context/Services/ServiceContext.jsx';
 const TypeService = ({service={
    color_buttom:"btn-primary-sky"
 }}) => {
  return (
    <div className="content-type">
        <div className="img-content-type">

        </div>

        <div className="description-promotion">

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi vel quo minus, non in veritatis rerum ipsa reiciendis numquam, voluptas eum quasi debitis dolores facilis et cumque officia quos ullam.
            Recusandae nisi sit nihil exercitationem porro quasi vero nam enim quia autem perspiciatis deleniti itaque excepturi perferendis, deserunt ducimus mollitia commodi ullam eaque? Non perferendis architecto iste cum impedit voluptates.
            Harum dicta beatae suscipit tenetur aspernatur. Sunt dicta accusamus eveniet vero, saepe ipsam. Aliquam dicta repellendus iste assumenda quia accusantium numquam recusandae neque obcaecati laborum, necessitatibus dignissimos odio, itaque perferendis?
            Sequi, quisquam similique. Suscipit ipsam aspernatur, consequuntur ducimus alias atque expedita ab blanditiis facilis veniam vero praesentium dolorum autem necessitatibus aperiam mollitia neque iure illum laborum, voluptates fugiat sequi quia?
            <Button  type= {`${service.color_buttom}`}>SABER MÁS</Button>

        </div>

    </div>
  )
}


export const PromotionService = () => {
const {serviceDetails} = useContext(serviceContext);
const colorButton = serviceDetails.colorClass  ;
console.log("contexto de servicio cargado : ",serviceDetails.colorClass);
  return (
    <div className="promotion-content-service">
        <h1 className="kanut-title">Promociones</h1>
        <section className="types-promotions-service-content">
        <TypeService  service={{color_buttom:colorButton}}></TypeService>
        <TypeService  service={{color_buttom:colorButton}}></TypeService>
        <TypeService  service={{color_buttom:colorButton}}></TypeService>
        </section>
    </div>
  )
}
