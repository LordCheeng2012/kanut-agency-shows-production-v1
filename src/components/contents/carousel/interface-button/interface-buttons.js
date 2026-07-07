import { nextFrameCarousel } from "../carousel";
import { moveTransition } from "../index-items/index-items";
import { _getCurrentIndex } from "../index-items/index-items";

const getCurrentObjets = ({ carousel = null, indexs = null }) => {
  if (!carousel || !indexs) return console.error("Error not valids objects");
  console.log(carousel.current);
  return {
    carousel: carousel.current.querySelector(
      `ul[data-carousel-active = "false"]`,
    ),
    indexs,
  };
};

export const moveNext = (currents = null) => {
  const { carousel, indexs } = getCurrentObjets({ ...currents });
  console.log(carousel);
  const items = Array.from(carousel.querySelectorAll("li"));
  const total = items.length - 1;
  const currentIndex = _getCurrentIndex(indexs);
  // console.log(` total items  next es -> ${total} de  current index ${currentIndex}`);
  if (currentIndex >= total) return; // already at end
  //margin left start is 0 === 1 -> currentIndex === 1 ? -> margin left -> 100% == 1 next step
  const nextitem = currentIndex + 1;
  nextFrameCarousel(carousel, nextitem);
  moveTransition({ i: nextitem, ref: indexs });
};

export const movePrev = (currents = null) => {
  const { carousel, indexs } = getCurrentObjets({ ...currents });
  const items = Array.from(carousel.querySelectorAll("li"));
  const total = items.length - 1;
  const currentIndex = _getCurrentIndex(indexs);
  // console.log(`indice actual back es -> ${currentIndex} : total items es -> ${total}`);
  if (currentIndex < 0) return;
  const backitem = currentIndex - 1;
  nextFrameCarousel(carousel, backitem);
  moveTransition({ i: backitem, ref: indexs });
};
