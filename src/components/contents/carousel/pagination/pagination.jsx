import i from "./pagination.module.css";

export const Pagination = ({ items = 4, ref = null, startIn = 0 }) => {
  const itemsUi = [];
  for (let index = 0; index < items; index++) {
    if (index === startIn) {
      console.log(`empieza en el indice -> ${startIn}`);
      itemsUi.push(
        <div
          className={i["next-item-transition"]}
          data-js-current-index="true"
        />,
      );
      continue;
    }
    itemsUi.push(<div></div>);
  }

  return (
    <section ref={ref} className={i["status-items"]} data-js-status-content>
      {itemsUi}
    </section>
  );
};
