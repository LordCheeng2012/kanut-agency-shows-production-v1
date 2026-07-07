
import { _getCurrentIndex, clearAll, moveTransition } from "./index-items/index-items";
export const toogleItems = (carouselRef,indexRef)=>{
    if(!carouselRef) return;
    const carousel = carouselRef.current.querySelector(`ul[data-carousel-active = "true"]`);
    const carouselItems = Array.from(carousel.querySelectorAll(`li`));
    const onlyDefault = carouselItems.filter((i)=> i.className.includes("background"));
    let waitForStart = 3000;
    const totalItems = onlyDefault.length-1;

    const animation = ()=>{
        setInterval(()=>{
        const currentIndex = _getCurrentIndex(indexRef);
        let nextindex = currentIndex + 1;
        if(nextindex > totalItems) {
        //  console.log(`se llego al final del carousel , retornando a 0`);
            nextindex = 0;
            clearAll(indexRef.current); 
        };
        // console.log(`index actual es -> ${nextindex} de ${totalItems} totales`);
        nextFrameCarousel(carousel,nextindex);
        moveTransition({i:nextindex,ref:indexRef});

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

export const nextFrameCarousel = (carouselRef,newIndex)=>{
    const newMarginLeft = `-${newIndex}00%`;
    // console.log(`new margin -> `,newMarginLeft)
    carouselRef.style.marginLeft = newMarginLeft;
    
    return;
    //  console.log("move success");
}