import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./CatalogList.module.scss";
import { getCampersById } from "../../redux/camper/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const truncateDescription = (text, maxLength = 70) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const CatalogList = ({ items }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleShowMore = (camperId) => {
    dispatch(getCampersById(camperId));
    navigate(`/campers/${camperId}`);
  };

  return (
    <ul className={css.list}>
      {items.map((item, index) => (
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
                  <button className={css.buttonFavorites}>
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
            <button
              className={css.button}
              onClick={() => dispatch(handleShowMore(item.id))}
            >
              Show more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
