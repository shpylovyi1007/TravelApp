import { NavLink, Outlet } from "react-router-dom";
import css from "./CamperComponent.module.scss";
import UserForm from "../Form/Form";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/camper/selectors";
import { useEffect } from "react";
import { getCampersById } from "../../redux/camper/operations";

const activePage = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const CamperComponent = () => {
  const dispatch = useDispatch();
  const currentCamper = useSelector(selectCurrentCamper);

  useEffect(() => {
    dispatch(getCampersById(selectCurrentCamper));
  }, [selectCurrentCamper, dispatch]);

  return (
    <div className={css.page}>
      <p className={css.title}>{currentCamper.name}</p>

      <div className={css.ratingContainer}>
        <div className={css.rating}>
          <svg width="16" height="16">
            <use href="/sprite.svg#rating" />
          </svg>
          <p className={css.ratingtext}>
            {currentCamper.rating} (
            <span>{currentCamper.reviews.length} Reviews</span>)
          </p>
        </div>

        <div className={css.location}>
          <svg width="16" height="16">
            <use href="/sprite.svg#map" />
          </svg>
          <p>{currentCamper.location}</p>
        </div>
      </div>

      <p className={css.price}>&#8364;{currentCamper.price}</p>

      <ul className={css.listImg}>
        {currentCamper.gallery.map((image, index) => (
          <li key={index}>
            <img
              className={css.img}
              src={image.thumb}
              alt={`Camper view ${index + 1}`}
            />
          </li>
        ))}
      </ul>

      <p>{currentCamper.description}</p>

      <nav className={css.nav}>
        <NavLink to="features" className={activePage}>
          Features
        </NavLink>
        <NavLink to="reviews" className={activePage}>
          Reviews
        </NavLink>
      </nav>

      <div className={css.formContainer}>
        <Outlet context={{ currentCamper }} />
        <UserForm />
      </div>
    </div>
  );
};

export default CamperComponent;
