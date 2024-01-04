import React from "react";
import logoIcon from "../../../images/logo_scroll.png";
import logoText from "../../../images/logo_stay.png";
import securePay from "../../../images/secure-payment.png";
import { Link } from "react-router-dom";

const PaymentHeader = () => {
  return (
    <React.Fragment>
      <div className="payments-header">
        <Link to="/">
          <img src={logoIcon} alt="" className="logo-icon" />
        </Link>
        <Link to="/">
          <img src={logoText} alt="" className="logo-text" />
        </Link>
        <img src={securePay} alt="" className="secure-pay" />
      </div>
    </React.Fragment>
  );
};

export default PaymentHeader;
