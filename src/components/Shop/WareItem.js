import {NavLink} from "react-router-dom";

export default function WareItem({value}) {
  return (
    <li>
      <NavLink
        className={({isActive}) => 
          `ware__link ${isActive
            ? 'ware__link_type_active'
            : ''
          }`
        }
        to={value.name}>
          {value.text}
      </NavLink>
    </li>
  )
}