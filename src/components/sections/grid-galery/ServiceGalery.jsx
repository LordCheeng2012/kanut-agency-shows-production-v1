import { BtnPrimary } from '../../buttons/Button'
import './ServiceGalery.css'

export const ServiceGalery = () => {
  return (
   <>
   <div className='grid-containter-galery'>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
    <div className="item-grid"></div>
   </div>
   <div className='shadow-show'>
    <div className='question-toogle'>
        <BtnPrimary title={'Mostrar mas'}></BtnPrimary>
        
    </div>
   </div>
   </>
  )
}


export const GaleryGrid = (gridItems = 4,childrenItems=3)=>{
  const GridItems = [];
  const childsClass = [];

  for (let index = 0; index < childrenItems; index++) {
    childsClass.push(<div className={"item-children-grid"}> <h1>image</h1></div>);   
  }

  for (let index = 0; index < gridItems; index++) {
    GridItems.push(
      <div className='grid-template-galery'> 
      {childsClass.map((item)=> item)}
      </div>
    );

  };
  
return GridItems.map((grids)=> grids);
}

