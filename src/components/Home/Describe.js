
import CandleImage from '../../images/describe/candle.png';
import {Images} from '../pictures/Images';

export default function Describe() {
  return (
    <section className="describe">
      <div className='describe__content'>
        <Images className="describe__image" src={CandleImage} alt="Candle"/>
        <div className="describe__info">
          <h2 className="describe__title">Прекрасные запахи в ваш дом! Аромосвеча поможет сделать ваш дом намного уютнее и теплее!</h2>
          <ul className="describe__items">
            <li className="describe__item">Безвредно, экологично!</li>
            <li className="describe__item">Поможет создать атмосферу в доме!</li>
            <li className="describe__item">Приятный запах</li>
            <li className="describe__item">Приносит узнаваемость, уют в ваш дом!</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
