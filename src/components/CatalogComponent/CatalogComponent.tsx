import { useEffect, useState } from "react";
import CatalogList, { ItemType } from "../CatalogList/CatalogList";
import { fetchCampers } from "../campers-api";
import Filter from "../Filter/Filter";
import css from "./CatalogComponent.module.scss";

const CatalogComponent = () => {
  const [campers, setCampers] = useState<ItemType[]>([]);

  useEffect(() => {
    const getCatalog = async () => {
      const data = await fetchCampers();

      setCampers(data);
    };

    getCatalog();
  }, []);

  return (
    <div className={css.container}>
      <Filter />
      <CatalogList items={campers} />
    </div>
  );
};

export default CatalogComponent;
