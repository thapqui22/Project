import React from "react";
import "./mywishlist.scss";
const MyWishList = () => {
  return (
    <div className="single_shop_cart">
      <div className="cart_img mb-4 mb-md-0 w-[10%]">
        <img
          loading="lazy"
          src="https://themes.rslahmed.dev/rafcart/assets/images/keyboard.png"
          alt="product"
        />
      </div>
      <div className="cart_cont min-w-[40%] pl-3">
        <a href="product-view.html">
          <h5>Casual USB Charging Laptop Backpacks</h5>
        </a>
        <p className="instock mb-0">
          Availability: <span className="text-[#28A745]">In Stock</span>
        </p>
      </div>
      <div className="cart_price ms-md-auto ms-0 min-w-[25%] flex justify-center">
        <p>$45.00</p>
      </div>
      <div className="wish_cart_btn ms-md-auto ms-0 mt-3 mt-md-0 min-w-[25%] flex justify-center">
        <button className="btnaddtocart">
          <span className="icon">
            <i className="fa-solid fa-cart-shopping pr-2"></i>
          </span>
          Add to Cart
        </button>
      </div>
      <div className="cart_remove ms-auto align-self-end align-self-md-center">
        <i className="fa-solid fa-trash mr-3 hover:text-defaut-color hover:cursor-pointer text-lg"></i>
      </div>
    </div>
  );
};

export default MyWishList;
