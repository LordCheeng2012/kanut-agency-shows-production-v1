
import { Valores } from '../../components/contents/valores/Valores.jsx';
import { ServiceProvider } from '../../context/providers/ServiceProvider.jsx'
import { InterfaceService } from './interface-service/InterfaceService.jsx'
import { ServiceHooks } from './js/ServiceHooks.js';
import { GaleryDetails } from './service-details/GaleryDetails.jsx';
import { InformationService } from './service-details/information/InformationService.jsx';
import { PromotionService } from './service-details/promotions/PromotionService.jsx';
import './Services.css';


export const Services = () => {
  const {getServiceContext} = ServiceHooks();
  const backgroundService = getServiceContext() || 'boda';

  return (
    <ServiceProvider keyService={backgroundService}>
        <section className={`p-content-service ${backgroundService}`}>
        <div className="c-s-interface-service">
          <InterfaceService></InterfaceService>
        </div>
        <div className="c-s-details-service">
        <section className="d-s-information-service">
            <InformationService></InformationService>
        </section>
        <section className='d-s-galery-service'>        
          <Valores></Valores>     
          <div className='d-s-content-galery-service'>
          <GaleryDetails></GaleryDetails>
          </div>    
        </section>
        <section className="d-s-promotions-service">
          <PromotionService></PromotionService>
        </section>
        </div>
        </section>
    </ServiceProvider>

  )
}
