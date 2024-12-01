import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.scss";
import { Link } from "react-router-dom";

const activePage = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.navlink, isActive && css.active);
};

const Header = () => {
  return (
    <div className={css.header}>
      <Link to="/">
        <img src="Logo.png" className={css.logo} alt="Logo" />
      </Link>
      <nav className={css.nav}>
        <NavLink className={activePage} to="/">
          Home
        </NavLink>
        <NavLink className={activePage} to="/campers">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
