import {ArrowSvg} from "../pictures/ArrowSvg";

export default function WareScroll() {
  return (
    <div className="ware__list">
      <button className="ware__button">
        <ArrowSvg className="ware__scroll"/>
      </button>
      <span className='ware__count'>1</span>
      <button className="ware__button ware__button_type_text">
        <ArrowSvg className="ware__scroll"/>
      </button>
    </div>
  )
}