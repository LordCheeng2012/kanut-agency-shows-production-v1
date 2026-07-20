import React from 'react'
import { paths } from '../../config/config.js'
const {icons} = paths();
import './Footer.css'
export const Footer = () => {
  return (
    <footer>
        <div className="footer-item ">
        <img src={`${icons}/claim.png`} alt="reclamos"  /> 
        </div>
        <div className="footer-item border-footer-item f-i-flex">
          <h3 className='kanut-subtitle f-i-title'>REDES SOCIALES</h3>
         <li className='f-i-icons-social'>
          <img src={`${icons}/TikTok.png`} alt="tik tok" className="s-icons-item" />
          <img src={`${icons}/fb.png`} alt="fb" className="s-icons-item" />
          <img src={`${icons}/instagram.png`} alt="instagram" className="s-icons-item" />
         </li>
        </div>
        <div className="footer-item border-footer-item f-i-flex">
         <h3 className='kanut-subtitle f-i-title'>CONTACTANOS</h3>
          <div className='f-i-icons-corp'>
            <div className="item-icons-corp">
              <img src={`${icons}/wsp.png`} alt="" />
              <p className='kanut-subtitle'>+51 000-000-000</p>
            </div>
            <div className="item-icons-corp">
             <img src={`${icons}/email.png`} alt="" />
              <p className='kanut-subtitle'>KanutEspetaculos@gmail.com</p>
            </div>
          </div> 

        </div>
        <div className="footer-item border-footer-item f-i-flex">
          <h3 className='kanut-subtitle f-i-title'>AGENDA TU REUNION</h3>
         <img src={`${icons}/reserva.png`} alt="reserva" /> 
        </div>
    </footer>
  )
}
