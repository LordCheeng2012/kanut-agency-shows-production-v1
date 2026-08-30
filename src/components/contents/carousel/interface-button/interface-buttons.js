import { utils } from "@utils/utils";
import { nextFrameCarousel } from "../carousel-config";
import {
  moveTransition,
  _getCurrentIndex,
} from "../pagination/pagination-items";
const { isnull_undf } = utils();
const getCurrentObjets = ({
  carousel = null,
  indexs = null,
  totalItems = null,
}) => {
  if (isnull_undf(carousel) || isnull_undf(indexs) || isnull_undf(totalItems))
    return console.error("Error not valids objects");
  return {
    carousel: carousel.current.querySelector(
      `ul[data-carousel-active = "false"]`,
    ),
    indexs,
    totalItems,
  };
};
export const moveNext = (currents = null) => {
  const { carousel, indexs,totalItems } = getCurrentObjets({ ...currents });
  const currentIndex = _getCurrentIndex(indexs);
  // console.log(` total items  next es -> ${total} de  current index ${currentIndex}`);
  //margin left start is 0 === 1 -> currentIndex === 1 ? -> margin left -> 100% == 1 next step
  const nextitem = currentIndex + 1;
    if (nextitem >= totalItems) return; // already at end
  nextFrameCarousel(carousel, nextitem);
  moveTransition({ i: nextitem, ref: indexs });
};

export const movePrev = (currents = null) => {
  const { carousel, indexs,totalItems } = getCurrentObjets({ ...currents });
  const currentIndex = _getCurrentIndex(indexs);
  // console.log(`indice actual back es -> ${currentIndex} : total items es -> ${total}`);
    if (currentIndex <= 0) return;
    const backitem = currentIndex - 1;
    nextFrameCarousel(carousel, backitem);
    moveTransition({ i: backitem, ref: indexs });
};
