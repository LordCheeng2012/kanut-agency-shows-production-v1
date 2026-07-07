import { paths } from "../../../config/loadEnviroment.js";
import ItemService from "@components/contents/service/ItemService.jsx";
const { fonts } = paths();
import "./History.css";
import { utils } from "../../../utils/utils.js";

export const History = ({ classname = "" }) => {
   const {navigate} = utils();

  return (
    <div className={`${classname} history history-point`}>
      <div className="item-title-history">
        <img src={`${fonts}/font_1.png`} alt="" />
      </div>
      <div className="item-content-video-player">
        <div
          className="item-service-details"
          onclick={() => navigate("/services/boda")}
        >
          <section className="item-video"></section>
          <section className="service-details">
            <ItemService keyService={"boda"}></ItemService>
          </section>
        </div>
        <div className="item-service-details">
          <section className="item-video"></section>
          <section className="service-details">
            <ItemService keyService="party"></ItemService>
          </section>
        </div>
        <div className="item-service-details">
          <section className="item-video"></section>
          <section className="service-details">
            <ItemService keyService="shows"></ItemService>
          </section>
        </div>
      </div>
    </div>
  );
};
