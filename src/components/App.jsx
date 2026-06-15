import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import NotFound from "./components/NotFound"; // Assicurati di creare questo componente

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <p>We provide high-quality indoor plants.</p>

              <Link to="/products">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />

        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<NotFound />} /> {/* Gestione errore 404 */}
      </Routes>
    </BrowserRouter>
  );
}
