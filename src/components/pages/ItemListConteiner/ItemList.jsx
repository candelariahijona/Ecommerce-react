import ProductCard from "../../common/ProductCard";
import "./ItemList.css";
export const ItemList = ({ greeting, items }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="item-list">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
