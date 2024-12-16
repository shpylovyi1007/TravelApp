import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "./CamperComponent.module.scss";
import UserForm from "../Form/Form";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/camper/selectors";
import { useEffect } from "react";
import { getCampersById } from "../../redux/camper/operations";
import { Triangle } from "react-loader-spinner";

const activePage = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const CamperComponent = () => {
  const dispatch = useDispatch();
  const currentCamper = useSelector(selectCurrentCamper);
  const params = useParams();

  useEffect(() => {
    const camperId = params.id;

    if (camperId) {
      dispatch(getCampersById(camperId));
    }
  }, [dispatch, params.id]);

  if (!currentCamper || Object.keys(currentCamper).length === 0) {
    return (
      <div className={css.page}>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#e44848"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

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

      <p className={css.price}>&#8364;{currentCamper.price.toFixed(2)}</p>

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
