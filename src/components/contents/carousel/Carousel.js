import { next } from "./index-items/index-items";
export const toogleItems = (carouselRef,indexRef)=>{
    if(!carouselRef) return;
    const carousel = carouselRef.current.querySelector(`ul[data-carousel-active = "true"]`);
    const carouselItems = Array.from(carousel.querySelectorAll(`li`));
    const onlyDefault = carouselItems.filter((i)=> i.className.includes("background"));
    let waitForStart = 3000;
    const totalItems = onlyDefault.length;
    const defaultWidth = getComputedStyle(carousel).width;
    const animation = ()=>{
        let back = totalItems - 1;
        let forward = 0;
        setInterval(()=>{
             let isEnd = totalItems <= forward ; /*  4 == 4 */
             let value = isEnd ? `-${back}00` :`-${forward}00`; /* back*/ 
             //para los cuadros el primero es 0
             carousel.setAttribute("style",`margin-left:  ${value}% ; width:${defaultWidth}`); /* -300%*/
             if (isEnd) back--; else forward++;            
             next({i:isEnd ? back + 1 : forward,carousel,ref:indexRef}); // para los items el primero es 1 , recien sumado         
             if(back == 0)  {
                forward = 0;
                back = totalItems -1;
            };
             
        },waitForStart);
    }
    
   animation();
}

export const defWidth = (length)=> {
    if(!length || length >=10) return {width:'auto'}
    return {
        width : `${length}00%`
    } 
} 
