import './InterfaceService.css'
import { paths } from '../../../config/loadEnviroment.js'
import { ServiceHooks } from '../js/ServiceHooks.js';

export const InterfaceService = () => {
  const {loadService} = ServiceHooks();
  const {services,assets} = paths();

  return (
    <section className='section-controller'>
      <div className="item-service-option border-boda">
          <div className='i-s-o-option' onClick={()=>loadService("boda")}>
              <img src={`${assets}/imgs/Kanut-Logo.png`} alt="" />
          </div>
      </div>
      <div className="item-service-option border-shows">
        <div className='i-s-o-option' onClick={()=>loadService("shows")}>
              <img src={`${services}/Kanut_Eventos_Shows.png`} alt="" />
          </div>
      </div>
      <div className="item-service-option border-party">
        <div className='i-s-o-option' onClick={()=>loadService("party")}>
            <img src={`${services}/Kanut_Party.png`} alt="" />
          </div>
      </div>
    </section>
  )
}
