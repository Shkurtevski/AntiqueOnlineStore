import React, { useContext } from "react";
import Card from "./product-page/sub-components/Card";
import { ProductContext } from "../contexts/useProductDataContext";
import frame46 from "../images/Frame 46.png";

interface RelatedProductsProps {
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category }) => {
  const { data } = useContext(ProductContext);

  const filteredProducts = data?.filter(
    (product) => product.category === category
  );

  return (
    <React.Fragment>
      <div className="related-products">
        <img src={frame46} alt="random" />
        <h2>You might also like</h2>
        <div className="related-products-wrapper">
          <div className="related-products-content">
            {filteredProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelatedProducts;
