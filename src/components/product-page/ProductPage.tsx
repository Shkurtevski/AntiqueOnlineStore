import React, { useContext, useState, useEffect, useMemo } from "react";
import Card from "./sub-components/Card";
import { ProductContext } from "../../contexts/useProductDataContext";
import bannerImg from "../../images/Rectangle 61.png";

const ProductPage = () => {
  const { data, selectedTypeTwo, setSelectedTypeTwo } = useContext(ProductContext);

  const jewelryProducts = useMemo(
    () => data?.filter((product) => product.category === "Jewelry"),
    [data]
  );

  const [uniqueTypes, setUniqueTypes] = useState<Set<string>>(new Set());
  const [displayedProducts, setDisplayedProducts] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    if (jewelryProducts) {
      const newTypes = new Set(jewelryProducts.map((product) => product.type));
      setUniqueTypes(newTypes);
    }
  }, [jewelryProducts]);

  const loadMoreProducts = () => {
    setDisplayedProducts((prevCount) => prevCount + 6);
  };

  const isLoadMoreDisabled = jewelryProducts
    ? displayedProducts >= jewelryProducts.length
    : true;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = () => {
    if (sortOption === "featured") {
      return searchedProducts?.filter((product) => product.isFeatured);
    } else if (sortOption === "new") {
      return searchedProducts?.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortOption === "discount") {
      return searchedProducts?.filter((product) => product.isDiscounting);
    }
    return searchedProducts;
  };

  const handleTypeClick = (type: string) => {
    setSelectedTypeTwo(type);
  };

  const filteredProducts =
    selectedTypeTwo !== null
      ? jewelryProducts?.filter((product) => product.type === selectedTypeTwo)
      : jewelryProducts;

  const searchedProducts =
    searchQuery.trim() !== ""
      ? filteredProducts?.filter(
          (product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            (product.type &&
              product.type.toLowerCase().includes(searchQuery.toLowerCase())) ||
            product.price.toString().includes(searchQuery)
        )
      : filteredProducts;

  const displayedAndSortedProducts = sortedProducts()?.slice(
    0,
    displayedProducts
  );

  return (
    <React.Fragment>
      <div className="product-page mt-5">
        <div className="product-page-wrapper">
          <div className="content-container">
            <img src={bannerImg} alt="random" />
            <div className="content-wrapper">
              <h1>Jewelry</h1>
              <div className="span-wrapper">
                {Array.from(uniqueTypes).map((type, index) => (
                  <span
                    key={index}
                    onClick={() => handleTypeClick(type)}
                    className={type === selectedTypeTwo ? "selected" : ""}
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="search-sort-wrapper">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <select
                  title="sort"
                  name="sort"
                  id="sort"
                  onChange={handleSortChange}
                  value={sortOption}
                >
                  <option value="">Sort: Featured</option>
                  <option value="featured">Featured</option>
                  <option value="new">New</option>
                  <option value="discount">On Discount</option>
                </select>
              </div>
            </div>
          </div>
          <div className="card-container">
            {displayedAndSortedProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <div className="load-more-button-container">
            <button onClick={loadMoreProducts} disabled={isLoadMoreDisabled}>
              + Load More
            </button>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
