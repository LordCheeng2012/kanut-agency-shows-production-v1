import styles from "./index-items.module.css";
export const next = ({ i = 1, ref = null }) => {
  console.log(i,ref)
  if (!ref) return console.log("error i o ref not exist");
  const refindexcontent = ref.current;
  const currentItem = refindexcontent.querySelector(
    `div:nth-child(${i})`,
  );
  const beforeItem = refindexcontent.querySelector(
    `div:nth-child(${i - 1})`,
  );
  const nextItem = refindexcontent.querySelector(
    `div:nth-child(${i + 1})`,
  );
  if (beforeItem) beforeItem.classList.remove(`${styles["next-item-transition"]}`);
  if (nextItem) nextItem.classList.remove(`${styles["next-item-transition"]}`);
  if (currentItem) currentItem.classList.add(`${styles["next-item-transition"]}`);

  return;
};
