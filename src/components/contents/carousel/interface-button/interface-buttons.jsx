import { ButtonCircle } from '../../../buttons/Button.jsx';
import { moveNext, movePrev } from '../carousel.js';
import s from "./interface-buttons.module.css"
export const Interface = ({classname = '' , isghost = false}) => {
  const show = !isghost ? s['cursor--off'] : '';
  const buildclass = `${s['interface-content']} ${show}`;

  return (
    <div className = {buildclass}>
      <section className ={`${s['io-options']}`}>
        <section className ={`${classname} ${s['io-buttons']}`}>
            <ButtonCircle type="white"
            data-action="prev" onClick={() => movePrev()}>
                <h1>{`<`}</h1>
            </ButtonCircle>
            <ButtonCircle type="white" 
            data-action="next" 
            onClick={() => moveNext()}>
                <h1>{`>`}</h1>
            </ButtonCircle>
        </section>

      </section>
    </div>
  )
}
