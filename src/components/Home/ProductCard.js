import { Link } from "react-router-dom";
import { Images } from '../pictures/Images';
import {useEffect, useState} from "react";

export default function ProductCard({value}) {
  const [price, setPrice] = useState({
    old: '',
    new: ''
  });

  useEffect(() => {
    setPrice({
      old: new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'RUB' }
        ).format(value.oldPrice),
      new: new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB' }
      ).format(value.newPrice)
    })
  }, [value])

  return (
    <li className="product__card">
      <Link className="product__link" to={value.link}></Link>
      <Images className="product__image" src={value.url} alt={value.title} />
      <h3 className="product__title">{value.title}</h3>
      <ul className="product__prices">
        <li className="product__price product__price_type_old">{price.old}</li>
        <li className="product__price">{price.new}</li>
      </ul>
    </li>
  )
}