import './Valores.css'
import { paths } from '../../../config/loadEnviroment.js'
const {icons} = paths();

export const Valores = () => {
  return (
     <section className='content-valores'>
      <h1 className='kanut-title'>Valores</h1>
      <ul className='list-valores'>
        <li>
          <div className = 'item-list-v'><img src={`${icons}/kanut-especial.png`} alt="icono kanut especial" className="img-valor" /><h3>Creatividad</h3> </div>
        </li>
        <li><div className = 'item-list-v'><img src={`${icons}/fire.png`} alt="fire" className="img-valor" /><h3>Pasión</h3></div></li>
        <li><div className = 'item-list-v'><img src={`${icons}/champion.png`} alt="champion" className="img-valor" /><h3>Profesionalismo</h3></div></li>
        <li><div className = 'item-list-v'><img src={`${icons}/business.png`} alt="bussiness" className="img-valor" /><h3>Confianza</h3></div></li>
        <li><div className = 'item-list-v'><img src={`${icons}/validate.png`} alt="verify" className="img-valor" /><h3>Autenticidad</h3></div></li>
        <li><div className = 'item-list-v'><img src={`${icons}/team.png`} alt="team" className="img-valor" /><h3>Compromiso</h3></div></li>
      </ul>
    </section>
  )
}
