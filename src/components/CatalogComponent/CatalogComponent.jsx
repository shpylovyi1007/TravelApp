import { useCallback, useEffect } from "react";
import CatalogList from "../CatalogList/CatalogList";
import css from "./CatalogComponent.module.scss";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getCampers, ITEMS_PER_PAGE } from "../../redux/camper/operations";
import {
  selectCampers,
  selectIsLoading,
  selectError,
  selectTotalCampers,
  selectCurrentPage,
} from "../../redux/camper/selectors";
import { selectFilters } from "../../redux/filter/slice";

const CatalogComponent = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalCampers = useSelector(selectTotalCampers);
  const currentPage = useSelector(selectCurrentPage);
  const currentFilters = useSelector(selectFilters);

  const totalPages = Math.ceil(totalCampers.total / ITEMS_PER_PAGE);
  const isLastPage = currentPage >= totalPages;

  useEffect(() => {
    console.log(totalCampers.total);
    console.log(currentPage);

    dispatch(getCampers({ page: currentPage, filters: currentFilters }));
  }, [dispatch, currentFilters, currentPage]);

  const handleNextPage = useCallback(() => {
    console.log(`Loading next page: ${currentPage + 1}`);
    if (currentPage < totalPages) {
      dispatch(
        getCampers({
          page: currentPage + 1,
          filters: currentFilters,
        })
      );
    }
  }, [currentPage, totalPages, dispatch, currentFilters]);

  return (
    <div className={css.page}>
      <div className={css.container}>
        <Filter />
        {isLoading && <p>Is Loading...</p>}
        <CatalogList items={campers.items} />
      </div>
      {!isLastPage && (
        <button
          onClick={handleNextPage}
          className={css.buttonLoad}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogComponent;
