import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import { ItemList } from "./ItemList";
import "./ItemListConteiner.css";

let greeting = "Welcome to this new experience";

const ItemListConteiner = () => {
  const [items, setItems] = useState([]);

  const { categorySection } = useParams();
  console.log(categorySection ? "filter" : "home");

  useEffect(() => {
    const filterProducts = products.filter(
      (product) => product.category === categorySection
    );
    const taks = new Promise((resolve, reject) => {
      resolve(categorySection ? filterProducts : products);
    });

    taks.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categorySection]);

  return <ItemList greeting={greeting} items={items} />;
};

export default ItemListConteiner;
