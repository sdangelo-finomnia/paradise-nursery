import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../redux/CartSlice";

export default function CartItem() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Remove</button>

          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>alert("Coming Soon")}>Checkout</button>
    </div>
  );
}
