import {NavLink} from 'react-router-dom';
import { categoryArray } from './../../array/categoryArray';

export default function ACategory({activeClass}) {
  return (
    <section className="category">
      <ul className={`category__items ${activeClass}`}>
        {categoryArray.map((category, i) =>
        <li key={i}>
          <NavLink className={({isActive}) => 
            `category__link ${isActive
              ? 'category__link_type_active'
              : ''
            }`
          } to={category.name}>{category.text}</NavLink>
        </li>
        )}
      </ul>
    </section>
  )
}