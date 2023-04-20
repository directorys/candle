import {Link} from "react-router-dom";

export default function Sort() {
  return (
    <section className="sort">
      <div className="sort__content">
        <h2 className="sort__title">Свечи ароматические Just Feel принесут вам покой и умиротворение!</h2>
        <p className="sort__subtitle sort__subtitle_type_origin">Внимание! Внешний вид подсвечника (количество пузырьков, рисунок, цвет и т.д.) может отличаться от представленного на фотографиях. Это связано с особенностями ручного производства.</p>
        <Link className="sort__subtitle sort__subtitle_type_link" to="/">Посмотреть ассортимент</Link>
      </div>
    </section>
  )
}