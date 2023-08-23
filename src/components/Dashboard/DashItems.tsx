import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { BsShop, BsFileEarmarkRuled, BsShieldSlash } from 'react-icons/bs';

const DashItems: FC = () => {
  return (
    <ul className="dash__links">
      <li>
        <NavLink to="" className="dash__link">
          <BsShop className="dash__icon" />
          <span>Магазин</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="rules" className="dash__link">
          <BsFileEarmarkRuled className="dash__icon" />
          <span>Правила</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="banlist" className="dash__link">
          <BsShieldSlash className="dash__icon" />
          <span>Бан-лист</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default DashItems;