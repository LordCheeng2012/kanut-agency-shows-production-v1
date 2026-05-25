import './Card.css'
import { paths } from '../../../config/loadEnviroment.js';
const {clients} = paths();
function Card({data = {title:"dummy-title",img:null, descripcion:"",color:"red",autor:"" }}) {
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

export default Card;