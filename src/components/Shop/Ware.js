import {productArray} from '../array/productArray';
import { categoryArray } from './../array/categoryArray';
import ProductCard from '../Home/ProductCard';
import WareItem from "./WareItem";
import WareScroll from './WareScroll';

export default function Ware() {
  const wareItems = categoryArray.map((category, i) => (
    <WareItem key={i} value={category} />
  ))

  const wareCards = productArray.map((product, i) => (
    <ProductCard key={i} value={product} />
  ))

  return (
    <section className="ware">
      <div className="ware__content">
        <ul className="ware__items">{wareItems}</ul>
        <ul className="product__cards">{wareCards}</ul>
        <WareScroll />
      </div>
    </section>
  )
}