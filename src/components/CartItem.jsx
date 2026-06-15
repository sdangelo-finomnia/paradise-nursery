import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          
          {/* ✅ IMMAGINE */}
          <img src={item.image} alt={item.name} width="100" />

          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* ✅ BOTTONI */}
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
            +
          </button>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          {/* ✅ SUBTOTALE */}
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      {/* ✅ TOTALE */}
      <h3>Total Items: {items.reduce((acc, i) => acc + i.quantity, 0)}</h3>
      <h3>Total Price: ${total}</h3>

      {/* ✅ BOTTONI FINALI */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

    </div>
  );
}
``
