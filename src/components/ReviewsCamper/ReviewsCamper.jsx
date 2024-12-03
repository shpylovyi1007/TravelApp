import { useOutletContext } from "react-router-dom";
import css from "./ReviewsCamper.module.scss";

const ReviewsCamper = () => {
  const { currentCamper } = useOutletContext();

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} width="16" height="16">
          <use href="/sprite.svg#rating"></use>
        </svg>
      );
    }
    return stars;
  };

  return (
    <ul className={css.list}>
      {currentCamper.reviews.map((reviews, index) => {
        const firstLetter = reviews.reviewer_name.slice(0, 1);
        return (
          <li key={index}>
            <div className={css.nameContainer}>
              <div className={css.firstLetter}>
                <span>{firstLetter} </span>
              </div>
              <div>
                <p className={css.name}>{reviews.reviewer_name}</p>
                <div className={css.rating}>
                  {renderStars(reviews.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.text}>{reviews.comment} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsCamper;
