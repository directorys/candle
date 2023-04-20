import React from "react";
import Product from './Home/Product';
import Footer from './Home/Footer';
import { Link } from "react-router-dom";
import { ArrowSvg } from './pictures/ArrowSvg';
import {BasketSvg} from "./pictures/BasketSvg";
import {Images} from "./pictures/Images";

export default function Goods() {
  return (
    <React.Fragment>
      <div className="goods">
        <div className="goods__header">
          <div className="goods__line"></div>
          <Link className="goods__link" to="/">На&nbsp;главную</Link>
          <div className="goods__line"></div>
        </div>
        <div className="goods__body">
          <div className="goods__blocks">
            <div className="goods__images">
              <Images className="goods__image" src="https://clck.ru/344hL4" alt="свеча"/>
              <div className="goods__pictures">
                <Images className="goods__picture" src="https://clck.ru/344hL4" alt="свеча"/>
                <Images className="goods__picture" src="https://clck.ru/344hL4" alt="свеча"/>
                <Images className="goods__picture" src="https://clck.ru/344hL4" alt="свеча"/>
                <Images className="goods__picture" src="https://clck.ru/344hL4" alt="свеча"/>
              </div>
            </div>
            <h2 className="goods__title">Ароматическая свеча IQTRAVELS - Капучино</h2>
            <div className="goods__template">
              <div className="goods__calc">
                <div className="goods__counts">
                  <ArrowSvg className="goods__arrow" />
                  <span className="goods__count">1</span>
                  <ArrowSvg className="goods__arrow goods__arrow_type_reverse" />
                </div>
                <div className="goods__prices">
                  <p className="goods__price">3.999₽</p>
                  <p className="goods__out">4.999₽</p>
                </div>
              </div>
              <p className="goods__paragraph">Очень удобен для чтения, при этом яркий и запоминающийся — подходит не только для текста, но и для крупных цифр, эмоциональных слайдов и заголовков.</p>
              <div className="goods__buttons">
                <button className="goods__basket">
                  <BasketSvg className="goods__avatar"/>
                </button>
                <button className="goods__basket goods__basket_type_buy">Купить</button>
              </div>
            </div>
          </div>
          <ul className="goods__items">
            <li className="goods__item">
              <div className="goods__heads">
                <h3 className="goods__head">Описание</h3>
                <div className="goods__line"></div>
              </div>
              <p className="goods__desc">Достаточно свежий шрифт разработан компаний Paratype в 2019 году. Шрифт отлично подходит для чтения длинных текстов с экрана и рекомендуется для сайтов государственных и социальных сервисов. В гарнитуре пять начертаний разной жирности от Regular до Black.</p>
            </li>
            <li className="goods__item">
              <div className="goods__heads">
                <h3 className="goods__head">Доставка</h3>
                <div className="goods__line"></div>
              </div>
              <p className="goods__desc">Интернет-магазин Русский Доктор гарантирует обмен или возврат медицинской одежды и ... Доставка в офис возможна с понедельника по пятницу с 10:00 до 17:00.</p>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <Product />
      </main>
      <Footer />
    </React.Fragment>
  )
}