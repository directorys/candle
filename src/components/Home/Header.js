import {Link} from "react-router-dom";
import { HeaderMenuSvg } from '../pictures/HeaderMenuSvg';
import {useEffect, useState} from "react";
import HeaderPopup from "./HeaderPopup";
import {LogoSvg} from "../pictures/LogoSvg";

export default function Header() {
  const [activePopup, setActivePopup] = useState(false);

  // Отключение/включение попапа по клику меню:
  const handlePopup = () => setActivePopup(prev => !prev);

  // Отключение попапа по ESC:
  const closePopup = (event) => {
    if (!activePopup) {
      return;
    }

    if (event.key === 'Escape') {
      setActivePopup(prev => !prev);
    }
  }

  // Отключение попапа:
  useEffect(() => {
    window.addEventListener('keyup', closePopup);

    return () => {
      window.removeEventListener('keyup', closePopup);
    }
  });

  return (
    <header className="header">
      <div className="header__container">
        <HeaderMenuSvg onClick={handlePopup} className="header__menu"/>
        <ul className="header__sites">
          <li className="header__item header__item_type_active">
            <Link className="header__site header__site_type_bold" to="/">Главная</Link>
          </li>            
          <li className="header__item">
            <Link className="header__site" to="/basket">Корзина</Link>
          </li>    
        </ul>
        <Link to="/" className="header__logo">
          <LogoSvg className="header__image"/>
        </Link>
      </div>
      {activePopup && <HeaderPopup/>}
    </header>
  )
}