import React from "react";
import { ItemType } from "../CatalogList/CatalogList";
import css from "./FeaturesList.module.scss";

interface FeaturesListProps {
  item: ItemType;
}

const FeaturesList: React.FC<FeaturesListProps> = ({ item }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        {item.transmission === "automatic" ? (
          <div className={css.subitem}>
            <svg width="32" height="32">
              <use href="/sprite.svg#transmission" />
            </svg>
            <p>Automatic</p>
          </div>
        ) : (
          <div className={css.subitem}>
            <svg width="32" height="32">
              <use href="/sprite.svg#transmission" />
            </svg>
            <p>Manual</p>
          </div>
        )}
      </li>
      <li className={css.item}>
        {item.engine === "diesel" ? (
          <div className={css.subitem}>
            <svg width="32" height="32">
              <use href="/sprite.svg#engine" />
            </svg>
            <p>Diesel</p>
          </div>
        ) : (
          <div className={css.subitem}>
            <svg width="32" height="32">
              <use href="/sprite.svg#engine" />
            </svg>
            <p>Petrol</p>
          </div>
        )}
      </li>

      {item.kitchen && (
        <li className={css.item}>
          <svg width="32" height="32">
            <use href="/sprite.svg#kitchen" />
          </svg>
          <p>Kitchen</p>
        </li>
      )}

      {item.AC && (
        <li className={css.item}>
          <svg width="32" height="32">
            <use href="/sprite.svg#ac" />
          </svg>
          <p>AC</p>
        </li>
      )}
    </ul>
  );
};

export default FeaturesList;
