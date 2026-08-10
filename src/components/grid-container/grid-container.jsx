import { useEffect, useRef } from "react";
import styles from "./grid-container.module.css";
import { Gridconfig } from "./grid-config";
import "../galery/galery.module.css";

function GridContainer({
  children,
  modelName = null,
  columns = 3,
  rows = 1,
}) {
  const refGridContainer = useRef(null);
  useEffect(() => {

      Gridconfig({
      ref: refGridContainer,
      columns,
      rows,
    });
    
  }, []);
  return (
    <section
      ref={refGridContainer}
      className={`${styles["grid-container"]} ${modelName && styles[modelName]}`}
    >
      {children}
    </section>
  );
}
export default GridContainer;
