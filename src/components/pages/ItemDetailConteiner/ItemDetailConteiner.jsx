import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let product = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(product);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (counter) => {
    let obj = {
      ...productSelected,
      quantity: counter,
    };

    console.log("sAdded to shopping car", obj);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};

export default ItemDetailConteiner;
