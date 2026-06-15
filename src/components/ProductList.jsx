import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: "https://source.unsplash.com/100x100/?aloe"
  },
  {
    id: 2,
    name: "Lavender",
    price: 12,
    category: "Aromatic",
    image: "https://source.unsplash.com/100x100/?lavender"
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://source.unsplash.com/100x100/?snakeplant"
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying",
    image: "https://source.unsplash.com/100x100/?lily"
  },
  {
    id: 5,
    name: "Mint",
    price: 8,
    category: "Aromatic",
    image: "https://source.unsplash.com/100x100/?mint"
  },
  {
    id: 6,
    name: "Bonsai",
    price: 30,
    category: "Decorative",
    image: "https://source.unsplash.com/100x100/?bonsai"
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = id => cart.find(i => i.id === id);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <h1>Our Plants</h1>

      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                
                <img src={p.image} alt={p.name} />

                <h3>{p.name}</h3>
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
      ))}
    </div>
  );
}
