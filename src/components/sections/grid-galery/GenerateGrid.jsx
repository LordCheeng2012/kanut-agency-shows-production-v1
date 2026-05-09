import { BtnPrimary } from '../../buttons/Button'
import './GenerateGrid.css'

export const GenerateGrid = ({totalItems=25}) => {
  const totalItemsList = [];
  for (let index = 0; index < totalItems; index++) {
    totalItemsList.push(<div className="item-grid"></div>);
  }
  return (
   <>
   <div className='grid-containter-galery'>
    {totalItemsList.map((items)=>items)} 
   </div>
   <div className='shadow-show'>
    <div className='question-toogle'>
        <BtnPrimary title={'Mostrar mas'}></BtnPrimary>
    </div>
   </div>
   </>
  )
}



