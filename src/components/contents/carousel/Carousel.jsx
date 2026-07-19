
import { Interface } from './interface-button/interface-buttons.jsx';
import { IndexItems } from './index-items/index-items.jsx';
import s from "./carousel.module.css"
import { defWidth } from './carousel.js';
import {toogleItems} from "./carousel.js"
import { useEffect, useRef } from 'react';
export const Carousel = ({classname='',items,automatic=true}) => {

  if(!items || !(Array.isArray(items))) return console.log("error items not is array valid -> ",items);
  const buildclass = `${s['carousel']} ${classname}`;
  const refCarousel = useRef(null); 
  const refIndexItems = useRef(null);
  const itemsCarousel = {carousel:refCarousel,indexs:refIndexItems};
  useEffect(()=>{
    automatic && toogleItems(refCarousel,refIndexItems);
    return ()=>undefined},
    []);

  return (
    <section className= {`${s['carousel-content']}`}>
      <div ref={refCarousel} className= {buildclass}>
        <Interface isghost = {!automatic } refItemsCarousel={itemsCarousel} />    
        <ul data-carousel-active = {automatic ? "true":"false"} style={{...defWidth(items.length)}}>
            {
                items.map(li => <>{li}</>)
            }
        </ul>
        <IndexItems ref={refIndexItems} items={items.length} />
    </div>
    </section>
  )

}
