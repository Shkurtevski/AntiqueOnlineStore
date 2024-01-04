import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <div className="cart-page-header">
      <h1>Your Cart</h1>
      <Link to="/product-page">
        <button className="btn-order">Continue shopping</button>
      </Link>
    </div>
  );
};
export default CartHeader;
