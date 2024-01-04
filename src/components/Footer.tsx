import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/components/_footer.scss";
import { ProductContext } from "../contexts/useProductDataContext";
import marinovGreen from "../images/logotype.png";
import whatsappIcon from "../images/whatsapp.png";
import { LanguageContext } from "../contexts/useLanguageContext";

const Footer: React.FC = () => {
  const { setSelectedTypeTwo } = useContext(ProductContext);

  const { setLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (language:string) => {
    setLanguage(language);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTypeClick = (type: string) => {
    setSelectedTypeTwo(type);
  };
  return (
    <footer>
      <div className="container-fluid footer">
        <div className="row d-flex flex-column">
          <div className="footer-img">
            <img
              src="../../public/images/Home-Page/logomark L.svg"
              alt="logo L"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="col-11 mx-3">
              <img
                src={marinovGreen}
                alt="logotype"
                className="mt-4 mb-5 w-50"
              />
              <div className="d-flex flex-row justify-content-between mb-3">
                <h3 className="text-uppercase font-weight-bold">jewelry</h3>
                <h3>
      <span onClick={() => handleLanguageChange("en")}>EN</span>/
      <span onClick={() => handleLanguageChange("mk")}>MK</span>
    </h3>
              </div>
              <div className="col-12 mr-auto ml-auto">
                <div className="d-flex flex-column justify-content-start">
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Earrings")}
                  >
                    Earrings
                  </Link>
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Rings")}
                  >
                    Rings
                  </Link>
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Necklaces")}
                  >
                    Necklaces
                  </Link>
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Bracelets")}
                  >
                    Bracelets
                  </Link>
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Sets")}
                  >
                    Sets
                  </Link>
                  <Link
                    to="/product-page"
                    onClick={() => handleTypeClick("Others")}
                  >
                    Others
                  </Link>
                </div>
              </div>

              <div className="d-flex flex-column justify-content-start my-3">
                <h3 className="text-uppercase font-weight-bold mb-3">
                  home decor
                </h3>
                <Link to={"/product-page-home-decor"}>Helmets</Link>
                <Link to={"/product-page-home-decor"}>Other</Link>
              </div>
              <div className="text-uppercase">
                <Link to={"/custom-orders"}>
                  <h3 className="font-weight-bold mb-3">custom orders</h3>
                </Link>
                <Link to={"/"}>
                  <h3 className="font-weight-bold mb-3">our story</h3>
                </Link>
                <Link to={"/faq"}>
                  <h3 className="font-weight-bold mb-3">faq</h3>
                </Link>
                <Link to={"/"}>
                  <h3 className="font-weight-bold mb-3">contact</h3>
                </Link>
                <Link to={"/"}>
                  <h3 className="font-weight-bold">profile</h3>
                </Link>
              </div>
              <div className="d-flex flex-column justify-content-start my-5">
                <div className="col-12 mr-auto ml-auto">
                  <div className="d-flex flex-row mb-5">
                    <div className="col-3 social-icons">
                      <img
                        src="../../public/images/Icons/instagram.svg"
                        alt="icon-instagram"
                      />
                    </div>
                    <div className="col-3 social-icons">
                      <img
                        src="../../public/images/Icons/facebook.svg"
                        alt="icon-facebook"
                      />
                    </div>
                    <div className="col-3 social-icons">
                      <img src={whatsappIcon} alt="icon-whatsapp" />
                    </div>
                  </div>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Shipping and Returns Policy</p>
                  <p className="allRights small mt-5">
                    © Marinov Design 2023 - All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
