import { useContext, useEffect, useState } from "react";
import { CartFavoritesContext } from "../../contexts/useCartFavoriteContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const { cart } = useContext(CartFavoritesContext);

  useEffect(() => {
    const storedIds = localStorage.getItem("cart");
    setCartItems(storedIds ? JSON.parse(storedIds) : []);
  }, [cart]);

  return (
    <Link to={"/cart"}>
      <div className="cart-container">
        {cartItems.length > 0 && (
          <div className="cart-icon">
            <span>{cartItems.length}</span>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping fs-5"></i>
      </div>
    </Link>
  );
};

export default CartIcon;
