import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setActiveCategories} from "../features/store/storeSlice";
import { CategoryHeader, CategoryProductsWrap} from "../components/category";
import { CategoryList, About } from "../components/repeating";

const Category = () => {
  const dispatch = useDispatch()
  const {categoryName} = useParams()
  const { activeCategories } = useSelector((store) => store.store);
  //
  useEffect(() => {
    dispatch(setActiveCategories(categoryName))
  },[categoryName])
  //
  return (
    <>
      <CategoryHeader title={categoryName}/>
      <CategoryProductsWrap categoryData={activeCategories}/>
      <CategoryList/>
      <About/>
    </>
    )
};

export default Category;
