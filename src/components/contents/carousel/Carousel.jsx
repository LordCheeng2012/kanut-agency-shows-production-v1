import './Carousel.css';
export const Carousel = ({Class=null, items =null}) => {
  return (
    <div className={`${Class ? Class : ''} interface-options`}>

      <section className='io-options'>
        <section className='io-buttons'>
        <button className='button' ><h1>{`>`}</h1></button>
        <button className='button' ><h1>{`<`}</h1></button>
        </section>
        <section className='status-items'>

        </section>
      </section>

      <div className={`carousel`}>
        <CarouselList items={items}></CarouselList>
      </div>

    </div>
  )
}

export const CarouselList = ({
  items=null
}) => {

  if(!items){
    return (
    <ul className='carousel-content' >
      <li className='background-boda'></li>
      <li className='background-party'></li>
      <li className='background-shows'></li>
      <li className='background-boda'></li>
    </ul>
    );
  }
    if(!Array.isArray(items)) return ;
    const css_config = {width:`${items.length}00%`}
    if(items.length <= 3 ) css_config.animation = 'none';

 return (

   <ul className='carousel-content' style={css_config}>
    {items.map(item =>item)}
   </ul>
   
 );
}