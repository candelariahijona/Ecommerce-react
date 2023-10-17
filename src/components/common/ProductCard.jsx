import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.img} />
      <div>
        <h2>{item.title}</h2>
        <p className="description">{item.description}</p>
        <p className="price">${item.price}</p>
        <Link to={`/ItemDetail/${item.id}`}>
          <button>+</button>
        </Link>
      </div>
    </div>
  );
}
