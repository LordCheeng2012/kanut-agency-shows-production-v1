
import { useContext } from "react";
import  {ServiceContext} from "../../context/services"; 
import  Valores  from "@components/contents/valores"
import { InterfaceService } from './interface-service/interface-service.jsx'
import { GaleryDetails } from './service-details/GaleryDetails.jsx';
import { InformationService } from './service-details/information/InformationService.jsx';
import { PromotionService } from './service-details/promotions/PromotionService.jsx';
import './services.css';


export const Services = () => {
const {service} = useContext(ServiceContext);
const {styles} = service;
  return (   
        <section className={`p-content-service ${styles["class-name"]}`}>
        <div className="c-s-interface-service">
          <InterfaceService/>
        </div>
        <div className="c-s-details-service">
        <section className="d-s-information-service">
            <InformationService/>
        </section>
        <section className='d-s-galery-service'>        
          <Valores/>     
          <div className='d-s-content-galery-service'>
          <GaleryDetails/>
          </div>    
        </section>
        <section className="d-s-promotions-service">
          <PromotionService/>
        </section>
        </div>
        </section>

  )
}
