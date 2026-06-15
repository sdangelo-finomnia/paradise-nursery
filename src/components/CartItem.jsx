import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div>

      {/* ✅ HEADER */}
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/products">Plants</Link> | 
          <Link to="/cart">Cart ({totalItems})</Link>
        </nav>
      </header>

      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div key={item.id} className="cart-card">

          {/* ✅ IMG CORRETTO */}
          <img src={item.image} alt={item.name} />

          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
            +
          </button>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ${totalPrice}</h2>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
