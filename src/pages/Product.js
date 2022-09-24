import React, { useState } from "react";
import {About, CategoryList} from "../components/repeating";
import {FeaturesAndAddOns, ProductGallery, SingleProduct, Suggestions} from "../components/product";

const Product = () => {
  const [isProductPage, setIsProductPage] = useState(true);

  return (
    <>
      <SingleProduct />
      <FeaturesAndAddOns />
      <ProductGallery />
      <Suggestions />
      <CategoryList isProductPage={isProductPage} />
      <About isProductPage={isProductPage} />
    </>
  );
};

export default Product;
