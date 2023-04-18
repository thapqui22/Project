import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <>
      {/* <div className="header ">
        <div className="headerContainer flex items-center">
          <div>
            <img
              className=" w-[180px]"
              src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/logo.png?1672232161194"
              alt="logo"
            />
          </div>
          <ul className="headright ">
            <div className="flex ml-3">
              <li className="homesubnav p-2 ">
                <a>
                  <Link to="/"> Home</Link>
                  <span>
                    <i className="las la-angle-down p-1"></i>
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <a href="index-1.html">Home page 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home page 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home page 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="p-2">
                <a>
                  <Link to="/shopping">Shop</Link>
                  <span>
                    <i className="las la-angle-down p-1"></i>
                  </span>
                </a>
              </li>
              <li className="relative parent">
                <a
                  href="#"
                  className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2"
                >
                  <span>Service</span>
   <i className="las la-angle-down p-1"></i>
                </a>
                <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                  <li>
                 <a href="#" className="flex hover:text-defaut-color">
                      Web development
                    </a>
                  </li>
                  <li>
                 <a href="#" className="flex hover:text-defaut-color">
                      Web development
                    </a>
                  </li>
                  <li>
                 <a href="#" className="flex hover:text-defaut-color">
                      Web Design
                    </a>
                  </li>
                  <li>
                 <a href="#" className="flex hover:text-defaut-color">
                      Machine Learning
                    </a>
                  </li>
                </ul>
              </li>
              <li className="p-2">
                <a>
                  Pages
                  <span>
                    <i className="las la-angle-down p-1"></i>
                  </span>
                </a>
              </li>
              <li className="p-2">
                <a>
                  Contact
                  <span>
                    <i className="las la-angle-down p-1"></i>
                  </span>
                </a>
              </li>
            </div>
            <li className="flex">
              <div className="p-2">
                <a className="text-semibold " href="login.html">
                  Login
                </a>
                <span className="text_xs">/</span>
                <a className="text-semibold" href="register.html">
                  Register
                </a>
              </div>
              <div className="p-2 ">
                <select className="nice_select  hover:cursor-pointer">
                  <option>Language</option>
                  <option>English</option>
                  <option>Franch</option>
                </select>
              </div>
              <div className="p-2">
                <select className="nice_select  hover:cursor-pointer">
                  <option>Currency</option>
                  <option>Dollar</option>
                  <option>Euro</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="containernavbar  bg-white flex justify-center">
        <div className="w-[1140px]">
          <nav className="headernavbar flex  items-center relative">
            <div className="[&>img]:w-[180px]">
              <img
                // className=" w-[180px]"
                src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/logo.png?1672232161194"
                alt="logo"
              />
            </div>
            <ul className=" md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 pl-3">
              <li>
                <a
                  href="#"
                  className="flex md:inline-flex py-3 px-2 items-center "
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex md:inline-flex py-3 px-2 items-center "
                >
                  <span>Shop</span>
                </a>
              </li>
              <li className="relative parent">
                <a
                  href="#"
                  className="flex md:inline-flex py-3 px-2 items-center "
                >
                  <span>
                    Pages <i className="las la-angle-down"></i>
                  </span>
                </a>
                <ul className="child flex transition p-3 duration-300 md:absolute top-full left-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b ">
                  <div className="divchild text-sm text-nowrap pr-3">
                    <li>
                      <h5 href="#" className="flex">
                        Other pages
                      </h5>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Track order
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        FAQ
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        404
                      </a>
                    </li>
                  </div>
                  <div className="divchild text-sm text-nowrap px-1">
                    <li>
                      <h5 href="#" className="flex ">
                        Account pages
                      </h5>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Forgot pass
                      </a>
                    </li>
                  </div>
                  <div className="divchild text-sm text-nowrap pl-3">
                    <li>
                      <h5 href="#" className="flex ">
                        Checkout pages
                      </h5>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Payment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex hover:text-defaut-color">
                        Order complete
                      </a>
                    </li>
                  </div>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="flex md:inline-flex py-3 px-2 items-center "
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
            <ul className=" md:flex ml-auto md:space-x-2 absolute md:relative top-full left-0 right-0">
              <li className="flex">
                <div className="py-3 px-2">
                  <a href="login.html">
                    <span>Login</span>
                  </a>
                  <span className="text_xs">/</span>
                  <a href="register.html">
                    <span>Register</span>
                  </a>
                </div>
                <li className="relative parent">
                  <a
                    href="#"
                    className="flex md:inline-flex py-3 px-2 items-center "
                  >
                    <span>
                      Language <i className="las la-angle-down"></i>
                    </span>
                  </a>
                  <ul className="child flex transition p-3 duration-300 md:absolute top-full left-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b ">
                    <div className="divchild text-sm text-nowrap pr-3">
                      {" "}
                      <li>
                        <h5 href="#" className="flex">
                          Language
                        </h5>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          English
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          VietNamese{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          France
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="relative parent">
                  <a
                    href="#"
                    className="flex md:inline-flex py-3 px-2 items-center "
                  >
                    <span>
                      Currency <i className="las la-angle-down"></i>
                    </span>
                  </a>
                  <ul className="child flex transition p-3 duration-300 md:absolute top-full left-0  md:w-[auto] bg-white md:shadow-inner md:rounded-b ">
                    <div className="divchild text-sm text-nowrap pr-3">
                      <li>
                        <h5 href="#" className="flex">
                          Currency
                        </h5>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          Dollar
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          VNĐ
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          FRANC
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          EURO
                        </a>
                      </li>{" "}
                      <li>
                        <a href="#" className="flex hover:text-defaut-color">
                          RUP
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </>
  );
};

export default Header;
