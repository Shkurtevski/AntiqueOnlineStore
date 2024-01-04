import { Route, Routes, useLocation } from 'react-router-dom';
import ProductContextConstructor from './contexts/useProductDataContext';
import './styles/main.scss';
import Homepage from './pages/Homepage';
import Cart from './components/cart-page/Cart';
import ProductPage from './components/product-page/ProductPage';
import ProductPageOne from './components/product-page/ProductPageOne';
import ProductDetailPage from './components/product-page/ProductDetailPage';
import Faq from './pages/Faq';
import CartFavoritesProvider from './contexts/useCartFavoriteContext';
import { useEffect } from 'react';
import CustomMade from './pages/CustomMade';
import Layout from './components/Layout';
import Checkout from './components/Forms/Checkout';
import Payment from './components/Forms/Payment';
import ProcessingPayment from './components/Forms/ProcessingPayment';
import PaymentInfo from './pages/PaymentInfo';
import LanguageContext from './contexts/useLanguageContext';
import OurStoryPage from './pages/our-story';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <LanguageContext>
      <ProductContextConstructor>
        <CartFavoritesProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Homepage />
                </Layout>
              }
            />

            <Route
              path="/our-story"
              element={
                <Layout>
                  <OurStoryPage />
                </Layout>
              }
            />

            <Route
              path="/product-page"
              element={
                <Layout>
                  <ProductPage />
                </Layout>
              }
            />
            <Route
              path="/product-detail-page/:id"
              element={
                <Layout>
                  <ProductDetailPage />
                </Layout>
              }
            />
            <Route
              path="/product-page-home-decor"
              element={
                <Layout>
                  <ProductPageOne />
                </Layout>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/faq"
              element={
                <Layout>
                  <Faq />
                </Layout>
              }
            />
            <Route
              path="/custom-orders"
              element={
                <Layout>
                  <CustomMade />
                </Layout>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/processing-payment" element={<ProcessingPayment />} />
            <Route path="/payment-info" element={<PaymentInfo />} />
          </Routes>
        </CartFavoritesProvider>
      </ProductContextConstructor>
    </LanguageContext>
  );
}

export default App;
