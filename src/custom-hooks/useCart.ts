import { useContext, useEffect, useState } from "react";
import { CartFavoritesContext } from "../contexts/useCartFavoriteContext";

const useCart = (productId: string | undefined) => {
  const [isInCart, setIsInCart] = useState<boolean>();
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const { setCart } = useContext(CartFavoritesContext)


  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsInCart(false);
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem("cart");
    const cartIds = cartItems ? JSON.parse(cartItems) : [];
    if (
      cartIds.some(
        (item: { productId: string }) => item.productId === productId
      )
    ) {
      setIsInCart(true);
    } else {
      cartIds.push({ productId, productQuantity });
      setIsInCart(false);
    }

    setCart(cartIds);
    localStorage.setItem("cart", JSON.stringify(cartIds));
  };
  return {
    setIsInCart,
    isInCart,
    handleAddToCart,
    productQuantity,
    setProductQuantity,
  };
};

export default useCart;
