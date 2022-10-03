import React from "react";


const CategoryHeader = ({ title }) => {
  return (
    <section className="category-header">
      <h2 className="category-header__title">{title.toUpperCase()}</h2>
    </section>
  );
};

export default CategoryHeader;
