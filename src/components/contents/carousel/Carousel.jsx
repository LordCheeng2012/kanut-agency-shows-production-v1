import { toogleItems, moveNext, movePrev } from './Carousel.js';
import { useEffect } from 'react';
import './Carousel.css';
import { ButtonPrimary, Button, ButtonGold } from '../../buttons/Button.jsx';
export const Carousel = ({Class=null, items = null,isAuto = true}) => {

  // No manual listeners or debug code here. Buttons use React onClick handlers below.

    const agregateButtons = isAuto ? <></> : (
    <>
      <button type="button" className='button' data-action="prev" onClick={() => movePrev()}><h1>{`<`}</h1></button>
      <button type="button" className='button' data-action="next" onClick={() => moveNext()}><h1>{`>`}</h1></button>
    </>
  );
  const itemsCarousel = isAuto ? 
  <>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </>
  : 
  items.map(()=><div></div>)

  return (
    <div className={`${Class ? Class : ''} interface-options`}>

      <section className={`io-options ${isAuto ? `transparent`:``}`}>
        <section className='io-buttons'>
        {agregateButtons}
        </section>
        <section className='status-items' data-active={`${isAuto}`}>
             {itemsCarousel}
        </section>
      </section>

      <div className={`carousel`}>
        <CarouselList items={items} isAuto = {isAuto}></CarouselList>
      </div>

    </div>
  )
}

export const CarouselList = ({items=null,isAuto = true}) => {
  useEffect(()=>toogleItems())
  if(!items){
    return (
    <ul className='carousel-content' data-active = {`${isAuto}`} >
      <li className='background-boda'>
       <ButtonPrimary type='medium'>Informes</ButtonPrimary>
      </li>
      <li className='background-party'>
         <ButtonPrimary type='medium'>Informes</ButtonPrimary>
      </li>
      <li className='background-shows'>
          <ButtonGold type='medium'>Informes</ButtonGold>
      </li>
      <li className='background-boda'>
         <ButtonGold type='medium'>Informes</ButtonGold>
      </li>
    </ul>
    );
  }
    if(!Array.isArray(items)) return ;
    const css_config = {width:`${items.length}00%`}
    if(items.length <= 3 ) css_config.animation = 'none';

 return (
   <ul className='carousel-content' data-active = {`${isAuto}`} style={css_config}>
    {items.map(item =>item)}
   </ul>
   
 );
}