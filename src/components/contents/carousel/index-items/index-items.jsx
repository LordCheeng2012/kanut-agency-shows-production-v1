import React from 'react'
import i from "./index-items.module.css"
export const IndexItems = ({items=4}) => {
    const itemsUi = [];
    for (let index = 0; index < items; index++) itemsUi.push(<div></div>);
    
  return (
   <section className= {i['status-items']} >
       {itemsUi}
   </section>
  )
}
