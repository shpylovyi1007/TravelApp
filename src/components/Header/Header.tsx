import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.scss";

const activePage = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.navlink, isActive && css.active);
};

const Header = () => {
  return (
    <div className={css.header}>
      <img src="Logo.png" className={css.logo} alt="Logo" />
      <nav className={css.nav}>
        <NavLink className={activePage} to="/">
          Home
        </NavLink>
        <NavLink className={activePage} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
