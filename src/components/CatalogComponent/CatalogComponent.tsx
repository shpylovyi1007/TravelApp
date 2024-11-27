import { useEffect, useState } from "react";
import CatalogList, { ItemType } from "../CatalogList/CatalogList";
import { fetchCampers } from "../campers-api";

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
    <div>
      <CatalogList items={campers} />
    </div>
  );
};

export default CatalogComponent;
