import React from "react";
import "./menubar.scss";

const NewMenuBar = () => {
  return (
    <div className="navbar">
      <div className="navContainerMenu">
        <div className="containerNarbarCategories w-[200px] rounded bg-[#2b2d42] px-[10px] py-[10px]">
          <div className="bars text-white flex text-center justify-center">
            <span className="icon pr-2">
              <i className="las la-bars"></i>
            </span>
            <span className="icon_text">All categories</span>
          </div>
        </div>
        <div>1</div>
        <div className="containerNarbarIcon w-[200px] flex text-center justify-between">
          <a href="#" className="icon_wrp grid">
            <span className="icon text-[20px]">
              <i class="fa-solid fa-heart"></i>
            </span>
            <span className="icon_text text-[12px]">Wish List</span>
          </a>
          <a href="#" className="icon_wrp grid">
            <span className="icon text-[20px]">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="icon_text text-[12px]">Cart</span>
          </a>{" "}
          <a href="#" className="icon_wrp grid">
            <span className="icon text-[20px]">
              <i className="fa-regular fa-user"></i>
            </span>
            <span className="icon_text text-[12px]">Account</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewMenuBar;
