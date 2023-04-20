import {Images} from "../pictures/Images";
import ImageCandle from "../../images/describe/candle.png";

export default function Info() {
  return (
    <section className="info">
      <div className="info__content">
        <Images className="info__image" src={ImageCandle} alt="Candle"/>
        <div className="info__data">
          <h2 className="info__title">Свеча ароматическая Just Feel "Табак и пряности"</h2>
          <p className="info__subtitle">Соевая, деревянный фитиль, 80 мл. Ароматизированная свеча Just Feel в подсвечнике из гипса создана вручную, из материалов высшего качества. Натуральный соевый воск американского производства абсолютно безопасен для людей и животных, благодаря чему вы сможете зажигать свечу в любых помещениях. Деревянный фитиль выполнен из древесины розового дерева, он хорошо горит и своим потрескиванием создает уютную, успокаивающую атмосферу.</p>
        </div>
      </div>
    </section>
  )
}