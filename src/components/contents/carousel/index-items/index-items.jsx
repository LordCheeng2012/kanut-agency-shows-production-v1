import React from 'react'
import i from "./index-items.module.css"
export const IndexItems = ({items=4,ref=null}) => {
    if(!ref) return ;
    const itemsUi = [];
    for (let index = 0; index < items; index++) itemsUi.push(<div></div>);
    
  return (
   <section ref={ref} className= {i['status-items']} >
       {itemsUi}
   </section>
  )
}
