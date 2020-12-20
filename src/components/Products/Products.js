import React from "react";

import orange from "../../images/images/Rectangle 103.png";
import apple from "../../images/images/Rectangle 149.png";
import cauliflower from "../../images/images/Rectangle 150.png";

const Products = () => {
   return (
      <>
         <section className="m-5">
            <h2 className="ml-5 p-5">Products</h2>
            <div className="row d-flex justify-content-center">
               <div className="col-12 col-sm-12 col-md-10">
                  <div className="row d-flex align-items-center">
                     <div className="w-100 col-4 col-sm-4 col-md-4">
                        <img className="w-100 h-100" src={orange} alt="" />
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <h3>Oranges</h3>
                        <div className="d-flex justify-content-between">
                           <h4>Rs60</h4>
                           <h4>
                              <del>Rs65</del>
                           </h4>
                           <h4 className="text-danger">>></h4>
                        </div>
                        <h4 className="text-danger">(7% off)</h4>
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <button className="btn btn-danger">Add to Cart</button>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-sm-12 col-md-10">
                  <div className="row d-flex align-items-center">
                     <div className="w-100 col-4 col-sm-4 col-md-4">
                        <img className="w-100 h-100" src={apple} alt="" />
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <h3>Oranges</h3>
                        <div className="d-flex justify-content-between">
                           <h4>Rs60</h4>
                           <h4>
                              <del>Rs65</del>
                           </h4>
                           <h4 className="text-danger">>></h4>
                        </div>
                        <h4 className="text-danger">(7% off)</h4>
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <button className="btn btn-danger">Add to Cart</button>
                     </div>
                  </div>
               </div>

               <div className="col-12 col-sm-12 col-md-10">
                  <div className="row d-flex align-items-center">
                     <div className="w-100 col-4 col-sm-4 col-md-4">
                        <img className="w-100 h-100" src={cauliflower} alt="" />
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <h3>Oranges</h3>
                        <div className="d-flex justify-content-between">
                           <h4>Rs60</h4>
                           <h4>
                              <del>Rs65</del>
                           </h4>
                           <h4 className="text-danger">>></h4>
                        </div>
                        <h4 className="text-danger">(7% off)</h4>
                     </div>
                     <div className="col-4 col-sm-4 col-md-4">
                        <button className="btn btn-danger">Add to Cart</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Products;
