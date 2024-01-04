import React from "react";
import { Product } from "../../../interfaces";

interface QuantitySelectorProps {
  product: Product;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
  productQuantity: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  setProductQuantity,
  productQuantity,
  product,
}) => {

  const handleDecrement = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleIncrement = () => {
    if (productQuantity < product.quantity) {
      setProductQuantity(productQuantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn left-btn" onClick={handleDecrement}>
        <span className="decrement">-</span>
      </button>
      <span className="quantity-number ">{productQuantity}</span>
      <button className="quantity-btn right-btn" onClick={handleIncrement}>
        <span className="increment">+</span>
      </button>
    </div>
  );
};

export default QuantitySelector;
