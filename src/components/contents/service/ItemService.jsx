
import './ItemService.css'
import { services } from '../../../data/services/services.json'
import { TitleService } from './TitleService';
export default function ItemService({keyService}) {
  const {title,colorTitle,description,comments,otherDescription} = services[keyService] || services.boda;
  return (
    <div className={`component-service`}>
            <TitleService serviceTitle={title} classService={keyService} colorTitle={colorTitle}></TitleService>
            <p className='kanut-description-altern-vid s-description'>
              {description}
            </p>
            <p className='kanut-description-altern-strong-vid s-description s-d-comments' >{comments}</p>

            {/*---------------- OPCIONAL -------------- */}
            <p className='kanut-description-altern-vid s-description' style={!otherDescription? {display:'none'} : {}}>
            {otherDescription}
          </p>
    </div>
  )
}
