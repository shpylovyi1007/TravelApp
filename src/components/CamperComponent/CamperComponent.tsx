import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { showMoreCampers } from "../../redux/campersOperation";
import css from "./CamperComponent.module.scss";
import UserForm from "../Form/Form";

const CamperComponent: React.FC = () => {
  const { currentCamper } = useSelector((state: RootState) => state.campers);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(showMoreCampers(id));
    }
  }, [id, dispatch]);

  if (!currentCamper) {
    return <div>No camper selected</div>;
  }

  return (
    <div className={css.page}>
      <p className={css.title}>{currentCamper.name} </p>

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

      <p>{currentCamper.description} </p>

      <nav className={css.nav}>
        <NavLink to="features" className={css.link}>
          Features
        </NavLink>
        <NavLink to="reviews" className={css.link}>
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
