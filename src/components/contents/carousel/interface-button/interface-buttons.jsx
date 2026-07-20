import { ButtonCircle } from '../../../buttons/Button.jsx';
import { movePrev,moveNext } from './interface-buttons.js';

import s from "./interface-buttons.module.css"
export const Interface = ({classname = '' , isghost = false,refItemsCarousel = null}) => {

  const show = !isghost ? s['cursor--off'] : '';
  const buildclass = `${s['interface-content']} ${show}`;

  return (
    <div className = {buildclass}>
      <section className ={`${s['io-options']}`}>
        <section className ={`${classname} ${s['io-buttons']}`}>
            <ButtonCircle type="ghost"
            data-action="prev" onClick={() => movePrev(refItemsCarousel)}>
                <h1>{`<`}</h1>
            </ButtonCircle>
            <ButtonCircle type="ghost" 
            data-action="next" 
            onClick={() => moveNext(refItemsCarousel)}>
                <h1>{`>`}</h1>
            </ButtonCircle>
        </section>

      </section>
    </div>
  )
}
