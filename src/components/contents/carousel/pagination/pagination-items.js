import { utils } from "../../../../utils/utils";
import styles from "./pagination.module.css";

const { isnull_undf } = utils();


export const moveTransition = ({ i = 1, ref = null }) => {
  if (!ref) return console.log("error i o ref not exist");
  const refindexcontent = ref.current;
  if (!(refindexcontent instanceof HTMLElement))
    return console.error(`not valid element`);
  const currentIndex = i + 1;
  const currentItem = refindexcontent.querySelector(
    `div:nth-child(${currentIndex})`,
  );

  const beforeItem = refindexcontent.querySelector(
    `div:nth-child(${currentIndex - 1})`,
  );
  const nextItem = refindexcontent.querySelector(
    `div:nth-child(${currentIndex + 1})`,
  );
  if (beforeItem) {
    beforeItem.classList.remove(`${styles["next-item-transition"]}`);
    beforeItem.removeAttribute(`data-js-current-index`);
  }
  if (nextItem) {
    nextItem.classList.remove(`${styles["next-item-transition"]}`);
    nextItem.removeAttribute(`data-js-current-index`);
  }
  if (currentItem) {
    currentItem.classList.add(`${styles["next-item-transition"]}`);
    currentItem.setAttribute(`data-js-current-index`, "true");
  }

  return;
};
//obtener el indice actual
export const _getCurrentIndex = (refIndexs) => {
  if (!refIndexs || !(refIndexs.current instanceof HTMLElement))
    return console.log("Error elemento no es valido");
  const contentIndexs = refIndexs.current;
  const items = Array.from(
    contentIndexs.querySelectorAll("section[data-js-status-content] > div"),
  );
  // console.log(`status lenght ->`,items.length)
  const currentIndex = items.findIndex((item) => {
    const isCurrent = item.getAttribute(`data-js-current-index`);
    return !isnull_undf(isCurrent); // ✅ Retorna true cuando SÍ existe el atributo
  });

  if (!currentIndex || currentIndex < 0) {
    console.log("no se encontro indice actual,restableciendo indice --- > 0");
    return 0;
  }

  return currentIndex;
  /*
     0 -> 1 
     1 -> 2 
  */
};
export const clearAll = (refIndex) => {
  const items = Array.from(
    refIndex.querySelectorAll("section[data-js-status-content] > div"),
  );
  items.forEach((item) => {
    if (!(item instanceof HTMLElement)) return;
    const isCurrent = item.getAttribute(`data-js-current-index`);
    if (isCurrent) {
      // console.log(`clear item ....`,item);
      item.classList.remove(`${styles["next-item-transition"]}`);
    }
  });
  return;
};
