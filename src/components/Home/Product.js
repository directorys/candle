import ProductCard from './ProductCard';
import { productArray } from './../array/productArray';

export default function Product() {
  return (
    <section className="product">
      <ul className="product__cards">
        {productArray.map((product, i) => <ProductCard key={i} value={product}/> )}
      </ul>
    </section>
  )
}