
import './ItemService.css'
import { services } from '../../../data/services.json'
import { TitleService } from './TitleService';
export default function ItemService({keyService,addClass=null}) {
  const {title,description,comments,otherDescription} = services[keyService] || services.boda;
  return (
    <div className={`component-service ${addClass? addClass: ''}`}>
            <TitleService serviceTitle={title} classService={keyService}></TitleService>
            <p className='kanut-description-altern s-description'>
              {description}
            </p>
            <p className='kanut-description-altern-strong s-description s-d-comments'>{comments}</p>

            {/*---------------- OPCIONAL -------------- */}
            <p className='kanut-description-altern s-description' style={!otherDescription? {display:'none'} : {}}>
            {otherDescription}
          </p>
    </div>
  )
}
