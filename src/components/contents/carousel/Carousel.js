export const toogleItems = (carouselRef)=>{
    if(!carouselRef) return;
    console.log(carouselRef.current)
    const carousel = carouselRef.current;
    // alert('runnn');
    const carouselItems = Array.from(carousel.querySelectorAll(`.carousel-content  li`));
    const  onlyDefault = carouselItems.filter((i)=> i.className.includes("background"));
    let waitForStart = 3000;
    const totalItems = onlyDefault.length;
    
    const animation = ()=>{
        let back = totalItems - 1;
        let forward = 0;
        setInterval(()=>{
             let isEnd = totalItems <= forward ; /*  4 == 4 */
             let value = isEnd ? `-${back}00` :`-${forward}00`; /* back*/ 
             //para los cuadros el primero es 0
             carousel.setAttribute("style",`margin-left:  ${value}%`); /* -300%*/
             if (isEnd) back--; else forward++;            
             next(isEnd ? back + 1 : forward); // para los items el primero es 1 , recien sumado         
             if(back == 0)  {
                forward = 0;
                back = totalItems -1;
            };
             
        },waitForStart);
    }
    const next = (i=1)=>{
            if(!i) return ;
            const currentItem = document.querySelector(`.status-items > div:nth-child(${i})`);
            const beforeItem = document.querySelector(`.status-items > div:nth-child(${i-1})`);
            const nextItem = document.querySelector(`.status-items > div:nth-child(${i+1})`);
                if(beforeItem) beforeItem.classList.remove("next-item-transition");
                if(nextItem) nextItem.classList.remove("next-item-transition");
                if(currentItem) currentItem.classList.add("next-item-transition");
            return ;
    }
   animation();
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

const _updateStatusByIndex = (index)=>{
    const i = index + 1; // status items are 1-based
    const currentItem = document.querySelector(`.status-items[data-active = "false"] > div:nth-child(${i})`);
    const beforeItem = document.querySelector(`.status-items[data-active = "false"] > div:nth-child(${i-1})`);
    const nextItem = document.querySelector(`.status-items[data-active = "false"] > div:nth-child(${i+1})`);
    if(beforeItem) beforeItem.classList.remove("next-item-transition");
    if(nextItem) nextItem.classList.remove("next-item-transition");
    if(currentItem) currentItem.classList.add("next-item-transition");
}

export const moveNext = ()=>{
    const carousel = document.querySelector(`.carousel-content[data-active = "false"]`);
    if(!carousel) return;
     console.log(carousel);
    const items = Array.from(carousel.querySelectorAll('li'));
    const total = items.length;
    const currentIndex = _getCurrentIndex(carousel);
    if(currentIndex >= total - 1) return; // already at end

    const newIndex = currentIndex + 1;
    carousel.style.marginLeft = `-${newIndex}00%`;
    _updateStatusByIndex(newIndex);
}

export const movePrev = ()=>{
   const carousel = document.querySelector(`.carousel-content[data-active = "false"]`);
    if(!carousel) return;
    console.log(carousel);
    const currentIndex = _getCurrentIndex(carousel);
    if(currentIndex <= 0) return; // already at start

    const newIndex = currentIndex - 1;
    carousel.style.marginLeft = `-${newIndex}00%`;
    _updateStatusByIndex(newIndex);
}
export const defWidth = (length)=> {
    if(!length || length >=10) return {width:'auto'}
    return {
        width : `${length}00%`
    } 
} 
