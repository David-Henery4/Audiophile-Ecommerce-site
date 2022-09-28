import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {About, CategoryList} from "../components/repeating";
import {FeaturesAndAddOns, ProductGallery, SingleProduct, Suggestions, BackBtn} from "../components/product";
import { setActiveProduct } from "../features/store/storeSlice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch()
  const {productSlug} = useParams()
  const { activeProduct } = useSelector((store) => store.store);
  const [isProductPage, setIsProductPage] = useState(true);
  
  useEffect(() => {
    dispatch(setActiveProduct(productSlug))
  }, [productSlug])
  return (
    <>
      <BackBtn />
      <SingleProduct {...activeProduct} />
      <FeaturesAndAddOns {...activeProduct} />
      <ProductGallery {...activeProduct} />
      <Suggestions {...activeProduct} />
      <CategoryList isProductPage={isProductPage} />
      <About isProductPage={isProductPage} />
    </>
  );
};

export default Product;
