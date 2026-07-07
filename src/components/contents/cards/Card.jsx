import './Card.css'

import { paths } from '../../../config/loadEnviroment.js';
const {clients} = paths();
export const Card =  ({data = {title:"dummy-title",img:null, descripcion:"",color:"red",autor:"" }})=> {
  const path =`${clients}/${data.img}`;
  return (
    <div className="card" >
      <div className='content-card item-carousel' style={{ backgroundColor: `var(${data.color})` }}>
      <div className='card-title'>
       <div className='title-dialog'>
        <h3 style={{color:`var(${data.color})`}}>{data.title}</h3>
       </div>
        </div>
      <div className='card-content-details'>
        <section className='c-c-d-img-item'>
          <img src={path} alt="" />
          </section> 
          <section className='c-c-d-description-service'>
            <p>{data.descripcion}</p>
          </section>
          <section className='c-c-d-autor-client'>
            <p>{data.autor}</p>
          </section>
      </div>
      </div>
      <div className='card-footer' style={{borderTop: `5vh solid  var(${data.color})`}} >
      </div>
    </div>
      
  );
}


export const CardItem = ({title,subtitle,image,onClick})=> {
  return(
    <div
      className="card-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      <div className="c-i-img-item">
        <img src={image} alt={title} />

        <div className="flag-kanut">
          <p>K</p>
          <div className="border-flag">
            <div className="right-triangule"></div>
            <div className="left-triangule"></div>
          </div>
        </div>
      </div>

      <div className="c-i-f-portfolio">
        <p className="kanut-description-altern-card">
          <strong>Kanut</strong> {title} {subtitle}
        </p>
      </div>
    </div>
  );
};