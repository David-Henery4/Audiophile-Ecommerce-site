import React from "react";
import { CategoryHeader, CategoryProductsWrap} from "../components/category";
import { CategoryList, About } from "../components/repeating";

const Category = () => {
  return (
    <>
      <CategoryHeader/>
      <CategoryProductsWrap/>
      <CategoryList/>
      <About/>
    </>
    )
};

export default Category;
