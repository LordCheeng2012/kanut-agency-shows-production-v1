
import { Interface } from './interface-button/interface-buttons.jsx';
import { IndexItems } from './index-items/index-items.jsx';
import s from "./carousel.module.css"
import { defWidth } from './carousel.js';
import {toogleItems} from "./carousel.js"
import { useEffect, useRef } from 'react';
export const Carousel = ({classname='',items}) => {

  if(!items || !(Array.isArray(items))) return console.log("error items not is array valid -> ",items);
  const showButtons = items.length <= 3;
  const buildclass = `${s['carousel']} ${classname}`;
  const useCarousel = useRef(null); 
  // useEffect(()=>{toogleItems(useCarousel);return ()=>undefined},[])
  return (
    <section ref={useCarousel} className= {`${s['carousel-content']}`}>
      <div className= {buildclass}>
        <Interface isghost = {showButtons}/>    
        <ul style={{...defWidth(items.length)}}>
            {
                items.map(li => <>{li}</>)
            }
        </ul>
        <IndexItems items={items.length}/>
    </div>
    </section>
  )

}
