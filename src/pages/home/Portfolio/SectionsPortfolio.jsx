
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
        <div className='card-item'>
          <div className='c-i-img-item'></div>
          <div className='c-i-f-portfolio'>
            <p className='kanut-description-altern'><strong>Kanut</strong> {cv.title} {cv.subtitle}</p>
          </div>
        </div>)
       })}
      </div>
      <div className="p-c-item f-portfolio">
      <Button title={"Descubre mas"} addClass={"f-p-btn"}></Button>
      </div>
    </section>
  )
}
