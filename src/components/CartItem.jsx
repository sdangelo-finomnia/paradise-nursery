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

      {/* ✅ NAVBAR */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Plants</Link> | 
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {items.length === 0 && <p>Your cart is empty</p>}

      {items.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >
          
          {/* ✅ IMMAGINE CORRETTA (QUESTO ERA IL BUG PRINCIPALE) */}
          <img
            src={item.image}
            alt={item.name}
            width="100"
            height="100"
          />

          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* ✅ BOTTONI QUANTITÀ */}
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: 1 }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: -1 }))
            }
          >
            -
          </button>

          {/* ✅ REMOVE */}
          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          {/* ✅ SUBTOTALE */}
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      {/* ✅ TOTALI */}
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ${totalPrice}</h2>

      {/* ✅ CHECKOUT */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      {/* ✅ CONTINUE SHOPPING */}
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
``
