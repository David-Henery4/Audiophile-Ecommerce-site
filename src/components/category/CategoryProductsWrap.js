import React from "react";
import CategoryProduct from "./CategoryProduct";

const CategoryProductsWrap = ({ categoryData }) => {
  return (
    <div className="category-products">
      {categoryData.map((item, i) => {
        return <CategoryProduct key={i} {...item}/>;
      })}
    </div>
  );
};

export default CategoryProductsWrap;
