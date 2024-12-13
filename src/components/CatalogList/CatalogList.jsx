import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./CatalogList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavoritesCampers } from "../../redux/favoritesCamper/selectors";
import { toggleFavorite } from "../../redux/favoritesCamper/slice";

const truncateDescription = (text, maxLength = 70) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const CatalogList = ({ items }) => {
  const dispatch = useDispatch();

  const favoritesCampers = useSelector(selectFavoritesCampers);

  const handleToggleFavorite = (camperId) => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <ul className={css.list}>
      {items.map((item, index) => {
        const isFavorite = favoritesCampers.includes(item.id);
        return (
          <li key={`${item.id}-${index}`} className={css.item}>
            <div
              className={css.img}
              style={{ backgroundImage: `url(${item.gallery[0].thumb})` }}
            />
            <div className={css.description}>
              <div>
                <div className={css.name}>
                  <p>{item.name} </p>
                  <div className={css.price}>
                    <p>&#8364;{item.price.toFixed(2)}</p>
                    <button
                      className={css.buttonFavorites}
                      onClick={() => handleToggleFavorite(item.id)}
                      style={{
                        stroke: isFavorite ? "gold" : "",
                      }}
                    >
                      <svg width="24" height="24">
                        <use href="/sprite.svg#favorites" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={css.ratingContaier}>
                  <div className={css.rating}>
                    <svg width="16" height="16">
                      <use href="/sprite.svg#rating" />
                    </svg>
                    <p>
                      {item.rating} (<span>{item.reviews.length} Reviews</span>)
                    </p>
                  </div>

                  <div className={css.location}>
                    <svg width="16" height="16">
                      <use href="/sprite.svg#map" />
                    </svg>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
              <p className={css.description}>
                {truncateDescription(item.description)}
              </p>
              <FeaturesList item={item} />
              <Link
                className={css.button}
                target="_blank"
                to={`/campers/${item.id}`}
              >
                Show more
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;
