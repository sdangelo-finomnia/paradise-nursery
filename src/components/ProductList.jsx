import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Medicinal" },
  { id: 2, name: "Lavender", price: 12, category: "Aromatic" },
  { id: 3, name: "Snake Plant", price: 20, category: "Air Purifying" },
  { id: 4, name: "Peace Lily", price: 18, category: "Air Purifying" },
  { id: 5, name: "Mint", price: 8, category: "Aromatic" },
  { id: 6, name: "Bonsai", price: 30, category: "Decorative" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = id => cart.find(i => i.id === id);

  return (
    <div>
      <h2>Our Plants</h2>

      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.category}</p>
          <p>${p.price}</p>

          <button
            onClick={() => dispatch(addItem(p))}
            disabled={isAdded(p.id)}
          >
            {isAdded(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
``
