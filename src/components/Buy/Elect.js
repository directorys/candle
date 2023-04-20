import {Images} from "../pictures/Images";
import { ArrowSvg } from './../pictures/ArrowSvg';
import { BasketSvg } from './../pictures/BasketSvg';

export default function Elect() {
  return (
    <section className="elect">
      <ul className="elect__cards">
        <li className="elect__card">
          <Images className="elect__image" src="https://clck.ru/344hL4" alt="свеча"/>
          <h2 className="elect__title">Ароматическая свеча IQTRAVELS - Капучино</h2>
          <p className="elect__subtitle">Очень удобен для чтения, при этом яркий и запоминающийся — подходит не только для текста, но и для крупных цифр, эмоциональных слайдов и заголовков.</p>
          <div className="elect__buys">
            <p className="elect__price">3.999₽</p>
            <div className="elect__check elect__check_type_button">
              <ArrowSvg className="elect__arrow"/>
              <span className="elect__count">1</span>
              <ArrowSvg className="elect__arrow elect__arrow_type_reverse"/>
            </div>
          </div>
          <div className="elect__ckecks">
            <input className="elect__check elect__check_type_reverse" type="checkbox"/>
            <div className="elect__check elect__check_type_shop">
              <BasketSvg className="elect__basket"/>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}