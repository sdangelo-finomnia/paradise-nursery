import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Medicinal",
    image: "https://source.unsplash.com/100x100/?aloe",
    description: "Healing indoor plant"
  },
  {
    id: 2,
    name: "Lavender",
    price: 12,
    category: "Aromatic",
    image: "https://source.unsplash.com/100x100/?lavender",
    description: "Relaxing fragrance plant"
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://source.unsplash.com/100x100/?snakeplant",
    description: "Improves air quality"
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying",
    image: "https://source.unsplash.com/100x100/?lily",
    description: "Elegant indoor plant"
  },
  {
    id: 5,
    name: "Mint",
    price: 8,
    category: "Aromatic",
    image: "https://source.unsplash.com/100x100/?mint",
    description: "Fresh herbal plant"
  },
  {
    id: 6,
    name: "Bonsai",
    price: 30,
    category: "Decorative",
    image: "https://source.unsplash.com/100x100/?bonsai",
    description: "Mini decorative tree"
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const count = cart.reduce((acc, i) => acc + i.quantity, 0);

  const isAdded = (id) => cart.some(i => i.id === id);

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {/* ✅ HEADER + NAVBAR */}
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/products">Plants</Link> | 
          <Link to="/cart">Cart ({count})</Link>
        </nav>
      </header>

      <h1>Our Plants</h1>

      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id} className="product-card">
                {/* ✅ IMG CORRETTO */}
                <img src={p.image} alt={p.name} />

                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p>${p.price.toFixed(2)}</p> {/* Formatta il prezzo */}

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
