import AnyImage from "../../images/header/any.png";
import NewImage from "../../images/header/new.png";
import {Images} from "../pictures/Images";
import {categoryArray} from "../array/categoryArray";
import {Link} from "react-router-dom";

export default function HeaderPopup() {
  return (
    <div className="header__popup">
      <div className="header__info">
        <ul className="header__categories">
          { categoryArray.map((category, i) => 
          <li key={i}>
            <Link className="header__category" to={category.name}>{category.text}</Link>
          </li>
          )}
          <li>
            <Link className="header__category" to="contract">Контрактное производство</Link>
          </li>
        </ul>
        <ul className="header__cards">
          <li className="header__card">
            <Images className="header__avatar" src={AnyImage} alt="Icon"/>
            <p className="header__category header__category_type_card">Весь асортимент</p>
            <Link to="/" className="header__link"/>
          </li>
          <li className="header__card">
            <Images className="header__avatar" src={NewImage} alt="Icon"/>
            <p className="header__category header__category_type_card">Новые</p>
            <Link to="/" className="header__link"/>
          </li>
        </ul>
      </div>
    </div>
  )
}