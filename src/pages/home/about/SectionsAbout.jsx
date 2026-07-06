// import { paths } from '../../../config/loadEnviroment.js'
import './SectionsAbout.css'
import { Button } from '@components/buttons/Button.jsx' 
export const SectionsAbout = () => {
  return (
    <section className='about-content'>
        <div className='a-c-item ac-content-title'>
        
        </div>
        <div className='a-c-item ac-about-details'>
            <section className='ab-item-detail'>
                <div className='img-card img-eliam'>
                {/* <img src="img-person" alt="" /> */}
                <div className='img-person'></div>
                <div className='details-person'>
                    <h3>Elian Santa Cruz Solis</h3>
                    <p>(Gerente General)</p>
                </div>
                </div>
            </section>
            <section className = 'ab-item-detail details-text' >
               <p className='kanut-description-altern'> <strong>Kanut</strong> nació como un acto de fe en el arte y en las personas.
                 Es la unión de caminos como el teatro, la danza y la música con un propósito 
                 claro: transformar emociones en experiencias que dejen huella. 
                 Más que un nombre, es una declaración de identidad, creación y movimiento.
                <br />  <br /> 
                Surgimos con la convicción de que el arte no solo se interpreta, se vive. 
                De formar artistas que comprendan que su talento puede ser un proyecto de vida 
                auténtico, y de llevar esa pasión a cada espacio donde la alegría merece ser 
                celebrada. <br />  <br /> 
                Con el tiempo entendimos que los momentos más valiosos no se repiten:
                la risa de un niño, la emoción compartida, la energía que une a las personas 
                en una celebración. Allí es donde Kanut cobra sentido, creando experiencias 
                vibrantes que despiertan ilusión y construyen recuerdos que permanecen.
               <br />  <br /> 
                Porque creemos que cada instante importante merece vivirse con intensidad
                y corazón. No buscamos solo organizar eventos, sino convertir 
                emociones en memorias que acompañen toda la vida.
                </p>
                
            </section>
            <section className='ab-item-detail '>
                <div className='img-card img-daniela'>
                <div className='img-person'></div>
                {/* <img src="img-person" alt="" /> */}
                <div className='details-person'>
                    <h3>Daniela Coronel Cahuaza</h3>
                    <p>(Gerente Administrativa)</p>
                </div>
                </div>
            </section>
        </div>
        <div className='a-c-item ac-footer'>
            <div className='btn-show-details'>
                <Button className="ac-btn">Saber mas</Button>
                <Button title={"SABER MAS"} addClass={"ac-btn"}></Button>

            </div>
        </div>
            
    </section>
  )
}
