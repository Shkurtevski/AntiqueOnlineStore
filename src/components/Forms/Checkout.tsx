import React, { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CartFooter from "../cart-page/sub-components/CartFooter";
import { Product } from "../../interfaces";
import { ProductContext } from "../../contexts/useProductDataContext";
import CartItem from "../cart-page/sub-components/CartItem";
import FooterCheckout from "./sub-components/FooterCheckout";
import Header from "../Header";
import butterFly from "../../images/butterfly.png";
import { Link } from "react-router-dom";
import { CartFavoritesContext } from "../../contexts/useCartFavoriteContext";

type FormData = {
  name: string;
  email: string;
  country: string;
  postalCode: string;
  city: string;
  address: string;
};

const CheckoutForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const { cart, setCart } = useContext(CartFavoritesContext);

  /*   const [cart, setCart] = useState<
    { productId: string; productQuantity: number }[]
  >([]); */

  const { data, isLoading, formData, setFormData, setTotalPrice } =
    useContext(ProductContext);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    setCart(
      storedItems
        ? (JSON.parse(storedItems) as {
            productId: string;
            productQuantity: number;
          }[])
        : []
    );
  }, [setCart]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Shipping Details:", data);
    console.log("Cart Items:", cart);
  };

  const countryOptions = [
    { value: "Macedonia", label: "Macedonia" },
    { value: "Serbia", label: "Serbia" },
    { value: "Russia", label: "Russia" },
  ];

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    setCart(
      storedItems
        ? (JSON.parse(storedItems) as {
            productId: string;
            productQuantity: number;
          }[])
        : []
    );
  }, [setCart]);

  const removeFromCart = (productId: string) => {
    const updatedItems = cart.filter((item) => item.productId !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  const calculateTotalPrice = () => {
    if (!data) {
      return 0;
    }
    const selectedItems = data.filter((item: Product) =>
      cart.some((cartItem) => cartItem.productId === item.id.toString())
    );
    const calculatedTotalPrice = selectedItems.reduce((total, item) => {
      const cartItem = cart.find(
        (cartitem) => cartitem.productId === item.id.toString()
      );
      if (!item.isDiscounting) {
        return total + item.price * (cartItem?.productQuantity || 1);
      } else {
        return total + item.salePrice * (cartItem?.productQuantity || 1);
      }
    }, 0);

    setTotalPrice(calculatedTotalPrice);

    return calculatedTotalPrice;
  };

  return (
    <React.Fragment>
      <Header />
      <div className="checkout">
        <div className="checkout-wrapper">
          <div className="checkout-content">
            <h2>Contact and Shipping Details</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name here..."
                {...register("name", { required: "Name is required" })}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email adress here..."
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                {...register("country", { required: "Country is required" })}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.country && <span>{errors.country.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal/ZIP Code</label>
              <input
                type="text"
                id="postalCode"
                placeholder="Your postal code here..."
                {...register("postalCode", {
                  required: "Postal code is required",
                })}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }
              />
              {errors.postalCode && <span>{errors.postalCode.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Your city here..."
                {...register("city", { required: "City is required" })}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>

              <input
                type="text"
                id="address"
                placeholder="Your home adress..."
                {...register("address", { required: "Address is required" })}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>
          </form>
          <div className="review-order">
            <h2>Review Order</h2>
            <div className="order-list">
              <div className="order-list-heading">
                <span>Product</span>
                <span>Price</span>
              </div>
              {isLoading ? (
                <div className="loading">Loading...</div>
              ) : (
                <React.Fragment>
                  {cart.length === 0 ? (
                    <div className="cart-empty">
                      <h1>Your cart is empty</h1>
                    </div>
                  ) : (
                    <React.Fragment>
                      {data &&
                        data
                          .filter((item: Product) =>
                            cart.some(
                              (cartItem) =>
                                cartItem.productId === item.id.toString()
                            )
                          )
                          .map((item) => {
                            const cartItem = cart.find(
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
                      <div className="order-list-footer order-list-shipping">
                        <span>Shipping</span>
                        <span>&euro;&nbsp;10</span>
                      </div>
                      <div className="total">
                        <p>Total:</p>

                        <p> ${calculateTotalPrice() + 10}</p>
                      </div>
                      <div className="gift-code-card-wrapper">
                        <label htmlFor="discountCode">
                          <img src={butterFly} alt="butterfly-icon" />
                        </label>
                        <select
                          id="discountCode"
                          name="discountCode"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            I have a Discount Code / Gift Card
                          </option>
                          <option value="gift-card-one">Gift card = $50</option>
                          <option value="gift-card-two">
                            Gift card = $150
                          </option>
                          <option value="gift-card-three">
                            Gift card = $250
                          </option>
                        </select>
                      </div>
                      <div className="checkout">
                        <p className="p-checkout">
                          * Shipping costs not included. Proceed to checkout to
                          calculate shipping costs.
                        </p>
                        <Link to="/payments">
                          <button
                            className="btn-order btn-order-full width-100"
                            type="submit"
                          >
                            Proceed to Payment
                          </button>
                        </Link>
                      </div>
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
          <FooterCheckout />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutForm;
