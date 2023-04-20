import { productArray } from "./../../array/productArray";
import ProductCard from "../../Home/ProductCard";
import { ArrowSvg } from './../../pictures/ArrowSvg';

export default function ATicket() {
  return (
    <section className="ticket">
      <div className="ticket__content">
        <ul className="ticket__cards">
          {productArray.map((product, i) =>
          <ProductCard value={product} key={i}/>
          )}
        </ul>
        <div className="ticket__counts">
          <ArrowSvg className="ticket__image"/>
          <span className="ticket__count">1</span>
          <ArrowSvg className="ticket__image ticket__image_type_reverse"/>
        </div>
      </div>
    </section>
  )
}