import React from "react";
import {Header, ProductsShowcase} from "../components/Home";
import {CategoryList, About} from "../components/repeating";


const Home = () => {
  return (
    <>
      <Header/>
      <CategoryList/>
      <ProductsShowcase/>
      <About/>
    </>
  );
};

export default Home;
