import React from 'react'
import i from "./index-items.module.css"
export const IndexItems = ({items=4,ref=null}) => {
    if(!ref) return ;
    const itemsUi = [];

    for (let index = 0; index < items; index++) itemsUi.push(<div></div>);
    // itemsUi[itemsUi.length-1] =  <div className={i["next-item-transition"]} data-js-current-index = "true"></div>;
    itemsUi[0] = <div className={i["next-item-transition"]} data-js-current-index = "true"></div>;
  return (
   <section ref={ref} className= {i['status-items']} data-js-status-content >
    {itemsUi}
   </section>
  )
}
