import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PaymentHeader from "./sub-components/PaymentHeader";
import FooterCheckout from "./sub-components/FooterCheckout";
import PaymentInformations from "./sub-components/PaymentInformations";
import { useNavigate } from "react-router-dom";

interface FormData {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  securityCode: string;
}

const Payment = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    if (
      data.cardNumber &&
      data.cardHolder &&
      data.expirationDate &&
      data.securityCode
    ) {
      navigate("/payment-info");
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    reset();

    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="payments">
        <div className="payments-wrapper">
          <PaymentHeader />
          <PaymentInformations />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Card Details</h2>
            <div className="form-group">
              <label htmlFor="cardHolder">Card Holder</label>
              <input
                type="text"
                id="cardHolder"
                {...register("cardHolder", {
                  required: "Card holder is required",
                })}
                placeholder="Card holder name here..."
              />
              {errors.cardHolder && <span>{errors.cardHolder.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
                placeholder="0000 0000 0000 0000"
              />
              {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
            </div>

            <div className="form-group-wrapper">
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input
                  type="text"
                  id="expirationDate"
                  {...register("expirationDate", {
                    required: "Expiration date is required",
                  })}
                  placeholder="MM/YY"
                />
                {errors.expirationDate && (
                  <span>{errors.expirationDate.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="securityCode">Security Code</label>
                <input
                  type="text"
                  id="securityCode"
                  {...register("securityCode", {
                    required: "Security code is required",
                  })}
                  placeholder="000"
                />
                {errors.securityCode && (
                  <span>{errors.securityCode.message}</span>
                )}
              </div>
            </div>
            <div className="button-wrapper">
              <button
                className="btn-order btn-order-full"
                type="submit"
                disabled={!isDirty}
              >
                Pay Now
              </button>

              <button className="btn-order btn-order" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
          <FooterCheckout />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
