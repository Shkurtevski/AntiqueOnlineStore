import { createContext, useState, ReactNode, useEffect } from "react";

export  interface CartItem {
    productId: string;
    productQuantity: number;
  }

interface CartFavoritesContextProps {
  cart: CartItem[];
  favorites: string[];
  setCart: (value: CartItem[]) => void;
  setFavorites: (value: string[]) => void;
  totalPrice: number;
  setTotalPrice: (value: number) => void;
}

export const CartFavoritesContext = createContext<CartFavoritesContextProps>({
  cart: [],
  favorites: [],
  setCart: () => {},
  setFavorites: () => {}, 
  totalPrice: 0,
  setTotalPrice: () => {},
});

interface ReactProps {
  children: ReactNode;
}

const CartFavoritesProvider = ({ children }: ReactProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [totalPrice , setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cartArray: CartItem[] = JSON.parse(cartData);
      setCart(Array.isArray(cartArray) ? cartArray : []);
    }

    const favoritesData = localStorage.getItem("favorites");
    if (favoritesData) {
      setFavorites(JSON.parse(favoritesData));
    }


  }, []); 



  return (
    <CartFavoritesContext.Provider
      value={{
        cart,
        favorites,
        totalPrice,
        setCart,
        setFavorites,
        setTotalPrice,
      }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
};

export default CartFavoritesProvider;
