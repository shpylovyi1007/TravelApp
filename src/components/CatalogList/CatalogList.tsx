import React from "react";
import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./CatalogList.module.scss";

export interface ItemType {
  id: string;
  name: string;
  gallery: { thumb: string }[];
  price: number;
  rating: number;
  reviews: [];
  location: string;
  description: string;
  transmission: string;
  kitchen: boolean;
  AC: boolean;
  TV: boolean;
  bathroom: boolean;
  radio: boolean;
  water: boolean;
  microwave: boolean;
  refrigerator: boolean;
  gas: boolean;
  engine: string;
  form: string;
}

interface CatalogListProps {
  items: ItemType[];
}

const truncateDescription = (text: string, maxLength = 80) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const CatalogList: React.FC<CatalogListProps> = ({ items }) => {
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
                  <p>&#8364;{item.price}</p>
                  <svg width="24" height="24">
                    <use href="/sprite.svg#favorites" />
                  </svg>
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
            <button className={css.button} type="button">
              Show more
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
