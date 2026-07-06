 import { next } from "../index-items/index-items";
 
 const getCurrentObjets = ({carousel=null,indexs = null})=>{
    console.log({carousel,indexs})
    if(!carousel || !indexs) return console.error("Error not valids objects");
    console.log({carousel,indexs});
    return {
        carousel:carousel.current.querySelector(`ul[data-carousel-active = "false"]`),
        indexs:indexs
    }    

}

// Helper: get current index from inline style (percent). Returns integer index (0-based)
const _getCurrentIndex = (carousel)=>{
    if(!carousel) return 0;
    const ml = carousel.style.marginLeft || '0%';
    const percentMatch = ml.toString().match(/(-?\d+)%/);
    if(percentMatch) return Math.abs(parseInt(percentMatch[1],10))/100 || 0;
    // fallback: try computed style (may be in px)
    const comp = window.getComputedStyle(carousel).marginLeft;
    const pxMatch = comp.toString().match(/(-?\d+)px/);
    if(pxMatch){
        const parent = carousel.parentElement;
        const parentWidth = parent ? parent.clientWidth : 1;
        const px = parseInt(pxMatch[1],10);
        const percent = Math.round((Math.abs(px) / parentWidth) * 100);
        return Math.floor(percent/100);
    }
    return 0;
}


export const moveNext = (currents=null)=>{
    const {carousel,indexs} = getCurrentObjets({...currents});
    const items = Array.from(carousel.querySelectorAll('li'));
    const total = items.length;
    const currentIndex = _getCurrentIndex(carousel);
    if(currentIndex >= total - 1) return; // already at end

    const newIndex = currentIndex + 1;
    carousel.style.marginLeft = `-${newIndex}00%`;
    next({i:newIndex,ref:indexs});
}

export const movePrev = (currents=null)=>{
    const {carousel,indexs} = getCurrentObjets({...currents});
    const currentIndex = _getCurrentIndex(carousel);
    if(currentIndex <= 0) return; // already at start

    const newIndex = currentIndex - 1;
    carousel.style.marginLeft = `-${newIndex}00%`;
    next({i:newIndex,ref:indexs});
}