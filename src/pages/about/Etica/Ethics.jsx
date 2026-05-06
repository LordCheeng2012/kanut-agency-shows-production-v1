import './Ethics.css'
import { paths } from '../../../config/loadEnviroment.js'
import { Valores } from '../../../components/contents/valores/Valores.jsx';
const {icons} = paths();
export const Ethics = () => {
  return (
    <>
     <section className='content-mision-vision'>
      <div className="item-c-m-v vision-mision">
        <section className="item-v-m">
        <div className='details '>
            <h1 className='vision-title kanut-title'>Vision</h1>
          <p className='decription-m-v kanut-description-altern'>Llevamos emociones y diversión a cada celebración 
            a través de experiencias auténticas que transforman
             momentos en recuerdos inolvidables, mientras impulsamos 
             el desarrollo artístico y creativo de nuestros colaboradores, 
             potenciando sus talentos ocultos para convertirlos en futuros 
             artistas y líderes del espectáculo.</p>
        </div>
         <div className='logo'>
          <div className='img-logo'></div>
        </div>
        </section>
        <section className="item-v-m">
           <div className='logo'>
            <div className='img-logo'></div>
          </div>
           <div className='details'>
             <h1 className='mision-title kanut-title'>Mision</h1>
            <p className='decription-m-v kanut-description-altern'>Soñamos con ser la agencia de espectáculos 
              líder a nivel nacional, reconocida  por transformar celebraciones en experiencias auténticas,
               emotivas y memorables. <br /><br />
              En Kanut Espectáculos, aspiramos a contribuir al desarrollo de un país donde el arte inspire,
               transforme y genere oportunidades reales en el ámbito artístico,
               formando a nuevos talentos con pasión, profesionalismo y espíritu emprendedor.</p>
           </div>
          
        </section>
      </div>
    </section>
    <Valores></Valores>
    </>
  )
}
