import React from "react";

import "./Header.css";

import headerImg from "../../images/images/Rectangle 232.png";
import fruits from "../../images/images/Rectangle 181.png";
import dairy from "../../images/images/Rectangle 182.png";
import beverage from "../../images/images/Rectangle 184.png";

import cart from "../../images/icons/Vector (2).png";
import whatsapp from "../../images/icons/whatsapp-logo-24.png";
import arrow from "../../images/icons/left-arrow-alt-regular-24.png";

const Header = () => {
   return (
      <>
         <section className="m-5 p-5">
            <div className="row">
               <div className="col-6 col-md-6 w-50 d-flex align-items-center">
                  <img className="w-25" src={arrow} alt="" />
                  <h2>Asha General Store</h2>
               </div>
               <div className="col-6 col-md-6 w-75 d-flex justify-content-end align-items-center">
                  <img className="w-25 h-50" src={whatsapp} alt="" />
               </div>
            </div>

            <div className="w-100 d-flex justify-content-center">
               <img className="w-75" src={headerImg} alt="" />
            </div>

            <div className="search-input-container d-flex justify-content-center my-5">
               <input type="text" className="w-75 search-input" placeholder="Search" />
            </div>

            <div className="foods-card-container row text-center">
               <div className="foods-card col-4 col-sm-3 col-md-4">
                  <div className="w-100">
                     <img className="w-100" src={fruits} alt="" />
                  </div>
                  <h5>Fruits and Vegetables</h5>
               </div>
               <div className="foods-card col-4 col-sm-3 col-md-4">
                  <div className="w-100">
                     <img className="w-100" src={dairy} alt="" />
                  </div>
                  <h5>Dairy & Bakery</h5>
               </div>
               <div className="foods-card col-4 col-sm-3 col-md-4">
                  <div className="w-100">
                     <img className="w-100" src={beverage} alt="" />
                  </div>
                  <h5>Beverages</h5>
               </div>
            </div>
         </section>
      </>
   );
};

export default Header;
