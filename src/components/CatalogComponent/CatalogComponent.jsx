import { useCallback, useEffect } from "react";
import CatalogList from "../CatalogList/CatalogList";
import css from "./CatalogComponent.module.scss";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getCampers, ITEMS_PER_PAGE } from "../../redux/camper/operations";
import {
  selectCampers,
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/camper/selectors";

const CatalogComponent = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalCampers = useSelector(selectTotalCampers);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(getCampers(currentPage));
    }
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalCampers / ITEMS_PER_PAGE);

  const isLastPage = currentPage >= totalPages;

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      dispatch(getCampers(currentPage + 1));
    }
  }, [currentPage, totalPages, dispatch]);

  return (
    <div className={css.page}>
      <div className={css.container}>
        <Filter />
        {isLoading && <p>Is Loading...</p>}
        <CatalogList items={campers} />
      </div>
      {!isLastPage && (
        <button onClick={handleNextPage} className={css.buttonLoad}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogComponent;
