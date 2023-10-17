import CounterConteiner from "../../common/Counter/CounterConteiner";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <img src={productSelected.img} />
      <h2>{productSelected.title}</h2>
      <p>{productSelected.description}</p>
      <CounterConteiner stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
