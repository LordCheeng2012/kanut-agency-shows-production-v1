
import './home.css'
import { Carousel } from '@components/contents/carousel/Carousel.jsx'
import { History } from '@components/contents/history/History.jsx'
import { SectionsAbout } from './about/SectionsAbout.jsx'
import { SectionsPortfolio } from './Portfolio/SectionsPortfolio.jsx'
import { SectionComments } from './comments/SectionComments.jsx'


export const Home = () => {
  return (
    <>  
    
    <div className="c-d-s-item carousel-history">
    <Carousel Class="c-h-item"></Carousel>
    <History Class="c-h-item history"></History>
    </div>
    <div className="c-d-s-item about-section"><SectionsAbout></SectionsAbout></div>
    <div className="c-d-s-item portfolio-section"><SectionsPortfolio></SectionsPortfolio></div>
    <div className="c-d-s-item comments-section"><SectionComments></SectionComments></div>   

    </>

  )
}
