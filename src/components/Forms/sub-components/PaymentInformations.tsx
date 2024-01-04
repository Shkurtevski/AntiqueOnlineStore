import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/useProductDataContext";

const PaymentInformations = () => {
  const { totalPrice } = useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="payment-informations">
        <div className="payment-informations-wrapper">
          <h2>Payment Information</h2>
          <div className="p-group">
            <p>Merchant</p>
            <p className="bold-p">Marinov Design</p>
          </div>
          <div className="p-group">
            <p>Website</p>
            <p className="bold-p">www.marinovdesign.com</p>
          </div>
          <div className="p-group">
            <p>Amount</p>
            <p className="bold-p">$ {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentInformations;
