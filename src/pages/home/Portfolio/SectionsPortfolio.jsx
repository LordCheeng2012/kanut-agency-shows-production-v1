
import { CardItem } from '../../../components/contents/cards/Card.jsx'
import './SectionPortfolio.css'
import {ListPortfolioItems} from './SectionPortfolio.js'
import { Button } from '@components/buttons/Button.jsx'
export const SectionsPortfolio = () => {
  return (
    <section className='portfolio-content'>
      <div className="p-c-item p-c-title-portfolio">
      <h1 className='kanut-title'>Portafolio</h1>
      </div>
      <div className="p-c-item portfolio-list">
       {ListPortfolioItems().map(cv=>{
        return(
          <CardItem title={cv.title} subtitle={cv.subtitle}></CardItem>
       )
       })}
      </div>
      <div className="p-c-item f-portfolio">
      <Button size = "medium" type = "brown" classname="f-p-btn" >Descubre mas</Button>
      </div>
    </section>
  )
}
