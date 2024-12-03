import { useEffect } from "react";
import CatalogList from "../CatalogList/CatalogList";
import css from "./CatalogComponent.module.scss";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/camper/operations";
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from "../../redux/camper/selectors";

const CatalogComponent = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCampers(campers));
  }, [dispatch]);

  return (
    <div className={css.page}>
      <div className={css.container}>
        <Filter />
        {isLoading && <p>Is Loading...</p>}
        <CatalogList items={campers} />
      </div>
      <button className={css.buttonLoad}>Load More</button>
    </div>
  );
};

export default CatalogComponent;
