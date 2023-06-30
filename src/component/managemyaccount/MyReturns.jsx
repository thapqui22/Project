import React from "react";
import "./managemyaccount.scss";
const MyReturns = () => {
  return (
    <div className="order_prodetails flex flex-nowrap rounded mt-0 shadow-sm border mb-2 px-4 py-3">
      <div className="orderprod_img w-[10%]">
        <img
          className="h-[80%]"
          loading="lazy"
          src="https://themes.rslahmed.dev/rafcart/assets/images/laptop-1.png"
          alt="product"
        />
      </div>
      <div className="single_orderdet_1 whitespace-nowrap w-[25%]">
        <h5>Herschel Leather Duffle Bag</h5>
        <p className="text-semibold">$55</p>
      </div>
      <div className="single_orderdet">
        <h5>Order Number</h5>
        <p>798W4E574</p>
      </div>
      <div className="single_orderdet ">
        <h5>Return status</h5>
        <p className="text-green">Successful</p>
      </div>
      <div className="orderdet_btn ">
        <a className="prorder_btn flex justify-center items-center h-10 rounded-sm hover:border-defaut-color-pink hover:border text-defaut-color-pink font-medium hover:bg-white transition duration-300 ease-out hover:ease-in">
          View Order
        </a>
      </div>
    </div>
  );
};

export default MyReturns;
