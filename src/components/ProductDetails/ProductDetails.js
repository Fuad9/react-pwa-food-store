import React from "react";

import cart from "../../images/icons/Vector (2).png";
import whatsapp from "../../images/icons/whatsapp-logo-24.png";
import arrow from "../../images/icons/left-arrow-alt-regular-24.png";

import fruits1 from "../../images/images/Rectangle 111.png";
import fruits2 from "../../images/images/Rectangle 112 (2).png";
import fruits3 from "../../images/images/Rectangle 112 (3).png";
import fruits4 from "../../images/images/Rectangle 112.png";

const ProductDetails = () => {
   return (
      <>
         <section className="m-5 p-5">
            <div className="row">
               <div className="col-6 col-md-6 w-50 d-flex align-items-center">
                  <img className="w-25" src={arrow} alt="" />
                  <h2>Product Details</h2>
               </div>
               <div className="col-6 col-md-6 w-75 d-flex justify-content-end align-items-center">
                  <img className="w-25 h-50" src={whatsapp} alt="" />
                  <img className="w-25 h-25" src={cart} alt="" />
               </div>
            </div>

            <div className="d-flex my-5">
               <div className="w-75">
                  <img className="w-75" src={fruits1} alt="" />
               </div>
               <div className="w-75">
                  <img className="w-75" src={fruits2} alt="" />
               </div>
               <div className="w-75">
                  <img className="w-75" src={fruits3} alt="" />
               </div>
               <div className="w-75">
                  <img className="w-75" src={fruits4} alt="" />
               </div>
            </div>

            <h4>
               <span className="text-secondary">Business:</span> Grocery
            </h4>
            <h4>
               <span className="text-secondary">Product Category:</span> Fruits & Vegetables
            </h4>
            <h4>
               <span className="text-secondary">Item Name:</span> Oranges
            </h4>
            <h4 className="mt-5">
               <span className="text-secondary">MRP:</span> Rs 65
            </h4>
            <h4>
               <span className="text-secondary">Selling Price:</span> Rs 60{" "}
               <span className="text-danger">(7% off)</span>
            </h4>
            <h4>
               <span className="text-secondary">Unit:</span> per Kg
            </h4>
            <h4 className="mt-5">
               <span className="text-secondary">Description:</span> <br /> Lorem ipsum dolor sit
               amet, consectetur adipiscing elit. Eget fringilla cum habitasse sit. Nisi, sed
               feugiat volutpat, nulla sagittis, justo ac lorem aliquam. Nunc sem tellus habitant
               faucibus amet sit. Faucibus quis egestas odio
            </h4>

            <div className="d-flex mt-5 pt-5">
               <button className="btn btn-danger w-25">Add to Cart</button>
               <button className="btn btn-success w-25 ml-5">Contact</button>
            </div>
         </section>
      </>
   );
};

export default ProductDetails;
