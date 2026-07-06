import {Card} from "@components/contents/cards/Card.jsx"
import { prepareItems } from "./SectionComments.js"
import { paths } from "../../../config/loadEnviroment.js"
import './SectionComments.css'
import { Carousel } from "../../../components/contents/carousel/Carousel.jsx"

export const SectionComments = () => {
  const {fonts} = paths(); 
  const items = prepareItems().result.map((items, index) => {
  return (
    <li className="cc-item" key={index}>
      {items.map((i, subIndex) => (
        <Card key={subIndex} data={{ ...i }} />
      ))}
    </li>
  )
});    
  return (
    <section className="content-comments">
      <img src={`${fonts}/font_2.png`} alt="Kanulovers"  className="cc-item"/>
      <Carousel items={items} />
    </section>
  )
}
