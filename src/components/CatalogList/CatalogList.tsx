import React from "react";

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
}

interface CatalogListProps {
  items: ItemType[];
}

const CatalogList: React.FC<CatalogListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.gallery[0].thumb} alt={item.name} />
          <div>
            <div>
              <div>
                <p>{item.name} </p>
                <p>{item.price}</p>
              </div>
              <div>
                <p>
                  {item.rating} (<span>{item.reviews.length} Reviews</span>)
                </p>
                <p>{item.location} </p>
              </div>
            </div>
            <p>{item.description} </p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button type="button">Show more</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
