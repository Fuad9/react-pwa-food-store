import React from "react";

import Header from "../Header/Header";
import ProductDetails from "../ProductDetails/ProductDetails";
import Products from "../Products/Products";

const Home = () => {
   return (
      <>
         <Header />
         <Products />
         <ProductDetails />
      </>
   );
};

export default Home;
