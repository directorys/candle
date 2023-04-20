import {Link} from "react-router-dom";

export default function ACreate() {
  return (
    <section className="create">
      <div className="create__content">
        <Link to="/" className="create__link">Добавить товар</Link>
        <div className="create__line"></div>
      </div>
    </section>
  )
}