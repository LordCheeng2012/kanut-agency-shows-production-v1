
import { Interface } from './interface-button/interface-buttons.jsx';
import { IndexItems } from './index-items/index-items.jsx';
import s from "./carousel.module.css"
import { defWidth } from './carousel.js';
import {toogleItems} from "./carousel.js"
import { useEffect, useRef } from 'react';
export const Carousel = ({classname='',items}) => {

  if(!items || !(Array.isArray(items))) return console.log("error items not is array valid -> ",items);
  const showButtons = items.length <= 2;
  const buildclass = `${s['carousel']} ${classname}`;
  const refCarousel = useRef(null); 
  const refIndexItems = useRef(null);
  const itemsCarousel = {carousel:refCarousel,indexs:refIndexItems};
  useEffect(()=>{
    !showButtons && toogleItems(refCarousel,refIndexItems);
    return ()=>undefined},
    []);

  return (
    <section className= {`${s['carousel-content']}`}>
      <div ref={refCarousel} className= {buildclass}>
        <Interface isghost = {showButtons} refItemsCarousel={itemsCarousel} />    
        <ul data-carousel-active = {showButtons ? "false":"true"} style={{...defWidth(items.length)}}>
            {
                items.map(li => <>{li}</>)
            }
        </ul>
        <IndexItems ref={refIndexItems} items={items.length} />
    </div>
    </section>
  )

}
