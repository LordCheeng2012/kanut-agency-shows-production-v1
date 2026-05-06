
import './About.css'
import { AboutMarcas } from './AboutMarcas/AboutMarcas.jsx'
import { Ethics } from './Etica/Ethics.jsx'
import { Questions } from './Questions/Questions.jsx'

export const About = () => {
  return (
   <>
    <div className='about-content-etic'>
      <Ethics></Ethics>
    </div>
    <div className='frequents-questions-content '>
    <Questions></Questions>
    </div>
    <section className='content-about-marcas'>
      <AboutMarcas></AboutMarcas>
    </section>
   </>
  )
}
