import { useEffect, useState } from "react";
import CatalogList, { ItemType } from "../CatalogList/CatalogList";
import { fetchCampers } from "../campers-api";
import Filter from "../Filter/Filter";
import css from "./CatalogComponent.module.scss";

const CatalogComponent = () => {
  const [campers, setCampers] = useState<ItemType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCatalog = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchCampers(page);

        setCampers((prevCampers) => {
          return [...prevCampers, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCatalog();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={css.container}>
        <Filter />
        {isLoading && <p>Is Loading...</p>}
        {error && <p>Oops. Error. Reload</p>}
        <CatalogList items={campers} />
      </div>
      <button className={css.buttonLoad} onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default CatalogComponent;
