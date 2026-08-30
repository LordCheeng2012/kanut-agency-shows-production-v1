
import { _getCurrentIndex, clearAll, moveTransition } from "./pagination/pagination-items";
export const toogleItems = (carouselRef,refPagination)=>{
    if(!carouselRef) return;
    const carousel = carouselRef.current.querySelector(`ul[data-carousel-active = "true"]`);
    const carouselItems = Array.from(carousel.querySelectorAll(`li`));
    const onlyDefault = carouselItems.filter((i)=> i.className.includes("background"));
    let waitForStart = 3000;
    const totalItems = onlyDefault.length-1;

    const animation = ()=>{
        setInterval(()=>{
        const currentIndex = _getCurrentIndex(refPagination);
        let nextindex = currentIndex + 1;
        if(nextindex > totalItems) {
        //  console.log(`se llego al final del carousel , retornando a 0`);
            nextindex = 0;
            clearAll(refPagination.current); 
        };
        // console.log(`index actual es -> ${nextindex} de ${totalItems} totales`);
        nextFrameCarousel(carousel,nextindex);
        moveTransition({i:nextindex,ref:refPagination});

        },waitForStart);
    }
    
   animation();
}

export const defWidth = (length,startIn = - 1)=> {
    return {
        width : `${length}00%`,
        marginLeft:startIn ? `-${startIn}00%` : ''
    } 
} 

export const nextFrameCarousel = (carouselRef,newIndex)=>{
    const newMarginLeft = `-${newIndex}00%`;
    // console.log(`new margin -> `,newMarginLeft)
    carouselRef.style.marginLeft = newMarginLeft;
    
    return;
    //  console.log("move success");
}