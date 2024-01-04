import { useContext } from "react";
import { ProductContext } from "../../contexts/useProductDataContext";

const Cart = () => {
  const { data, isLoading } = useContext(ProductContext);

  const calculateTotalPrice = () => {
    return data?.reduce((total, item) => total + item.price, 0);
  };

  const test = false;

  return (
    <>
      <div className="page-container">
        <div className="cart-page">
          <div className="cart-page-header">
            <h1>Your Cart</h1>
            <button className="btn-order">Continue shopping</button>
          </div>
          <div className="order-list">
            <div className="order-list-heading">
              <span>Product</span>
              <span>Price</span>
            </div>
            {isLoading ? (
              <div className="loading">Loading...</div>
            ) : (
              <>
                {test ? (
                  <div className="cart-empty">
                    <h1>Your cart is empty</h1>
                  </div>
                ) : (
                  <>
                    {data?.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                          <img src={item.images[0]} alt={item.title} />
                        </div>
                        <div className="cart-item-name">
                          <p>{item.title}</p>
                          <div>
                            <button className="btn-cart-remove">Remove</button>
                          </div>
                        </div>
                        <p className="cart-item-price">
                          &euro;&nbsp;{item.price}
                        </p>
                      </div>
                    ))}
                    <div className="order-list-footer">
                      <span>Subtotal</span>
                      <span>&euro;&nbsp;{calculateTotalPrice()}</span>
                    </div>
                    <div className="checkout">
                      <p>
                        * Shipping costs not included. Proceed to checkout to
                        calculate shipping costs.
                      </p>

                      <button className="btn-order btn-order-full width-100">
                        Checkout
                      </button>
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
