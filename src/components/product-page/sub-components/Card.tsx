import React from "react";
import { CardType } from "../../../interfaces";
import { Link } from "react-router-dom";

const Card: React.FC<CardType> = ({ product }) => {
  return (
    <React.Fragment>
      <div className="product-card" key={product.id}>
        <div className="product-card-wrapper">
          <Link to={`/product-detail-page/${product.id}`}>
            {product.images.length > 0 && (
              <img src={product.images[0]} alt={`${product.title} - fashion`} />
            )}
            <div className="product-card-inner">
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
