import paths from '@absolute/config';
import './Card.css'
const {clients} = paths();
export const Card =  ({data = {title:"dummy-title",img:null, descriptions:[],color:"red",autor:"" }})=> {
  const path =`${clients}/${data.img}`;
  return (
    <div className="card" >
      <div className='content-card' >
      <div className='card-title'>
       <div className='title-dialog' style={{ backgroundColor: `var(${data.color})` }}>
        <h3>{data.type}</h3>
       </div>
        </div>
      <div className='card-content-details' >
        <section className='c-c-d-img-item' >
          <img src={path} alt="" />
          </section> 
          <section className='c-c-d-description-service'>
           {data.descriptions.map(comments => <p>{comments}</p>)}
          </section>
          <section className='c-c-d-autor-client'>
            <p>{data.autor}</p>
          </section>
      </div>
      </div>
      <div className='card-footer' >
      </div>
    </div>
      
  );
}


export const CardItem = ({title,service,image,color="--segondary-pink",onClick})=> {
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

        {/* <div className="flag-kanut">
          <p>K</p>
          <div className="border-flag">
            <div className="right-triangule"></div>
            <div className="left-triangule"></div>
          </div>
        </div> */}
      </div>

      <div className="c-i-f-portfolio">
        <p className="c-i-f-title">
         {title} 
        </p>
        <p className='c-i-f-service-type' style={{color:`var(${color})`}}>
          {service}
        </p>
      </div>
    </div>
  );
};