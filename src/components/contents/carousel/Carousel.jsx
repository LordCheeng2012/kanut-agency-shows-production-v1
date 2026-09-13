import s from "./carousel.module.css";
import { Interface } from "./interface-button/interface-buttons.jsx";
import { Pagination } from "./pagination/pagination.jsx";
import { defWidth, toogleItems } from "./carousel-config.js";
import { useEffect, useRef } from "react";
import {Container} from "@components";
export const Carousel = ({ 
  classname = "", 
  items=[], 
  automatic = true,
  size = null,
  startIn = 0 }) => {

  if (!items || !Array.isArray(items))
    return console.log("error items not is array valid -> ", items);

  const buildclass = `${s["carousel"]} ${classname}`;
  const refCarousel = useRef(null);
  const refPagination = useRef(null);
  const itemsCarousel = { carousel: refCarousel, indexs: refPagination ,totalItems:items.length};

  useEffect(() => {
    automatic== true && toogleItems(refCarousel, refPagination);
    return () => undefined;
  }, []);

  return (
    <Container className={`${s["carousel-content"]}`} size={size || "full"}>
      <div ref={refCarousel} className={buildclass}>
        <Interface isghost={!automatic} refItemsCarousel={itemsCarousel} />
        <ul
          data-carousel-active={automatic ? "true" : "false"}
          style={{ ...defWidth(items.length,startIn) }}
        >
          {items.map((li,i) => (
            <>{li}</>
          ))}
        </ul>
        <Pagination ref={refPagination} startIn = {startIn}  items={items.length} />
      </div>
    </Container>
  );
};
