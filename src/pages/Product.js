import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {About, CategoryList} from "../components/repeating";
import {FeaturesAndAddOns, ProductGallery, SingleProduct, Suggestions, BackBtn} from "../components/product";
import { setActiveHeaderProduct } from "../features/store/storeSlice";
import { useEffect } from "react";

const Product = () => {
  const dispatch = useDispatch()
  const {productId} = useParams()
  const { activeHeaderProduct } = useSelector((store) => store.store);
  const [isProductPage, setIsProductPage] = useState(true);
  
  useEffect(() => {
    dispatch(setActiveHeaderProduct(productId))
  }, [productId])
  return (
    <>
      <BackBtn />
      <SingleProduct {...activeHeaderProduct} />
      <FeaturesAndAddOns {...activeHeaderProduct} />
      <ProductGallery {...activeHeaderProduct} />
      <Suggestions {...activeHeaderProduct} />
      <CategoryList isProductPage={isProductPage} />
      <About isProductPage={isProductPage} />
    </>
  );
};

export default Product;
