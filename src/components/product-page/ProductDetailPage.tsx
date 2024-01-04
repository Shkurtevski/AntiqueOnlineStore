import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/useProductDataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./sub-components/ImageSlider";
import QuantitySelector from "./sub-components/QuantitySelector";
import heart from "../../images/heart.svg";
import fullHeart from "../../images/full-heart.svg";
import useCart from "../../custom-hooks/useCart";
import RelatedProducts from "../RelatedProducts";

const ProductDetailPage = () => {
  const { data } = useContext(ProductContext);
  const { id } = useParams<{ id?: string }>();
  const [isSaved, setIsSaved] = useState(false);
  const [showAllTips, setShowAllTips] = useState(false);
  const { handleAddToCart, productQuantity, setProductQuantity, isInCart } =
    useCart(id);
  if (id === undefined) {
    console.error("Invalid or missing product ID");
    return <div>Invalid or missing product ID</div>;
  }

  const product = data?.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    console.error("Product not found");
    return <div>Product not found</div>;
  }

  const handleSaveForLater = () => {
    setIsSaved(!isSaved);
  };

  const handleShowMoreTips = () => {
    setShowAllTips(true);
  };

  return (
    <React.Fragment>
      <div className="product-detail-page mt-5">
        <ImageSlider images={product.images} title={product.title} />
        <div className="product-detail-wrapper">
          <div className="content-one-wrapper">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
          <div className="content-two-wrapper">
            <QuantitySelector
              product={product}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            <div className="heart-icon-wrapper" onClick={handleSaveForLater}>
              {!isSaved && (
                <span onClick={handleSaveForLater}>Save for later</span>
              )}
              {isSaved && <span> Saved!</span>}
              <img
                className={`heart-icon ${isSaved ? "full-heart" : ""}`}
                src={isSaved ? fullHeart : heart}
                alt="Heart Icon"
              />
            </div>
          </div>
          {product.quantity === 0 ? (
            <div className="out-of-stock">
              <h6>- Out of Stock -</h6>
              <button className="btn-order btn-order-full width-100">
                Add to Cart
              </button>
              <p>
                Unfortunately, this item has been sold. But all is not lost!
                Write to us and we`ll do our best to replicate it for you!
              </p>
              <Link to="/custom-orders">
                <button className="btn-order btn-order width-100">
                  Request Custom Order
                </button>
              </Link>
            </div>
          ) : (
            <div className="order">
              <button
                onClick={handleAddToCart}
                className="btn-order btn-order-full width-100"
              >
                {isInCart ? "Already In Cart" : "Add to Cart"}
                <div className="modal added-to-cart"></div>
              </button>
            </div>
          )}
          <div className="modal">
            
          </div>
          <div className="content-three-wrapper">
            <p>{product.description}</p>
          </div>
          <div className="content-four-wrapper">
            <p>
              <span>Material:</span>
              {product.material}
            </p>
            <p>
              <span>Dimensions:</span>
              {product.dimensions}
            </p>
            <p>
              <span>Weight:</span>
              {product.weight}
            </p>
          </div>
          <div className="content-five-wrapper">
            <p className="care-maintenance-title">Care & Maintenance Tips</p>
            <ul>
              {product.maintenance
                .slice(0, showAllTips ? product.maintenance.length : 3)
                .map((item, index) => (
                  <li key={index}>
                    <span className="item-title">{item.title}:</span>{" "}
                    {item.text}
                  </li>
                ))}
            </ul>
            {!showAllTips && (
              <div className="button-wrapper">
                <button
                  className="show-more-button"
                  onClick={handleShowMoreTips}
                >
                  + Show More Tips
                </button>
              </div>
            )}
            <p className="care-maintenance-small">
              Follow these tips to maintain the beauty and integrity of your
              earrings, ensuring they remain a stunning accessory for years to
              come.
            </p>
          </div>
        </div>
      </div>
      <RelatedProducts category={product.category} />
    </React.Fragment>
  );
};

export default ProductDetailPage;
