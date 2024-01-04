import { useContext, useEffect, useState } from 'react';
import Animation from '../components/Animation';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/useProductDataContext';

const PaymentInfo = () => {
  const [paymentCheck, setPaymentCheck] = useState(true);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const { totalPrice } = useContext(ProductContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPaymentCheck(false);
      setPaymentSuccessful(true);
    }, 5500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {paymentCheck && (
        <div style={{ height: '100vh', position: 'relative' }}>
          <Animation path="../src/assets/animations/loading_animation.json" />
          <h6 className="processing-payment-text">Processing payment...</h6>
        </div>
      )}
      {paymentSuccessful && (
        <div className="container-fluid">
          <div className="row payment-successful text-center mt-5">
            <div className="col">
              <img style={{ width: 160, margin: 'auto' }} src="../../public/images/icons/confirmed_check.svg" alt="" />
              <h2 className="mt-4">Payment Successful</h2>
              <p className="small">Amount Paid: ${totalPrice}</p>

              <h3>Thank you for your order!</h3>
              <p>Your payment was processed successfully. A confirmation email has been sent to your email address.</p>
              <div className="position-relative">
                <img style={{ width: 100, maxHeight: 250, margin: 'auto' }} src="../../public/images/Misc/leafs.svg" alt="" />
                <img className="position-absolute top-0" style={{ width: 40, right: 100 }} src="../../public/images/Misc/butterfly-left.svg" alt="" />

                <div style={{ bottom: 30 }} className="position-absolute start-0 d-flex align-items-center">
                  <img style={{ display: 'inline', width: 40 }} src="../../public/images/Icons/down.svg" alt="" />

                  <Link className="link-back_payment" to="/">
                    Return to <br /> <span style={{ paddingLeft: 13 }}>Home Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentInfo;
