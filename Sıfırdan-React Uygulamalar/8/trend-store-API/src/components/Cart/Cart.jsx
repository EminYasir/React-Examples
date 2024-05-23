import "./Cart.css";
import CartItem from "./CartItem";
//import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ onHideCart }) => {
  const CartCtx = useContext(CartContext);
  const hasItem = CartCtx.items.length > 0;
  const cartItems = (
    <ul className="cart-items">
      {CartCtx.items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <Offcanvas onHideCart={onHideCart}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={onHideCart}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{CartCtx.totalAmount.toFixed(2)}$</span>
      </div>

      {hasItem && (
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear" onClick={CartCtx.clearItem}>Temizle</button>
        </div>
      )}
    </Offcanvas>
  );
};

export default Cart;
