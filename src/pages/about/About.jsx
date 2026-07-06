
import './About.css'
import { AboutMarcas } from './marcas/AboutMarcas.jsx'
import { Ethics } from './etica/Ethics.jsx'
import { Questions } from './questions/Questions.jsx'

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
