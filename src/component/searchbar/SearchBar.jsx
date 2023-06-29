import React, { useState, useEffect, useRef } from "react";
import "./searchbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStorage } from "../localstorage/LocalStorage";
import axios from "axios";

const SearchBar = (props) => {
  const [data, setData] = useState(null);
  const [hoverIconCart, setHoverIconCart] = useState(false);
  const [hoverIconAccount, setHoverIconAccount] = useState(false);
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
      setData(props.onChangeDataRefresh);
    };
    fetchData();
  }, [props]);

  return (
    <div className="navbar py-0">
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
        <div className="containerNarbarIcon w-[150px] flex text-center justify-between [&>a]:text-white">
          <a href="/managemyaccount" className="icon_wrp grid">
            <span className="popsheart">77</span>
            <span className="icon text-[20px]">
              <i className="fa-solid fa-heart"></i>
            </span>
            <span className="icon_text text-[12px]">Wish List</span>
          </a>
          <div className="parent relative ">
            <a
              href="/shoppingcart"
              className="icon_wrp grid text-white"
              onMouseEnter={() => setHoverIconCart(true)}
              onMouseLeave={() => setHoverIconCart(false)}
            >
              <span className="popscart ">{data}</span>
              <span className="icon text-[20px] ">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="icon_text text-[12px]">Cart</span>
            </a>
            <nav
              className={
                hoverIconCart === true
                  ? "text-black hover:bg-black items-center relative"
                  : "hidden text-black hover:bg-black items-center relative"
              }
            >
              <div
                className="child flex transition p-3 duration-300 md:absolute top-full right-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b"
                onMouseEnter={() => setHoverIconCart(true)}
                onMouseLeave={() => setHoverIconCart(false)}
              >
                <div className="divchild text-nowrap flex flex-col ">
                  <h4 className="text-base font-semibold flex justify-start border-b-2">
                    2 Items
                  </h4>
                  <a
                    href="product-view.html"
                    className="single_cartdrop mb-3 flex mt-3"
                  >
                    <div className="cardcontainer flex justify-between  w-[250px] px-2 ">
                      <div className="flex flex-row">
                        <div className="topimage grid grid-cols-1 content-center">
                          <img
                            className="image object-cover h-20 w-20 rounded hover:cursor-pointer hover:opacity-80"
                            src="https://choicacanh.com/content/uploads/cms/2020/12/14/huong-dan-cham-soc-ca-neon-vua_600x400.jpg"
                          />
                        </div>
                        <div className="flex flex-col  items-start px-2">
                          <h4 className="title text-lg font-medium hover:text-defaut-color-pink transition duration-150 ease-out hover:ease-in hover:cursor-pointer">
                            Informations
                          </h4>
                          <div>
                            <span className="pl-1 text-defaut-color">$450</span>
                            <span className="pl-2 text-xs">x1</span>
                          </div>
                          <span className="pl-1 text-sm">Size: XXL</span>
                        </div>
                      </div>
                      <i className="fa-solid fa-xmark text-black"></i>
                    </div>
                  </a>
                  <div className="total_cartdrop flex justify-between border-t-2 py-2">
                    <h4 className="text_lg text-uppercase mb-0">Sub Total:</h4>
                    <h4 className="text_lg mb-0 ms-2">$980.00</h4>
                  </div>
                  <div className="buttonaccount flex justify-between ">
                    <button className="btnjoin h-[35px]">VIEW CART</button>
                    <button className="btnlogin h-[35px]">CHECKOUT</button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="parent relative ">
            <a
              href="#"
              className="icon_wrp grid text-white"
              onMouseEnter={() => setHoverIconAccount(true)}
              onMouseLeave={() => setHoverIconAccount(false)}
            >
              <span className="icon text-[20px]">
                <i className="fa-regular fa-user"></i>
              </span>
              <span className="icon_text text-[12px]">Account</span>
            </a>
            <nav
              className="text-black hover:bg-black flex items-center relative"
              onMouseEnter={() => setHoverIconAccount(true)}
              onMouseLeave={() => setHoverIconAccount(false)}
            >
              <div
                hidden={hoverIconAccount === true ? false : true}
                className="child flex transition p-3 duration-300 md:absolute top-full right-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b"
              >
                <div className="divchild text-nowrap flex flex-col ">
                  <h4 className="text-base font-semibold">
                    Welcome to RAFCART Shop
                  </h4>
                  <div className="buttonaccount flex justify-between  mt-2">
                    <a className="btnjoin" href="/registerpage">
                      JOIN
                    </a>
                    <a className="btnlogin" href="/loginpage">
                      LOGIN
                    </a>
                  </div>
                  <div className="flex text-lg pt-3">
                    <div className="ac_links grid justify-items-stretch [&>div]:justify-self-start [&>a]:pl-2">
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-id-card"></i>
                        <a href="account.html">My Account</a>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="las la-gift"></i>
                        <a href="account-order-history.html">My Order</a>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-heart"></i>
                        <a href="wish-list.html">My Wishlist</a>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="lar la-heart"></i>
                        <a href="shopping-cart.html">My Cart</a>
                      </div>
                      <div className="divitemaccount flex justify-center items-center">
                        <i className="las la-power-off"></i>
                        <a href="login.html">Log out</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
