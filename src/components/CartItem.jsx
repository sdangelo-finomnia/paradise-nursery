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
      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          
          {/* ✅ immagine */}
          {item.image}

          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* ✅ bottoni quantità */}
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
            +
          </button>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          {/* ✅ subtotale */}
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      {/* ✅ totali */}
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ${totalPrice}</h2>

      {/* ✅ bottoni finali */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
