import './InformationService.css'
import { useContext } from 'react';
import {ServiceContext} from "@absolute/context/services";
import { paths } from '../../../../config/config.js';
export const InformationService = () => {
const {services} = paths();    
const {service} = useContext(ServiceContext);
const logoSrc = service["styles"]["logo-src"];

  return (
    <>
    <div className="item-information-service">
       <div className='content-information'>
        <img src={`${services}${logoSrc}`} alt="Kanut evento Servicio" />
       <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis quae minima quam exercitationem hic ab quasi, atque vel eum modi amet quaerat libero iusto delectus, iure error quidem eaque!
       Ipsam repellat rem, sed nihil vero magnam saepe laboriosam nemo, reprehenderit quia doloribus aliquid? Minima similique deserunt, molestias ipsum dolorum dolorem. Earum quos labore impedit, quo sapiente ea quisquam similique?
       Numquam possimus adipisci et, laudantium perferendis vel porro quasi nesciunt cum fuga nulla impedit neque totam, vero nostrum molestias officiis doloribus inventore necessitatibus, reprehenderit.</p>
       </div>
    </div>
    <div className="item-information-service">
        <div className='content-information'>
            <div className='video-service'>
        </div>
        </div>
    </div>
    </>
  )
}
