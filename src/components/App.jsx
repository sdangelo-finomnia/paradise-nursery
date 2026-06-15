import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>
              <p>We bring nature to your home.</p>
              <Link to="/products">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />

        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

    </BrowserRouter>
  );
}
