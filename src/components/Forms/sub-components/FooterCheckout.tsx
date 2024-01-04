import React from "react";
import visa from "../../../images/visa.png";
import masterCard from "../../../images/master-card.png";

const FooterCheckout = () => {
  return (
    <React.Fragment>
      <div className="checkout-footer">
        <img src={visa} alt="visa-card" />
        <img src={masterCard} alt="master-card" />
      </div>
    </React.Fragment>
  );
};

export default FooterCheckout;
