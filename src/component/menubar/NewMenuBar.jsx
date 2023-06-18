import React, { useState, useEffect, useRef } from "react";
import "./menubar.scss";
import { useStorage } from "../localstorage/LocalStorage";
import axios from "axios";

const NewMenuBar = (props) => {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useStorage("cartItems", []);
  let url = "https://63f43c77864fb1d600247a6d.mockapi.io/Products/products";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(url);
  //     setData(response.data.length);
  //   };
  //   fetchData();
  // }, [props]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(cartItems);
      setData(props.onChangeDataRefresh);
    };
    fetchData();
  }, [props]);

  return (
    <div className="navbar">
      <div className="navContainerMenu">
        <div className="containerNarbarCategories w-[200px] rounded bg-[#2b2d42] px-[10px] py-[10px] h-[45px]">
          <div className="bars text-white flex text-center justify-center ">
            <span className="icon pr-2">
              <i className="las la-bars"></i>
            </span>
            <span className="icon_text">All categories</span>
          </div>
        </div>
        <div className="search flex">
          <div className="h-[45px] flex ">
            <select className="nice_select rounded-l py-2 pl-3 text-sm pr-2">
              <option value="">All category</option>
              <option value="">Men</option>
            </select>
          </div>
          <input
            className="px-3 py-[10px] w-[350px]"
            type="text"
            placeholder="Search product..."
            id="show_suggest"
          ></input>
          <button className="py-2 px-5 bg-[#2b2d42] text-white rounded-r">
            <span className="">Search</span>
          </button>
        </div>
        <div className="containerNarbarIcon w-[150px] flex text-center justify-between text-white">
          <a href="#" className="icon_wrp grid">
            <span className="popsheart">77</span>
            <span className="icon text-[20px]">
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className="icon_text text-[12px]">Wish List</span>
          </a>
          <a href="/shoppingcart" className="icon_wrp grid">
            <span className="popscart ">{data}</span>
            <span className="icon text-[20px] ">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="icon_text text-[12px]">Cart</span>
          </a>
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
