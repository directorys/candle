import Product from "../Home/Product";

export default function Service() {
  return (
    <div className="service">
      <div className="service__content">
        <h2 className="service__title">Список товаров к оплате, отправке:</h2>
      </div>
      <Product />
    </div>
  )
}