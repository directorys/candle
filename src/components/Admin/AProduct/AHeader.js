import {Link} from "react-router-dom";
import {LogoSvg} from "../../pictures/LogoSvg";

export default function AHeader() {
  return (
    <header className="header">
      <div className="header__container header__container_type_admin">
        <ul className="header__sites header__sites_type_none">
          <li className="header__item header__item_type_active">
            <Link className="header__site header__site_type_bold header__site_type_admin" to="/">Товары</Link>
          </li>    
        </ul>
        <Link to="/" className="header__logo header__logo_type_admin">
          <LogoSvg className="header__image"/>
        </Link>
      </div>
    </header>
  )
}