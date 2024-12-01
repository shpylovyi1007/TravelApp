import { useOutletContext } from "react-router-dom";
import { ItemType } from "../CatalogList/CatalogList";
import css from "./FeaturesCamper.module.scss";

type FeaturesCamperProps = {
  currentCamper: ItemType;
};

const FeaturesCamper: React.FC = () => {
  const { currentCamper } = useOutletContext<FeaturesCamperProps>();

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          {currentCamper.transmission === "automatic" ? (
            <div className={css.item}>
              <svg width="32" height="32">
                <use href="/sprite.svg#transmission" />
              </svg>
              <p>Automatic</p>
            </div>
          ) : (
            <div className={css.item}>
              <svg width="32" height="32">
                <use href="/sprite.svg#transmission" />
              </svg>
              <p>Manual</p>
            </div>
          )}
        </li>
        <li>
          {currentCamper.engine === "diesel" ? (
            <div className={css.item}>
              <svg width="32" height="32">
                <use href="/sprite.svg#engine" />
              </svg>
              <p>Diesel</p>
            </div>
          ) : (
            <div className={css.item}>
              <svg width="32" height="32">
                <use href="/sprite.svg#engine" />
              </svg>
              <p>Petrol</p>
            </div>
          )}
        </li>

        {currentCamper.kitchen && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#kitchen" />
            </svg>
            <p>Kitchen</p>
          </li>
        )}
        {currentCamper.bathroom && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#bathroom" />
            </svg>
            <p>Bathroom</p>
          </li>
        )}
        {currentCamper.AC && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#ac" />
            </svg>
            <p>AC</p>
          </li>
        )}
        {currentCamper.TV && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#tv" />
            </svg>
            <p>TV</p>
          </li>
        )}
        {currentCamper.radio && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#radio" />
            </svg>
            <p>Radio</p>
          </li>
        )}
        {currentCamper.water && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#water" />
            </svg>
            <p>Water</p>
          </li>
        )}
        {currentCamper.microwave && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#microwave" />
            </svg>
            <p>Microwave</p>
          </li>
        )}
        {currentCamper.refrigerator && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#refrigerator" />
            </svg>
            <p>Refrigerator</p>
          </li>
        )}
        {currentCamper.gas && (
          <li className={css.item}>
            <svg width="32" height="32">
              <use href="/sprite.svg#gas" />
            </svg>
            <p>Gas</p>
          </li>
        )}
      </ul>

      <div className={css.detailsContainer}>
        <h2 className={css.subTitle}>Vehicle details</h2>

        <ul className={css.listDetails}>
          <li className={css.itemDetails}>
            <p>Form</p>
            <p>{currentCamper.form} </p>
          </li>
          <li className={css.itemDetails}>
            <p>Length</p>
            <p>{currentCamper.length} </p>
          </li>
          <li className={css.itemDetails}>
            <p>Width</p>
            <p>{currentCamper.width} </p>
          </li>
          <li className={css.itemDetails}>
            <p>Height</p>
            <p>{currentCamper.height} </p>
          </li>
          <li className={css.itemDetails}>
            <p>Tank</p>
            <p>{currentCamper.tank} </p>
          </li>
          <li className={css.itemDetails}>
            <p>Consumption</p>
            <p>{currentCamper.consumption} </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesCamper;
