import {Link} from "react-router-dom";
import {categoryArray} from "../array/categoryArray";
import Mailing from "./Mailing";
import { LogoSvg } from './../pictures/LogoSvg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <LogoSvg className="footer__logo"/>
        <div className="footer__info">
          <ul className="footer__contacts">
            <li className="footer__contact footer__contact_type_products">
              <h3 className="footer__title">Продукты</h3>
              <ul className="footer__punkts">
                { categoryArray.map((category, i) => 
                <li key={i}>
                  <Link className="footer__link" to={category.name}>{category.text}</Link> 
                </li>
                )}
              </ul>
            </li>
            <li className="footer__contact footer__contact_type_sites">
              <h3 className="footer__title">Ссылки</h3>
              <ul className="footer__punkts">
                <li><Link className="footer__link" to="">Instagram</Link></li>
                <li><Link className="footer__link" to="document">Документация</Link></li>
                <li><Link className="footer__link" to="contract">Контрактное производство</Link></li>
              </ul>
            </li>
            <li className="footer__contact footer__contact_type_ofice">
              <h3 className="footer__title">Наш офис</h3>
              <p className="footer__subtitle">Адрес местонахождения: 143072, Московская область, г.о.   Одинцовский, П ВНИИССОК ул. Михаила Кутузова, д. 7, помещение 3, этаж 2., офис 7</p>
            </li>
            <Mailing modifier={'mailing_type_news'} />
          </ul>
          <div className="footer__data">
            <ul className="footer__props">
              <li className="footer__prop">hello@justfeel.life</li>
              <li className="footer__prop">+7 (495) 928-33-77</li>
            </ul>
            <div className="footer__company">
              <h4 className="footer__name">ООО "ДЖАСТ ФИЛ ЛАЙФ"</h4>
              <p className="footer__desc">©2020-2023 SERVER Network OÜ. Все права защищены.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}