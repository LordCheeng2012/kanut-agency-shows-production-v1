import Card from "@components/contents/cards/Card.jsx"
import { ListComments } from "./SectionComments.js"
import './SectionComments.css'

export const SectionComments = () => {
  return (
    <section className="content-comments">
      <div className="c-c-item c-c-title">
        {/* <h1>Nuestros Kanulovers</h1> */}
        <div className="c-c-t-title">

        </div>
      </div>
      <div className="c-c-item c-c-list-content">
      <div className="interface-comments">
          <div className="int-c-item left-btn"><button>{'<'}</button></div>
          <div className="c-c-comments-list">
         {ListComments().map(cv=><Card data={{...cv}} ></Card>)}     
          </div>
          <div className="int-c-item right-btn"><button>{'>'}</button></div>
      </div>
      <div className="c-c-l-status-page">
       <div className="cclsp-item"></div>
      <div className="cclsp-item"></div>
      <div className="cclsp-item"></div>
      <div className="cclsp-item"></div>
      </div>
      </div>
    </section>
  )
}
