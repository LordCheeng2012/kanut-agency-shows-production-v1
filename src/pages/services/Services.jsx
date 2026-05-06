
import { useContext } from 'react';
import { Valores } from '../../components/contents/valores/Valores.jsx';
import { ServiceProvider } from '../../context/providers/ServiceProvider.jsx'
import { serviceContext } from '../../context/Services/ServiceContext.jsx';
import { InterfaceService } from './interfaceService/InterfaceService.jsx'
import { ServiceHooks } from './js/ServiceHooks.js';
import { GaleryDetails } from './ServiceDetails/GaleryDetails.jsx';
import { InformationService } from './ServiceDetails/Information/InformationService.jsx';
import { PromotionService } from './ServiceDetails/promotions/PromotionService.jsx';
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
