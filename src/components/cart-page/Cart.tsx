import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/useProductDataContext";
import { Product } from "../../interfaces";
import { Link } from "react-router-dom";
import { CartFavoritesContext } from "../../contexts/useCartFavoriteContext";
import CartHeader from "./sub-components/CartHeader";
import CartItem from "./sub-components/CartItem";
import CartFooter from "./sub-components/CartFooter";
import Header from "../Header";

const Cart = () => {
  const { data, isLoading } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState<
    { productId: string; productQuantity: number }[]
  >([]);
  const { setCart } = useContext(CartFavoritesContext);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    setCartItems(
      storedItems
        ? (JSON.parse(storedItems) as {
            productId: string;
            productQuantity: number;
          }[])
        : []
    );
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCartItems(updatedItems);
    setCart(updatedItems);
  };

  const calculateTotalPrice = () => {
    if (!data) {
      return 0;
    }
    const selectedItems = data.filter((item: Product) =>
      cartItems.some((cartItem) => cartItem.productId === item.id.toString())
    );
    return selectedItems.reduce((total, item) => {
      const cartItem = cartItems.find(
        (cartitem) => cartitem.productId === item.id.toString()
      );
      if (!item.isDiscounting) {
        return total + item.price * (cartItem?.productQuantity || 1);
      } else {
        return total + item.salePrice * (cartItem?.productQuantity || 1);
      }
    }, 0);
  };

  return (
    <>
     <Header/>
      <div className="page-container">
        <div className="cart-page">
          <CartHeader />
          <div className="order-list">
            <div className="order-list-heading">
              <span>Product</span>
              <span>Price</span>
            </div>
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : (
              <>
                {cartItems.length === 0 ? (
                  <div className="cart-empty">
                    <h1>Your cart is empty</h1>
                  </div>
                ) : (
                  <>
                    {data &&
                      data
                        .filter((item: Product) =>
                          cartItems.some(
                            (cartItem) =>
                              cartItem.productId === item.id.toString()
                          )
                        )
                        .map((item) => {
                          const cartItem = cartItems.find(
                            (ci) => ci.productId === item.id.toString()
                          );
                          return (
                            <CartItem
                              key={item.id}
                              item={item}
                              cartItem={cartItem}
                              removeFromCart={removeFromCart}
                            />
                          );
                        })}
                    <CartFooter total={calculateTotalPrice()} />
                    <div className="checkout">
                      <p>
                        * Shipping costs not included. Proceed to checkout to
                        calculate shipping costs.
                      </p>
                      <Link to={"/checkout"}>
                        <button className="btn-order btn-order-full width-100">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;