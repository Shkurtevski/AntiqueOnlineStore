import { Link } from "react-router-dom";
import { Product } from "../../../interfaces";

interface CartItemProps {
  item: Product;
  cartItem: { productId: string; productQuantity: number } | undefined;
  removeFromCart: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, cartItem, removeFromCart }) => {
  return (
    <div key={item.id} className="cart-item">
      <div className="cart-item-image">
        <Link to={`/product-detail-page/${item.id}`}>
          <img src={item.images[0]} alt={item.title} />
        </Link>
      </div>
      <div className="cart-item-name">
        <Link to={`/product-detail-page/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <div>
          <button
            className="btn-cart-remove"
            onClick={() => removeFromCart(item.id.toString())}
          >
            Remove
          </button>
        </div>
      </div>
      <p className="cart-item-price">
        &euro;&nbsp;
        {((item.isDiscounting && item.salePrice) || item.price) *
          (cartItem?.productQuantity || 1)}
        <span>
          &nbsp;x&nbsp;{cartItem?.productQuantity}
        </span>
      </p>
    </div>
  );
};

export default CartItem;